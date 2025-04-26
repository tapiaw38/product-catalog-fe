<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/app/components/shared/NavbarApp/NavbarApp.vue'
</script>

<template>
    <Navbar />
    <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap');
@import '@/app/assets/main.css';
</style>
