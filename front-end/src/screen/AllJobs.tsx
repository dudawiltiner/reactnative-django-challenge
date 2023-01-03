import { Box,  ScrollView, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Fab } from '../components/Fab';
import { Header } from '../components/Header';
import { ModalFilter } from '../components/ModalFilter';
import { ModalRegistreJob } from '../components/ModalRegistreJob';
import { NoJobs } from '../components/NoJobs';
import SkeletonCard from '../components/SkeletonCard';
import { useJobs } from '../hooks/use-get-jobs';
import { Job } from '../hooks/use-get-jobs/types';


export function AllJobs() {
  const [showModal, setShowModal] = useState(false)
  const [jobs, setJobs] = useState<Job[]>([])
  const [oldJobs, setOldJobs] = useState<Job[]>([])
  const [showModalFilter, setShowModalFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  const { data, isLoading } = useJobs()

  useEffect(() => {
    if(data && !isLoading) {
      setJobs([...data])
      setOldJobs([...data])
    }
  }, [data, isLoading])

  useEffect(() => {
    if(oldJobs.length - 1 === jobs.length) {
      setJobs([...oldJobs])
    }
  }, [oldJobs])

  return (
    <VStack _dark={{ backgroundColor: "gray.800" }}>
      <Header/>
      <Box>
        <ScrollView>
          <VStack pb={64}>
          {isLoading || loading ?
            Array.from(Array(6).keys()).map((_el, idx) => 
              <SkeletonCard key={idx} />
            )
            : 
            jobs?.length === 0 
              ?
              <NoJobs setShowModal={setShowModal} />
              :
              jobs?.map((job, idx) =>
                <Card key={idx} job={job} />
              )
          }
          </VStack>
        </ScrollView>
      </Box>
      <Fab
        setShowModalFilter={setShowModalFilter}
        setShowModal={setShowModal}
        showModal={showModal}
        showModalFilter={showModalFilter}
      />
      <ModalRegistreJob
        setShowModal={setShowModal}
        showModal= {showModal}
        oldJobs={oldJobs}
        handleChangeJobs={setOldJobs}
        handleChangeLoading={setLoading}
      />
      <ModalFilter
        setShowModalFilter={setShowModalFilter}
        showModalFilter={showModalFilter}
        oldJobs={oldJobs}
        handleChangeJobs={setJobs}
      />
    </VStack>
  );
}