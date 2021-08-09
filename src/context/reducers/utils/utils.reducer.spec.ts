import { UtilsAction } from '../../actions/utils.action'
import { utilsReducer, initialUtilsState, UitlsState } from './utils.reducer'
import faker from 'faker'

describe('utils reducer', () => {
  it('should return the initialState', () => {
    expect(utilsReducer(undefined)).toEqual(initialUtilsState)
  })

  it('should handle the SET_TOAST action', () => {
    const action: UtilsAction = {
      type: 'SET_TOAST',
      payload: {
        message: 'Fake toast',
        visible: true,
        postion: 'bottom',
      },
    }
    const expectedState: UitlsState = {
      ...initialUtilsState,
      toast: action.payload,
    }
    expect(utilsReducer(initialUtilsState, action)).toEqual(expectedState)
  })

  it('should handle the SET_SNACBAR action', () => {
    const action: UtilsAction = {
      type: 'SET_SNACKBAR',
      payload: {
        textMessage: 'This is a snacbar',
        visible: true,
        context: 'networkFailed',
      },
    }
    const expectedState: UitlsState = {
      ...initialUtilsState,
      snackbar: action.payload,
    }

    expect(utilsReducer(initialUtilsState, action)).toEqual(expectedState)
  })

  it('should handle the SHOW_IMAGE_MODAL action', () => {
    const action: UtilsAction = {
      type: 'SHOW_IMAGE_MODAL',
      payload: {
        image: faker.internet.avatar(),
        visible: true,
      },
    }
    const expectedState: UitlsState = {
      ...initialUtilsState,
      imageModal: action.payload,
    }
    expect(utilsReducer(initialUtilsState, action)).toEqual(expectedState)
  })

  it('should handle the CLOSE_IMAGE_MODAL action', () => {
    const action: UtilsAction = {
      type: 'CLOSE_IMAGE_MODAL',
    }
    const expectedState: UitlsState = {
      ...initialUtilsState,
      imageModal: {
        visible: false,
        image: '',
      },
    }
    expect(utilsReducer(initialUtilsState, action)).toEqual(expectedState)
  })
})
