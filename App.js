
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native/lib/commonjs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import About from './components/about'



const tab = createBottomTabNavigator(); //creation constante qui utilise la fonction de createBottomTabNavigator

function AccueilScreen(){  //stockage de Home screen dans la function AccueilScreen
  return (


    <View>
        <Text>Hello word !!</Text>
    </View>
   
  );

}

function AboutScreen(){  //stockage de Home screen dans la function AccueilScreen
  return (


    <View>
      <Text>Je suis un about</Text>
    </View>

  );

}



export default function App() { //utilisation de tab avec la function createBottomTabNavigator donc tab.XX
  return (
    
    <NavigationContainer>
      
      <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconName;

          if (route.name == 'accueil'){
            IconName = "home"
          } else if (route.name == 'about'){
            IconName = "add-outline"
          }

          return  <Ionicons name={IconName} size={30} color='red'/>
        }


      })}
      
      > 
          <tab.Screen name='accueil' component={AccueilScreen}></tab.Screen>
          <tab.Screen name='about' component={AboutScreen}></tab.Screen>

          
      </tab.Navigator>
    </NavigationContainer>
  
  );
}

