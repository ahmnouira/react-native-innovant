type callbacksType = {
  onNetwork: () => void
  onAnyError: () => void
}

export function errorHandler(error: any, callbacks?: callbacksType) {
  if (error) {
    const e = error as Error
    if (e.message?.includes('Network request')) {
      /*
      doSnackbar({
        visible: true,
        textMessage: 'No Internet connection available 🌐',
      });
      */
      callbacks?.onNetwork()
    } else {
      callbacks?.onAnyError()
    }
  }
}
