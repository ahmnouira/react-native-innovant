import React from 'react';
import { render } from '@testing-library/react-native';
import { Bold } from './Bold';

describe('Bold', () => {
  test('render primary Bold', () => {
    render(<Bold variant='primary' />);
  });

  test('render secondary Bold', () => {
    render(<Bold variant='secondary' />);
  });
});
