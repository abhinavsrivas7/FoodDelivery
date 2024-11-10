import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppStart from "./pages/AppStart/AppStart";
import Delivery from "./pages/Delivery/Delivery";
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppStart">
        <Stack.Screen 
          name="AppStart"
          options={{headerShown: false}} 
          component={AppStart} 
        />
        <Stack.Screen 
          name="BottomNavigator"
          options={{headerShown: false}} 
          component={BottomNavigator} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
