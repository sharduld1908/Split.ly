import { Stack } from "expo-router";
import { Text } from "react-native";
import ProfilePicBtn from "@/components/header/ProfilePicBtn";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <Stack>
      <Stack.Screen name = "(tabs)" options = {{
          headerStyle: {backgroundColor: "#FAFAFC"},
          headerShadowVisible: false,
          headerLeft: () => (
              <Text style={{fontSize: 15}}>Hi, Player 1</Text>
          ),
          headerRight: () => (
              <ProfilePicBtn iconUrl={{}} dimension='100%' handlePress={()=>{}} />
          ),
          headerTitle: ""
        }} 
      />
    </Stack>
  );
}
