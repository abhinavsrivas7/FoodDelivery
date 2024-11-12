import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppStart from "./pages/AppStart/AppStart";
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";
import Account from "./pages/Account/Account";
import React from "react";
import { StackCardStyleInterpolator, TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import Address from "./pages/AdressModal/AddressModal";

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
          name="BottomNavigator"
          component={BottomNavigator} 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
