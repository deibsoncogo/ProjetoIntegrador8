import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <Logo width={150} height={150}/>

      <TouchableOpacity>
        <Text style={styles.logoutText}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

// 41:49
