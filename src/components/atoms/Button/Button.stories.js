import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default { title: 'atoms/button' };

export const standard = () => (
  <Button onClick={action('Button')}>This is a button</Button>
);
