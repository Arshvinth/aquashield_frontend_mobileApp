// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Layout from '../components/layout/layout';

// const ResearcherSpeciesRequests = ({ navigation }) => {

//   return (
//     <Layout>

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

// export default ResearcherSpeciesRequests;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Layout from '../components/layout/layout';
import { MaterialIcons } from '@expo/vector-icons'; // For edit/delete iconss


const sampleData = [
  { id: 1, date: '2025-09-20', species: 'Tuna', status: 'Pending' },
  { id: 2, date: '2025-09-18', species: 'Shark', status: 'Approved' },
  { id: 3, date: '2025-09-15', species: 'Salmon', status: 'Rejected' },
];

const ResearcherSpeciesRequests = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText, styles.dateSpeciesCol]}>Date - Species</Text>
          <Text style={[styles.cell, styles.headerText, styles.statusCol]}>Status</Text>
          <Text style={[styles.cell, styles.headerText, styles.actionCol]}>Action</Text>
        </View>

        {/* Table Rows */}
        {sampleData.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={[styles.cell, styles.dateSpeciesCol]}>
              {item.date} - {item.species}
            </Text>
            <Text style={[styles.cell, styles.statusCol]}>{item.status}</Text>
            <View style={[styles.cell, styles.actionCol]}>
              <TouchableOpacity onPress={() => alert(`Edit ${item.species}`)} style={styles.iconBtn}>
                <MaterialIcons name="edit" size={20} color="#19A7CE" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert(`Delete ${item.species}`)} style={styles.iconBtn}>
                <MaterialIcons name="delete" size={20} color="#FF4D4D" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Add New Species Request Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddSpeciesRequest')}
        >
          <Text style={styles.addButtonText}>+ Add New Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: '#F6F1F1',
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 2,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#146C94',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  headerRow: {
    backgroundColor: '#AFD3E2',
    marginBottom: 5,
  },
  headerText: {
    fontWeight: '700',
    color: '#146C94',
  },
  cell: {
    fontSize: 14,
    color: '#146C94',
    paddingHorizontal: 3,
  },
  dateSpeciesCol: { width: '50%' },
  statusCol: { width: '25%' },
  actionCol: { width: '25%', flexDirection: 'row', justifyContent: 'flex-start', gap: 5 },
  iconBtn: { marginRight: 10 },
  addButton: {
    marginTop: '80%',
    backgroundColor: '#19A7CE',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ResearcherSpeciesRequests;
