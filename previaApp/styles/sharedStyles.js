import fontSizes from './fontSizes';
import fontFamilies from './fontFamilies';

export default {
  screenContainer: {
    flex: 1
  },
  firstViewContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondViewContainer: {
    flex: 0.95,
    justifyContent: 'center'
  },
  cardContainer: {
    width: 400,
    margin: 10,
    alignItems: 'center',
    maxWidth: '80%',
    maxHeight: '85%'
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: fontFamilies.bold
  },
  description: {
    fontSize: fontSizes.description,
    fontFamily: fontFamilies.regular
  },
  nameAmountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }
};
