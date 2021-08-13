using System;
using System.Collections.Generic;

namespace Domain
{
    public class PetOwner
    {
        public Guid Id { get; set; }
        public string OwnerName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
        public ICollection<Pet> Pets { get; set; } = new List<Pet>();
        public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
    }
}