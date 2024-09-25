<script setup>
import { useRouter } from 'vue-router'

import UserLayout from "@/layouts/UserLayout.vue"
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/user/product"
import { useCartStore } from "@/stores/user/cart";

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
    console.log(product)
    cartStore.addToCart(product)
    router.push({ name: 'cart' })
}

</script>

<template>
    <UserLayout>
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi.
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <!-- Product-->
        <Product :products="productStore.list" :addToCart="addToCart">
        </Product>
    </UserLayout>
</template>