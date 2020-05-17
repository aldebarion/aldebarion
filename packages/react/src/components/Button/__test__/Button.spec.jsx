import React from 'react'
import { render } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {
  it('should display a button', () => {
    const { container } = render(<Button />)

    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should display text', () => {
    const { getByText } = render(<Button>foo</Button>)

    expect(getByText('foo')).toBeInTheDocument()
  })

  it('should not display progress bar by default', () => {
    const { queryByTestId } = render(<Button>foo</Button>)

    expect(queryByTestId('buttonProgress')).toBeFalsy()
  })

  it('should display progress bar', () => {
    const { getByTestId } = render(<Button progress={30} />)

    const progressBar = getByTestId('buttonProgress')

    expect(progressBar).toBeInTheDocument()
    expect(progressBar.getAttribute('style')).toContain('width: 30%')
  })

  it('should display button with type', () => {
    const { container } = render(<Button htmlType="submit" />)

    expect(container.querySelector('button').getAttribute('type')).toEqual(
      'submit'
    )
  })
})
