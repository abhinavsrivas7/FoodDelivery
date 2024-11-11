import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, useColorScheme, View } from "react-native";
import { BottomNavigationParamList } from "../../components/BottomNavigator/BottomNavigationParamList";
import { GestureEvent, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import { addressStyles } from "./AddressModal.styles";

export default function Address() {

    const colorScheme = useColorScheme();

    const tabNavigation = useNavigation<NavigationProp<BottomNavigationParamList>>();

    const onSwipe = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
        if(event.nativeEvent.translationY > 0)  {
            tabNavigation.navigate('Dining');
        }
    };

 return (
    <View style={{
        paddingTop: 40, 
        backgroundColor: 'black', 
        height: '70%', 
        position: 'absolute', 
        width: '100%', 
        bottom: 0, 
        elevation: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }}>
        <GestureHandlerRootView>
            <PanGestureHandler 
                onGestureEvent={onSwipe} 
                activeOffsetY={[-500, 0]}>
                    <Text style={addressStyles.selectLocation}>Select a location</Text>
            </PanGestureHandler>
        </GestureHandlerRootView>  
    </View>
 )
}