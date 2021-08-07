import React from 'react';
import { render } from '@testing-library/react-native';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  test('render Snackbar', () => {
    const {} = render(<Snackbar visible={true} textMessage='test snackbae' />);
  });
});
