import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import Container from '../../components/Container'
import Text from '../../components/Text'

import styles from './styles'

class Home extends Component {

  render() {
    return (
      <Container content style={styles.mainContainer}>
        <Text tag='h1' style={styles.mainText}>Its fucking raining right now.</Text>
        <Text tag='h5' style={styles.subText}>{`${'Dont make eye contact'.toUpperCase()}`}</Text>
      </Container>
    )
  }
}

export default Home
