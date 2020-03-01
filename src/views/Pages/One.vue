<template>
    <div>
        <app-header>ONE</app-header>

        <v-app id="inspire">
            <v-carousel
                    hide-delimiter-background
                    show-arrows-on-hover
            >
                <v-carousel-item
                        v-for="(image,i) in aida"
                        :key="i"
                >
                    <v-img
                        position="cover"
                        :src="image.src"
                    ></v-img>
                </v-carousel-item>
            </v-carousel>
        </v-app>
        <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
                <v-card>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                    v-for="n in 9"
                                    :key="n"
                                    class="d-flex child-flex"
                                    cols="4"
                            >
                                <v-card flat tile class="d-flex">
                                    <v-img
                                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                            aspect-ratio="1"
                                            class="grey lighten-2"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import appHeader from "@/components/Header";

    export default {
        name: "One",
        components: {
            appHeader
        },
        data () {
            return {
                aida: [
                    {
                        src: './images/category/one/aida/1.jpg',
                    },
                    {
                        src: './images/category/one/aida/2.jpg',
                    },
                    {
                        src: './images/category/one/aida/3.jpg',
                    },
                    {
                        src: './images/category/one/aida/4.jpg',
                    },
                    {
                        src: './images/category/one/aida/5.jpg',
                    },
                    {
                        src: './images/category/one/aida/6.jpg',
                    },
                    {
                        src: './images/category/one/aida/7.jpg',
                    },
                    {
                        src: './images/category/one/aida/8.jpg',
                    },
                    {
                        src: './images/category/one/aida/9.jpg',
                    },
                    {
                        src: './images/category/one/aida/10.jpg',
                    },
                    {
                        src: './images/category/one/aida/11.jpg',
                    },
                    {
                        src: './images/category/one/aida/12.jpg',
                    },
                    {
                        src: './images/category/one/aida/13.jpg',
                    },
                    {
                        src: './images/category/one/aida/14.jpg',
                    },
                    {
                        src: './images/category/one/aida/15.jpg',
                    },
                    {
                        src: './images/category/one/aida/16.jpg',
                    },
                    {
                        src: './images/category/one/aida/17.jpg',
                    },
                ],
            }
        },
    }
</script>

<style scoped lang="sass">
.v-card
    -webkit-box-shadow: none
    box-shadow: none
.v-carousel__item
    background-size: contain

.v-image__image--cover

.v-responsive__content



</style>