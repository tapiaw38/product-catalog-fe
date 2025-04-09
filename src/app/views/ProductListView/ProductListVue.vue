<script setup lang="ts">
import ProductCard from '@/app/components/core/ProductCard/ProductCard.vue'
import SearchProductBar from '@/app/components/core/SearchProductBar/SearchProductBar.vue'
import ProductCategories from '@/app/components/core/ProductCategories/ProductCategories.vue'
import type { Product } from '@/app/types/Product.ts'
import FilterPanel from '@/app/components/core/FilterPanel/FilterPanel.vue'

const products = [
    {
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
        title: 'Product 2',
        description: 'Product 2 Description',
        price: 200,
        image: 'https://images.unsplash.com/photo-1735779411146-a2a6ce587cbb?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Category 2',
        rating: 4.5,
        reviews: 10,
        isActive: true
    }
]

const handleProductUpdate = (products: Product[]) => {
    console.log(products)
}
</script>

<template>
    <main class="container">
        <div class="grid lg:grid-cols-2 gap-2">
            <div class="flex flex-column justify-content-start col-3 text-center mt-4">
                <FilterPanel />
            </div>
            <div class="flex flex-column justify-content-center align-items-center col-7">
                <div class="flex flex-column w-full justify-content-center align-items-center">
                    <div class="flex my-5">
                        <SearchProductBar @update:product="handleProductUpdate" />
                    </div>
                    <div class="flex flex-row justify-content-between my-4">
                        <ProductCategories />
                    </div>
                    <div class="flex-row flex gap-2 mt-4">
                        <div class="flex align-content-between justify-content-center gap-5">
                            <template v-for="(product, index) in products" :key="index">
                                <ProductCard
                                    :title="product.title"
                                    :description="product.description"
                                    :price="product.price"
                                    :image="product.image"
                                    :category="product.category"
                                    :rating="product.rating"
                                    :reviews="product.reviews"
                                    :isActive="product.isActive"
                                />
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
