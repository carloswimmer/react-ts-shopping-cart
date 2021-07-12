import {
  Box,
  Divider,
  Drawer as DrawerMui,
  Grid,
  Typography,
} from '@material-ui/core'
import { useCart } from '../../hooks/cart'
import CartItem from '../CartItem'
import { useStyles } from './styles'

interface DrawerProps {
  cartOpen: boolean
  handleCartOpen: (cartOpen: boolean) => void
}

const Drawer = ({ cartOpen, handleCartOpen }: DrawerProps) => {
  const { cartItems, handleAddToCart, handleRemoveFromCart, getTotalPrices } =
    useCart()
  const { root, drawerHeader, emptyCart } = useStyles()

  return (
    <DrawerMui
      anchor="right"
      open={cartOpen}
      onClose={() => handleCartOpen(false)}
    >
      <div className={root}>
        <div className={drawerHeader}>
          <Box p={2}>
            <Typography variant="h6" component="h3">
              <Grid container justify="space-between">
                <Grid item>
                  <strong>Your Cart</strong>
                </Grid>
                <Grid item>Total $ {getTotalPrices.toFixed(2)}</Grid>
              </Grid>
            </Typography>
          </Box>
          <Divider />
        </div>
        <Box p={2}>
          <Grid container spacing={3}>
            {!cartItems.length && (
              <Grid item className={emptyCart}>
                <h2>... is empty</h2>
              </Grid>
            )}

            {cartItems.map((item) => (
              <Grid key={item.id} item>
                <CartItem
                  key={item.id}
                  product={item}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </DrawerMui>
  )
}

export default Drawer
