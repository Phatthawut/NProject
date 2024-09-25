<script setup>

import { reactive } from "vue"
import { RouterLink, useRouter } from "vue-router"

import UserLayout from "@/layouts/UserLayout.vue"
import { useCartStore } from "@/stores/user/cart"
import { useRoute } from "vue-router";

const FormData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    }
]

const router = useRouter()
const cartStore = useCartStore()

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore.checkout(userFormData)
    router.push({ name: 'success' })
}
</script>

<template>
    <UserLayout>
        <!-- Hero Section-->
        <div class="hero bg-base-200 min-h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Checkout</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <h2 class="text-3xl font-bold mx-4 my-4">Checkout</h2>
        </div>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-4">
                <h3 class="text-2xl font-bold">Address</h3>
                <div v-for="form in FormData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-if="form.field !== 'note'" v-model="userFormData[form.field]"
                        :type="form.field === 'email' ? 'email' : 'text'" placeholder="Type text here"
                        class="input input-bordered w-full" />
                    <input v-else v-model="userFormData[form.field]" type="textarea" placeholder="Type here"
                        class="textarea textarea-bordered h-32 w-full" />
                </div>
                <button @click="payment" class="btn btn-neutral w-full my-8">Payment</button>
            </section>
            <section class="flex-auto w-32 p-4 bg-slate-100">
                <div>
                    <h3 class="text-2xl font-bold pb-2">Summary</h3>
                </div>
                <div v-for="item in cartStore.items" class="flex p-2 bg-white">
                    <div class="flex-1">
                        <img :src="item.imageUrl" alt="pic" class="w-full h-full">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col h-full justify-between p-4">
                            <div class="text-xl">
                                <div class="font-bold">{{ item.name }}</div>
                                <div>{{ item.quantity }} items</div>
                                <div>{{ item.price }} B</div>
                            </div>
                            <div>
                                <RouterLink :to="{ name: 'cart' }" class="font-bold">Edit</RouterLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="divider"></div>
                <div>
                    <div class="text-xl font-bold">
                        <h3>Order Summary</h3>
                        <div class="flex justify-between">
                            <div>Subtotal</div>
                            <div>{{ cartStore.summaryPrice }}</div>
                        </div>
                        <div class="flex justify-between">
                            <div>Shepping Fee</div>
                            <div>{{ cartStore.summaryShipping }}</div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div>

                    <div class="text-xl font-bold">
                        <div class="flex justify-between">
                            <div>
                                <h3>Total</h3>
                            </div>
                            <div>{{ cartStore.summaryShipping + cartStore.summaryPrice }}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </UserLayout>
</template>