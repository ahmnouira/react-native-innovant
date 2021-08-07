jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
  showWithGravity: jest.fn(),
}));
