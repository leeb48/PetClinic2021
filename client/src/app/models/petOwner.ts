export interface PetOwner {
  ownerName: string;
  email: string;
  phone: string;
  pets: Pet[];
}

export interface Pet {
  petName: string;
  petType: string;
  petAge: string;
}

export class NewPetOwner {
  ownerName: string;
  email: string;
  phone: string;
  pets: Pet[];

  constructor(petOwner: PetOwner, pets: Pet[]) {
    this.ownerName = petOwner.ownerName;
    this.email = petOwner.email;
    this.phone = petOwner.phone;
    this.pets = pets;
  }
}
