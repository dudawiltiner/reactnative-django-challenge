import { Entypo, Feather, FontAwesome, Octicons } from '@expo/vector-icons';
import { Box, HStack, Text, IconButton, StatusBar, Heading, Switch, Center, useColorMode } from 'native-base';
import React from 'react';

export function Header() {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
  return (
    <HStack 
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="violet.500"
      _dark={{ bg: "violet.400" }}
      pb={6}
      pt={12}
    >

      <Heading
        color="gray.100"
        textAlign="center"
        justifyContent={"center"}
        fontSize="lg"
        ml={6}
        pt={2}
      >
        <Octicons name="feed-rocket" size={24} color="white" />
        {' '}
        RocketJobs
      </Heading>

      <HStack pr="4" alignItems="center">
        <Feather name="sun" size={24} color="white" />
        <Switch
          isChecked={colorMode === 'dark'}
          onTrackColor="gray.700"
          onToggle={() => toggleColorMode()}
          size="sm"
        />
        <Entypo name="moon" size={24} color="white" />
      </HStack>
    </HStack>
  );
}