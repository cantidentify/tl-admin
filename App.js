import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import  Home  from './screen/layout';
import News from './screen/News'
import Admin from './screen/Admin'

let Stack = createStackNavigator()



function HomeScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
  );
}



function SettingsScreen() {
  return(  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>)


}

function AdminScreen() {
  return(  <Stack.Navigator>
    <Stack.Screen name="Home" component={Admin} />
  </Stack.Navigator>)


}

function NewsScreen() {
  return( <Stack.Navigator>
    <Stack.Screen name="News" component={News} />
  </Stack.Navigator>)
 

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (


    <Tab.Navigator>
      <Tab.Screen name="หน้าหลัก" component={HomeScreen} />
      <Tab.Screen name="สถานที่" component={SettingsScreen} />
      <Tab.Screen name="ข่าวสาร" component={NewsScreen} />
      <Tab.Screen name="สมาชิก" component={AdminScreen} />
      {/* <Tab.Screen name="ข้อมูลวัด" component={Info} /> */}
    </Tab.Navigator>




  );
}

export default function App() {

 





  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>


  );
}
