import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Data Structures App</Text>
      <Button
        title="Go to Arrays"
        onPress={() => navigation.navigate('Arrays')}
      />
      <Button
        title="Go to Linked Lists"
        onPress={() => navigation.navigate('LinkedLists')}
      />
      <Button
        title="Go to Trees"
        onPress={() => navigation.navigate('Trees')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
