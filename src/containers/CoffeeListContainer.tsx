import React, { useEffect, useState } from 'react';
import { RandomDataServiceInstance } from '../api/randomData/randomData';
import { ICoffee } from '../api/randomData/randomDataTypes';
import { CoffeeList } from '../components/CoffeeList';

export function CoffeeListContainer() {
  const [coffeeList, setCoffeeList] = useState < null |Array<ICoffee>>(null);

  useEffect(() => {
    RandomDataServiceInstance
      .getRandomCoffeeList(20).then((res) => { setCoffeeList(res); });
  }, []);

  return (
    <CoffeeList coffeeList={coffeeList} />
  );
}
