import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ICoffee } from '../api/randomData/randomDataTypes';
import { CoffeeCard } from './CoffeeCard';
import { SkeletonCard } from './Skeleton';
import errorImg from '../assets/errorImage.jpg';

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

  const loadingView = useMemo(() => {
    const skeletonArr = [];

    for (let i = 0; i < 8; i += 1) {
      skeletonArr.push(i);
    }

    return (
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { sx: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        gap: '20px',
      }}
      >
        {skeletonArr.map((el : number) => (
          <SkeletonCard key={el} />
        ))}
      </Box>
    );
  }, []);

  const errorView = useMemo(() => (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'row' },
    }}
    >
      <Typography variant="h4">{`Ooooops, our robots have reported an error : ${error}`}</Typography>
      <img src={errorImg} alt="error img" />
    </Box>
  ), [error]);

  const emptyCoffeeListView = useMemo(() => (
    <Typography variant="h4">Coffee not found</Typography>
  ), []);

  const isViewError = !loading && error && errorView;
  const isViewLoading = loading && !error && loadingView;
  const isViewSuccess = !loading && !error && successCoffeeResponseView;
  const isCoffeeListEmptyView = Array.isArray(coffeeList)
&& coffeeList.length === 0 && !error && !loading && emptyCoffeeListView;

  return (
    <>
      {isCoffeeListEmptyView}
      {isViewError}
      {isViewLoading}
      {isViewSuccess}
    </>
  );
}
