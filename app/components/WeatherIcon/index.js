import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'

import Container from '../Container'

import constants from '../../api/constants'

const WeatherIcon = ({ weatherId, style }) => {
  const WeatherSVG = <Path d={constants[weatherId].svgPath} scale={2} fill='#fff' x={-50} y={-50}/>

  return (
    <Container style={style || null}>
      <Svg height="100" width="100">
        {WeatherSVG}
      </Svg>
    </Container>
  )
}

export default WeatherIcon
