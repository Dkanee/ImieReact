import { TouchableOpacity, Text } from "react-native";

export function Child({ onPress }) {
  function surClic() {
    onPress("machin");
  }

  return (
    <>
      <TouchableOpacity onPress={surClic}> 
        <Text style={{ fontSize: 40 }}>Clic ici</Text>
      </TouchableOpacity>
    </>
  );
}
