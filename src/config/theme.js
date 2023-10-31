
import {createTheme} from '@mui/material/styles';

// A custom theme for your app
const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#48484b',
        },
        secondary: {
            main: '#8fba51',
        },
        background: {
            default: '#f5f5f5',
        },

    },
    typography: {
        subtitle1: {
            fontSize: '.75rem',
            fontWeight: '700',
            lineHeight: '1.5rem',
        },

        subtitle2: {
            fontSize: '.75rem',
            fontWeight: '600',
            lineHeight: '1.5rem',
        },
        caption: {
            fontSize: '.875rem',
            fontWeight: '600',
            lineHeight: '0.75rem',
        },
    },

    components: {
        MuiTab: {
            defaultProps: {
                disableTouchRipple: true, disableRipple: true
            }
        },
        MuiSkeleton: {
            defaultProps: {
                animation: 'wave',
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        }
    }
});

export default theme;