/* eslint-disable prettier/prettier */
import {Splash, Op, Order,Contact, Thankyou, Cancel} from '../pages';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Op"
        component={Op}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Thankyou"
        component={Thankyou}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cancel"
        component={Cancel}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
