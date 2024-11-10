import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigationParamList } from "./BottomNavigationParamList";
import Delivery from "../../pages/Delivery/Delivery";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Dining from "../../pages/Dining/Dining";
import { Text, useColorScheme } from "react-native";

export default function BottomNavigator() {
    const colorScheme = useColorScheme();
    const Tab = createBottomTabNavigator<BottomNavigationParamList>();
    const activeTintColor = '#d75158';
    const inactiveTintColor = 'gray';
    const backGroundColor = colorScheme === 'light' ? '#ffffff' : '#181818';

    const getTabBarLabel = (text: string, color: string) => 
        <Text style={{color: color}}>{text}</Text>;

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: activeTintColor,
            tabBarInactiveTintColor: inactiveTintColor,
            tabBarStyle: {backgroundColor: backGroundColor}
        }}>
            <Tab.Screen name="Delivery" component={Delivery} 
                options={{
                    tabBarLabel: ({color}) => getTabBarLabel("Delivery", color),
                    tabBarIcon: ({color, size}) => 
                        <MaterialCommunityIcons name="scooter" size={size} color={color} />
                }}  
            />
            <Tab.Screen name="Dining" component={Dining} 
                options={{
                    tabBarLabel: ({color}) => getTabBarLabel("Dining", color),
                    tabBarIcon: ({color, size}) => 
                        <MaterialIcons name="dining" size={size} color={color} />
                }}  
            />
        </Tab.Navigator>
    );
};