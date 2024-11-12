import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { BottomNavigationParamList } from "../../components/BottomNavigator/BottomNavigationParamList";
import { GestureEvent, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload } from "react-native-gesture-handler";

export default function Dining() {
    const tabNavigation = useNavigation<NavigationProp<BottomNavigationParamList>>();

    const onSwipe = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
        if(event.nativeEvent.translationX > 0)  { //swipe right
            tabNavigation.navigate('Delivery');
        }
    };

    return (
        <GestureHandlerRootView>
            <PanGestureHandler 
                onGestureEvent={onSwipe} 
                activeOffsetX={[0, 70]}>
                <View style={{paddingTop: 40, backgroundColor: 'black', height: '100%'}}>
                    <Text style={{color: 'white'}}>Reached Dining</Text>
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>  
    );
}