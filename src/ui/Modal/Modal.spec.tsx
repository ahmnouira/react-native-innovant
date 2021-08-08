import React from 'react';
import { Modal } from './Modal';
import { render } from '@testing-library/react-native';

describe('Modal', () => {
  test('render Modal', () => {
    const onClose = jest.fn();
    const { container } = render(<Modal visible onClose={onClose} />);
    expect(container).toBeDefined();
  });
});
