jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
  showWithGravity: jest.fn(),
}));

// react-native-device-info:  provides a test helper. import it from node_modules
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock' // or use require
jest.mock('react-native-device-info', () => mockRNDeviceInfo)


jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

