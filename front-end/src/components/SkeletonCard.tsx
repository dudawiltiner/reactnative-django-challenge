import { Center,  HStack, Skeleton, VStack } from 'native-base'

import React from 'react'

export default function SkeletonCard() {
  return (
    <Center pt={8} w="100%">
      <VStack w={"80%"} maxW="400" borderWidth="1" overflow="hidden" rounded="lg" _dark={{
        borderColor: "coolGray.500"
        }} 
        _light={{
          borderColor: "coolGray.200"
        }}
      >
        <Skeleton h="16" />
        <HStack px="4" my="4">
          <Skeleton h="6" w="12" px="1" rounded="xl" />
          <Skeleton h="6" w="12" px="1" rounded="xl" />
          <Skeleton h="6" w="12" px="1" rounded="xl" />
          <Skeleton h="6" w="12" px="1" rounded="xl" />
        </HStack>
        <Skeleton h="4" rounded="lg" px="4" my="2" />
        <Skeleton h="4" rounded="lg" px="4" my="2"/>
        <Skeleton h="4" w="32" rounded="lg" px="4" my="2" />
        <Skeleton h="6" w="24" px="4" my="4" rounded="md" />
      </VStack>
    </Center>
  )
}