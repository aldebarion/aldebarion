import React from 'react'
import { render } from '@testing-library/react'

import Dialog from '../Dialog'

describe('Dialog', () => {
  it('should not display the content when not visible', () => {
    const { queryByTestId } = render(
      <Dialog>
        <div data-testid="foo" />
      </Dialog>
    )

    expect(queryByTestId('foo')).toBeFalsy()
  })

  it('should not display the content when visible', () => {
    const { queryByTestId } = render(
      <Dialog isVisible>
        <div data-testid="foo" />
      </Dialog>
    )

    expect(queryByTestId('foo')).toBeTruthy()
  })
})
