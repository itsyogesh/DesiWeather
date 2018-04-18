import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const Container = ({ content, style, children, ...props }) => {
  const containerStyle = [styles.container]

  if(content) {
    containerStyle.push(styles.contentContainer)
  }

  if(style) {
    containerStyle.push(style)
  }

  return (
    <View style={containerStyle}>
      {children}
    </View>
  )
}

export default Container
