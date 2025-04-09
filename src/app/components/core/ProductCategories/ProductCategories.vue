<script setup lang="ts">
import Chip from 'primevue/chip'

const categories = [
    {
        label: 'Category 1',
        value: 'Category 1',
        icon: 'pi pi-microsoft'
    },
    {
        label: 'Category 2',
        value: 'Category 2',
        icon: 'pi pi-microsoft'
    },
    {
        label: 'Category 3',
        value: 'Category 3',
        icon: 'pi pi-microsoft'
    }
]
</script>

<template>
    <div class="flex flex-row flex-wrap gap-4">
        <template v-for="(category, index) in categories" :key="index">
            <Chip :label="category.label" :icon="category.icon" removable />
        </template>
    </div>
</template>

<style scoped></style>
