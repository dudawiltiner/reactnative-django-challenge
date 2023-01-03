import React from 'react';
import { Feather, Fontisto } from '@expo/vector-icons';
import { AspectRatio, Box, Center, Heading, HStack, Image, Link, Stack, Text } from 'native-base';
import { Job } from '../hooks/use-get-jobs/types';

interface Card {
  job: Job
}

export function Card({ job }: Card) {
  return (
    <Box pt={8} alignItems="center">
      <Link href={job?.link} isExternal>
        <Box 
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1" 
          _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 4}>
              <Image 
                source={{
                  uri: "https://i0.wp.com/aben.com.br/wp-content/uploads/2022/05/NASA-Foguete.jpg?fit=960%2C480&ssl=1"
                }} 
                alt="image" 
              />
            </AspectRatio>
            <Center 
              position="absolute" top="0" right="0" px="3" py="1.5"
            >
              <Feather name="external-link" size={24} color="white" />
            </Center>
            <Center bg="violet.500" _dark={{
              bg: "violet.400"
              }} _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs"
              }} position="absolute" bottom="0" px="3" py="1.5"
            >
              {job?.category}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {job?.title}
              </Heading>
              <HStack>
                {
                  job?.tags !== "nenhuma" &&
                  job?.tags?.split(",").slice(0, 4).map((tag, idx) =>
                    <Box mr={2} key={idx} bg="violet.500" _dark={{
                      bg: "violet.400"
                      }} p="2" rounded="xl">
                      <Text fontSize="xs" _light={{
                        color: "warmGray.50"
                          }} _dark={{
                            color: "warmGray.50"
                          }} fontWeight="500" ml="-0.5" mt="-1"
                      >
                        {tag}
                      </Text>
                    </Box>
                  )
                }
              </HStack>
            </Stack>
            <Text fontWeight="400">
              {job.description}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text 
                  color="coolGray.600" 
                  _dark={{
                  color: "warmGray.200"
                  }} 
                  fontWeight="400"
                >
                  <Fontisto name="date" size={12} color="black" />
                  {'  '}
                  {job.publication_date}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Link>
    </Box>
  );
}