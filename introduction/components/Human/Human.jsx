import { Text, View } from "react-native";

export function Human({ firstName, lastName, age, car, children, isHappy }) {
  return (
    <View style={{ alignItems: "center", marginTop: 10 }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Je suis {lastName} {firstName} et j'ai {age} ans
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Ma voiture est une {car.brand}, elle roule au max à {car.maxSpeed} km/h
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        {isHappy ? "Il est content" : "Pas content"}
      </Text>
      {children}
    </View>
  );
}
