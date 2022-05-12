import React from 'react';
import { ICoffee } from '../api/randomData/randomDataTypes';

interface ICoffeeList {
  coffeeList :Array<ICoffee> | null
}

export function CoffeeList({ coffeeList } : ICoffeeList) {
  return (
    <section>
      {coffeeList && coffeeList.map((coffee) => (
        <div key={coffee.id}>
          <h1>{coffee.blend_name}</h1>
        </div>
      ))}
    </section>
  );
}
