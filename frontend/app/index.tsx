/*
import {useRouter} from "expo-router";
import {Button, View, Text} from "react-native";
import useGoogleAuth from './googleAuth';
import {useState} from "react";
import firebase from "firebase/compat";

interface AuthState {
    authenticated: boolean;
    user?: firebase.User;
}

export default function Index() {
    const router = useRouter();
    const { handleGoogleAuth } = useGoogleAuth();
    const [authState, setAuthState] = useState<AuthState>({
        authenticated: false,
    });

    const handleAuthStateChanged = (user: firebase.User | null) => {
        if (user) {
            setAuthState({ authenticated: true, user });
        } else {
            setAuthState({ authenticated: false });
        }
    };

    return (
        <View>
            {authState.authenticated ? (
                <Text>Logged in!</Text>
            ) : (
                <>
                <Button title="Login with Google" onPress={handleGoogleAuth} />
                <Button title="Continue without login" onPress={() => {
                    router.push("/Home");
                }} />
                </>
            )}
        </View>
    );
};
*/

import {useRouter} from "expo-router";
import {Redirect} from "expo-router";

export default function Index() {
    //const router = useRouter();
    return (
              <Redirect href={"/Home"} />
    );
}