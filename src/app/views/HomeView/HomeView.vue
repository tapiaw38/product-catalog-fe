<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import type { CarouselImageItem, CarouselProps } from '@/app/components/core/AppCarousel/types'
import AppCarousel from '@/app/components/core/AppCarousel/AppCarousel.vue'
import ProductMiniCard from '@/app/components/core/ProductMiniCard/ProductMiniCard.vue'
import type { Product } from '@/app/types/Product'
import type { SectionBackgroundProps } from '../../components/shared/SectionBackground/types'
import SectionBackground from '../../components/shared/SectionBackground/SectionBackground.vue'
import TextAndImage from '../../components/animations/TextAndImage/TextAndImage.vue'
import type { TextAndImageProps } from '../../components/animations/TextAndImage/TextAndImage.vue'

const initproductSliders = ref<CarouselImageItem[]>([
    {
        id: 1,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
        title: 'Marca 1'
    },
    {
        id: 2,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
        title: 'Marca 2'
    },
    {
        id: 3,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
        title: 'Marca 3'
    },
    {
        id: 4,
        image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
        title: 'Marca 4'
    }
])

const initCarouselProps = ref<CarouselProps>({
    items: initproductSliders.value,
    numVisible: 1,
    numScroll: 1
})

const products = ref<Product[]>([
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
        image: 'https://images.unsplash.com/photo-1735779411146-a2a6ce587cbb?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Category 2',
        rating: 4.5,
        reviews: 10,
        isActive: true
    },
    {
        id: '3',
        title: 'Product 3',
        description: 'Product 3 Description',
        price: 300,
        image: 'https://images.unsplash.com/photo-1735779411146-a2a6ce587cbb?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Category 3',
        rating: 4.5,
        reviews: 10,
        isActive: true
    }
])

const allProductCarouselProps = ref<CarouselProps>({
    items: products.value,
    numVisible: 3,
    numScroll: 1,
    responsiveOptions: [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ],
    circular: true,
    autoPlayInterval: 5000
})

const firtSectionBackground = ref<SectionBackgroundProps>({
    color: '#f5f5f5',
    image: 'https://img.freepik.com/fotos-premium/imagen-chica-coreana-impresionada-escuchando-historia-interesante-mirando-camara-intrigada-pie_1258-157702.jpg',
    zize: '100% 100%',
    attachment: 'fixed',
    width: '100%',
    height: '100vh'
})

const secondSectionBackground = ref<TextAndImageProps>({
    text: [
        'Encontrar lo que te hace sentir',
        'Disfrutar de tus productos',
        'Conocer nuevos productos',
        'Aprender sobre nuestros productos'
    ],
    image: 'https://static.vecteezy.com/system/resources/previews/001/187/438/non_2x/heart-png.png'
})
</script>

<template>
    <div class="text-center">
        <AppCarousel
            :items="initCarouselProps.items"
            :numVisible="initCarouselProps.numVisible"
            :numScroll="initCarouselProps.numScroll"
        >
            <template #item="slotProps">
                <div class="relative">
                    <div
                        :style="{
                            backgroundImage: `url(${slotProps.data.image})`,
                            minHeight: '400px'
                        }"
                        class="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                    ></div>
                    <div class="absolute bottom-0 left-0 right-0 flex justify-between items-center">
                        <h3 class="font-light text-xl text-center absolute bottom-0 left-0 right-0">
                            {{ slotProps.data.title }}
                        </h3>
                    </div>
                </div>
            </template>
        </AppCarousel>

        <header class="header py-4">
            <h3>Anabella Essence</h3>
            <p class="mt-4">Elegante para todo momento y para toda ocacion</p>
        </header>

        <div class="flex flex-row mb-2 justify-content-center align-content-center">
            <p class="font-light text-xl text-center">Mixsson</p>
        </div>

        <AppCarousel
            class="py-4"
            :items="allProductCarouselProps.items"
            :numVisible="allProductCarouselProps.numVisible"
            :numScroll="allProductCarouselProps.numScroll"
            :responsiveOptions="allProductCarouselProps.responsiveOptions"
            :circular="allProductCarouselProps.circular"
            :autoPlayInterval="allProductCarouselProps.autoPlayInterval"
        >
            <template #item="slotProps">
                <ProductMiniCard
                    :id="slotProps.data.id"
                    :title="slotProps.data.title"
                    :description="slotProps.data.description"
                    :price="slotProps.data.price"
                    :image="slotProps.data.image"
                    :category="slotProps.data.category"
                    :rating="slotProps.data.rating"
                    :reviews="slotProps.data.reviews"
                    :isActive="slotProps.data.isActive"
                />
            </template>
        </AppCarousel>

        <div class="flex flex-row mb-2 justify-content-center align-content-center">
            <p class="font-light text-xl text-center">Categoria</p>
        </div>

        <AppCarousel
            class="py-4"
            :items="allProductCarouselProps.items"
            :numVisible="allProductCarouselProps.numVisible"
            :numScroll="allProductCarouselProps.numScroll"
            :responsiveOptions="allProductCarouselProps.responsiveOptions"
            :circular="allProductCarouselProps.circular"
            :autoPlayInterval="allProductCarouselProps.autoPlayInterval"
        >
            <template #item="slotProps">
                <ProductMiniCard
                    :id="slotProps.data.id"
                    :title="slotProps.data.title"
                    :description="slotProps.data.description"
                    :price="slotProps.data.price"
                    :image="slotProps.data.image"
                    :category="slotProps.data.category"
                    :rating="slotProps.data.rating"
                    :reviews="slotProps.data.reviews"
                    :isActive="slotProps.data.isActive"
                />
            </template>
        </AppCarousel>

        <div class="flex flex-row mb-2 justify-content-center align-content-center">
            <p class="font-light text-xl text-center">Indumentaria</p>
        </div>

        <AppCarousel
            class="py-4"
            :items="allProductCarouselProps.items"
            :numVisible="allProductCarouselProps.numVisible"
            :numScroll="allProductCarouselProps.numScroll"
            :responsiveOptions="allProductCarouselProps.responsiveOptions"
            :circular="allProductCarouselProps.circular"
            :autoPlayInterval="allProductCarouselProps.autoPlayInterval"
        >
            <template #item="slotProps">
                <ProductMiniCard
                    :id="slotProps.data.id"
                    :title="slotProps.data.title"
                    :description="slotProps.data.description"
                    :price="slotProps.data.price"
                    :image="slotProps.data.image"
                    :category="slotProps.data.category"
                    :rating="slotProps.data.rating"
                    :reviews="slotProps.data.reviews"
                    :isActive="slotProps.data.isActive"
                />
            </template>
        </AppCarousel>

        <div class="flex flex-row justify-center mb-2">
            <div class="flex flex-column justify-center align-items-center w-full">
                <Button label="Ver Todos" class="button-primary" />
            </div>
        </div>

        <SectionBackground
            :color="firtSectionBackground.color"
            :image="firtSectionBackground.image"
            :zize="firtSectionBackground.zize"
            :attachment="firtSectionBackground.attachment"
            :width="firtSectionBackground.width"
            :height="firtSectionBackground.height"
        >
            <template #default>
                <div class="absolute bottom-50 left-0 right-0 flex justify-between items-center">
                    <TextAndImage :text="secondSectionBackground.text" />
                </div>
            </template>
        </SectionBackground>

        <div class="flex flex-row justify-center mb-2 h-9rem">
            <div class="container-product-discount">
                <div class="flex flex-row justify-center align-items-center">
                    <div class="discount-container">
                        <img src="" alt="Discount" />
                    </div>
                    <div class="discount-container">
                        <p class="discount-text">
                            <span class="discount-text-span">Descuento</span>
                            <span class="discount-text-span">20%</span>
                        </p>
                    </div>
                    <div class="discount-container">
                        <p class="discount-text">
                            <span class="discount-text-span">Descuento</span>
                            <span class="discount-text-span">20%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header h3 {
    font-size: 2.5rem;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
    color: #d63384;
}

.header p {
    font-size: 1.2rem;
    color: #6c757d;
}
</style>
