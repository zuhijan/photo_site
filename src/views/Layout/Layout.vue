<template>
    <v-app>
        <app-header>LYUBITSKAYA PHOTO</app-header>

        <v-toolbar max-height="64px" class="header__toolbar">
            <v-spacer></v-spacer>
            <v-btn text small><router-link class="header__link" to="/gallary">Кто я?</router-link></v-btn>
            <span>|</span>
            <v-btn text small><router-link class="header__link" to="/portfolio">Портфолио</router-link> </v-btn>
            <span>|</span>
            <v-btn text small><router-link class="header__link" to="/contacts">Контакты</router-link></v-btn>
            <span>|</span>
            <v-btn text small><router-link class="header__link" to="/instagram">Instagram</router-link></v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer
            padless
            class="footer"
        >
            <v-spacer></v-spacer>
            <i class="fab fa-vk footer__icon" ></i>
            <i class="fab fa-instagram footer__icon"></i>
            <v-spacer></v-spacer>

        </v-footer>
    </v-app>
</template>

<script>
    import appHeader from "@/components/Header";

    export default {
        name: "layout",
        components: {
            appHeader
        },
    }
</script>

<style scoped>
.footer {
    padding: 10px;
}
.footer__icon {
    cursor: pointer;
}
</style>