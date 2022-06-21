import { StyleSheet } from "react-native";
import { color } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: color.whiteTertiary
  },

  logoutText: {
    fontSize: 15,
    color: color.blackTertiary,
    marginRight: 10
  },

  menu: {
    display: "flex",
    flexDirection: "row"
  }
})
