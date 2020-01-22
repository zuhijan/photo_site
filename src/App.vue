<template>
  <v-app>
      <app-header></app-header>

    <v-toolbar app>
        <v-spacer></v-spacer>
            <v-btn text small> Кто я?</v-btn>
            <v-btn text small>Портфолио</v-btn>
            <v-btn text small>Контакты</v-btn>
            <v-btn text small>Instagram</v-btn>
        <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <start-gallary></start-gallary>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
        <v-spacer></v-spacer>

        <i class="fab fa-vk"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-pinterest-square"></i>
        <v-spacer></v-spacer>

      </v-footer>
  </v-app>
</template>

<script>
import startGallary from "@/components/startGallary";
import appHeader from "@/components/appHeader";

export default {
  name: 'App',

  components: {
      startGallary,
      appHeader
  },

  data: () => ({
    //
  }),
};
</script>
