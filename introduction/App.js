import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FlexDemo } from "./components/FlexDemo/FlexDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlexDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
