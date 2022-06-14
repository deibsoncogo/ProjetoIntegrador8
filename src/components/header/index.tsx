import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Logomarca from "../../assets/logomarca.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <Logomarca width={150} height={150}/>

      <TouchableOpacity>
        <Text style={styles.logoutText}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}
