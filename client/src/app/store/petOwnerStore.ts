import agent from "app/api/agent";
import { PetOwnerFormValues, PetOwner } from "app/models/petOwner";
import { makeAutoObservable, runInAction } from "mobx";

export default class PetOwnerStore {
  petOwnersRegistry = new Map<string, PetOwner>();
  selectedPetOwner: PetOwner | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get getAllPetOwners() {
    return Array.from(this.petOwnersRegistry.values()).sort();
  }

  private setSelectedPetOwner = (petOwner: PetOwner) => {
    this.selectedPetOwner = petOwner;
  };

  private getPetOwner = (id: string) => {
    return this.petOwnersRegistry.get(id);
  };

  loadPetOwners = async () => {
    try {
      const petOwners = await agent.PetOwners.getAllPetOwners();

      petOwners.forEach((petOwner) =>
        runInAction(() => {
          this.petOwnersRegistry.set(petOwner.id, petOwner);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  loadPetOwner = async (id: string) => {
    let petOwner = this.getPetOwner(id);

    try {
      if (petOwner) {
        this.setSelectedPetOwner(petOwner);
        return petOwner;
      } else {
        return await agent.PetOwners.getPetOwnerById(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  unloadPetOwner = () => {
    this.selectedPetOwner = null;
  };

  createPetOwner = async (petOwner: PetOwnerFormValues) => {
    try {
      const newPetOwner = await agent.PetOwners.createPetOwner(petOwner);

      this.petOwnersRegistry.set(newPetOwner.id, newPetOwner);
    } catch (error) {
      // TODO: display email already registered as popup error
      console.log(error);
    }
  };

  updatePetOwner = async (petOwner: PetOwnerFormValues, id: string) => {
    try {
      await agent.PetOwners.updatePetOwner(petOwner, id);

      const updatedPetOwner = new PetOwner(petOwner);
      updatedPetOwner.id = id;

      this.petOwnersRegistry.set(id, updatedPetOwner);
    } catch (error) {
      console.log(error);
    }
  };
}
