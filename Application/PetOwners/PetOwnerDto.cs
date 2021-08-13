using System;
using System.Collections.Generic;

namespace Application.PetOwners
{
    public class PetOwnerDto
    {

        public Guid Id { get; set; }
        public string OwnerName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ICollection<PetDto> Pets { get; set; } = new List<PetDto>();
    }
}