import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import clientHomeScreen from "../screens/clientReporter/clientHomeScreen";
import clientReportIncident from "../screens/clientReporter/clientReportIncident";
import myReport from "../screens/clientReporter/myReport";
import Notification from "../screens/clientReporter/Notification";
import ClientProfile from "../screens/clientReporter/ClientProfile";
import React from "react";

const Tab = createBottomTabNavigator();

export default function ClientBottom() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Hoe') iconName = 'home';
                    else if (route.name === 'Report') iconName = 'flag';
                    else if (route.name === 'My Reports') iconName = 'file';
                    else if (route.name === 'Notification') iconName = 'notification';
                    else if (route.name === 'Profile') iconName = 'person';
                },
                tabBarActiveTintColor: "#146C94",
                tabBarInactiveTintColor: "#19A7CE",
                tabBarShowLabel: false,

            })}>
            <Tab.Screen name="Hoe" component={clientHomeScreen} />
            <Tab.Screen name="Report" component={clientReportIncident} />
            <Tab.Screen name="My Reports" component={myReport} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={ClientProfile} />
        </Tab.Navigator>
    );
}