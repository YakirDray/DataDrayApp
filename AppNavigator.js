import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ArrayScreen from "./screens/ArrayScreen";
import LinkedListScreen from "./screens/LinkedListScreen";
import TreeScreen from "./screens/TreeScreen";
const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={false }
      />
      <Stack.Screen name="Arrays" component={ArrayScreen} />
      <Stack.Screen name="LinkedLists" component={LinkedListScreen} />
      <Stack.Screen name="Trees" component={TreeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
