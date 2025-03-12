import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FlexDemo } from "./components/FlexDemo/FlexDemo";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";

export default function App() {
  return (  
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AgeCounter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
