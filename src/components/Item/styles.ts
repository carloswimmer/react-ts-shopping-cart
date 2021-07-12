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
    backgroundColor: '#fff3',
  },

  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '8px 16px',
  },

  img: {
    height: '250px',
    maxWidth: '100%',
    objectFit: 'contain',
    borderRadius: '20px 20px 0 0',
  },

  productInfo: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1rem',
    height: '100%',
  },
})
