import EStyleSheet from 'react-native-extended-stylesheet'
import { Platform, StatusBar } from 'react-native'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

export default EStyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
})
