import {ActivityIndicator, Platform, Text, View} from "react-native";
import {styles} from "./Styles";

export const Loading = () => {
    return (
        <View  style={styles.Activity}>
            <ActivityIndicator
                size={Platform.OS === 'android' ? 50 : 'large'}
                color={'#000'}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Loading...</Text>
        </View>
    )
}