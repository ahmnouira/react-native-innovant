import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Toast } from './Toast';

describe('Toast ', () => {
  it('should hide Toast', () => {
    const {  } = render(<Toast visible={false} message='top toast' />);
  });

  it('should render top Toast', () => {
    const {  } = render(<Toast visible message='top toast' />);
  });

  it('should render bottom Toast', () => {
    const {  } = render(<Toast visible message='bottom toast' position='bottom' />);
  });
});
