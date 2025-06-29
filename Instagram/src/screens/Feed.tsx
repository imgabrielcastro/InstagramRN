import React, { useState, Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Post from "../components/Post";
import Header from "../components/Header";

type CommentType = {
  nickname: string;
  text: string;
};

type PostType = {
  id: number;
  nickname: string;
  email: string;
  image: any;
  comments: CommentType[];
};

type FeedProps = {};

const Feed = ({}: FeedProps) => {
  const { colors } = useTheme();

  const [posts, setPosts] = useState<PostType[]>([
    {
      id: Math.random(),
      nickname: "imgabrielcastro",
      email: "josegabrielsouzacastro@gmail.com",
      image: require("../../assets/charmande.jpg"),
      comments: [
        { nickname: "daniloformanski", text: "Oloco, muito top!" },
        { nickname: "brunovieira", text: "Esse dia foi louco kkkkkkkk" },
        { nickname: "neymarjr", text: "Meu Deus do céu" },
      ],
    },
    {
      id: Math.random(),
      nickname: "neymarjr",
      email: "neymarjr@gmail.com",
      image: require("../../assets/neyma.png"),
      comments: [
        { nickname: "imgabrielcastro", text: "Oloco, esse cara é brabo!" },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
