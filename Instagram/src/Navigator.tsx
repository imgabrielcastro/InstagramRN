import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/lib/typescript/react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from "./screens/Feed";

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions:{
            tittle: 'Feed'
            
        }
    }
}