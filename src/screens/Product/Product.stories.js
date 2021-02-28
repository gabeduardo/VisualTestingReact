/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Server } from 'miragejs';
import Products from './Products';

const server = new Server();
server.get('/api/products/', {
  data: [
    {
      id: 1,
      name: 'Mocha',
      price: 3.5,
      imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    },
    {
      id: 2,
      name: 'Latte',
      price: 3.5,
      imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    },
    {
      id: 3,
      name: 'Vanilla Latte',
      price: 3.5,
      imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
    },
  ],
});

export default { title: 'screens/products' };

export const standard = () => <Products />;
