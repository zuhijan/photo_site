<template>
        <v-container>
            <v-row dense wrap>
                <v-col
                        cols="12"
                        xs="12"
                        sm="5"
                        md="5"
                        offset-md="1"
                        offset-sm="1"
                        class="mr-5"
                >
                    <p class="text-justify">
                        Nulla consequat massa , euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                        , ea consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.

                    <p class="text-justify">
                        Nulla coequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                        , euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                    <p class="text-justify">
                        Nulla coequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                        consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>

                    <v-img
                        :src="leftPic"
                        aspect-ratio="1"
                    />
                </v-col>
                <v-col
                        cols="12"
                        xs="12"
                        sm="5"
                        md="5"
                >
                    <v-img
                        class="mb-5"
                        :src="rightPic"
                        aspect-ratio="1"
                    />

                    <p class="text-justify">
                        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                    <p class="text-justify">
                        Nulla coequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                        , euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>

                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        name: "cards",
        data () {
           return {
               leftPic: './images/about/2.jpg',
               rightPic: './images/about/1.jpg',
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
