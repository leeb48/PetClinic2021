using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.PetOwners
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PetOwner PetOwner { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.PetOwner).SetValidator(new PetOwnerValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {

                var petOwner = await _context.PetOwners.Include(x => x.Pets).FirstOrDefaultAsync(x => x.Id == request.PetOwner.Id);

                if (petOwner == null) return null;

                _mapper.Map(request.PetOwner, petOwner);


                var saveSuccess = await _context.SaveChangesAsync() > 0;

                if (!saveSuccess) return Result<Unit>.Failure("Failed to edit Pet Owner");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}