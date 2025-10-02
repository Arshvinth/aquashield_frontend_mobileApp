import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const reports = [
    { id: "R-8", date: "2025-09-01", location: "Kollupitiya", status: "Pending" },
    { id: "R-5", date: "2025-08-31", location: "Kollupitiya", status: "Pending" },
    { id: "R-4", date: "2025-08-31", location: "Kollupitiya", status: "Verified" },
    { id: "R-3", date: "2025-08-31", location: "Kollupitiya", status: "Reject" },
];
export default function RecentData() {

    const renderRaw = ({ item, index }) => (
        <View key={item.id} style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.location}</Text>
            <View style={[styles.statusCell, getStatusStyle(item.status)]}>
                <Text style={styles.statusText}>{item.status}</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.headerRow]}>
                <Text style={[styles.cell, styles.header]}>ID</Text>
                <Text style={[styles.cell, styles.header]}>Date</Text>
                <Text style={[styles.cell, styles.header]}>Location</Text>
                <Text style={[styles.cell, styles.header]}>Status</Text>
            </View>

            {reports.map((item, index) => renderRaw({ item, index }))}

            {reports.length === 0 && (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyText}>No recent reports</Text>
                </View>
            )}

        </View>
    );
}

const getStatusStyle = (status) => {
    switch (status) {
        case "Pending":
            return {
                backgroundColor: "#C2C504"
            };
        case "Verified":
            return {
                backgroundColor: "#19A7CE"
            };
        case "Reject":
            return {
                backgroundColor: "#19CE40"
            };
        default:
            return {
                backgroundColor: "#ccc"
            }

    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#19A7CE",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 20
    },
    row: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#19A7CE",
        alignItems: "center",
    },
    headerRow: {
        backgroundColor: "#f1f1f1",
    },
    cell: {
        flex: 1,
        textAlign: "center",
        fontSize: 14,
        color: "#146C94",
    },
    header: {
        fontWeight: "bold",
        fontSize: 15,
    },
    statusCell: {
        flex: 1,
        paddingVertical: 4,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    statusText: {
        color: "#fff",
        fontWeight: "bold",
    },
})