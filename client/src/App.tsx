import { Center } from '@chakra-ui/react';
import LoadingComponent from 'app/layout/LoadingComponent';
import { useStore } from 'app/store/store';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import ModalContainer from './app/common/modal/ModalContainer';
import Navbar from './app/layout/Navbar';
import HomePage from './features/home/HomePage';
import PetOwnerDashboard from './features/petOwners/dashboard/PetOwnerDashboard';

const App = () => {
  const { commonStore, userStore } = useStore();

  React.useEffect(() => {
    if (commonStore.token) {
      userStore.currentUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) {
    return (
      <Center h='100vh'>
        <LoadingComponent />
      </Center>
    );
  }

  return (
    <>
      <Navbar />
      <ModalContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/petowners' component={PetOwnerDashboard} />
      </Switch>
    </>
  );
};

export default observer(App);
