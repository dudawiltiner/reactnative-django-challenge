import { Box, NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AllJobs } from './src/screen/AllJobs';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" />
        <AllJobs />
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}
