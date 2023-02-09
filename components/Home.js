import React from 'react'
import Home from '../image/dacota.jpg'
import {
  Image,
  Center
} from 'native-base';

export default function Homes() {
  return <Center>
    <Image source={Home} alt="Alternate Text" size="250" />
  </Center>;
}