

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GestureEvent, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload, Pressable, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { addressStyles } from "./AddressModal.styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { BottomNavigationParamList } from "../../components/BottomNavigator/BottomNavigationParamList";
import ChamatoSearchBar from "../../components/ChamatoSearchBar/ChamatorSearchBar";

export default function Address() {

    const tabNavigation = useNavigation<NavigationProp<BottomNavigationParamList>>();

    const onSwipe = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
        if(event.nativeEvent.translationY > 0)  {
            handleOverlayPress()
        }
    };

    const handleOverlayPress = () => {
        tabNavigation.navigate('Dining');
    }

 return (
    <View>
        <Pressable style={{height: '100%', top: 0}} onPress={handleOverlayPress}></Pressable>
    <View style={{
        paddingTop: 20,
        paddingLeft: 10, 
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
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <AntDesign style={{color: 'white',fontSize: 19}} name="down" />
                        <Text style={addressStyles.selectLocation}>Select a location</Text>
                    </View>
            </PanGestureHandler>
        </GestureHandlerRootView>  
    </View>
    </View>
 )
}