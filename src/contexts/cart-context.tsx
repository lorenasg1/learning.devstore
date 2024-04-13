'use client'

import { createContext, useContext, useState } from 'react'

type CartItem = {
	productId: string
	quantity: number
}

type CartContextType = {
	items: CartItem[]
	addToCart: (productId: string) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	function addToCart(productId: string) {
		setCartItems((state) => {
			const productInCart = state.some((item) => item.productId === productId)

			if (productInCart) {
				return state.map((item) => {
					if (item.productId === productId) {
						return {
							...item,
							quantity: item.quantity + 1,
						}
					}
					return item
				})
			}

			return [...state, { productId, quantity: 1 }]
		})
	}

	return (
		<CartContext.Provider value={{ items: cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}

	return context
}
