import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Form({ time, setTime }) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate('/confirmation');
        resolve();
      }, 3000);
    });
  }

  const [date, setDate] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="form-wrapper">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="first and last name"
                {...register('name', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone} pt={2}>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                type="tel"
                id="phone"
                placeholder="123-000-0000"
                {...register('phone', {
                  required: 'This is required',
                  pattern: {
                    value: /^\d{3}-?\d{3}-?\d{4}$/,
                    message: 'Invalid phone number format',
                  },
                })}
              />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email} pt={2}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="name@example.com"
                {...register('email', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.guest} pt={2}>
              <FormLabel htmlFor="guests">Guests</FormLabel>
              <NumberInput
                max={10}
                min={1}
                type="number"
                id="guests"
                defaultValue="1"
                {...register('guests', {
                  required: 'This is required',
                })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.guests && errors.guests.message}</FormErrorMessage>
            </FormControl>
            <FormControl pt={2}>
              <FormLabel htmlFor="seating">Seating</FormLabel>
              <Select>
                <option value="option1">Indoor</option>
                <option value="option2">Outdoor</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.date} pt={2}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Controller
                name="date"
                control={control}
                defaultValue=""
                rules={{ required: 'This is required' }}
                render={({ field }) => (
                  <input
                    type="date"
                    id="date"
                    placeholder="mm/dd/yy"
                    min="2023-11-03"
                    max="2023-11-07"
                    value={date}
                    onChange={(e) => {
                      handleDateChange(e);
                      field.onChange(e);
                    }}
                  />
                )}
              />
              <FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.time} pt={2}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <RadioGroup
                // {...register('time', {
                //   required: 'This is required',
                // })}
                colorScheme="yellow"
                onChange={setTime}
                value={time}
              >
                <Stack direction="row">
                  {date === '2023-11-04' && <Radio value="5">5:00PM</Radio>}
                  {(date === '2023-11-06' || date === '2023-11-07') && (
                    <Radio value="530">5:30PM</Radio>
                  )}
                  {(date === '2023-11-07' || date === '2023-11-07') && (
                    <Radio value="545">5:45PM</Radio>
                  )}
                </Stack>
                <Stack direction="row">
                  {date === '2023-11-03' && <Radio value="6">6:00PM</Radio>}
                  {(date === '2023-11-03' || date === '2023-11-07') && (
                    <Radio value="630">6:30PM</Radio>
                  )}
                  {(date === '2023-11-05' || date === '2023-11-07') && (
                    <Radio value="645">6:45PM</Radio>
                  )}
                </Stack>
                <Stack direction="row">
                  {date === '2023-11-06' && <Radio value="7">7:00PM</Radio>}
                  {(date === '2023-11-03' || date === '2023-11-07') && (
                    <Radio value="730">7:30PM</Radio>
                  )}
                  {(date === '2023-11-05' || date === '2023-11-06') && (
                    <Radio value="745">7:45PM</Radio>
                  )}
                </Stack>
              </RadioGroup>
              <FormErrorMessage>{errors.time && errors.time.message}</FormErrorMessage>
            </FormControl>
            <Button
              colorScheme="yellow"
              aria-label="Confirm"
              mt={4}
              isLoading={isSubmitting}
              type="submit"
            >
              Confirm Reservation
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
