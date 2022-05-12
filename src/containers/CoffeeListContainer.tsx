import React, { useEffect, useState } from 'react';
import { RandomDataServiceInstance } from '../api/randomData/randomData';
import { ICoffee } from '../api/randomData/randomDataTypes';
import { CoffeeList } from '../components/CoffeeList';
import { useHttp } from '../hooks/useHttp';

export function CoffeeListContainer() {
  const [coffeeList, setCoffeeList] = useState < null |Array<ICoffee>>(null);

  const {
    loading, error, request,
  } = useHttp();

  const getCoffeeList = async (numberOfCoffee : number) => {
    const coffeeListRequestResponse = await request(async () => RandomDataServiceInstance
      .getRandomCoffeeList(numberOfCoffee));
    setCoffeeList(coffeeListRequestResponse);
  };

  useEffect(() => {
    getCoffeeList(20);
  }, []);

  return (
    <CoffeeList
      loading={loading}
      error={error}
      coffeeList={coffeeList}
    />
  );
}
