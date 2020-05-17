import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Input from '../index'

const setupTest = props => {
  const rendered = render(<Input.CreditCard {...props} />)

  return {
    ...rendered,
    input: rendered.container.querySelector('input'),
    rerender: () => rendered.rerender(<Input.CreditCard {...props} />),
  }
}

describe('Input Credit Card', () => {
  it('should display an iput', () => {
    const { input } = setupTest()

    expect(input).toBeInTheDocument()
  })

  // it('should add number: |[1] -> 1|', () => {
  //   const { input, rerender } = setupTest()
  //   fireEvent.change(input, {
  //     target: { value: '1', selectionStart: 1, selectionEnd: 1 },
  //   })
  //   rerender()
  //   expect(input.value).toEqual('1')
  //   // expect(input.selectionStart).toEqual(1)
  //   expect(input.selectionEnd).toEqual(1)
  // })
  // it('should block not numbers: |[1a] -> 1|', () => {
  //   const { input, rerender } = setupTest()
  //   fireEvent.change(input, {
  //     target: { value: '1a', selectionStart: 2, selectionEnd: 2 },
  //   })
  //   rerender()
  //   expect(input.value).toEqual('1')
  //   expect(input.selectionStart).toEqual(1)
  //   expect(input.selectionEnd).toEqual(1)
  // })
  // it('should add space after 4 numbers: |111[1] -> 1111 |', () => {
  //   const { input, rerender } = setupTest()
  //   fireEvent.change(input, {
  //     target: { value: '1111', selectionStart: 4, selectionEnd: 4 },
  //   })
  //   rerender()
  //   expect(input.value).toEqual('1111 ')
  //   expect(input.selectionStart).toEqual(5)
  //   expect(input.selectionEnd).toEqual(5)
  // })
  // it('should allow 19 characters max: 1111 2222 3333 4444|[5] -> 1111 2222 3333 4444|', () => {
  //   const { input, rerender } = setupTest()
  //   fireEvent.change(input, {
  //     target: {
  //       value: '1111 2222 3333 4444',
  //       selectionStart: 19,
  //       selectionEnd: 19,
  //     },
  //   })
  //   rerender()
  //   expect(input.value).toEqual('1111 2222 3333 4444')
  //   expect(input.selectionStart).toEqual(19)
  //   expect(input.selectionEnd).toEqual(19)
  // })
  // it('should remove a character: 1111 2222 3333 4444|[<-] -> 1111 2222 3333 444|', () => {
  //   const { input, rerender } = setupTest()
  //   fireEvent.change(input, {
  //     target: {
  //       value: '1111 2222 3333 444',
  //       selectionStart: 18,
  //       selectionEnd: 18,
  //     },
  //   })
  //   rerender()
  //   expect(input.value).toEqual('1111 2222 3333 444')
  //   expect(input.selectionStart).toEqual(18)
  //   expect(input.selectionEnd).toEqual(18)
  // })
})
