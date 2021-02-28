/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import ProductListItem from './ProductListItem';

export default { title: 'ProductListItem' };

export const Standard = ({
  // coloco los valores del knob aca
  // par ue desde los test pueda parametrizar y enviar los datos
  // destructurados y colocados por defecto
  name = text('Name', 'Standard Coffee'),
  price = text('price', '2.50'),
  onAddToCart = action('Add to cart clicked'),
  imageUrl = text(
    'imageUrl',
    'https://source.unsplash.com/tNALoIZhqVM/200x100/'
  ),
}) => (
  <ProductListItem
    name={name}
    price={price}
    onAddToCart={onAddToCart}
    imageUrl={imageUrl}
  />
);

// knob para probar si esta agotado o no
export const SoldOut = () => (
  <ProductListItem
    name={text('Name', 'Standard Coffee')}
    price={text('price', '2.50')}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text(
      'imageUrl',
      'https://source.unsplash.com/tNALoIZhqVM/200x100/'
    )}
    isSoldOut
  />
);

export const OnSale = ({
  name = text('Name', 'Standard Coffee'),
  price = text('price', '2.50'),
  onAddToCart = action('Add to cart clicked'),
  imageUrl = text(
    'imageUrl',
    'https://source.unsplash.com/tNALoIZhqVM/200x100/'
  ),
}) => (
  <ProductListItem
    name={name}
    price={price}
    onAddToCart={onAddToCart}
    imageUrl={imageUrl}
    isOnSale
  />
);
