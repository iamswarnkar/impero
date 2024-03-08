import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stackNavigators";
import React from "react";
import AppContext from "./src/utils/AppContext";

export default function App() {
  return (
    <NavigationContainer>
      <AppContext>
        <StackNavigator />
      </AppContext>
    </NavigationContainer>
  );
}
