import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="category">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
