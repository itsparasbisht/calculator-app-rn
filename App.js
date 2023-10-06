import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Button from "./src/components/Button";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <StatusBar style="dark" />
        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          trackColor={{ false: "#767577", true: "#4B5EFC" }}
          thumbColor="#f4f3f4"
        />
        <Button title={3} onPress={() => alert("hello")} isGray />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
