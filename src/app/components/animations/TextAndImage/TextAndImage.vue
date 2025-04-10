<script setup lang="ts">
import Button from 'primevue/button'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export interface TextAndImageProps {
    text: string[]
    image?: string
}

const props = defineProps<TextAndImageProps>()

onMounted(() => {
    const animationContainer = document.querySelector('.animation-container')

    if (animationContainer) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const timeline = gsap.timeline()

                        timeline.fromTo(
                            '.text span',
                            { opacity: 0, x: 50 },
                            { opacity: 1, x: 0, stagger: 0.1, duration: 0.1 }
                        )

                        timeline
                            .fromTo(
                                '.image',
                                { opacity: 0, x: -50 },
                                { opacity: 1, x: 0, duration: 1 },
                                '<'
                            )
                            .to(
                                '.image',
                                { rotation: 360, duration: 5, repeat: 0, ease: 'linear' },
                                '>'
                            )

                        timeline.fromTo(
                            '.card',
                            { opacity: 0, y: -50 },
                            { opacity: 1, y: 0, duration: 1 },
                            '<'
                        )

                        timeline.fromTo(
                            '.button-container',
                            { opacity: 0, y: -50 },
                            { opacity: 1, y: 0, duration: 1 },
                            '<'
                        )

                        observer.unobserve(animationContainer)
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(animationContainer)
    }
})
</script>

<template>
    <div class="animation-container w-full h-full">
        <div class="flex flex-row justify-content-end w-full h-full gap-2">
            <div
                v-if="props.image"
                class="image-container flex justify-center align-items-center"
            ></div>
            <div class="text-container flex justify-center flex-column col-8">
                <div class="text">
                    <p class="text" v-for="(line, lineIndex) in props.text" :key="lineIndex">
                        <span
                            class="text-span font-light"
                            v-for="(char, charIndex) in line.split('')"
                            :key="charIndex"
                            >{{ char }}</span
                        >
                    </p>
                </div>
                <div class="button-container">
                    <Button label="Aprender como usarlos" class="button-secondary" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-span {
    font-size: 2.5rem;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
    color: #d63384;
}

.image-container {
    width: 50%;
    img {
        width: 60%;
        height: auto;
    }
}

.text-container {
    transform: translateY(50%);
    .text {
        font-size: 24px;
        font-weight: bold;
        white-space: nowrap;
    }
}
</style>
