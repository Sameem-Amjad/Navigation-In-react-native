import {Text, View, Button} from 'react-native';
const Details = props =>
{
    const { name,section,cgpa } = props.route.params;
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
        Details Screen
      </Text>
      <View
        style={{
          backgroundColor: 'skyblue',
          width: '70%',
          alignSelf: 'center',
          margin: 15,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',

            fontSize: 30,
            margin: 5,
          }}>
          This is {name} from {section} having cgpa {cgpa}.
        </Text>
      </View>
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
          title="Login Screen"
          onPress={() =>
            props.navigation.navigate('Login', {name: 'Login screen'})
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
          title="Go to Detail screen ...again"
          onPress={() =>
            props.navigation.push('Details', {
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
          title="Update Detail screen Title"
          onPress={() => props.navigation.setOptions({title: 'sameem'})}
        />
      </View>
    </View>
  );
};
export default Details;
