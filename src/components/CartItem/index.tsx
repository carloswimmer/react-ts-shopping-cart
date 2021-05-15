import {
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { AddCircleRounded, RemoveCircleRounded } from '@material-ui/icons'
import { useCallback } from 'react'
import { useCart } from '../../hooks/cart'
import { ProductType } from '../Products'
import { useStyles } from './styles'

interface CartItemProps {
  product: ProductType
  handleAddToCart(product: ProductType): void
  handleRemoveFromCart(product: ProductType): void
}

const CartItem = ({ product }: CartItemProps) => {
  const { root, img, subtotal } = useStyles()
  const { handleAddToCart, handleRemoveFromCart } = useCart()

  const getSubtotal = useCallback((product: ProductType) => {
    return product.price * product.amount
  }, [])

  return (
    <Card className={root}>
      <CardActionArea>
        <CardMedia
          className={img}
          component="img"
          alt={product.title}
          height="150"
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            $ {product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={() => handleRemoveFromCart(product)}
          aria-label="delete"
        >
          <RemoveCircleRounded />
        </IconButton>
        <div className={subtotal}>
          <Typography variant="h5" component="h2" align="center">
            $ {getSubtotal(product)}
          </Typography>
        </div>
        <IconButton onClick={() => handleAddToCart(product)} aria-label="add">
          <AddCircleRounded />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CartItem
