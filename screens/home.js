import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
const Home = props => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button title="update Count" onPress={() => setCount(c => c + 1)} />
      ),
    });
  }, [props.navigation, count]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'grey',
          fontSize: 30,
          margin: 5,
        }}>
        Home Screen {count}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button
          title="Login Screen"
          onPress={() =>
            props.navigation.navigate('Login', {name: 'Login screen'})
          }
        />
        <Button
          title="Detail Screen"
          onPress={() =>
            props.navigation.navigate('Details', {
              name: 'Sameem Amjad',
              section: '6Th B',
              cgpa: 3.45,
            })
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Button
          title="Top Tab Nav "
          onPress={() =>
            props.navigation.navigate('Top Tabs', {name: 'Tabs screen'})
          }
        />
        <Button
          title="Bottom Tab Nav "
          onPress={() =>
            props.navigation.navigate('Bottom Tabs', {
              name: 'Bottom Tabs screen',
            })
          }
        />
        <Button
          title="Drawer"
          onPress={()=>props.navigation.navigate('myDrawer')}
        />
      </View>
    </View>
  );
};
export default Home;
