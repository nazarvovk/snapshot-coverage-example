import { example } from './example'

describe('example', () => {
  it('should match function snapshot', () => {
    expect(example.toString()).toMatchSnapshot()
  })
})
