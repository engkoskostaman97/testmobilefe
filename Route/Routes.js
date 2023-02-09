import * as React from 'react';

import Warehouse from "../pages/Warehouse";
import Home from "../pages/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Layardepan() {
  return (

    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
     
      <Stack.Screen name="warehouse" component={Warehouse} options={{
        headerShown: true,
      }} />
   
    </Stack.Navigator>

  );
}
export default Layardepan;

