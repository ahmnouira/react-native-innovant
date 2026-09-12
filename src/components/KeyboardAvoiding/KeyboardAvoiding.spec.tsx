import { render } from '@testing-library/react-native'
import { KeyboardAvoiding } from './KeyboardAvoiding'

describe('KeyboardAvoiding', () => {
  test('render KeyboardAvoiding', async () => {
    const { container } = await render(<KeyboardAvoiding />)
    expect(container).toBeDefined()
  })
})
