import {
  Box,
  Heading,
  ScrollView,
  HStack,
  VStack
} from "native-base";

function DestinationInput() {
  return (
    <Box bgColor="#1A1C33" padding={0} alignItems="center">
      <HStack flex={1} width="100%" bgColor="white">
        <VStack>
          <Heading>
            Depart
          </Heading>
          <Heading>
            Arrivee
          </Heading>
        </VStack>
        <Heading>
          Switch
        </Heading>
      </HStack>
    </Box>
  )
}

function TripInput() {
  return (
    <VStack space={4}>
      <Heading>
        Aller
      </Heading>
      <Heading>
        Retour
      </Heading>
    </VStack>
  )
}

export default function HomeScreen() {
  return (
    <ScrollView bgColor="amber.400">
      <VStack>
        <DestinationInput />
        <TripInput />
      </VStack>
    </ScrollView>
  );
}
