import React from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

type Comment = {
    nickname: string;
    text: string;
  };

type CommentsProps = {
    comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
    const colors = useTheme();

    return (
        <View style={styles.container}>
            {comments.map((item, index) => (
                <View style={styles.commentContainer} key={index}>
                    <Text variant="bodyMedium" style={styles.nickname}>{item.nickname}:</Text>
                    <Text variant="bodyMedium" style={styles.comment}>{item.text}</Text>
                </View>
            ))}
        </View>
    );
};

export default Comments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    nickname: {
        color: '#444',
        marginVertical: 5,
        fontWeight: 'bold'
    },
    comment: {
        color: '#555',
        marginVertical: 5,
    },
})
