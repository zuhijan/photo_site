<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-container fluid>
                    <v-row>
                        <v-col
                                v-for="(card, i) in cards"
                                :key="i"
                                class="d-flex child-flex"
                                :cols="card.flex"
                        >
                            <v-card flat tile class="d-flex">
                                <v-img
                                        :src="card.src"
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
</template>

<script>
export default {
  name: "home",
  components: {
  },
  data() {
      return {
          cards: [
              {
                  src: './images/category/wedding/wedding1.jpg',
                  flex: 2,
              },
              {
                  src: './images/category/one/one1.jpg',
                  flex: 4,
              },
              {
                  src: './images/category/family/family1.jpg',
                  flex: 4,
              },
              {
                  src: './images/category/wedding/wedding1.jpg',
                  flex: 2,
              },
              {
                  src: './images/category/lovestory/lovestory1.jpg',
                  flex: 6,
              },
              {
                  src: './images/category/wedding/wedding1.jpg',
                  flex: 2,
              },
              {
                  src: './images/category/one/one1.jpg',
                  flex: 4,
              },
              {
                  src: './images/category/family/family1.jpg',
                  flex: 4,
              },
              {
                  src: './images/category/lovestory/lovestory1.jpg',
                  flex: 6,
              },
              {
                  src: './images/category/family/family1.jpg',
                  flex: 2,
              },
          ],
      }
  }
};
</script>

<style scoped lang="sass">
.v-card
    -webkit-box-shadow: none
    box-shadow: none
</style>
