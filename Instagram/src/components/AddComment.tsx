import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Alert,
} from "react-native";
import { Text, useTheme, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const AddComment: React.FC = () => {
  const colors = useTheme();

  const [comment, setComment] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleAddComment = () => {
    Alert.alert("Adicionado com Sucesso!");
  };

  return (
    <View style={{ flex: 1 }}>
      {editMode ? (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={comment}
            onChangeText={setComment}
            onSubmitEditing={handleAddComment}
          />
          <TWF onPress={() => setEditMode(false)}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      ) : (
        <TWF onPress={() => setEditMode(true)}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text variant="bodyMedium" style={styles.caption}>
              Adicione um comentário
            </Text>
          </View>
        </TWF>
      )}
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    width: "90%",
  },
  caption: {
    color: "#CCC",
    marginLeft: 10,
  },
});
