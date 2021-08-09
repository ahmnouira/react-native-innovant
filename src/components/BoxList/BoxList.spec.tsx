import * as React from 'react'
import { render } from '@testing-library/react-native'
import { BoxList } from './BoxList'
import { DANCES } from '../../utils/consts'

describe('BoxList', () => {
  test('should render BoxList', () => {
    let selected2RandomDances = []
    for (let index = 0; index < Math.floor(DANCES.length / 2); index++) {
      const item = DANCES[Math.floor(Math.random() * DANCES.length)]
      selected2RandomDances.push(item)
    }
    selected2RandomDances = [...new Set(selected2RandomDances)]

    const {} = render(<BoxList items={DANCES} selectedItems={selected2RandomDances} handleChange={console.log} />)
  })
})
