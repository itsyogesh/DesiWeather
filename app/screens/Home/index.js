import React, { Component } from 'react'

import API from '../../api'

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
      const location = await API.fetchLocation()
      const weatherData = await API.fetchWeather(location.city)
      this.setState({ isLoading: false, weatherData })
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
