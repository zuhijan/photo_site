<template>
    <v-card
            class="mx-auto"
            max-width="1020"
    >
        <v-container fluid>
            <v-row dense>
                <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                >
                    <router-link class="portfolio__link"  :to="card.link">
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
    </v-card>
</template>

<script>
    export default {
        name: "cards",
        data: () => ({
            cards: [
                {
                    title: 'WEDDING',
                    src: './images/category/wedding/wedding1.jpg',
                    flex: 6,
                    link: '/wedding'
                },
                {
                    title: 'ONE',
                    src: './images/category/one/one1.jpg',
                    flex: 6,
                    link: '/one'

                },
                {
                    title: 'FAMILY',
                    src: './images/category/family/family1.jpg',
                    flex: 6,
                    link: '/family'

                },
                {
                    title: 'LOVE STORY',
                    src: './images/category/lovestory/lovestory1.jpg',
                    flex: 6,
                    link: '/lovestory'

                },
            ],
        }),
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