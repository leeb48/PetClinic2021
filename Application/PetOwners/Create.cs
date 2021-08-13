using System;
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
    public class Create
    {
        public class Command : IRequest<Result<PetOwnerDto>>
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

        public class Handler : IRequestHandler<Command, Result<PetOwnerDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<PetOwnerDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var isDuplicateEmail = await _context.PetOwners.AnyAsync(x => x.Email == request.PetOwner.Email);
                if (isDuplicateEmail) return Result<PetOwnerDto>.Failure($"The email {request.PetOwner.Email} is already registered");

                _context.PetOwners.Add(request.PetOwner);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<PetOwnerDto>.Failure("Failed to add new Pet Owner");

                return Result<PetOwnerDto>.Success(_mapper.Map<PetOwner, PetOwnerDto>(request.PetOwner));
            }
        }
    }
}