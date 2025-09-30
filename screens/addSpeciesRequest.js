import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Layout from '../components/layout/layout';
import Footer from '../components/layout/footer';

const AddSpeciesRequest = ({ navigation }) => {
  const [form, setForm] = useState({
    scientificName: '',
    commonName: '',
    category: '',
    protectionLevel: '',
    protectionStatus: '',
    habitat: '',
    description: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Form Fields */}
        <Text style={styles.label}>Scientific Name</Text>
        <TextInput
          style={styles.input}
          value={form.scientificName}
          onChangeText={(v) => handleChange('scientificName', v)}
        />

        <Text style={styles.label}>Common Name</Text>
        <TextInput
          style={styles.input}
          value={form.commonName}
          onChangeText={(v) => handleChange('commonName', v)}
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={form.category}
          onChangeText={(v) => handleChange('category', v)}
        />

        <Text style={styles.label}>Protection Level</Text>
        <TextInput
          style={styles.input}
          value={form.protectionLevel}
          onChangeText={(v) => handleChange('protectionLevel', v)}
        />

        <Text style={styles.label}>Protection Status</Text>
        <TextInput
          style={styles.input}
          value={form.protectionStatus}
          onChangeText={(v) => handleChange('protectionStatus', v)}
        />

        <Text style={styles.label}>Habitat</Text>
        <TextInput
          style={styles.input}
          value={form.habitat}
          onChangeText={(v) => handleChange('habitat', v)}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          value={form.description}
          onChangeText={(v) => handleChange('description', v)}
        />

        <Text style={styles.label}>Upload Image</Text>
        {/* Upload Images Button */}
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Choose Files</Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={() => alert('Submitted')}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: '#F6F1F1',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#146C94',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#146C94',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#AFD3E2',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#146C94',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadButton: {
    backgroundColor: '#AFD3E2',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  uploadButtonText: {
    fontWeight: '600',
    color: '#146C94',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom:50
  },
  cancelButton: {
    backgroundColor: '#146C94',
  },
  submitButton: {
    backgroundColor: '#19A7CE',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AddSpeciesRequest;

