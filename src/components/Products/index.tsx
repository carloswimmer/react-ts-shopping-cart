import { useQuery } from 'react-query'
import { CircularProgress, Grid } from '@material-ui/core'

import Item from '../Item'

import { useStyles } from './styles'
import axios from 'axios'
import { useCart } from '../../hooks/cart'

export interface ProductType {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get('https://fakestoreapi.com/products')
  return response.data
}

const Products = () => {
  const { root, productsSection } = useStyles()
  const { handleAddToCart } = useCart()
  const { data, isLoading, error } = useQuery<ProductType[]>(
    'products',
    getProducts,
  )

  if (isLoading || error) {
    return (
      <div className={root}>
        {isLoading && <CircularProgress size={65} />}
        {error && <h3>Something went wrong...</h3>}
      </div>
    )
  }

  return (
    <div className={productsSection}>
      <Grid container spacing={6}>
        {data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Item item={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products
