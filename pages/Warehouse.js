import * as React from "react";
import {
    VStack,
    Center,
    Button,
    Text,
    Box,
    Heading,
    FormControl,
    Input,
} from "native-base";


const Warehouse = () => {
       return (
        <Box w="100%" display="flex" flex={1} alignItems="center">
            <Center w="100%">
                <Box safeArea w="100%" maxW="300">
                    <Heading
                        mt={10}
                        size="lg"
                        fontWeight="600"
                        color="coolGray.800"
                        bold
                        _dark={{
                            color: "warmGray.50",
                        }}
                    >
                        Data Warehouse
                    </Heading>
                    <VStack space={2} mt="8">
                        <FormControl bg="#e5e5e5" borderColor="#737373">
                            <Input
                                type="text"
                                placeholder="Kota Pengirim"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5" borderColor="#737373">
                            <Input
                                type="text"
                                placeholder="Kota Penerima"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"

                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5" borderColor="#737373">
                            <Input
                                type="text"
                                placeholder="Provinsi"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"

                            />
                        </FormControl>
                      
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="text"
                                placeholder="Kecamatan"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="text"
                                placeholder="Kelurahan"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                            />
                        </FormControl>
                        <Button
                            mt="6"
                            variant="red"
                            bg="red.600"
                            onPress={() => navigation.navigate("home")}
                        >
                            <Text bold color="white" fontSize="16px">
                                Proses
                            </Text>
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default Warehouse;
