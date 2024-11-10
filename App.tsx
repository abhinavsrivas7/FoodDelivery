import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppStart from "./pages/AppStart/AppStart";
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";
import Account from "./pages/Account/Account";
import React from "react";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator           
        screenOptions={{headerShown: false}} 
        initialRouteName="AppStart">
        <Stack.Screen 
          name="AppStart"
          component={AppStart} 
        />
        <Stack.Screen
          name="Account"
          component={Account}
        />
        <Stack.Screen 
          name="BottomNavigator"
          component={BottomNavigator} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
