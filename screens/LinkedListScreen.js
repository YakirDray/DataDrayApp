import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

const Node = (value, next = null) => {
    return { value, next };
};

const LinkedListScreen = () => {
    const [head, setHead] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const addToHead = () => {
        const startTime = new Date().getTime();
        const newNode = Node(inputValue, head);
        setHead(newNode);
        setInputValue('');
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        Alert.alert(
            "הסבר על הפונקציונליות",
            "הוספת חוליה לראש הרשימה.\nזמן הריצה: " + executionTime + " מילי-שניות"
        );
    };

    const removeFromHead = () => {
        const startTime = new Date().getTime();
        if (head) {
            setHead(head.next);
        }
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        Alert.alert(
            "הסבר על הפונקציונליות",
            "הסרת חוליה מהראש של הרשימה.\nזמן הריצה: " + executionTime + " מילי-שניות"
        );
    };

    const removeFromTail = () => {
        const startTime = new Date().getTime();
        if (!head || !head.next) {
            setHead(null);
            const endTime = new Date().getTime();
            const executionTime = endTime - startTime;
            Alert.alert(
                "הסבר על הפונקציונליות",
                "הסרת חוליה מהזנב של הרשימה.\nזמן הריצה: " + executionTime + " מילי-שניות"
            );
            return;
        }
        let current = head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        Alert.alert(
            "הסבר על הפונקציונליות",
            "הסרת חוליה מהזנב של הרשימה.\nזמן הריצה: " + executionTime + " מילי-שניות"
        );
    };

    const removeByValue = () => {
        const startTime = new Date().getTime();
        if (!head) {
            Alert.alert("אין מה למחוק", "הרשימה ריקה");
            return;
        }
        if (head.value === inputValue) {
            removeFromHead();
            return;
        }
        let current = head;
        while (current.next && current.next.value !== inputValue) {
            current = current.next;
        }
        if (!current.next) {
            Alert.alert("אין מה למחוק", "הערך לא נמצא");
            return;
        }
        current.next = current.next.next;
        setInputValue('');
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        Alert.alert(
            "הסבר על הפונקציונליות",
            "הסרת חוליה לפי ערך מסוים.\nזמן הריצה: " + executionTime + " מילי-שניות"
        );
    };

    const renderList = () => {
        let elements = [];
        let current = head;
        while (current) {
            elements.push(
                <Text style={styles.node} key={Math.random()}>
                    {current.value}
                </Text>
            );
            current = current.next;
        }
        return elements;
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="הזן ערך חדש או ערך למחיקה"
            />
            <Button title="הוסף לראש" onPress={addToHead} />
            <Button title="הסר מהראש" onPress={removeFromHead} />
            <Button title="הסר מהזנב" onPress={removeFromTail} />
            <Button title="מחק לפי ערך" onPress={removeByValue} />
            <View style={styles.listContainer}>
                {renderList()}
            </View>
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
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    node: {
        marginHorizontal: 10,
        fontSize: 18,
    },
});

export default LinkedListScreen;
