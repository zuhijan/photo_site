<template>
    <v-app-bar max-height="64px">
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <slot></slot>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
    export default {
        name: "app-header"
    }
</script>

<style scoped>

</style>