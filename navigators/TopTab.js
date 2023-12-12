import {Text, View, Button} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import Login from '../screens/login';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
export default MyTabs;
