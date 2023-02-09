import React from "react";
import {
  Text,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  Button
} from "native-base";

import Homepage from "../components/Home"


export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
     <Center>
        <VStack space={2} alignItems="center">
          <Homepage />
          <HStack alignItems="center" mt="5">
            <Text style={{fontSize: 20, color:"red",fontWeight:"bold"}}>Aplikasi Dacota Cargo</Text>
          </HStack>
          <Button mt="1/5" variant="primary" bg="primary.600" w="80%" onPress={() => navigation.navigate('warehouse')}>
            <Text bold color="white" style={{textAlign:"center"}}>Mulai</Text>
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}


