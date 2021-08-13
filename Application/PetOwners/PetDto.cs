using System;

namespace Application.PetOwners
{
    public class PetDto
    {

        public Guid Id { get; set; }
        public string PetName { get; set; }
        public string PetType { get; set; }
        public int PetAge { get; set; }
    }
}