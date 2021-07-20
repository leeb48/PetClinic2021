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

namespace Application.Appointments
{
    public class Detail
    {
        public class Query : IRequest<Result<AppointmentDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<AppointmentDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<AppointmentDto>> Handle(Query request, CancellationToken cancellationToken)
            {

                var appointment = await _context.Appointments
                                                    .ProjectTo<AppointmentDto>(_mapper.ConfigurationProvider)
                                                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (appointment == null) return null;


                return Result<AppointmentDto>.Success(appointment);
            }
        }
    }
}