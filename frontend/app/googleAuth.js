/*
import { auth } from '@/firebaseConfig';
import * as Google from 'expo-auth-session/providers/google';
import { CLIENT_ID } from '@env';

const useGoogleAuth = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: CLIENT_ID,
        redirectUri: 'http://localhost:8082/callback',
        scopes: ['email', 'profile', 'openid'],
    });

    const handleGoogleAuth = async () => {
        try {
            const result = await promptAsync();
            if (result.type === 'success') {
                const { authentication } = result;
                const credential = Google.credential(authentication);
                await auth.signInWithCredential(credential);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { handleGoogleAuth };
};

export default useGoogleAuth;*/
