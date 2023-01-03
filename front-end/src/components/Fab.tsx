import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Center, HStack, Icon, IconButton, Stagger, useDisclose } from 'native-base';
import React from 'react';

interface FabProps {
  setShowModalFilter: (value: boolean) => void
  setShowModal: (value: boolean) => void
  showModal: boolean
  showModalFilter: boolean
}

export function Fab({setShowModalFilter, setShowModal, showModal, showModalFilter}: FabProps) {
  const { isOpen, onToggle } = useDisclose();
  
  return (
    <Box position={"absolute"} zIndex={1000} right={5} bottom={130}>
      <Center>
        <Box alignItems="center" minH="120">
          <Stagger visible={isOpen} 
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34
          }} animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }} exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}>
            <IconButton onPress={() => setShowModalFilter(!showModalFilter)} mb="4" variant="solid" colorScheme="pink" borderRadius="full" icon={<Icon color="white" as={AntDesign} name="filter" size="8" />} />
            <IconButton onPress={() => setShowModal(!showModal)} mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon color="white" as={AntDesign} name="plus" size="8" />} />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton variant="solid" _dark={{
            bg: "violet.400"
          }} borderRadius="full" size="lg" onPress={onToggle} _pressed={{bg: "violet.600"}} bg="violet.500" icon={<Icon as={MaterialCommunityIcons} size="8" name="dots-horizontal" color="warmGray.50"/>}/>
        </HStack>
      </Center>
    </Box>
  );
}