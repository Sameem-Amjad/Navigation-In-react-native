import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import { View, Text } from 'react-native';
import Home from '../screens/home';
import Login from '../screens/login';
import MyTabs from './TopTab';
import BottomTab from './bottomTab';
const DrawerScreen = () =>
{
    return (
        <View
            style={ {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            } }>
            <Text
                style={ {
                    color: 'darkblue',
                    fontSize: 30,
                    fontWeight: 'bold',
                    width: '70%',
                    borderRadius: 15,
                    textAlign: 'center',
                    backgroundColor: 'skyblue',
                } }>
                Drawer Screen
            </Text>
        </View>
    );
};
const MyDrawer = () =>
{
    return (
      <>
        <Drawer.Navigator>
          <Drawer.Screen name="Drawer" component={DrawerScreen} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen
            name="Top Tabs"
            component={MyTabs}
            
          />

          <Drawer.Screen
            name="Bottom Tabs"
            component={BottomTab}
          />
        </Drawer.Navigator>
      </>
    );
};
export default MyDrawer;
