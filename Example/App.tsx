import React from 'react'
import { Bold, Container, KeyboardAvoiding, IconButton, Loading, Toast, Snackbar} from 'react-native-innovant'

export const App = () => {
return(
  <Container>
    <KeyboardAvoiding>
      <Bold variant="primary">This is a Bold</Bold>
      <Loading center  size="large" color="red"/>
    </KeyboardAvoiding>
    <Toast visible message="sdsdsds" />
    <Snackbar  />
  </Container>
)
};
