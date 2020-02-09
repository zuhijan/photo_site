<template>
    <v-row class="shadow-display">
        <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-container fluid>
                    <v-row>
                        <v-col
                                v-for="url in images"
                                :key="url.path"
                                class="d-flex child-flex"
                                cols="4"
                        >
                            <a target="_blank" :href="url.href" class="card__block">
                                <v-card flat tile class="d-flex">
                                    <v-img
                                            :src="url.path"
                                            :lazy-src="url.path"
                                            aspect-ratio="1"
                                            class="grey lighten-2 image-card"
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
                                <div class="card__hover">

                                </div>
                                <div class="card__icons">
                                    <i class="fas fa-heart card__icon"></i>
                                    <i class="fas fa-comment card__icon"></i>
                                </div>
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Instagram",
        data() {
         return {
             images: [
                 {
                 path: '/1.JPG',
                 href: 'https://www.instagram.com/p/B8K6dljhIZS/'
                 },
                 {
                 path: '/2.JPG',
                 href: 'https://www.instagram.com/p/B7EYODZhU5D/'
                 },
                 {
                 path: '/3.JPG',
                 href: 'https://www.instagram.com/p/B5qIsVfhfp9/'
                 },
                 {
                 path: '/4.JPG',
                 href: 'https://www.instagram.com/p/B4-iPs7hGzn/'
                 },
                 {
                 path: '/5.JPG',
                 href: 'https://www.instagram.com/p/B4iFlvtBLW4/'
                 },
                 {
                 path: '/6.JPG',
                 href: 'https://www.instagram.com/p/B3t5CWYF1If/'
                 },
                 {
                 path: '/7.JPG',
                 href: 'https://www.instagram.com/p/B3SOdF0BrUH/'
                 },
                 {
                 path: '/8.JPG',
                 href: 'https://www.instagram.com/p/B2R5tVaBQdr/'
                 },
                 {
                 path: '/9.JPG',
                 href: 'https://www.instagram.com/p/B3y6J2PhdWx/'
                 },
                 {
                 path: '/10.JPG',
                 href: 'https://www.instagram.com/p/B4VYWoqhEFj/'
                 },
             ]
         }
        }
    }
</script>

<style scoped lang="sass">
.v-card
    -webkit-box-shadow: none
    box-shadow: none

.image-card
    width: 293px
    /*height: 293px*/

.card__block
    position: relative
    cursor: pointer

.card__hover
    height: 100%
    width: 100%
    position: absolute
    top: 0
    left: 0
    opacity: .3
    transition: background-color .2s ease-in

.card__block:hover .card__hover
    background-color: #000

.card__icons
    position: absolute
    top: 40%
    left: 35%
    opacity: 0
    transition: opacity .2s ease-in

.card__block:hover .card__icons
    opacity: 1

.card__icon
    color: #fcfcfc
    opacity: .9
    font-size: 30px
    transition: transform .3s ease-in-out

.card__icon:hover
    transform: scale(1.5)

.card__icon:first-of-type
    margin-right: 25px


</style>