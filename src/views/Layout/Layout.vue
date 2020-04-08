<template>
    <v-app>
        <app-header >LYUBITSKAYA PHOTO</app-header>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer"
        >
            <v-list>
                <v-list-item
                    v-for="link of links"
                    :key="link.title"
                    :to="link.url"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
            max-height="64px"
            class="header__toolbar"
        >
            <v-app-bar-nav-icon
            @click="drawer = !drawer"
            class="hidden-sm-and-up"
            >
            </v-app-bar-nav-icon>
            <v-spacer/>
            <v-btn
                class="d-none d-sm-flex header__link"
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                text
                small
            >{{link.title}}</v-btn>
            <v-spacer/>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer
            padless
            class="footer"
            app
        >
            <v-spacer/>
            <i class="fab fa-vk footer__icon"/>
            <i class="fab fa-instagram footer__icon"/>
            <v-spacer/>

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
        data() {
            return {
                drawer: false,
                links: [
                    {
                        title: 'Кто я?',
                        url: '/about'
                    },
                    {
                        title: 'Портфолио',
                        url: '/portfolio'
                    },
                    {
                        title: 'Контакты',
                        url: '/contacts'
                    },
                    {
                        title: 'Instagram',
                        url: '/instagram'
                    }
                ]
            }
        },

    }
</script>

<style scoped>
.v-application--wrap {
    max-widht: 1440px !important;
}
.footer {
    padding: 10px;
}
.footer__icon {
    cursor: pointer;
}
</style>
