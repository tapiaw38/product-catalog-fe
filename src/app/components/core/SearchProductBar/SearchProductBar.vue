<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Product } from '@/app/types/Product.ts'
import AutoComplete from 'primevue/autocomplete'

const searchValue = ref('')

const emit = defineEmits<{
    (e: 'update:product', product: Product[]): void
}>()

const products = [
    {
        id: '1',
        title: 'Product 1',
        description: 'Product 1 Description',
        price: 100,
        image: 'https://images.unsplash.com/photo-1735779411146-a2a6ce587cbb?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Category 1',
        rating: 4.5,
        reviews: 10,
        isActive: true
    },
    {
        id: '2',
        title: 'Product 2',
        description: 'Product 2 Description',
        price: 200,
        image: 'https://images.unsplash.com/photo-1735779411146-b2a6ce587cbb?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Category 2',
        rating: 4.0,
        reviews: 20,
        isActive: true
    }
]

const filteredProducts = ref<Product[]>([])
const searchProductByTerm = (term: string) => {
    const lowercasedTerm = term.toLowerCase().trim()
    if (!lowercasedTerm) {
        filteredProducts.value = []
        return
    }

    filteredProducts.value = products.filter(
        (product) =>
            product.title.toLowerCase().includes(lowercasedTerm) ||
            product.description.toLowerCase().includes(lowercasedTerm) ||
            product.category.toLowerCase().includes(lowercasedTerm)
    )
}

watch(searchValue, (newVal) => {
    searchProductByTerm(newVal)
    emit('update:product', filteredProducts.value)
})
</script>

<template>
    <AutoComplete class="w-full" v-model="searchValue" optionLabel="title" />
</template>

<style scoped></style>
