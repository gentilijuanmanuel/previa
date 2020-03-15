import fontSizes from './fontSizes';
import fontFamilies from './fontFamilies';

export default {
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: 300,
    alignItems: 'center',
    maxWidth: '80%'
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: fontFamilies.bold
  }
};
