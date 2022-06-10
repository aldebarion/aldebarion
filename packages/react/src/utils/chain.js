export default (...funcs) => (...args) =>
  funcs.forEach(func => {
    func(...args)
  })
