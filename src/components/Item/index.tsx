import { Button } from '@material-ui/core'
import { useStyles } from './styles'
import { ProductType } from '../Products'

interface ItemProps {
  item: ProductType
  handleAddToCart: (clickedItem: ProductType) => void
}

const Item = ({ item, handleAddToCart }: ItemProps) => {
  const { root, img, button, productInfo } = useStyles()

  return (
    <div className={root}>
      <img className={img} src={item.image} alt={item.title} />
      <div className={productInfo}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
      </div>
      <Button className={button} onClick={() => handleAddToCart(item)}>
        Add to cart
      </Button>
    </div>
  )
}

export default Item
