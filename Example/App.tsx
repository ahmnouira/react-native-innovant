import React from 'react'
import { Bold, Container, KeyboardAvoiding, theme, ThemeProvider, Status, Pill, BtnWhite, Box, CheckBox, BoxList,SwitchField, RadioBox, ErrorState } from "react-native-innovant"

export const App = () => {
return(
  <ThemeProvider theme={theme}>
    <Status backgroundColor="white" barStyle="dark-content" />
    <KeyboardAvoiding>
      <Container secondary>
      
      <Bold variant="primary">This is a Bold</Bold>
      <Pill  title="music" isChecked  handlePress={() => {}} />
      <BtnWhite title="Submit" />
      <Box title="dsds" pic={{}} handlePress={() => {}}  isChecked={false}/>
      <SwitchField label="sdsdsd" />
      <RadioBox color="red" />
      <CheckBox checked color="blue" />
      <ErrorState error="sdsdsdsds" />
      </Container>
    </KeyboardAvoiding> 
  </ThemeProvider>
)
};
