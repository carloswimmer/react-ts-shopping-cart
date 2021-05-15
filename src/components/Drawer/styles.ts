import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 450,
      paddingTop: 72,
    },

    drawerHeader: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: 450,
      height: 64,
      backgroundColor: '#424242',
      zIndex: 1,
    },

    emptyCart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 120px)',
      width: '100%',
    },
  }),
)
