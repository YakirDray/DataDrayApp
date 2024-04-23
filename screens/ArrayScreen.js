import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const ArrayScreen = () => {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        setArray([...array, { key: array.length, value: inputValue }]);
        setInputValue('');
    };

    const handleRemove = (index) => {
        const newArr = array.filter((_, idx) => idx !== index);
        setArray(newArr);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setInputValue}
                value={inputValue}
                placeholder="הזן ערך חדש"
            />
            <Button
                title="הוסף אלמנט"
                onPress={handleAdd}
            />
            <ScrollView horizontal={true} style={styles.arrayContainer}>
                {array.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.keyText}>מפתח: {item.key}</Text>
                        <Text style={styles.valueText}>ערך: {item.value}</Text>
                        <Button title="הסר" onPress={() => handleRemove(index)} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    arrayContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
    item: {
        width: 150,
        height: 100,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
    },
    keyText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    valueText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default ArrayScreen;
