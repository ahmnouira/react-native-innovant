import { render } from '@testing-library/react-native'
import { Empty } from './Empty'

describe('Empty', () => {
  it('should render correctly', async () => {
    const { container } = await render(<Empty message='No data to show' />)
    expect(container).toBeDefined()
  })

  it('should render correctly with search prop', async () => {
    const { container } = await render(<Empty message='No data to show' searching />)
    expect(container).toBeDefined()
  })
})
