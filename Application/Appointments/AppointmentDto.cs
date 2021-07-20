using System;

namespace Application.Appointments
{
    public class AppointmentDto
    {

        public Guid Id { get; set; }
        public string Veterinarian { get; set; }
        public string Owner { get; set; }
        public string PetName { get; set; }
        public string Info { get; set; }
        public DateTime Date { get; set; }
    }
}