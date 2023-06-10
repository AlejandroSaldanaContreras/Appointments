import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Institution from './screens/Institutions';
import Profile from './screens/Profile';
import ProfessionalDetail from './screens/ProfessionalDetail';
import ProfessionalOverview from './screens/ProfessionalOverview';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigator(){
  return(
    <Tab.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.gray},
      headerTintColor: GlobalStyles.colors.cream,
      tabBarStyle: { backgroundColor: GlobalStyles.colors.gray},
      tabBarActiveBackgroundColor: GlobalStyles.colors.cream,
      
    }}>

      <Tab.Screen name='Institutions' component={Institution} 
                  options={{
                    title: "Instituciones",
                    tabBarIcon: ({color, size}) => <Ionicons name="medkit" color={GlobalStyles.colors.blue} size={size}/>
                  }}/>
      <Tab.Screen name='Profile' component={Profile}  
                  options={{
                    title: "Perfil",
                    tabBarIcon: ({color, size}) => <Ionicons name="person-circle-sharp" color={GlobalStyles.colors.blue} size={size}/>
                  }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                          headerStyle: {backgroundColor: GlobalStyles.colors.gray},
                          headerTintColor: GlobalStyles.colors.cream}}
        >
          <Stack.Screen name='BottomTabs' component={BottomNavigator}
                        options={{headerShown: false}}/>
          <Stack.Screen name='ProfessionalOverview' component={ProfessionalOverview}/>
          <Stack.Screen name='ProfessionalDetail' component={ProfessionalDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
