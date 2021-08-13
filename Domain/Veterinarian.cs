using System;
using System.Collections.Generic;

namespace Domain
{
    public class Veterinarian
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Specialty { get; set; }
        public string Bio { get; set; }
        public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
    }
}