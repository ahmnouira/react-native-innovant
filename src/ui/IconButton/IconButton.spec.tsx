import * as React from 'react';
import { render } from '@testing-library/react-native';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('render IconButton', () => {
    const { container } = render(<IconButton icon='shrink' onPress={() => {}} />);
    expect(container).toBeDefined();
  });
});
