import { isEmail } from '../email'

describe('isEmail [INT]', () => {
  it('should return false when it is not an email', () => {
    expect(isEmail('titi')).toEqual(false)
  })

  it('should return true when it is an email', () => {
    expect(isEmail('titi@foo.bar')).toEqual(true)
  })
})
