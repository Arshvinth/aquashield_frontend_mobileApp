
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Layout from '../components/layout/layout';

// const Dashboard = ({ navigation }) => {
//   const cards = [
//     { title: 'View Reports', action: () => alert('Navigate to Reports') },
//     { title: 'Add New Request', action: () => alert('Navigate to Requests') },
//     { title: 'View Favorites', action: () => alert('Navigate to Favorites') },
//     { title: 'Search Data', action: () => alert('Navigate to Search') },
//   ];

//   return (
//     <Layout>
//       {cards.map((card, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.box}
//           onPress={card.action}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.text}>Welcome, Researcher!</Text>
//           <Text style={styles.button}>{card.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </Layout>
//   );
// };

// const styles = StyleSheet.create({
//   box: {
//     padding: 20,
//     backgroundColor: '#AFD3E2',
//     borderRadius: 15,
//     marginBottom: 20,
//     shadowColor: '#146C94',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#146C94',
//     marginBottom: 10,
//   },
//   button: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//     backgroundColor: '#19A7CE',
//     textAlign: 'center',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
// });

// export default Dashboard;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Layout from '../components/layout/layout';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Footer from '../components/layout/footer.js';

const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
  // Sample data from your screenshot
  const stats = [
    { title: 'Total Illegal reports submitted', value: 156, color: '#19A7CE' },
    { title: 'Actions Taken for submitted illegal reports', value: 54, color: '#8BC34A' },
    { title: 'Total Endangered species', value: 50, color: '#03DAC5' },
    { title: 'Pending species request', value: 2, color: '#FFEB3B' },
  ];

  const mostReportedSpecies = {
    labels: ['Tuna', 'Salmon', 'Cod', 'Shark', 'Mackerel'],
    data: [22, 18, 15, 12, 8]
  };

  const incidentTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [50, 55, 53, 57, 60, 70]
  };

  const speciesOverview = [
    { name: 'Endangered', population: 20, color: '#FF5722', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Vulnerable', population: 60, color: '#2196F3', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Extinct', population: 20, color: '#4CAF50', legendFontColor: '#333', legendFontSize: 12 },
  ];

  return (
    <Layout>
      <ScrollView style={{ paddingHorizontal:3 }}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {stats.map((item, idx) => (
            <View key={idx} style={[styles.card, { backgroundColor: item.color }]}>
              <Text style={styles.cardValue}>{item.value.toString().padStart(2, '0')}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Most Reported Species */}
        <Text style={styles.sectionTitle}>Most Reported Species</Text>
        <BarChart
          data={{
            labels: mostReportedSpecies.labels,
            datasets: [{ data: mostReportedSpecies.data }]
          }}
          width={screenWidth - 50} // Use screen width minus padding
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(25, 167, 206, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          }}
          style={{ borderRadius: 16 }}
          fromZero
        />

        {/* Incident Trends */}
        <Text style={styles.sectionTitle}>Incident Trends</Text>
        <LineChart
          data={{
            labels: incidentTrends.labels,
            datasets: [{ data: incidentTrends.data }]
          }}
          width={screenWidth - 50} // Consistent width
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          }}
          style={{ borderRadius: 16 }}
          fromZero
        />

        {/* Species Overview */}
        <Text style={styles.sectionTitle}>Species Overview</Text>
        <PieChart
          data={speciesOverview}
          width={screenWidth - 30}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        
      </ScrollView>
      <Footer/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardTitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#146C94',
    marginVertical: 10,
  },
});

export default Dashboard;
