import { Center } from "@chakra-ui/react";
import LoadingComponent from "app/layout/LoadingComponent";
import { useStore } from "app/store/store";
import PetOwnerForm from "features/petOwners/dashboard/PetOwnerForm";
import VeterinarianDashboard from "features/veterinarian/dashboard/VeterinarianDashboard";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router";
import ModalContainer from "./app/common/modal/ModalContainer";
import Navbar from "./app/layout/Navbar";
import HomePage from "./features/home/HomePage";
import PetOwnerDashboard from "./features/petOwners/dashboard/PetOwnerDashboard";

const App = () => {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.currentUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) {
    return (
      <Center h="100vh">
        <LoadingComponent />
      </Center>
    );
  }

  return (
    <>
      <Navbar />
      <ModalContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pet-owners" component={PetOwnerDashboard} />
        <Route exact path="/new-pet-owner" component={PetOwnerForm} />
        <Route exact path="/edit-pet-owner/:id" component={PetOwnerForm} />
        <Route exact path="/vets" component={VeterinarianDashboard} />
      </Switch>
    </>
  );
};

export default observer(App);
