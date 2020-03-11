import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useStyle, useLang } from 'behaviors'
import style from './MouseScrollDown.style'

// https://josefzacek.com/blog/how-to-create-scroll-down-animated-mouse-effect-using-html-and-css.html
const MouseScrollDown = ({ label, ...props }) => {
  const styled = useStyle('MouseScrollDown', props, style.MouseScrollDown)

  const { tr } = useLang()

  return (
    <div {...styled}>
      <div className={style.mouse}>
        <div className={style.button}>&nbsp;</div>
      </div>
      <div className={style.text}>
        {label.split(/\n/g).map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <br /> : null}
            {tr(line)}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

MouseScrollDown.defaultProps = {
  label: 'scroll down\nto explore more',
}

MouseScrollDown.propTypes = {
  label: PropTypes.string,
}

export default MouseScrollDown
