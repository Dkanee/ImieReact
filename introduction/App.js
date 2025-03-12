// import { Alert } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { Child } from "./components/Child/Child";

import React from 'react';
import { Text, View, Platform } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Platform.OS === 'ios' ? 'Je suis un IOS' : 'Je suis un Android'}</Text>
    </View>
  );
};

export default App;

// export default function App() {
//   function hello(name) {
//     Alert.alert(`Bonjour ${name} !`);
//   }

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }}>
//         <Child onPress={hello} />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }
