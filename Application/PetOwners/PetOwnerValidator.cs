using Domain;
using FluentValidation;

namespace Application.PetOwners
{
    public class PetOwnerValidator : AbstractValidator<PetOwner>
    {
        public PetOwnerValidator()
        {
            RuleFor(x => x.OwnerName).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
            RuleFor(x => x.Phone).NotEmpty();
        }
    }
}