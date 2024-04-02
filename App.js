import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Pressable } from 'react-native';

// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-gesture-handler

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home({navigation}){
  function onPressHandler(){
    navigation.navigate('New_Page');
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>Hello</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonNext}>
      <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.goBack();
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-left" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="New_Page" component={New_Page}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
  },
  buttonNext: {
    padding:20,
    backgroundColor: '#ffdb30',
    borderRadius: 50,
  },
  buttonHome: {
    padding:20,
    backgroundColor: '#24a0ed',
    borderRadius: 50,
  }
});