import { Tabs } from "expo-router"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default () => {
    return (
        <Tabs screenOptions={({route}) => ({
            tabBarIcon: ({color,size}) => {

                if (route.name === 'Home') {
                    return <MaterialIcons name="home" size={27} color="black" />;
                } else if (route.name === 'Groups') {
                    return <MaterialIcons name="groups" size={27} color="black" />;
                } else if (route.name === 'History') {
                    return <MaterialIcons name="history" size={27} color="black" />;
                } else if (route.name === 'Reports') {
                    return <MaterialCommunityIcons name="file-chart" size={27} color="black" />
                }

                return <></>;
            }
        })}>
            <Tabs.Screen name="Home" options={{headerShown: false}}/>
            <Tabs.Screen name="Groups" options={{headerShown: false}}/>
            <Tabs.Screen name="History" options={{headerShown: false}}/>
            <Tabs.Screen name="Reports" options={{headerShown: false}}/>
        </Tabs>
    )
}