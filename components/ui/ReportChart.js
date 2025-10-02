import React from 'react'
import { Dimensions, View, StyleSheet, Text, ScrollView } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

export default function ReportChart() {

    const chartData = {
        labels: ["May", "June", "July", "August", "September"],
        datasets: [{ data: [1, 5, 3, 0, 1] }],
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Report By Month
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.chartContainer}
            >
                <BarChart
                    data={chartData}
                    width={Math.max(Dimensions.get("screen").width - 30)}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#FFFFFF",
                        backgroundGradientFrom: "#FFFFFF",
                        backgroundGradientTo: "#FFFFFF",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(25, 167, 206,${opacity})`,
                    }}
                    style={styles.chart}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderColor: "#19A7CE",
        borderWidth: 1,
        borderRadius: 15,
        paddingRight: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        color: "#146C94",
        margin: 2,
        marginLeft: 10,
        marginTop: 20
    },
    chartContainer: {
        paddingVertical: 2,
    },
    chart: {
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 5,
    },
});