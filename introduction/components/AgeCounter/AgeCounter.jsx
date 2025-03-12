import { useState } from "react";
import { TouchableOpacity, Text} from "react-native";

export function AgeCounter() {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge((prevAge) => prevAge + 1);
  }

  return (
    <>
      <TouchableOpacity onPress={increaseAge}>
        <Text
          style={{
            fontSize: 40,
            color: "white",
            backgroundColor: "blue",
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          Augmenter
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, color: "black", textAlign: "center" }}>
        J'ai {age} ans
      </Text>
    </>
  );
}
