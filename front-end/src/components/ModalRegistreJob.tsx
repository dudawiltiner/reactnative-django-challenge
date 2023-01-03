import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Center, Divider, FormControl, Heading, HStack, Input, Modal, ScrollView, Stack, Text, TextArea, Toast, useColorMode, VStack } from 'native-base';
import { useForm, Controller } from "react-hook-form";
import { ValuesOfJob } from '../hooks/use-registre-job/types';
import { useRegistreJob } from '../hooks/use-registre-job';
import { Job } from '../hooks/use-get-jobs/types';

interface ModalProps {
  setShowModal: (value: boolean) => void
  showModal: boolean
  oldJobs: Job[]
  handleChangeJobs: (value: Job[]) => void
  handleChangeLoading: (value: boolean) => void
}

const INITIAL_VALUE = {
  title: '',
  link: '',
  tags: '',
  description: '',
  category: '',
}

export function ModalRegistreJob({ setShowModal, showModal, oldJobs, handleChangeLoading, handleChangeJobs }: ModalProps) {
  const { colorMode } = useColorMode();
  const [ values, setValues ] = useState(INITIAL_VALUE);
  const [ active, setActive ] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: INITIAL_VALUE
  });

  const onSubmit = (data: ValuesOfJob) => {
    setActive(true)
    setValues({...data})
  }

  interface objField {
    label: string, 
    type: "title" | "link" | "tags" | "description" | "category"
  }

  const FIELDS: objField[] = [
    { label: "Nome", type: "title" },
    { label: "Link", type: "link" },
    { label: "Categoria (frontend, backend, react ou java)", type: "category" },
    { label: "Tags (separadas por vírgula)", type:"tags" },
    { label: "Descrição", type: "description" }
  ]

  const {data, error, isLoading } = useRegistreJob(values, active)

  useEffect(() => {
    if(data && data[0].id !== 0) {
      handleChangeJobs([...data, ...oldJobs])
      setShowModal(false)
    }

    if(!isLoading) {
      setActive(false)
    }

    handleChangeLoading(isLoading)

  }, [data, isLoading])
  

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Box h="550" rounded="lg" bg="coolGray.200"  _dark={{
        backgroundColor: "gray.700"
          }} width="350px" p={4} >
        <ScrollView>
            <Heading _light={{color: "gray.700"}} mb={2} fontSize="xl">Divulgue uma vaga:</Heading>
            <Divider mb={2}/>
            <FormControl>
              { FIELDS.map((el, idx) =>
                <Stack w="100%" key={idx}>
                  <FormControl.Label>{el.label}</FormControl.Label>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      el.type !== "description" ?
                        <Input  
                          _dark={{borderColor: "gray.400"}}
                          _focus={{backgroundColor: "rgba(139,92,246, 0.1)", borderColor:"rgb(139,92,246)"}} 
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        /> 
                      :
                      <TextArea  
                        _dark={{borderColor: "gray.400"}}
                        _focus={{backgroundColor: "rgba(139,92,246, 0.1)", borderColor:"rgb(139,92,246)"}} 
                        autoCompleteType={Center}
                        h={20}
                        placeholder="Digite aqui sobre a vaga..."
                        w="100%"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                    )}
                    name={el.type}
                  />
                  {errors[el.type] &&
                    <Alert mt="2" w="100%" variant={"left-accent"} colorScheme="error" status="error">
                      <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                          <HStack space={2} flexShrink={1} alignItems="center">
                            <Text color={"red.600"}>
                              Esse campo é obrigatório
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </Alert>
                  }
                </Stack>
              )}

              <Button mt={4} variant="outline" _text={{color: colorMode === "dark" ? "violet.400" : "violet.500"}} _light={{borderColor: "violet.500", color: "violet.500" }} _dark={{borderColor: "violet.400"}} colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                Cancel
              </Button>
              <Button onPress={handleSubmit(onSubmit)} mt={2} bg="violet.500"  _pressed={{bg: "violet.600"}}
                _dark={{bg: "violet.400" }}>
                Save
              </Button>
            </FormControl>
        </ScrollView>
      </Box>
      {active && !data && error instanceof Error &&
        Toast.show({
          render: () => {
            return (
              <Box bg="red.600" px="2" py="1" rounded="sm" mb={5}>
                <Text color={"white"}>
                  Algo de errado aconteceu. Confira os seus dados
                </Text>
              </Box>
            )
          }
        })
      }
    </Modal>
  )
}