import React, { Component } from 'react'
import axios from 'axios'

import Container from '../../components/Container'
import Text from '../../components/Text'
import StatusBar from '../../components/StatusBar'

import styles from './styles'

class Home extends Component {

  state = {
    currentCity: '1273293',
    weatherData: null,
    isLoading: false,
    error: false
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    try {
      let { data } = await axios.get('https://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=4e96623adf41e9730a8c890b8054a5b0')
      console.log('cdd', data)
      this.setState({ isLoading: false, weatherData: data.list[data.count - 1] })
    } catch (e) {
      console.log(e)
      this.setState({ error: e, isLoading: false })
    }
  }

  render() {
    const { isLoading, weatherData } = this.state

    const backgroundColor = 'blue'
    const mainContainerStyle = [styles.mainContainer]

    mainContainerStyle.push({
      backgroundColor
    })

    console.log('render', this.state.weatherData)

    if(isLoading) {
      return(
        <Container content style={mainContainerStyle}>
          <StatusBar backgroundColor={backgroundColor} />
          <Text tag='h1' style={styles.mainText}>Loading Weather</Text>
        </Container>
      )
    }

    if(!isLoading && weatherData) {
      return (
        <Container content style={mainContainerStyle}>
          <StatusBar backgroundColor={backgroundColor} />
          <Text tag='h1' style={styles.mainText}>{`Its fucking raining in ${weatherData.name}`}</Text>
          <Text tag='h5' style={styles.subText}>{`${'Dont make eye contact'.toUpperCase()}`}</Text>
        </Container>
      )
    }

    return (
      <Container content style={mainContainerStyle}>
        <StatusBar backgroundColor={backgroundColor} />
        <Text tag='h1' style={styles.mainText}>Something went wrong</Text>
      </Container>
    )
  }
}

export default Home
