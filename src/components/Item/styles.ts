import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    border: '1px solid #666',
    borderRadius: '20px',
    overflow: 'hidden',
  },

  button: {
    borderRadius: '0 0 20px 20px',
  },

  img: {
    maxHeight: '250px',
    objectFit: 'cover',
    borderRadius: '20px 20px 0 0',
  },

  productInfo: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1rem',
    height: '100%',
  },
})
