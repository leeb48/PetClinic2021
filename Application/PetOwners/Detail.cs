using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.PetOwners
{
    public class Detail
    {
        public class Query : IRequest<Result<PetOwnerDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PetOwnerDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<PetOwnerDto>> Handle(Query request, CancellationToken cancellationToken)
            {

                var petOwner = await _context.PetOwners
                                    .ProjectTo<PetOwnerDto>(_mapper.ConfigurationProvider)
                                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (petOwner == null) return null;

                return Result<PetOwnerDto>.Success(petOwner);
            }
        }
    }
}