<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import type { Product } from '@/app/types/Product'

const props = defineProps<Product>()
</script>

<template>
    <Card style="width: 16rem; overflow: hidden">
        <template #header>
            <img
                :alt="props.title"
                :src="props.image"
                style="width: 100%; height: 160px; object-fit: cover"
            />
        </template>
        <template #title>{{ props.title }}</template>
        <template #subtitle>
            <Tag :value="props.isActive ? 'En Stock' : 'Out of Stock'" class="mr-2" />
            <span class="text-sm"> $ {{ props.price }}</span>
        </template>
        <template #content>
            <p class="m-0">
                {{ props.description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button icon="pi pi-heart" severity="success" outlined class="w-full" />
                <Button icon="pi pi-shopping-cart" class="w-full" />
            </div>
        </template>
    </Card>
</template>
