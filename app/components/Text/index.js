import React from 'react'
import PropTypes from 'prop-types'
import { Text as NativeText } from 'react-native'

import styles from './styles'

const Text = ({ tag, style, disabled, children, ...props }) => {
  const textStyle = [styles.text]

  if (tag) {
    switch (tag) {
    case 'h1':
      textStyle.push(styles.h1)
      break
    case 'h2':
      textStyle.push(styles.h2)
      break
    case 'h3':
      textStyle.push(styles.h3)
      break
    case 'h4':
      textStyle.push(styles.h4)
      break
    case 'h5':
      textStyle.push(styles.h5)
      break
    case 'h6':
      textStyle.push(styles.h6)
      break
    }
  }

  if (disabled) {
    textStyle.push(styles.disabled)
  }

  if (style) {
    textStyle.push(style)
  }

  return (
    <NativeText style={textStyle} allowFontScaling={false} {...props}>
      {children}
    </NativeText>
  )
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  style: PropTypes.any,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
}

Text.defaultProps = {
  style: null
}

export default Text
