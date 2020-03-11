import React from 'react'
import PropTypes from 'prop-types'

import { useStyle } from 'behaviors'

const isActive = (item, active) => active && item.id === active.id

const NavigationIndicators = ({ pages, active, onClick, ...props }) => {
  const styled = useStyle('NavigationIndicators', props)

  return (
    <div {...styled}>
      {pages.map(page => {
        const styledItem = useStyle(
          [
            'NavigationIndicators_Item',
            isActive(page, active)
              ? 'NavigationIndicators_Item_active'
              : 'NavigationIndicators_Item_inactive',
          ],
          {}
        )

        return (
          <button
            key={page.id}
            {...styledItem}
            type="button"
            aria-label={page.label}
            onClick={() => onClick(page)}
          />
        )
      })}
    </div>
  )
}

NavigationIndicators.defaultProps = {
  pages: [],
  active: null,
  onClick: () => {},
}

NavigationIndicators.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
  onClick: PropTypes.func,
}

export default NavigationIndicators
