using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.PetOwners
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var petOwner = await _context.PetOwners.FindAsync(request.Id);

                if (petOwner == null) return Result<Unit>.Failure($"Pet owner with ID '{request.Id}' does not exist");

                _context.PetOwners.Remove(petOwner);

                var saveSuccess = await _context.SaveChangesAsync() > 0;
                if (!saveSuccess) return Result<Unit>.Failure("Failed to remove pet owner");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}