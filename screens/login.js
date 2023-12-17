import {Text, View, Button} from 'react-native';
const Login = props => {
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
        Login Screen
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button
          title="Home screen"
          onPress={() => props.navigation.navigate('Home')}
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
          marginTop: 5,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button
          title="Update Login screen Title"
          onPress={() => props.navigation.setOptions({title: 'Login'})}
        />
      </View>
    </View>
  );
};
export default Login;
