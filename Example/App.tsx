import React from 'react'
import { Bold, Container, KeyboardAvoiding, Toast, theme, ThemeProvider, Status} from "react-native-innovant"

export const App = () => {
return(
  <ThemeProvider theme={theme}>
  <Container>
    <Status backgroundColor="red" barStyle="dark-content" />
    <KeyboardAvoiding>
      <Bold variant="primary">This is a Bold</Bold>
    </KeyboardAvoiding>
    <Toast visible message="sdsdsds" />
  </Container>
  </ThemeProvider>
)
};
