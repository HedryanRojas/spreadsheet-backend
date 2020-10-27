class InjectType {
  constructor(name) {
    this.name = name
  }
}
const SERVICE = new InjectType('services')

const inject = (clazzname, injectType) => {
  if (injectType instanceof InjectType) {
    const clazz = require(`../${injectType.name}/${clazzname}`)
    return new clazz()
  } else {
    throw new Error('invalid type')
  }

}

module.exports = { inject, SERVICE }