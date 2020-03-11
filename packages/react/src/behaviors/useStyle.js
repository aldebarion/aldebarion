import useTheme from './useTheme'

const addPrefix = (object, name) => object[`Ad_${name}`]

const extract = (object, name) => {
  if (typeof name === 'string') {
    return [addPrefix(object, name)]
  }

  if (Array.isArray(name)) {
    return name.map(subname => addPrefix(object, subname))
  }

  return object
}

export default (componentName, { className, style }, defaultClassName) => {
  const { classNames, styles } = useTheme()

  const themeClassNames = extract(classNames, componentName).join(' ')

  const themeStyles = extract(styles, componentName).reduce(
    (acc, themeStyle) => ({
      ...acc,
      ...themeStyle,
    }),
    {}
  )

  return {
    className: `${defaultClassName} ${themeClassNames} ${className}`,
    style: { ...themeStyles, ...style },
  }
}
