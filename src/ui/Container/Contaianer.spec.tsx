import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Container } from './Container';

describe('Container', () => {
  test('render Container', () => {
    const {} = render(<Container />);
  });
  test('render secondary contianer', () => {
    const {} = render(<Container secondary />);
  });
});
