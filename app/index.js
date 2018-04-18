import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

EStyleSheet.build({
  $white: '#FFFFFF',
  $black: '#000000',
  $fontFamily: 'sans-serif',
  $disabled: '#C6CBD4',
})


class Root extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default Root
