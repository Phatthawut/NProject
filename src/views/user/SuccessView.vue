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
                <div class="divider px-8"></div>
                <div class="grid grid-cols-2 px-6">
                    <div class="flex flex-col">
                        <div class="font-semibold">Order date</div>
                        <div>{{ orderData.createdDate }}</div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </section>
    </UserLayout>
</template>