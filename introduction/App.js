import { Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Child } from "./components/Child/Child";

export default function App() {
  function hello(name) {
    Alert.alert(`Bonjour ${name} !`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Child onPress={hello} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
