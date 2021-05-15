import { useState, useCallback } from 'react'
import {
  AppBar as AppBarMui,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@material-ui/core'
import Drawer from '../Drawer'
import { AddShoppingCartRounded as CartIcon } from '@material-ui/icons'

import { useStyles } from './styles'
import { useCart } from '../../hooks/cart'

export default function AppBar() {
  const { grow, title, cardButton } = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { getTotalItems } = useCart()

  const handleDrawerOpen = useCallback((cartOpen: boolean) => {
    setDrawerOpen(cartOpen)
  }, [])

  return (
    <div className={grow}>
      <AppBarMui position="fixed">
        <Toolbar>
          <Typography className={title} variant="h5" noWrap>
            <strong>FakeStore</strong>Typo
          </Typography>
          <div className={grow} />
          <div className={cardButton}>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <Badge badgeContent={getTotalItems} color="secondary">
                <CartIcon fontSize="large" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBarMui>
      <Toolbar />
      <Drawer cartOpen={drawerOpen} handleCartOpen={handleDrawerOpen} />
    </div>
  )
}
