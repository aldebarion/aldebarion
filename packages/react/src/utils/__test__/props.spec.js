import { merge } from '../props'

describe('merge [INT]', () => {
  it('should return merged props', () => {
    const func1 = jest.fn()
    const func2 = jest.fn()
    const func3 = jest.fn()
    const propsA = { onMouseDown: func1 }
    const propsB = { onMouseDown: func2, onKeyDown: func3 }

    const props = merge(propsA, propsB)

    props.onMouseDown()

    expect(func1).toHaveBeenCalled()
    expect(func2).toHaveBeenCalled()
  })
})
