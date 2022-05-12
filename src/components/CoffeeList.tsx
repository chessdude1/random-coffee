import React from 'react';
import Box from '@mui/material/Box';
import { ICoffee } from '../api/randomData/randomDataTypes';
import { CoffeeCard } from './CoffeeCard';

interface ICoffeeList {
  coffeeList :Array<ICoffee> | null
}

export function CoffeeList({ coffeeList } : ICoffeeList) {
  return (
    <section>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {coffeeList && coffeeList.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            blendName={coffee.blend_name}
            origin={coffee.origin}
            notes={coffee.notes}
          />
        ))}
      </Box>
    </section>
  );
}
