import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import BookingForm from '../src/components/BookingForm';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';

test('it renders without crashing', () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
});

test('it does not submit the form when the name input is empty', async () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const nameInput = getByLabelText('Name');
  const submitButton = getByText('Confirm Reservation');

  await act(async () => {
    fireEvent.click(submitButton);
  });

  expect(nameInput).toBeInvalid();
  expect(nameInput).toHaveAttribute('aria-invalid', 'true');
});
