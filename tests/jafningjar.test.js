const { matchesSchema } = require('../index')

describe('Jafningjar comparisons', () => {
  test('Throws error on missing arguments', () => {
    expect(() => {
      matchesSchema()
    }).toThrow('Missing argument: expects two objects as arguments')
  })

  test('Throws error on incorrect argument types', () => {
    expect(() => {
      matchesSchema('string', null)
    }).toThrow('Wrong argument type: expects two objects as arguments.')
  })

  test('Return boolean values', () => {
    const obj = {}
    const schema = {}
    const result = matchesSchema(obj, schema)

    expect(typeof result === 'boolean').toBeTruthy()
  })

  test('Deems simple objects equal', () => {
    const obj = {
      title: 'Hyperion',
      author: 'Dan Simmons',
    }

    const schema = {
      title: '',
      author: '',
    }

    const result = matchesSchema(obj, schema)

    expect(result).toBeTruthy()
  })

  test('Does not care about key order', () => {
    const obj = {
      author: 'Dan Simmons',
      title: 'Hyperion',
    }

    const schema = {
      title: '',
      author: '',
    }

    const result = matchesSchema(obj, schema)

    expect(result).toBeTruthy()
  })

  test('Notices differences in simple objects', () => {
    const obj = {
      title: 'Hyperion',
      author: 'Dan Simmons',
      genre: 'scifi',
    }

    const obj2 = {
      title: 'Hyperion',
      genre: 'scifi',
    }

    const schema = {
      title: '',
      author: '',
    }

    const result = matchesSchema(obj, schema)
    const result2 = matchesSchema(obj2, schema)

    expect(result).toBeFalsy()
    expect(result2).toBeFalsy()
  })
})
