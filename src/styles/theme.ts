import { responsiveFontSizes, createMuiTheme } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

const custom = {
  primaryMinus: '#04daf4',
  primary: '#0199fe',
  primaryPlus: '#3449d6',
  primaryContrast: '#0d093b',
  secondaryMinus: '#ff984b',
  secondary: '#ff0000',
  secondaryPlus: '#b25815',
  secondaryContrast: '#fff',
  brown: '#411e20'
}

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      type: 'light',
      primary: {
        light: custom.primaryMinus,
        main: custom.primary,
        dark: custom.primaryPlus,
        contrastText: custom.primaryContrast
      },
      secondary: {
        light: custom.secondaryMinus,
        main: custom.secondary,
        dark: custom.secondaryPlus,
        contrastText: custom.secondaryContrast
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: '#fff',
        default: '#fafafa'
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      }
    },
    shape: {
      borderRadius: 4
    },
    props: {
      MuiSelect: {
        IconComponent: KeyboardArrowDown,
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          getContentAnchorEl: null
        }
      },
      MuiButton: {
        color: 'primary',
        variant: 'contained'
      },
      MuiTextField: {
        autoComplete: 'off'
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          ...require('./keyframes'),
          '*': {
            'outline-color': `${custom.secondary} !important`
          }
        }
      },
      MuiSelect: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      },
      MuiInput: {
        underline: {
          '&::after': {
            borderBottom: `2px solid ${custom.secondary}`
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: '#fff',
          '&$focused $notchedOutline': {
            borderColor: custom.brown,
            borderWidth: 2
          },
          '&$disabled $notchedOutline': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)'
          },
          '&> fieldset > legend': {
            maxWidth: '0px'
          }
        },
        input: {
          padding: '14.5px 14px'
        }
      },
      MuiFormHelperText: {
        root: {
          color: 'rgba(0, 0, 0, 0.87)'
        }
      },
      MuiInputLabel: {
        root: {
          whiteSpace: 'nowrap',
          '&$focused:not($error)': {
            color: 'rgba(0, 0, 0, 0.87)'
          }
        },
        outlined: {
          color: 'rgba(0, 0, 0, 0.87)',
          '&$shrink': {
            transform: 'translate(0px, -18px) scale(0.75)'
          }
        }
      },
      MuiListItemIcon: {
        root: {
          color: 'rgba(0, 0, 0, 0.87)'
        }
      }
    }
  })
)

export default theme
