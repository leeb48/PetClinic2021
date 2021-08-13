using System;
using System.Text.Json.Serialization;

namespace Domain
{
    public class Pet
    {
        public Guid Id { get; set; }
        public string PetName { get; set; }
        public string PetType { get; set; }
        public int PetAge { get; set; }

        [JsonIgnore]
        public PetOwner PetOwner { get; set; }
    }
}