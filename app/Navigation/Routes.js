
import {Router, Scene, Stack} from 'react-native-router-flux'; 

import Welcome from '../views/Welcome'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

const Routes = () => { 
  return (
    <Router>
      <Stack key="root">
        <Scene key="Welcome" component={Welcome} hideNavBar={true} initial={true}/>
        <Scene key="Signin" component={Signin} hideNavBar={true} title="" />
        <Scene key="Signup" component={Signup} hideNavBar={true} />
      </Stack>
    </Router>
  );
};
export default Routes;
