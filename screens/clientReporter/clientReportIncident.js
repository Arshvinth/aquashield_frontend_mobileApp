import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { View, Image, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import MapView, { Marker } from "react-native-maps";


export default function ClientReportIncident() {

    const [formData, setFormData] = useState({
        locationInfo: {
            type: "Point",
            coordinates: [],
            lat: "",
            lng: "",
            description: "",
        },
        incidentInfo: {
            incidentDate: "",
            incidentTime: "",
            incidentType: "",
            species: "",
            description: "",
        },
        evidences: [],
        personalInfo: {
            name: "",
            mobile: "",
            email: "",
            annonimity: true,
        },
    });

    const speciesImg = require("../../assets/shark.jpeg");

    const incidentTypes = [
        { id: 1, name: "Fishing without license", requiresSpecies: false },
        { id: 2, name: "Fishing in restricted area", requiresSpecies: false },
        { id: 3, name: "Using explosives", requiresSpecies: false },
        { id: 4, name: "Using cyanide", requiresSpecies: false },
        { id: 5, name: "Using banned nets", requiresSpecies: false },
        { id: 6, name: "Catching undersized fish", requiresSpecies: true },
        { id: 7, name: "Exceeding quota", requiresSpecies: true },
        { id: 8, name: "Targeting endangered species", requiresSpecies: true },
        { id: 9, name: "Illegal fish trade", requiresSpecies: true },
        { id: 10, name: "Foreign vessel intrusion", requiresSpecies: true }
    ];

    const speciesTypes = [
        "Tuna",
        "Shark",
        "Lobster",
        "Sea Cucumber",
        "Ornamental Fish"
    ];

    const updateForm = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const handleSpecieSelect = (species) => {
        updateForm("incidentInfo", "species", species);
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, // allow photos/videos
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            updateForm("evidences", null, [...formData.evidences, result.assets[0].uri]);
        }
    };

    const selectedIncidentType = incidentTypes.find(
        (type) => type.name === formData.incidentInfo.incidentType
    );


    return (
        <View style={styles.container}>

            <View style={styles.incident}>
                <View style={styles.sectionHeader}>
                    <Ionicons
                        name="information"
                        size={25}
                        color={"#146C94"}
                    />
                    <Text style={styles.header}>
                        Incident information
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.label}>Incident Type</Text>
                    <Picker
                        selectedValue={formData.incidentInfo.incidentType}
                        onValueChange={(value) => {
                            updateForm("incidentInfo", "incidentType", value);
                            updateForm("incidentInfo", "species", "");
                        }}
                        style={{ color: "#19A7CE", fontSize: 16 }}  >
                        <Picker.Item label="-- Select Incident --" value="" style={{ color: "#146C94", fontSize: 14 }} />
                        {incidentTypes.map((type) => (
                            <Picker.Item key={type.id} label={type.name} value={type.name} />
                        ))}
                    </Picker>

                    {formData.incidentInfo.incidentType &&
                        incidentTypes.find((t) => t.name === formData.incidentInfo.incidentType)?.requiresSpecies && (
                            <>
                                <Text style={styles.label}>Species</Text>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.speciesScroll}>
                                    <View style={styles.speciesContainer}>
                                        {speciesTypes.map((species, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={[
                                                    styles.speciesCard,
                                                    formData.incidentInfo.species === species && styles.selectSpeciesCard
                                                ]}
                                                onPress={() => handleSpecieSelect(species)}
                                            >
                                                <Image
                                                    source={speciesImg}
                                                    style={styles.spImg}
                                                />
                                                <Text style={[
                                                    styles.speciesText,
                                                    formData.incidentInfo.species === species && styles.selectedSpeciesText
                                                ]}>
                                                    {species}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </ScrollView>

                            </>

                        )}

                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        value={formData.incidentInfo.description}
                        onChangeText={(text) => updateForm("incidentInfo", "description", text)} />

                </View>

            </View>
            <View style={styles.evidences}>
                <Ionicons
                    name="camera"
                    size={25}
                    color={"#146C94"}
                />
                <Text style={styles.header}>Evidence Information</Text>

                <Button title="Upload Evidence(" onPress={pickImage} />
                {formData.evidences.map((uri, index) => (
                    <Image key={index} source={{ uri }} style={styles.preview} />
                ))}
            </View>

            <View style={styles.Location}>
                <Ionicons
                    name="location"
                    size={25}
                    color={"#146C94"}
                />
                <Text style={styles.header}>Location Information</Text>

                <MapView
                    style={{ width: "100%", height: 200 }}
                    initialRegion={{
                        latitude: 6.9271,
                        longitude: 79.8612,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    onPress={(e) => handleLocationSelect(e.nativeEvent.coordinate)}
                >
                    {formData.locationInfo.lat !== "" && (
                        <Marker
                            coordinate={{
                                latitude: parseFloat(formData.locationInfo.lat),
                                longitude: parseFloat(formData.locationInfo.lng),
                            }}
                        />
                    )}
                </MapView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    incident: {
        flexDirection: "column",
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: "#ffff",
        borderRadius: 15,
        borderColor: "#19A7CE",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
        paddingTop: 15

    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    header: {
        color: "#146C94",
        fontSize: 16,
        fontWeight: "bold",

    },
    label: {
        color: "#146C94",
        fontSize: 16
    },
    speciesScroll: {
        marginVertical: 10,
    },
    speciesContainer: {
        flexDirection: "row",
        paddingVertical: 5
    },
    speciesCard: {
        backgroundColor: "#ffff",
        flexDirection: "column",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#19A7CE",
        justifyContent: "center",
        alignItems: "center"
    },
    selectSpeciesCard: {
        backgroundColor: "#19A7CE",
    },
    selectedSpeciesText: {
        color: "#ffff",
    },
    speciesText: {
        color: "#19A7CE",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center"
    },
    sectionContainer: {
        justifyContent: "center",
        marginLeft: 15
    },
    spImg: {
        width: 75,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: 100,
        height: 20,
        borderColor: "#19A7CE"
    }


})
