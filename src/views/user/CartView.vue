<script setup>
import UserLayout from "@/layouts/UserLayout.vue"
import Delete from "@/components/icons/Delete.vue"

import { useCartStore } from "@/stores/user/cart";

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

</script>

<template>
    <UserLayout>
        <!-- Hero Section-->
        <div class="hero bg-base-200 min-h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Cart</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
        <!-- cart -->
        <div>
            <h2 class="text-3xl font-bold mx-4 my-4 p-4">Shopping Cart</h2>

            <div class="flex text-2xl font-semibold mx-4">
                <div class="flex-auto w-64 bg-base-200 p-4">
                    <div v-if="cartStore.items.length === 0" class="text-3xl font-bold">Cart is empty</div>
                    <div v-else v-for="(item, index) in cartStore.items" class="flex">
                        <div class="flex p-4">
                            <img :src="item.imageUrl" alt="pic" class="w-full h-full">
                        </div>
                        <div class="grid grid-cols-2 w-full p-4">
                            <div class="flex flex-col w-full justify-between">
                                <div>
                                    <div class="font-bold">{{ item.name }}</div>
                                    <div>{{ item.about }}</div>
                                    <div>{{ item.price }}</div>
                                </div>
                                <div>In stock</div>
                            </div>
                            <div class="flex gap-4 items-center">
                                <select v-model="item.quantity" class="select w-full"
                                    @change="changeQuantity($event, index)">
                                    <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                                </select>
                                <Delete @click="cartStore.removeItemInCart(index)" class="h-8"></Delete>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex-auto w-32 bg-slate-200 p-4">
                    <div class="font-bold mx-4 my-4">
                        <div class="my-4">Order Summary</div>
                        <div class="flex justify-between my-4">
                            <div>Product Price</div>
                            <div>{{ cartStore.summaryPrice }} B</div>
                        </div>
                        <div class="divider divider-neutral"></div>
                        <div class="flex justify-between">
                            <div>Delivery Fee</div>
                            <div>{{ cartStore.summaryShipping }} B</div>
                        </div>
                        <div class="divider divider-neutral"></div>
                        <div class="flex justify-between">
                            <div>Total Price</div>
                            <div>{{ cartStore.summaryPrice }} B</div>
                        </div>
                        <div class="py-4">
                            <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-full">Checkout</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </UserLayout>
</template>