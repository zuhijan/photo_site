<template>
    <v-row class="shadow-display" wrap>
        <v-col cols="12" sm="10" offset-sm="1">
            <v-card>
                <v-container fluid>
                    <v-row wrap>
                        <v-col
                                v-for="url in images"
                                :key="url.path"
                                class="d-flex child-flex"
                                cols="12"
                                xs="12"
                                sm="6"
                                md="4"
                        >
                            <a target="_blank" :href="url.href" class="card__block">
                                <v-card flat tile class="d-flex">
                                    <v-img
                                            :src="url.path"
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
                 path: './images/instagram/Insta 1.JPG',
                 href: 'https://www.instagram.com/p/B8K6dljhIZS/'
                 },
                 {
                 path: './images/instagram/Insta 2.JPG',
                 href: 'https://www.instagram.com/p/B7EYODZhU5D/'
                 },
                 {
                 path: './images/instagram/Insta 3.JPG',
                 href: 'https://www.instagram.com/p/B5qIsVfhfp9/'
                 },
                 {
                 path: './images/instagram/Insta 4.JPG',
                 href: 'https://www.instagram.com/p/B4-iPs7hGzn/'
                 },
                 {
                 path: './images/instagram/Insta 5.JPG',
                 href: 'https://www.instagram.com/p/B4iFlvtBLW4/'
                 },
                 {
                 path: './images/instagram/Insta 6.JPG',
                 href: 'https://www.instagram.com/p/B3t5CWYF1If/'
                 },
                 {
                 path: './images/instagram/Insta 7.JPG',
                 href: 'https://www.instagram.com/p/B3SOdF0BrUH/'
                 },
                 {
                 path: './images/instagram/Insta 8.JPG',
                 href: 'https://www.instagram.com/p/B2R5tVaBQdr/'
                 },
                 {
                 path: './images/instagram/Insta 9.JPG',
                 href: 'https://www.instagram.com/p/B3y6J2PhdWx/'
                 },
                 {
                 path: './images/instagram/Insta 10.JPG',
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
    top: calc(45%)
    left: calc(40%)
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
