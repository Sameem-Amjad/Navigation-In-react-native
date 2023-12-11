
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();
import Home from './screens/home';
import Login from './screens/login';
import Details from './screens/detail';
import MyTabs from './navigators/TopTab';
import BottomTab from './navigators/bottomTab';
import MyDrawer from './navigators/MyDrawer';
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="Home"
          options={{
            title: 'main-screen',
          }}
          component={Home}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={props => ({title: props.route.params.name})}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="Top Tabs"
          component={MyTabs}
          options={{
            headerShown:false
          }}
        />
        
        <Stack.Screen
          name="Bottom Tabs"
          component={BottomTab}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="myDrawer" component={ MyDrawer } options={ {
          headerShown:false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
