import { ImageModalType, SnackbarType, ToastType } from  "../../../types"
import { UtilsAction } from '../../actions/utils.action'

export type UitlsState = {
  toast: ToastType
  snackbar: SnackbarType
  imageModal: ImageModalType
}

export const initialUtilsState: UitlsState = {
  toast: {
    visible: false,
    postion: 'bottom',
    message: '',
  },
  snackbar: {
    visible: false,
  },
  imageModal: {
    visible: false,
    image: '',
  },
}

export const utilsReducer = (state: UitlsState, action?: UtilsAction): UitlsState => {
  switch (action?.type) {
    case 'SET_TOAST': {
      return {
        ...state,
        toast: action.payload,
      }
    }

    case 'SET_SNACKBAR': {
      return {
        ...state,
        snackbar: action.payload,
      }
    }

    case 'SHOW_IMAGE_MODAL': {
      return {
        ...state,
        imageModal: action.payload,
      }
    }

    case 'CLOSE_IMAGE_MODAL': {
      return {
        ...state,
        imageModal: {
          visible: false,
          image: '',
        },
      }
    }
    default:
      return initialUtilsState
  }
}
