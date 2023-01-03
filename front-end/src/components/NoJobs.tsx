import { AntDesign } from '@expo/vector-icons';
import { Button, Center, Text, VStack } from 'native-base';
import React from 'react';

interface NoJobsProps {
  setShowModal: (value: boolean) => void
}

export function NoJobs({ setShowModal }: NoJobsProps) {
  return (
    <VStack justifyContent={"center"} minH={"560"}>
      <Center alignItems={"center"}>
        <AntDesign name="rocket1" size={140} color="rgba(0,0,0,0.20)" />
        <Text fontSize={16} mt="4" color="gray.600">Não há vagas divulgadas ainda.</Text>
        <Text fontSize={14} mt="2" color="gray.600">Quer ser a primeira pessoa a contribuir?</Text>
        <Button
          bg="violet.500"
          _pressed={{bg: "violet.600"}}
          _dark={{bg: "violet.400" }}
          mt="4"
          onPress={() => setShowModal(true)}
        >
          Cadastrar uma vaga
        </Button>
      </Center>
    </VStack>
  );
}