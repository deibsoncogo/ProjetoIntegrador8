import { StyleSheet } from "react-native";
import { color } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blackSecondary,
    paddingTop: getStatusBarHeight(),
  }
})
