import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/home';
import Login from '../screens/login';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
export default BottomTab;
