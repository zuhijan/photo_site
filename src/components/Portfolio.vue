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
                    <v-card>
                        <v-img
                                :src="card.src"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>


                    </v-card>
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
                { title: 'WEDDING', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                { title: 'ONE', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                { title: 'FAMILY', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                { title: 'LOVE STORY', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            ],
        }),
    }
</script>

<style scoped>

</style>