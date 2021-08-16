export interface PetOwner {
  id: string;
  ownerName: string;
  email: string;
  phone: string;
  pets: Pet[];
}

export interface Pet {
  id?: string;
  petName: string;
  petType: string;
  petAge: string;
}

export class PetOwner implements PetOwner {
  constructor(init?: PetOwnerFormValues) {
    Object.assign(this, init);
  }
}

export class PetOwnerFormValues {
  ownerName: string = "";
  email: string = "";
  phone: string = "";
  pets: Pet[] = [];

  constructor(petOwner?: PetOwner, pets?: Pet[]) {
    if (petOwner && pets) {
      this.ownerName = petOwner.ownerName;
      this.email = petOwner.email;
      this.phone = petOwner.phone;
      this.pets = pets;
      return;
    }

    if (petOwner) {
      this.ownerName = petOwner.ownerName;
      this.email = petOwner.email;
      this.phone = petOwner.phone;
      this.pets = petOwner.pets;
      return;
    }
  }
}
