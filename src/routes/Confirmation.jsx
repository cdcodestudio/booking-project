import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';

export default function Confirmation() {
  return (
    <ChakraProvider>
      <div className="wrapper">
        <Header />
        <div className="confirmation">
          <div className="text__top">
            <h1>Reservation Confirmed!</h1>
            <img src="check.svg" alt="check" width={50} />
          </div>
          <p>Check your text messages and email for additional details.</p>
        </div>
      </div>
    </ChakraProvider>
  );
}
