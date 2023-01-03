import React, { useEffect, useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Box, Button, Divider, Flex, Heading, HStack, Icon, Modal, Stack, useColorMode } from 'native-base';
import { Job } from '../hooks/use-registre-job/types';

interface ModalProps {
  setShowModalFilter: (value: boolean) => void
  showModalFilter: boolean
  oldJobs: Job[]
  handleChangeJobs: (value: Job[]) => void
}

export function ModalFilter({ oldJobs, handleChangeJobs, setShowModalFilter, showModalFilter }: ModalProps) {
  const { colorMode } = useColorMode();
  const [ previusCategories, setPreviusCategories ] = useState<string[]>([]);
  const [ selectedCategories, setSelectedCategories ] = useState<string[]>([])

  function verifySelectedCategories(name: string) {
    if(selectedCategories.includes(name)){
      const categories = selectedCategories
      categories.splice(categories.indexOf(name), 1)
      setSelectedCategories([... categories])
    } else {
      setSelectedCategories([...selectedCategories, name])
    }
  }

  function saveFilter() {
    if(selectedCategories.length !== 0) {
      const newJobs = oldJobs.filter((el) => selectedCategories.includes(el.category))
      handleChangeJobs([...newJobs])
    } else {
      handleChangeJobs([...oldJobs])
    }
    
    setPreviusCategories([...selectedCategories])
    setShowModalFilter(false)
  }

  useEffect(() => {
    if(showModalFilter && previusCategories.length !== 0) {
      setSelectedCategories([...previusCategories])
    }
  }, [showModalFilter])
  

  return (
    <Modal isOpen={showModalFilter} onClose={() => setShowModalFilter(false)}>
      <Box rounded="lg" bg="coolGray.200"  _dark={{
        backgroundColor: "gray.700"
          }} width="350px" p={4} >
        <Heading _light={{color: "gray.700"}} mb={2} fontSize="xl">Selecione uma categoria</Heading>
        <Divider mb={2}/>
        <Flex mt={2}>
          <Button mt={2} onPress={() => verifySelectedCategories( "frontend")} colorScheme={"pink"} borderColor= "pink.500" variant={selectedCategories.includes("frontend") ? "solid" : "outline"} rounded={"3xl"} leftIcon={selectedCategories.includes("frontend") ?  <Icon as={AntDesign} name="check" size="sm" /> :<Icon as={Ionicons} name="close" size="sm" /> }>
            Front-End
          </Button>
          <Button mt={2} onPress={() => verifySelectedCategories("java")} colorScheme={"pink"} borderColor= "pink.500" variant={selectedCategories.includes("java") ? "solid" : "outline"} rounded={"3xl"} leftIcon={selectedCategories.includes("java") ?  <Icon as={AntDesign} name="check" size="sm" /> :<Icon as={Ionicons} name="close" size="sm" /> }>
            Java
          </Button>
          <Button mt={2} onPress={() => verifySelectedCategories( "backend")} colorScheme={"pink"} borderColor= "pink.500" variant={selectedCategories.includes("backend") ? "solid" : "outline"} rounded={"3xl"} leftIcon={selectedCategories.includes("backend") ?  <Icon as={AntDesign} name="check" size="sm" /> :<Icon as={Ionicons} name="close" size="sm" /> }>
            Back-End
          </Button>
          <Button mt={2} onPress={() => verifySelectedCategories( "react")} colorScheme={"pink"} borderColor= "pink.500" variant={selectedCategories.includes("react") ? "solid" : "outline"} rounded={"3xl"} leftIcon={selectedCategories.includes("react") ?  <Icon as={AntDesign} name="check" size="sm" /> :<Icon as={Ionicons} name="close" size="sm" /> }>
            React
          </Button>
        </Flex>
        <HStack justifyContent={"flex-end"}>
          <Button mt={8} w="30%" variant="outline" _text={{color: colorMode === "dark" ? "violet.400" : "violet.500"}} _light={{borderColor: "violet.500", color: "violet.500" }} _dark={{borderColor: "violet.400"}} colorScheme="blueGray" onPress={() => 
            setShowModalFilter(false)
          }>
            Cancel
          </Button>
          <Button w="30%" ml={2} mt={8} bg="violet.500"  _pressed={{bg: "violet.600"}} _dark={{bg: "violet.400" }} onPress={() =>
            saveFilter()
          }>
            Save
          </Button>
        </HStack>
      </Box>
    </Modal>
  );
}