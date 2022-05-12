import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import { ICoffee } from '../api/randomData/randomDataTypes';
import { CoffeeCard } from './CoffeeCard';

interface ICoffeeList {
  coffeeList :Array<ICoffee> | null;
  loading: boolean;
  error: null | string;
}

export function CoffeeList({
  coffeeList,
  loading,
  error,
} : ICoffeeList) {
  console.log('', error);

  const successCoffeeResponseView = useMemo(() => (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { sx: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      gap: '20px',
    }}
    >
      {coffeeList && coffeeList.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          blendName={coffee.blend_name}
          origin={coffee.origin}
          notes={coffee.notes}
        />
      ))}
    </Box>
  ), [coffeeList]);

  const loadingView = useMemo(() => (
    <h1>123</h1>
  ), []);

  const errorView = useMemo(() => (
    <h1>321</h1>
  ), []);

  const isViewError = !loading && error && errorView;
  const isViewLoading = loading && !error && loadingView;
  const isViewSuccess = !loading && !error && successCoffeeResponseView;

  return (
    <>
      {isViewError}
      {isViewLoading}
      {isViewSuccess}
    </>
  );
}
