import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // flexDirection: 'column',
    // width: '100%',
    // height: 350,
    // border: '1px solid #666',
    borderRadius: '20px',
    overflow: 'hidden',
  },

  subtotal: {
    flexGrow: 1,
  },

  img: {
    objectFit: 'contain',
    backgroundColor: 'white',
  },

  productInfo: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1rem',
    height: '100%',
  },
})
