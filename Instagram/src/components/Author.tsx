import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import { Text, useTheme, Surface } from 'react-native-paper';

export default props => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Gravatar options={{email: props.email, secure: true}}
                style={styles.avatar} />
            <Text variant="titleMedium" style={styles.nickname}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontWeight: 'bold'
    },
})


