import {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react'
import { ProductType } from '../components/Products'

interface CartContextData {
  cartItems: ProductType[]
  getTotalItems: number
  getTotalPrices: number
  handleAddToCart(product: ProductType): void
  handleRemoveFromCart(product: ProductType): void
}

interface AddArgs {
  cart: ProductType[]
  product: ProductType
}

interface RemoveArgs {
  acc: ProductType[]
  item: ProductType
  product: ProductType
}

const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  const handleAddToCart = useCallback((clickedItem: ProductType) => {
    const isInCart = ({ cart, product }: AddArgs) => {
      return cart.some((item) => item.id === product.id)
    }

    const addAmount = ({ cart, product }: AddArgs) => {
      return cart.map((item) => {
        return item.id === product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      })
    }

    const addProduct = ({ cart, product }: AddArgs) => {
      return [...cart, { ...product, amount: 1 }]
    }

    const add = (cart: ProductType[], product: ProductType) => {
      const data = { cart, product }
      return isInCart(data) ? addAmount(data) : addProduct(data)
    }

    setCartItems((prev) => add(prev, clickedItem))
  }, [])

  const handleRemoveFromCart = useCallback((clickedItem: ProductType) => {
    const removeAmount = ({ acc, item, product }: RemoveArgs) => {
      return item.id === product.id
        ? [...acc, { ...item, amount: item.amount - 1 }]
        : [...acc, item]
    }

    const removeProduct = ({ acc, item, product }: RemoveArgs) => {
      return item.id === product.id ? acc : [...acc, item]
    }

    const remove = (cart: ProductType[], product: ProductType) => {
      return cart.reduce((acc, item) => {
        return product.amount > 1
          ? removeAmount({ acc, item, product: clickedItem })
          : removeProduct({ acc, item, product: clickedItem })
      }, [] as ProductType[])
    }

    setCartItems((prev) => remove(prev, clickedItem))
  }, [])

  const getTotalItems = useMemo(() => {
    return cartItems
      .map((product) => product.amount)
      .reduce((acc, item) => acc + item, 0)
  }, [cartItems])

  const getTotalPrices = useMemo(() => {
    return cartItems
      .map((product) => product.amount * product.price)
      .reduce((acc, item) => acc + item, 0)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getTotalItems,
        getTotalPrices,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  return useContext(CartContext)
}

export { CartProvider, useCart }
