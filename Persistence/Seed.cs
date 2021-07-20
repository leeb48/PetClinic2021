using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Appointments.Any()) return;

            var appointments = new List<Appointment>{

                new Appointment{
                    Veterinarian = "Vet 1",
                    Owner = "Owner 1",
                    PetName = "Pet 1",
                    Date = DateTime.Now.AddDays(2),
                    Info = "Appointment info 1"
                },
                new Appointment{
                    Veterinarian = "Vet 2",
                    Owner = "Owner 2",
                    PetName = "Pet 2",
                    Date = DateTime.Now.AddDays(4),
                    Info = "Appointment info 2"
                },
                new Appointment{
                    Veterinarian = "Vet 3",
                    Owner = "Owner 3",
                    PetName = "Pet 3",
                    Date = DateTime.Now.AddDays(1),
                    Info = "Appointment info 3"
                },
                new Appointment{
                    Veterinarian = "Vet 4",
                    Owner = "Owner 4",
                    PetName = "Pet 4",
                    Date = DateTime.Now.AddDays(7),
                    Info = "Appointment info 4"
                },
                new Appointment{
                    Veterinarian = "Vet 5",
                    Owner = "Owner 5",
                    PetName = "Pet 5",
                    Date = DateTime.Now.AddDays(10),
                    Info = "Appointment info 5"
                },
                new Appointment{
                    Veterinarian = "Vet 6",
                    Owner = "Owner 6",
                    PetName = "Pet 6",
                    Date = DateTime.Now.AddDays(3),
                    Info = "Appointment info 6"
                },
                new Appointment{
                    Veterinarian = "Vet 7",
                    Owner = "Owner 7",
                    PetName = "Pet 7",
                    Date = DateTime.Now.AddDays(8),
                    Info = "Appointment info 7"
                },
            };

            await context.Appointments.AddRangeAsync(appointments);
            await context.SaveChangesAsync();
        }
    }
}