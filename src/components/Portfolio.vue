<template>
        <v-container fluid>
            <v-row dense wrap>
                <v-col
                        v-for="card in cards"
                        :key="card.title"
                        cols="12"
                        xs="12"
                        sm="6"
                >
                    <router-link class="portfolio__link" :to="card.link">
                        <v-card>
                            <v-img
                                    :src="card.src"
                                    class="white--text align-end card-zoom"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="300px"
                            >
                                <v-card-title v-text="card.title"></v-card-title>
                            </v-img>


                        </v-card>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        name: "cards",
        data () {
           return {
               cards: [
                   {
                       title: 'WEDDING',
                       src: './images/category/wedding/wedding1.jpg',
                       link: '/wedding'
                   },
                   {
                       title: 'ONE',
                       src: './images/category/one/one1.jpg',
                       link: '/one'

                   },
                   {
                       title: 'FAMILY',
                       src: './images/category/family/family1.jpg',
                       link: '/family'

                   },
                   {
                       title: 'LOVE STORY',
                       src: './images/category/lovestory/lovestory1.jpg',
                       link: '/lovestory'

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

.card-zoom
    transition: all .2s ease-in
    &:hover
        transform: scale(1.01)

</style>
