import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigationParamList } from "./BottomNavigationParamList";
import Delivery from "../../pages/Delivery/Delivery";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Dining from "../../pages/Dining/Dining";
import { Pressable, Text, useColorScheme, View, Dimensions } from "react-native";
import { bottomNavigatorStyles } from "./BottomNavigation.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function BottomNavigator() {
    const colorScheme = useColorScheme();
    const Tab = createBottomTabNavigator<BottomNavigationParamList>();
    const activeTintColor = '#d75158';
    const inactiveTintColor = 'gray';
    const backGroundColor = colorScheme === 'light' ? '#ffffff' : '#181818';
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const addresses = [
        { label: 'Home', value: 'C-71, Manas City, Sugamau Road...' },
        { label: 'Work', value: 'C-71, Chandan Road...' },
        { label: 'Other', value: 'C-71, Amrai Gao...' }
    ];

    const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
    const screenWidth = Dimensions.get("window").width;

    return (<>
        <View style={bottomNavigatorStyles(colorScheme).pageView}>
            <View style={bottomNavigatorStyles(colorScheme).topView}>
                <View style={bottomNavigatorStyles(colorScheme).firstRowTopView}>
                    <Pressable style={bottomNavigatorStyles(colorScheme).firstRowTopViewLocation} 
                    onPress={() => navigation.reset(
                        {
                            index: 1, 
                            routes: [{name: 'BottomNavigator'}, {name: 'AddressModal'}]
                        }
                    )}>
                        <MaterialIcons name="location-on" size={30} color="white" />
                        <View style={bottomNavigatorStyles(colorScheme).firstRowTopViewAddress}>
                            <View style={bottomNavigatorStyles(colorScheme).addressSelector}>
                                <Text style={bottomNavigatorStyles(colorScheme).addressName}>
                                   {selectedAddress.label}
                                </Text>
                                <AntDesign 
                                    style={bottomNavigatorStyles(colorScheme).downIcon}
                                    name="down" 
                                />
                            </View>
                            <Text style={bottomNavigatorStyles(colorScheme).fullAddress}>
                                {selectedAddress.value}
                            </Text>
                        </View>
                    </Pressable>
                    <View style={bottomNavigatorStyles(colorScheme).firstRowTopViewRightSection}>
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
            </View>
            <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: activeTintColor,
            tabBarInactiveTintColor: inactiveTintColor,
            tabBarStyle: {backgroundColor: backGroundColor}
        }}>
            <Tab.Screen name="Delivery" component={Delivery} 
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => <View style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: screenWidth < 600 ? '5.5%' : '2%'}}>
                            <MaterialCommunityIcons name="scooter" size={size} color={color} />
                            <Text style={{color: color, textAlign: 'center', fontSize: 12, width: 100}}>Delivery</Text>
                        </View>,
                    tabBarStyle: {height: 50, backgroundColor: colorScheme == 'light' ? 'white' : '#222222'}
                }}  
            />
            <Tab.Screen name="Dining" component={Dining} 
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => <View style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',  marginTop: screenWidth < 600 ? '5.5%' : '2%'}}>
                            <MaterialIcons name="dining" size={size} color={color} />
                            <Text style={{color: color, textAlign: 'center', fontSize: 12, width: 100}}>Dining</Text>
                    </View>,
                    tabBarStyle: {height: 50, backgroundColor: colorScheme == 'light' ? 'white' : '#222222'}
                }}  
            />
        </Tab.Navigator>
        </View>
    </>);
};