import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RecentData from '../../components/ui/RecentData';
import ReportChart from '../../components/ui/ReportChart';

export default function ClientHomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Client Reporter Home Screen</Text>

            <ReportChart />
            <RecentData />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    }
});
