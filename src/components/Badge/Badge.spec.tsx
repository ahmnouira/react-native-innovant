import { render } from '@testing-library/react-native'
import { Badge } from './Badge'
import { theme } from '../../shared/theme'
import { faker } from '@faker-js/faker'

describe('Badge ', () => {
  it('should render Badge correctly', async () => {
    const { container } = await render(
      <Badge
        image={{
          uri: faker.image.avatar(),
        }}
        text='Muisic'
        textColor={theme?.colors.black}
        bgColor={theme?.colors.white}
      />
    )
    expect(container).toBeDefined()
  })

  it('should render Badge without image and textColor correctly', async () => {
    const { container } = await render(<Badge text='Muisic' bgColor={theme?.colors.white} />)
    expect(container).toBeDefined()
  })
})
