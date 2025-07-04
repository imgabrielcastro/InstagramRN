import * as React from 'react';
import {StyleSheet, Image, View, Dimensions, ImageSourcePropType} from 'react-native';
import {Surface, useTheme} from 'react-native-paper';
import Author from './Author';
import Comments from './Coments';
import AddComment from './AddComment';



type PostProps = {
    image: ImageSourcePropType;
    email: string;
    nickname: string;
    comments: {
        nickname: string;
        text: string;
    }[];
}

const Post: React.FC<PostProps> = ({image, comments, email, nickname}) => {
    const colors = useTheme();
    
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>  
            <Author name={nickname} email={email} />
            <Comments comments={comments} />
            <AddComment/>
        </View>
    )
};

export default Post;

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
