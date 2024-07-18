import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text>Hello World!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
