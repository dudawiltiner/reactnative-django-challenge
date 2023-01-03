import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { Job } from './types'

async function fetchJob(): Promise<Job[]> {
  const { data } = await api.get<Job[]>('jobs/')

  return data
}

export function useJobs() {
  const { data, isLoading, error } = useQuery(
    'jobs',
    () => fetchJob(),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}
