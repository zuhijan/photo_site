<template>
    <div>
        <app-header>ONE</app-header>
        <v-col
                col="12"
                md="8"
                offset-md="2">
            <v-carousel
                    fluid
                    col="12"
                    hide-delimiters
            >
                <v-carousel-item
                        v-for="(image,i) in carouselData"
                        :key="i"
                        :src="image.src"
                        contain
                />
            </v-carousel>
        </v-col>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-container >
                        <v-row wrap>
                            <v-col
                                    v-for="card in cards"
                                    :key="card.title"
                                    cols="12"
                                    xs="12"
                                    sm="6"
                                    md="4"
                            >
                                <v-card flat tile class="d-flex">
                                    <v-img
                                            @click="updateCarousel(card)"
                                            :src="card.src"
                                            :lazy-src="card.src"
                                            class="white--text align-end card-zoom"
                                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    >
                                        <v-card-title v-text="card.title"/>
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
                carouselData: [
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
                cards: [
                    {
                        title: 'Аида у моста',
                        src: './images/category/one/aida/1.jpg',
                        photos: [
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
                    },
                    {
                        title: 'Бабушка',
                        src: './images/category/one/babushka/2.jpg',
                        photos: [
                            {
                                src: './images/category/one/babushka/1.jpg',
                            },
                            {
                                src: './images/category/one/babushka/2.jpg',
                            },
                            {
                                src: './images/category/one/babushka/3.jpg',
                            },
                            {
                                src: './images/category/one/babushka/4.jpg',
                            },
                            {
                                src: './images/category/one/babushka/5.jpg',
                            },
                            {
                                src: './images/category/one/babushka/6.jpg',
                            },
                            {
                                src: './images/category/one/babushka/7.jpg',
                            },
                            {
                                src: './images/category/one/babushka/8.jpg',
                            },
                            {
                                src: './images/category/one/babushka/9.jpg',
                            },
                            {
                                src: './images/category/one/babushka/10.jpg',
                            },
                            {
                                src: './images/category/one/babushka/11.jpg',
                            },
                        ],

                    },
                    {
                        title: 'Вероника и яблони',
                        src: './images/category/one/veronika/1.jpg',
                        photos: [
                            {
                                src: './images/category/one/veronika/1.jpg',
                            },
                            {
                                src: './images/category/one/veronika/2.jpg',
                            },
                            {
                                src: './images/category/one/veronika/3.jpg',
                            },
                            {
                                src: './images/category/one/veronika/4.jpg',
                            },
                            {
                                src: './images/category/one/veronika/5.jpg',
                            },
                            {
                                src: './images/category/one/veronika/6.jpg',
                            },
                        ],

                    },
                    {
                        title: 'Ростислав',
                        src: './images/category/one/rostislav/1.jpg',
                        photos: [
                            {
                                src: './images/category/one/rostislav/1.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/2.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/3.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/4.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/5.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/6.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/7.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/8.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/9.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/10.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/11.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/12.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/13.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/14.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/15.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/17.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/18.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/19.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/20.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/21.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/22.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/23.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/24.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/25.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/26.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/27.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/28.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/29.jpg',
                            },
                            {
                                src: './images/category/one/rostislav/30.jpg',
                            },
                        ],

                    },
                    {
                        title: 'Света Питер',
                        src: './images/category/one/sveta/1.jpg',
                        photos: [
                            {
                                src: './images/category/one/sveta/1.jpg',
                            },
                            {
                                src: './images/category/one/sveta/2.jpg',
                            },
                            {
                                src: './images/category/one/sveta/3.jpg',
                            },
                            {
                                src: './images/category/one/sveta/4.jpg',
                            },
                            {
                                src: './images/category/one/sveta/5.jpg',
                            },
                            {
                                src: './images/category/one/sveta/6.jpg',
                            },
                            {
                                src: './images/category/one/sveta/7.jpg',
                            },
                            {
                                src: './images/category/one/sveta/8.jpg',
                            },
                            {
                                src: './images/category/one/sveta/9.jpg',
                            },
                            {
                                src: './images/category/one/sveta/10.jpg',
                            },
                            {
                                src: './images/category/one/sveta/11.jpg',
                            },
                            {
                                src: './images/category/one/sveta/12.jpg',
                            },
                            {
                                src: './images/category/one/sveta/13.jpg',
                            },
                            {
                                src: './images/category/one/sveta/14.jpg',
                            },
                        ],

                    },
                    {
                        title: 'Таня Яганова',
                        src: './images/category/one/tanya/3.jpg',
                        photos: [
                            {
                                src: './images/category/one/tanya/1.jpg',
                            },
                            {
                                src: './images/category/one/tanya/2.jpg',
                            },
                            {
                                src: './images/category/one/tanya/3.jpg',
                            },
                            {
                                src: './images/category/one/tanya/4.jpg',
                            },
                            {
                                src: './images/category/one/tanya/5.jpg',
                            },
                            {
                                src: './images/category/one/tanya/6.jpg',
                            },
                            {
                                src: './images/category/one/tanya/7.jpg',
                            },
                            {
                                src: './images/category/one/tanya/8.jpg',
                            },
                            {
                                src: './images/category/one/tanya/9.jpg',
                            },
                            {
                                src: './images/category/one/tanya/10.jpg',
                            },
                            {
                                src: './images/category/one/tanya/11.jpg',
                            },
                        ],

                    },
                ],
            }
        },
        methods: {
            updateCarousel(card) {
                this.carouselData = card.photos;
            }
        }
    }
</script>

<style scoped lang="sass">
.v-card
    -webkit-box-shadow: none
    box-shadow: none
    cursor: pointer
.v-carousel__item
    background-size: contain

.card-zoom
    transition: all .2s ease-in
    &:hover
        transform: scale(1.01)



</style>
