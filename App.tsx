import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackCardStyleInterpolator } from "@react-navigation/stack";
import AppStart from "./pages/AppStart/AppStart";
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";
import Account from "./pages/Account/Account";
import React from "react";
import Address from "./pages/AdressModal/AddressModal";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export default function App() {
  const Stack = createStackNavigator();
  
  const modalFadeInterpolator: StackCardStyleInterpolator = ({current}) => (
    {
      cardStyle: {
        opacity: current.progress
      }
    }
  );

  const modalTransitionSpec: TransitionSpec = {
    animation: "timing",
    config: { duration: 350 }
  };

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
          name="AddressModal"
          component={Address}
          options={{
            presentation: 'transparentModal',
            cardOverlayEnabled: true,
            cardStyle: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)'
            },
            cardStyleInterpolator: modalFadeInterpolator,
            transitionSpec: {
              open: modalTransitionSpec, close: modalTransitionSpec
            }
          }}
        />
        <Stack.Screen 
          name="BottomNavigator"
          component={BottomNavigator} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
