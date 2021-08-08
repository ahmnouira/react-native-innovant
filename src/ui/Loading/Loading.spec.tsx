import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from './Loading';

describe('Loading', () => {
  it('should render a centered Loading', () => {
    const { container } = render(<Loading size='large' center />);
    expect(container).toBeDefined();
  });

  it('should render Loading', () => {
    const { container } = render(<Loading size='small' center={false} />);
    expect(container).toBeDefined();
  });
});
