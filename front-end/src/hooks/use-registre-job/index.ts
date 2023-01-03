import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { Job, ValuesOfJob } from './types'

function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();
  return ano+"-"+mes+"-"+dia;
}

export async function fetchRegistreJob(
  values: ValuesOfJob, active: boolean
): Promise<Job[]> {
  if(active) {
    const json = JSON.stringify({"jobs" : [{
      ...values,
      publication_date: dataAtualFormatada()
    }]})

    const headers = {'Content-Type': 'application/json', 'Accept':'application/json'}

    const { data } = await api.post<Job[]>('jobs/', json, { headers })
  
    return data
  }

  return [{
    id: 0,
    title: '',
    link: '',
    tags: '',
    description: '',
    publication_date: '',
    category: ''
  }]
}

export function useRegistreJob(values: ValuesOfJob, active: boolean) {
  const { data, isLoading, error } = useQuery(
  [ 'registre-job', values ],
  () => fetchRegistreJob(values, active), {
    refetchOnWindowFocus: false, retry: 1,
  })

  return {
    data,
    isLoading,
    error
  }
}
