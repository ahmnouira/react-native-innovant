import { StyleSheet } from 'react-native'
import { theme } from '..'
import { windowWidth } from '../helpers/paltfrom'

// Styles
export const commonStyles = StyleSheet.create({
  searchInput: {
    height: 46,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 48,
    paddingLeft: 40,
    paddingRight: 35,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: theme.sizes.lg,
    fontFamily: theme.fonts.secondary.regular,
  },

  headerTitleStyle: {
    fontFamily: theme.fonts.secondary.regular,
    fontSize: 17,
    lineHeight: 21,

    color: theme.colors.white,
    letterSpacing: -0.34,
  },

  headerStyle: {
    elevation: 0,
    shadowColor: '#5bc4ff',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 0,
  },
  /*** TAB  ***/
  tabBarUnderline: {
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  tabStyle: {
    backgroundColor: theme.colors.white,
  },

  tabTextStyle: {
    fontFamily: theme.fonts.secondary.medium,
    fontSize: windowWidth < 768 ? 13 : theme.sizes.lg,
    color: '#000',
    lineHeight: 22,
  },

  tabActiveStyle: {
    backgroundColor: theme.colors.white,
  },

  /*** End TAB ***/

  badgeNotificationLabel: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 10,
    fontFamily: theme.fonts.primary.regular,
    letterSpacing: -0.18,
  },

  /** Sheet */

  sheetCloseBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'rgba(08,08,08, .06)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sheetCloseIcon: {
    fontSize: 18,
    color: '#151515',
  },

  sheetOkBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sheetOkLabel: {
    color: '#FFF',
    fontFamily: theme.fonts.secondary.medium,
    fontSize: 10,
    lineHeight: 11,
  },
  sheetTitle: {
    fontSize: 17,
    fontFamily: theme.fonts.secondary.medium,
    lineHeight: 19,
    letterSpacing: 0.32,
  },
  sheetContainer: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 20,
    borderTopColor: 'rgba(0, 0, 0, .29)',
    // borderTopWidth: 1,
  },
  sheetWrapper: {
    backgroundColor: 'transparent',
  },

  sheetDraggableIcon: {
    display: 'none', // to hide the darg icon
  },
  /** End Sheet */
  divider: {
    borderWidth: 0.5,
    elevation: 0.2,
    borderRadius: 15,
    borderColor: '#00000029',
  },

  link: {
    fontFamily: theme.fonts.secondary.medium,
    fontSize: theme.sizes.sm,
    color: '#ED1E4675',
    lineHeight: 18,
    letterSpacing: -0.07,
  },

  error: {
    color: 'rgba(237, 30, 70, .75)',
    fontSize: 10,
    fontFamily: theme.fonts.primary.bold,
    marginVertical: 2,
    lineHeight: 18,
    letterSpacing: -0.07,
  },

  jam: {
    color: '#ED1E46',
  },
  workshop: {
    color: '#F05990',
  },

  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // inputs
  input: {
    flex: 1,
    paddingVertical: theme.sizes.sm,
    paddingLeft: theme.sizes.lg,

    color: 'rgba(255, 255, 255, 1)',
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    height: 46,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 8,
  },

  text: {
    color: theme.colors.black,
    lineHeight: 22,
    fontFamily: theme.fonts.secondary.regular,
    fontSize: 12,
    textAlign: 'left',
    textTransform: 'capitalize',
  },

  icon: {
    marginRight: 2,
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  type: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: 8,
    minWidth: 60,
  },

  /** shadows **/
  shadow0: {
    elevation: 0, // android shaows
    shadowColor: theme.colors.primary,
    shadowOpacity: undefined,
    shadowRadius: undefined,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },

  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  shadow5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadow8: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow10: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
})
