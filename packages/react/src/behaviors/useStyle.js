import useTheme from './useTheme'

const addPrefix = name => `Ad_${name}`

export default (
  componentName,
  props = { className: '', style: {} },
  style = []
) => {
  const { classNames, styles } = useTheme()

  const p = [addPrefix(componentName), ...style]

  const themeClassNames = p.map(n => classNames[n]).join(' ')

  const themeStyles = p
    .map(n => styles[n])
    .reduce(
      (acc, themeStyle) => ({
        ...acc,
        ...themeStyle,
      }),
      {}
    )

  return {
    className: `${themeClassNames} ${props.className}`,
    style: { ...themeStyles, ...props.style },
  }
}
