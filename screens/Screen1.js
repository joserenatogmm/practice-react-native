import styles from './styles'
import {Button, Text, View, Pressable, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Text>Screen1</Text>
            <StatusBar style="auto"></StatusBar>
        </View>
    );
}