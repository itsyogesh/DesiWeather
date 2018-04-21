import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'

import Container from '../Container'

import constants from '../../api/constants'
import utils from '../../utils'

const WeatherIcon = ({ weatherId, style }) => {
  const iconId = utils.weatherDataMapper(weatherId)
  const WeatherSVG = <Path d={constants[iconId].svgPath} scale={2} fill='#fff' x={-50} y={-50}/>

  return (
    <Container style={style || null}>
      <Svg height="150" width="150">
        {WeatherSVG}
      </Svg>
    </Container>
  )
}

export default WeatherIcon
