using Domain;
using FluentValidation;

namespace Application.Appointments
{
    public class AppointmentValidator : AbstractValidator<Appointment>
    {
        public AppointmentValidator()
        {
            RuleFor(x => x.Veterinarian).NotEmpty();
            RuleFor(x => x.Owner).NotEmpty();
            RuleFor(x => x.PetName).NotEmpty();
            RuleFor(x => x.Info).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
        }
    }
}