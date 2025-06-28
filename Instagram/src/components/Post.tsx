import * as React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {Surface, useTheme} from 'react-native-paper';

export default function Post({ image }: { image: any }) {
    const colors = useTheme();
    
    return(
        <Surface style={styles.container}>
            <Image source={image} style={styles.image}/>  
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').width * 3/4,
       marginTop: 20,
    }
})
