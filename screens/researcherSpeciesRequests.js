import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../components/layout/layout';

const researcherSpeciesRequests = ({ navigation }) => {
  const cards = [
    { title: 'View Reports', action: () => alert('Navigate to Reports') },
    { title: 'Add New Request', action: () => alert('Navigate to Requests') },
    { title: 'Search Data', action: () => alert('Navigate to Search') },
  ];

  return (
    <Layout>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={styles.box}
          onPress={card.action}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>Welcome, Researcher!</Text>
          <Text style={styles.button}>{card.title}</Text>
        </TouchableOpacity>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: '#AFD3E2',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#146C94',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#146C94',
    marginBottom: 10,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#19A7CE',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default researcherSpeciesRequests;
