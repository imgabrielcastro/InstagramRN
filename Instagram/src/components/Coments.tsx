import React from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export default function Comments (props: {comments: any}) {
    const colors = useTheme();
    let view = null

    if (props.comments) {
        view = props.comments.map((item, index) => {
            return(
                <View style={styles.commentContainer} key={index}>
                    <Text variant="bodyMedium" style={styles.nickname}>{item.nickname}:</Text>
                    <Text variant="bodyMedium" style={styles.comment}>{item.text}</Text>
                </View>
            )
        }) 
    }

    return (
        <View style={styles.container}>
            {view}
        </View>
    )
}

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
