import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import clientHomeScreen from "../screens/clientReporter/clientHomeScreen";
import clientReportIncident from "../screens/clientReporter/clientReportIncident";
import myReport from "../screens/clientReporter/myReport";
import Notification from "../screens/clientReporter/Notification";
import ClientProfile from "../screens/clientReporter/ClientProfile";
import React, { Children } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...StyleSheet.shadow
        }}
        onPress={onPress}
    >
        <view style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#146C94'
        }}>
            {children}
        </view>
    </TouchableOpacity>
)

export default function ClientBottom() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                /*tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Hoe') iconName = 'home';
                    else if (route.name === 'Report') iconName = 'flag';
                    else if (route.name === 'My Reports') iconName = 'file';
                    else if (route.name === 'Notification') iconName = 'notification';
                    else if (route.name === 'Profile') iconName = 'person';
                },*/
                tabBarActiveTintColor: "#146C94",
                tabBarInactiveTintColor: "#19A7CE",
                tabBarShowLabel: false,

            })}>
            <Tab.Screen name="My Report" component={myReport}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Ionicons
                                name={focused ? 'folder' : 'folder-open-outline'}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"} />
                            <Text style={{ color: focused ? '#146C94' : '#19A7CE', fontSize: 12 }}>
                                My Report
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Report" component={clientReportIncident}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Ionicons
                                name={focused ? 'flag' : 'flag-outline'}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"} />
                            <Text style={{ color: focused ? '#146C94' : '#19A7CE', fontSize: 12 }}>
                                Report
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Home" component={clientHomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={30}
                            color={"#146C94"}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}

            />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Ionicons
                                name={focused ? 'flag' : 'flag-outline'}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"} />
                            <Text style={{ color: focused ? '#146C94' : '#19A7CE', fontSize: 12 }}>
                                Notification
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ClientProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Ionicons
                                name={focused ? 'flag' : 'flag-outline'}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"} />
                            <Text style={{ color: focused ? '#146C94' : '#19A7CE', fontSize: 12 }}>
                                Profile
                            </Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: "#146C94",
    }

})