<script setup>
import { ref, onMounted } from "vue";
import UserLayout from "@/layouts/UserLayout.vue";

import { useCartStore } from "@/stores/user/cart"

const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
    console.log(cartStore.checkout)
})
</script>

<template>
    <UserLayout>
        <!-- Hero Section-->
        <div class="hero bg-base-200 min-h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h2 class="text-5xl font-bold">Thank you so much for your order!</h2>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
        <section>
            <div class="card bg-slate-50 w-3/4 mx-auto my-4 shadow-xl">
                <div class="px-6 pt-4">
                    <h3 class="text-2xl">Your order is successful!</h3>
                    <h4 class="text-xl font-semibold">Hi, {{ orderData.name }}</h4>
                    <h4>Please check your order and confirm receipt</h4>
                </div>
                <div class="divider px-4"></div>
                <div class="grid grid-cols-2 gap-2 px-6">
                    <div class="flex flex-col">
                        <div class="font-semibold">Order date</div>
                        <div>{{ orderData.createdDate }}</div>
                    </div>
                    <div>
                        <div class="font-semibold">Order Number</div>
                        <div>{{ orderData.orderNumber }}</div>
                    </div>
                    <div>
                        <div class="font-semibold">Payment Method</div>
                        <div>{{ orderData.paymentMethod }}</div>
                    </div>
                    <div>
                        <div class="font-semibold">Adress</div>
                        <div>{{ orderData.address }}</div>
                    </div>
                </div>
                <div class="divider px-4"></div>
                <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 px-6 items-center">
                    <div>
                        <div><img :src="product.imageUrl" :alt="product.name" class="w-full h-full"></div>
                    </div>
                    <div>
                        <div class="font-semibold">Product Name</div>
                        <div>{{ product.name }}</div>
                    </div>
                    <div>
                        <div class="font-semibold">Quantity</div>
                        <div>{{ product.quantity }}</div>
                    </div>
                    <div>
                        <div class="font-semibold">Total Price</div>
                        <div>{{ product.price * product.quantity }}</div>
                    </div>
                </div>
                <div class="divider px-4"></div>
                <div class="grid grid-cols-4 px-6 font-semibold">
                    <div class="col-span-3">Total Price</div>
                    <div>{{ orderData.totalPrice }}</div>
                </div>
                <div class="divider px-4"></div>
                <div v-for="product in orderData.products" class="grid grid-cols-4 px-6 font-semibold">
                    <div class="col-span-3">Shipping Price</div>
                    <div>{{ product.shipping }}</div>
                </div>
                <div class="divider px-4"></div>
            </div>
        </section>
    </UserLayout>
</template>