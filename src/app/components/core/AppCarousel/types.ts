import type { Product } from '@/app/types/Product'
import type { CarouselResponsiveOptions } from 'primevue'

export interface CarouselImageItem {
    id: number
    image: string
    title: string
}

export interface CarouselProps {
    items: CarouselImageItem[] | Product[]
    numVisible: number
    numScroll: number
    responsiveOptions?: CarouselResponsiveOptions[]
    circular?: boolean
    autoPlayInterval?: number
}
