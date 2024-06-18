import {Tabs} from "expo-router"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: {fontSize: 13},
            tabBarIconStyle: {fontSize:50},
        }}>
            <Tabs.Screen name="Home" options={{
                title: "Home",
                tabBarIcon: ({color, size}) => <MaterialIcons name="home" size={size} color={color}/>,
                headerShown: false
            }}/>
            <Tabs.Screen name="Groups" options={{
                title: "Groups",
                tabBarIcon: ({color, size}) => <MaterialIcons name="groups" size={size} color={color}/>,
                headerShown: false
            }}/>
            <Tabs.Screen name="History" options={{
                title: "History",
                tabBarIcon: ({color, size}) => <MaterialIcons name="history" size={size} color={color}/>,
                headerShown: false
            }}/>
            <Tabs.Screen name="Reports" options={{
                title: "Reports",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="file-chart" size={size} color={color}/>,
                headerShown: false
            }}/>
        </Tabs>
    )
}