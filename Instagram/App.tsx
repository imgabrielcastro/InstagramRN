import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, DefaultTheme, Surface } from "react-native-paper";
import * as React from "react";
import Header from "./src/components/Header";
import Post from "./src/components/Post";

const comments = [
  { nickname: "Squirle", text: "Oloco, muito top!" },
  { nickname: "Pikachu", text: "Esse dia foi louco kkkkkkkk" },
  { nickname: "Eevee", text: "Meu Deus do céu" },
];

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee",
    background: "#ffffff",
    text: "#000",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Header />
      <Post image={require("./assets/charmande.jpg")} comments={comments} />
      <StatusBar style="dark" />
    </PaperProvider>
  );
}
