import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Human } from "./components/Human/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { sty } from "./css/app.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[sty.square, { flex: 1 }]}>
        <Text
          style={{
            color: "red",
            backgroundColor: "#3300ee",
            fontSize: 18,
            padding: 5,
          }}
        >
          Hello !
        </Text>
        <Human
          lastName={"John"}
          firstName={"Smith"}
          age={30}
          car={{ brand: "Citroen", maxSpeed: 180 }}
          isHappy={true}
          doSomething={function () {
            console.log("Passage dans doSomeThing");
          }}
        >
          <Image
            style={{ height: 200, width: 300, marginTop: 10, borderRadius: 10 }}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </Human>
        <Text>Hello !</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
