/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../src/components/BookingForm';

test('renders the form with initial state', () => {
  render(<BookingForm />);

  // Check that the Name field is rendered
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  // Check that the Phone field is rendered
  expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  // Check that the Email field is rendered
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test('shows validation errors for the first three fields', async () => {
  render(<BookingForm />);

  // Click the submit button to trigger validation
  userEvent.click(screen.getByText(/confirm reservation/i));

  // Check for validation error messages
  expect(await screen.findByText('This is required')).toBeInTheDocument();
  expect(await screen.findByText('Invalid phone number format')).toBeInTheDocument();
  expect(await screen.findByText('This is required')).toBeInTheDocument();

  // Fill in the fields with valid data
  userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
  userEvent.type(screen.getByLabelText(/phone/i), '123-456-7890');
  userEvent.type(screen.getByLabelText(/email/i), 'john.doe@example.com');

  // Click the submit button again
  userEvent.click(screen.getByText(/confirm reservation/i));

  // Check that the error messages are gone
  expect(screen.queryByText('This is required')).not.toBeInTheDocument();
  expect(screen.queryByText('Invalid phone number format')).not.toBeInTheDocument();
});
