import Header from './Header';
import BookingForm from './BookingForm';

// eslint-disable-next-line react/prop-types
export default function ReservationsPage({ time, setTime }) {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <h1>Reserve A Table</h1>
        <BookingForm time={time} setTime={setTime} />
      </main>
    </div>
  );
}
