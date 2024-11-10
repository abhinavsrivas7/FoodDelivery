import { Text, View } from "react-native";
import { homeStyles } from "./Delivery.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import { GestureEvent, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import { BottomNavigationParamList } from "../../components/BottomNavigator/BottomNavigationParamList";

export default function Delivery() {
    const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
    const tabNavigation = useNavigation<NavigationProp<BottomNavigationParamList>>();

    const onSwipe = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
        if(event.nativeEvent.translationX < 0)  { //swipe left
            tabNavigation.navigate('Dining');
        }
    };

    return (
        <GestureHandlerRootView>
            <PanGestureHandler 
                onGestureEvent={onSwipe} 
                activeOffsetX={[-70, 0]}>
                <View style={homeStyles.middleView}>
                    <Text style={homeStyles.middleViewText}>nininj</Text>
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>  
    );
};