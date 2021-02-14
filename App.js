import React from 'react'
import { View, Text, Button } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContent } from './screen/DrawerContent';

import Activity from './screen/Activity';
import Gallery from './screen/Gallery';

const Drawer = createDrawerNavigator();

const ActivityStack = createStackNavigator();
const GalleryStack = createStackNavigator();

const ActivityStackScreen = () => (
  <ActivityStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <ActivityStack.Screen
      name="Activity"
      component={Activity}
      options={{
        headerTitle: 'อัปเดตข่าวสารกิจกรรม',
        headerTitleStyle: {alignSelf: 'center'},
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </ActivityStack.Navigator>
);

const GalleryStackScreen = () => (
  <GalleryStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <GalleryStack.Screen
      name="Gallery"
      component={Gallery}
      options={{
        headerTitle: 'อัปเดตคลังรูปภาพ',
        headerTitleStyle: {alignSelf: 'center'},
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </GalleryStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ActivityUpdate" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="ActivityUpdate" component={ActivityStackScreen} />
        <Drawer.Screen name="GalleryUpdate" component={GalleryStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

