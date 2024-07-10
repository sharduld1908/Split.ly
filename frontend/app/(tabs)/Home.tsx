import GroupComponent from '@/components/GroupComponent'
import React, {useCallback} from 'react'
import {SafeAreaView, View, StyleSheet, Text,TouchableOpacity, Image, Button, Platform} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import * as Updates from "expo-updates";
import ProfilePicBtn from "@/components/header/ProfilePicBtn";
import {Ionicons} from "@expo/vector-icons";

const Home = () => {
    return (
        <>
            <StatusBar style={"auto"}/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
                <View style={styles.heading}>
                    <Text style={styles.greeting}>Hi, User</Text>
                    <ProfilePicBtn iconUrl={{}} dimension='100%' handlePress={() => {
                    }}/>
                </View>
                <GroupComponent></GroupComponent>
                <TouchableOpacity style={styles.floatingButton}>
                    <Ionicons name="add-circle" size={80} color="green"/>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginTop: 20,
        backgroundColor: 'white',
    },
    greeting: {
        fontSize: 45,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    userIcon: {
        width: 60,
        height: 60,
        marginLeft: 20,
    },
    floatingButton: {
        position: 'absolute', // Position absolutely within the parent container
        bottom: 20, // Distance from bottom
        right: 0, // Distance from right
        alignItems: 'center', // Center the icon horizontally and vertically
        justifyContent: 'center',
    },
});

export default Home