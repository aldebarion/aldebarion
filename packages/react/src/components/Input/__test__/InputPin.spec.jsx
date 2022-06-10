import React from 'react'
import { render } from '@testing-library/react'

import InputPin from '../InputPin'

describe('InputPin', () => {
  it('should display X inputs', () => {
    const { container } = render(<InputPin length={4} />)

    expect(container.querySelectorAll('input')).toHaveLength(4)
  })
})
