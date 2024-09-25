import { defineStore } from "pinia"

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        checkout: {}
    }),
    getters: {
        summaryQuantity (state) {
            return state.items.reduce((acc, item)=> {
                return acc + item.quantity
            }, 0)
        },
        summaryPrice (state) {
            return state.items.reduce((acc, item) => {
                return acc + (item.price * item.quantity)
            }, 0)
        },
        summaryShipping (state) {
            console.log('cart items: ', state.items)
            return state.items.reduce((acc, item) => {
                console.log('item shipping: ', item.shipping)
                return acc + item.shipping
            }, 0)
        },
    },
    actions: {
        loadCart () {
            const previousCart = localStorage.getItem('cart-data')
            if (previousCart) {
                this.items = JSON.parse(previousCart)
            }
        },
        addToCart (productData) {
            const findPorductIndex = this.items.findIndex(item => {
                return item.name === productData.name
            })
            if (findPorductIndex < 0 ) {
                productData.quantity = 1
                this.items.push(productData)
            } else {
                const currentItem = this.items[findPorductIndex]
                    this.updateQuantity(findPorductIndex, currentItem.quantity + 1)
                
            }
            
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        updateQuantity (index, quantity) {
            this.items[index].quantity = quantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        removeItemInCart (index) {
            this.items.splice(index, 1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },
        checkout (userData) {
            const orderData = {
                ...userData,
                totalPrice: this.summaryPrice,
                paymentMethod: 'Credit Card',
                createdDate: (new Date()),
                orderNumber: `OR${Math.floor((Math.random() * 90000) + 10000)}`
            }
            localStorage.setItem('order-data', JSON.stringify(orderData))
        },
        loadCheckout () {
            const orderData = localStorage.getItem('order-data')
            if (orderData) {
                this.checkout = JSON.parse(orderData)
            }
        }
    }
})