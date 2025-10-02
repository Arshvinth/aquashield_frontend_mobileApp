import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientHomeScreen from "../screens/clientReporter/clientHomeScreen";
import ClientReportIncident from "../screens/clientReporter/clientReportIncident";
import MyReport from "../screens/clientReporter/myReport";
import Notification from "../screens/clientReporter/Notification";
import ClientProfile from "../screens/clientReporter/ClientProfile";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",

            ...styles.shadow, // ✅ fixed
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: "#146C94",
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

export default function ClientBottom() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#146C94",
                tabBarInactiveTintColor: "#19A7CE",
                tabBarShowLabel: false,

            }}
        >
            <Tab.Screen
                name="My Report"
                component={MyReport}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 120, alignItems: "center", justifyContent: "center", top: 10 }}>
                            <Ionicons
                                name={focused ? "folder" : "folder-open-outline"}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"}
                            />
                            <Text style={{ color: focused ? "#146C94" : "#19A7CE", fontSize: 10, fontWeight: focused ? "bold" : "normal", }}>
                                My Report
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={ClientReportIncident}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 120, alignItems: "center", justifyContent: "center", top: 10 }}>
                            <Ionicons
                                name={focused ? "flag" : "flag-outline"}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"}
                            />
                            <Text style={{ color: focused ? "#146C94" : "#19A7CE", fontSize: 10, fontWeight: focused ? "bold" : "normal" }}>
                                Report
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={ClientHomeScreen}
                options={{
                    tabBarIcon: () => (
                        <View style={{ position: "absolute", alignItems: "center", justifyContent: "center", top: 20, left: 20 }}>
                            <Ionicons name="home" size={30} color="#fff" />
                        </View>

                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 120, alignItems: "center", justifyContent: "center", top: 10 }}>
                            <Ionicons
                                name={focused ? "notifications" : "notifications-outline"}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"}

                            />
                            <Text style={{ color: focused ? "#146C94" : "#19A7CE", fontSize: 10, fontWeight: focused ? "bold" : "normal" }} >
                                Notify
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ClientProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 120, alignItems: "center", justifyContent: "center", top: 10 }}>
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                size={24}
                                color={focused ? "#146C94" : "#19A7CE"}
                            />
                            <Text style={{ color: focused ? "#146C94" : "#19A7CE", fontSize: 10, fontWeight: focused ? "bold" : "normal" }}>
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#146C94",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
