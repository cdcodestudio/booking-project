import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import ReservationsPage from './components/ReservationsPage';

// eslint-disable-next-line react/prop-types
export default function App() {
  const [time, setTime] = useState('530');

  // for the sake of this simple Reservations project, using App file
  return (
    <ChakraProvider>
      <ReservationsPage time={time} setTime={setTime} />
    </ChakraProvider>
  );
}
