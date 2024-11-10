import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigationParamList } from "./BottomNavigationParamList";
import Delivery from "../../pages/Delivery/Delivery";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Dining from "../../pages/Dining/Dining";
import { Text, useColorScheme, View } from "react-native";
import { bottomNavigatorStyles } from "./BottomNavigation.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";

export default function BottomNavigator() {
    const colorScheme = useColorScheme();
    const Tab = createBottomTabNavigator<BottomNavigationParamList>();
    const activeTintColor = '#d75158';
    const inactiveTintColor = 'gray';
    const backGroundColor = colorScheme === 'light' ? '#ffffff' : '#181818';
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const getTabBarLabel = (text: string, color: string) => 
        <Text style={{color: color}}>{text}</Text>;

    return (<>
        <View style={bottomNavigatorStyles(colorScheme).pageView}>
            <View style={bottomNavigatorStyles(colorScheme).topView}>
                <View style={bottomNavigatorStyles(colorScheme).firstRowTopView}>
                    <MaterialIcons name="location-on" size={30} color="white" />
                    <View style={bottomNavigatorStyles(colorScheme).firstRowTopViewAddress}>
                        <Text style={bottomNavigatorStyles(colorScheme).addressName}>
                            Home
                        </Text>
                        <Text style={bottomNavigatorStyles(colorScheme).fullAddress}>
                            C-71, Manas City, Sugamau Road...
                        </Text>
                    </View>
                    <MaterialIcons name="g-translate" size={25} color="white" />
                    <MaterialCommunityIcons 
                        onPress={() => navigation.reset(
                            {
                                index: 1, 
                                routes: [{name: 'BottomNavigator'}, {name: 'Account'}]
                            }
                        )}
                        name="format-letter-matches" 
                        size={25}
                        color="white" /> 
                </View>
            </View>
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
        </View>
    </>);
};