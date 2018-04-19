import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar as NativeStatusBar } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import styles from './styles'

const StatusBar = ({ backgroundColor, hidden, ...props }) => {
  const statusBarStyle = [styles.statusBar]

  statusBarStyle.push({
    backgroundColor
  })

  return (
    <View style={statusBarStyle}>
      <NativeStatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={'light-content'}
        {...props}
      />
    </View>
  )
}

StatusBar.propTypes = {
  backgroundColor: PropTypes.string
}

StatusBar.defaulProps = {
  backgroundColor: 'transparent'
}

export default StatusBar
