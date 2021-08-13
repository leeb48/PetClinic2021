using System.Collections.Generic;
using System.Linq;
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
    public class List
    {
        public class Query : IRequest<Result<List<PetOwnerDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<PetOwnerDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<PetOwnerDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var petOwners = await _context.PetOwners
                                    .ProjectTo<PetOwnerDto>(_mapper.ConfigurationProvider)
                                    .OrderBy(x => x.OwnerName)
                                    .ToListAsync();

                return Result<List<PetOwnerDto>>.Success(petOwners);
            }
        }
    }
}