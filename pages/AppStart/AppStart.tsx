import { View, Text } from 'react-native';
import { appStyles } from './AppStart.styles';
import { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../RootStackParamList';

export default function AppStart() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    useEffect(() => {
        const timer = setInterval(() => navigation.reset({index: 0, routes: [{name:'BottomNavigator'}]}), 3000);
        return () => clearInterval(timer);
    }, [navigation]);

    return (
        <View style={appStyles.view}>
            <Text style={appStyles.text}>
                chamato
            </Text>
        </View>
    );
}