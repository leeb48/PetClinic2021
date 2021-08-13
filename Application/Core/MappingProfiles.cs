using Application.Appointments;
using Application.PetOwners;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Appointment, AppointmentDto>();

            CreateMap<PetOwner, PetOwner>();

            CreateMap<PetOwner, PetOwnerDto>();

            CreateMap<Pet, PetDto>();
        }
    }
}