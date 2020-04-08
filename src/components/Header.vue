<template>
    <v-app-bar class="header" max-height="64px" @click="goToHome">
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <slot></slot>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
    export default {
        name: "app-header",
        methods: {
            goToHome() {
                this.$router.push({name: 'Home'});
            }
        }
    }
</script>

<style scoped>
    .header {
        cursor: pointer;
    }
</style>
