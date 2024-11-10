import { Button, Text, useColorScheme, View } from "react-native";
import { homeStyles } from "./Delivery.styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";

export default function Delivery() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={homeStyles(colorScheme).pageView}>
            <View style={homeStyles(colorScheme).topView}>
                <View style={homeStyles(colorScheme).firstRowTopView}>
                    <MaterialIcons name="location-on" size={30} color="black" />
                    <View style={homeStyles(colorScheme).firstRowTopViewAddress}>
                        <Text style={homeStyles(colorScheme).addressName}>
                            Home
                        </Text>
                        <Text style={homeStyles(colorScheme).fullAddress}>
                            C-71, Manas City, Sugamau...
                        </Text>
                    </View>
                    <MaterialIcons name="g-translate" size={25} color="black" />
                    <MaterialCommunityIcons 
                        onPress={() => navigation.reset({index: 0, routes: [{name: 'Account'}]})}
                        name="format-letter-matches" 
                        size={25}
                        color="black" /> 
                </View>
                <View></View>
                <View></View>
                <View></View>
            </View>
            <View style={homeStyles(colorScheme).middleView}>

            </View>
        </View>
    );
};