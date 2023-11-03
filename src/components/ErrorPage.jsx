import { useRouteError } from 'react-router-dom';
import Header from './Header';
import '../App.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
}
