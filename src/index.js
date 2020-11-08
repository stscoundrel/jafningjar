const { isObject } = require('volva')

const matchesSchema = (object, schema) => {
  if (object === undefined || schema === undefined) throw new Error('Missing argument: expects two objects as arguments')
  if (!isObject(object) || !isObject(schema)) throw new Error('Wrong argument type: expects two objects as arguments.')

  const objectKeys = Object.keys(object).sort()
  const schemaKeys = Object.keys(schema).sort()

  if (objectKeys.length !== schemaKeys.length) return false

  for (let i = 0; i < schemaKeys.length; i += 1) {
    if (schemaKeys[i] !== objectKeys[i]) return false
  }

  return true
}

module.exports = {
  matchesSchema,
}
