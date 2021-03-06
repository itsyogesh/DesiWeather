import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '$white',
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 60,
    paddingVertical: 30
  },
  subText: {
    fontWeight: 'bold'
  }
})
