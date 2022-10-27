
import {Router, Scene, Stack} from 'react-native-router-flux'; 

import Welcome from '../views/Welcome'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Forgot from '../views/Forgot'
import Success from '../views/Success'

const Routes = () => { 
  return (
    <Router>
      <Stack key="root">
        <Scene key="Welcome" component={Welcome} hideNavBar={true} />
        <Scene key="Signin" component={Signin} hideNavBar={true} title="" />
        <Scene key="Signup" component={Signup} hideNavBar={true} />
        <Scene key="Forgot" component={Forgot} hideNavBar={true} /> 
        <Scene key="Success" component={Success} hideNavBar={true} 
        // initial={true}
         />
      </Stack>
    </Router>
  );
};
export default Routes;
