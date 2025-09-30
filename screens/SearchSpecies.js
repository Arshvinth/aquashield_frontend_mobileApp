import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/layout/footer';

const { width: screenWidth } = Dimensions.get('window');

const SearchSpecies = () => {
    const [searchBy, setSearchBy] = useState('species');

    const suggestions = [
        { name: 'Whale Shark' },
        { name: 'Swordfish' },
    ];

    const images = [
        'https://picsum.photos/400/200?random=1',
        'https://picsum.photos/400/200?random=2',
        'https://picsum.photos/400/200?random=3'
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>

            {/* Search By Dropdown */}
            <View style={styles.dropdownContainer}>
                <Text style={styles.searchLabel}>Search By</Text>
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={searchBy}
                        onValueChange={(itemValue) => setSearchBy(itemValue)}
                        dropdownIconColor="#146C94"
                        style={styles.picker}
                    >
                        <Picker.Item label="Species Name" value="species" />
                        <Picker.Item label="Location" value="location" />
                    </Picker>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder={`Search by ${searchBy}`}
                />
                <TouchableOpacity style={styles.micButton}>
                    <Entypo name="mic" size={20} color="#146C94" />
                </TouchableOpacity>
            </View>

            {/* Image Carousel */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.imageSlider}
                contentContainerStyle={{ paddingHorizontal: 5 }}
            >
                {images.map((uri, index) => (
                    <Image
                        key={index}
                        source={{ uri }}
                        style={[styles.image, { width: screenWidth - 30 }]}
                    />
                ))}
            </ScrollView>

            {/* Species Details Card */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Thunnus thynnus</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" size={24} color="#19A7CE" />
                    </TouchableOpacity>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Common Name:</Text>
                    <Text style={styles.value}>Bluefin Tuna</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Category:</Text>
                    <Text style={styles.value}>Pelagic Fish</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Protection Level:</Text>
                    <Text style={styles.value}>Endangered</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Protection Status:</Text>
                    <Text style={styles.value}>Protected</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Habitat:</Text>
                    <Text style={styles.value}>Open ocean (pelagic)</Text>
                </View>

                <Text style={[styles.label, { marginTop: 10 }]}>Description</Text>
                <Text style={styles.description}>
                    Bluefin Tuna are among the largest and fastest ocean fish, capable of reaching over 3 meters in length and 600+ kg.
                </Text>
            </View>

            {/* Suggestions */}
            <View style={styles.suggestionsCard}>
                <Text style={styles.suggestionsTitle}>Suggestions</Text>
                {suggestions.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.suggestionRow}>
                        <Text style={styles.suggestionText}>{item.name}</Text>
                        <View style={styles.suggestionIcons}>
                            <MaterialIcons name="favorite-border" size={20} color="#19A7CE" />
                            <Entypo name="chevron-right" size={20} color="#146C94" />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Footer */}
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F1F1',
        padding: 15,
    },
    dropdownContainer: {
        marginBottom: 15,
    },
    searchLabel: {
        color: '#146C94',
        fontWeight: '600',
        marginBottom: 5,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#AFD3E2',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        height: 50,
        justifyContent: 'center',
        height: 40,        // ensure there is enough height for the Picker
        justifyContent: 'center',
        marginBottom: 5
    },
    picker: {
        height: 50,
        color: '#146C94',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#AFD3E2',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: '#146C94',
    },
    micButton: {
        marginLeft: 10,
    },
    imageSlider: {
        marginBottom: 15,
    },
    image: {
        height: 150,
        borderRadius: 10,
        marginRight: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#146C94',
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontWeight: '600',
        color: '#146C94',
        width: 130,
    },
    value: {
        color: '#19A7CE',
        fontWeight: '500',
        flexShrink: 1,
    },
    description: {
        color: '#146C94',
        fontSize: 14,
        lineHeight: 20,
    },
    suggestionsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 60,
    },
    suggestionsTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#146C94',
        marginBottom: 10,
    },
    suggestionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#AFD3E2',
        alignItems: 'center',
    },
    suggestionText: {
        fontSize: 14,
        color: '#19A7CE',
        fontWeight: '500',
    },
    suggestionIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});

export default SearchSpecies;
