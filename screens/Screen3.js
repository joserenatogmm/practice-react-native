import styles from './styles'
import {Button, Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Screen3() {
    return (
        <View style={styles.container}>
            <Text>Screen3</Text>
            <StatusBar style="auto"></StatusBar>
        </View>
    );
}