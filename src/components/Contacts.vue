<template>
    <v-container>
        <p class="text-center contacts__title mb-5">
            Если вы хотите забронировать дату, уточнить детали съемки или задать любой другой вопрос, воспользуйтесь формой снизу
            или свяжитесь со мной любым удобным способом. </p>
        <v-row class="d-flex justify-space-between">
                <v-tabs
                        v-model="model"
                        centered
                        slider-color="black"
                >
                    <v-tab
                            v-for="(tab, i) in tabs"
                            :key="i"
                            :href="`#tab-${i}`"
                    >
                        <v-icon>{{tab.icon}}</v-icon>
                    </v-tab>
                </v-tabs>
            <v-tabs-items class="mx-auto" v-model="model">
                <v-tab-item
                        v-for="(tab, i) in tabs"
                        :key="i"
                        :value="`tab-${i}`"
                >
                    <v-card  flat>
                        <v-card-text v-text="tab.content"/>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-row>
        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
            <form class="d-flex flex-column elevation-2 pa-5" >
                <v-row class="d-flex justify-space-between">
                    <v-col
                            cols="1"
                            style="min-width: 250px;"
                            class="flex-grow-0 flex-shrink-0"
                    >
                        <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                            <v-text-field
                                    v-model="email"
                                    :error-messages="errors"
                                    label="E-mail"
                                    required
                                    outlined
                            />
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" name="Имя" rules="required">
                            <v-text-field
                                    v-model="name"
                                    :error-messages="errors"
                                    label="Имя"
                                    required
                                    outlined
                            />
                        </ValidationProvider>
                    </v-col>
                    <v-col
                            cols="1"
                            style="min-width: 250px; max-width: 100%;"
                            class="flex-grow-1 flex-shrink-1"
                    >
                        <ValidationProvider v-slot="{ errors }" name="Сообщение" rules="required|max:140">
                            <v-textarea
                                    v-model="text"
                                    :counter="140"
                                    :error-messages="errors"
                                    label="Сообщение"
                                    required
                                    outlined
                            />
                        </ValidationProvider>
                    </v-col>
                </v-row>
                <v-btn class="align-self-center" @click="submit">Отправить</v-btn>
            </form>
        </ValidationObserver>
    </v-container>
</template>

<script>
    import { required, email, max } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} не может быть пустым',
    })

    extend('max', {
        ...max,
        message: '{_field_} не может быть больше чем {length} символов',
    })

    extend('email', {
        ...email,
        message: 'Email должен быть корректным',
    })

    export default {
        name: "Contacts",
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data: () => ({
            text: '',
            email: '',
            name: '',
            model: 'tab-2',
            tabs: [
                {
                    title: 'vk',
                    content: 'id28742248',
                    icon: 'fab fa-vk',
                },
                {
                    title: 'instagram',
                    content: '@anlyubitskaya_photo',
                    icon: 'fab fa-instagram',
                },
                {
                    title: 'телефон',
                    content: ' 8-906-990-58-23',
                    icon: 'fas fa-phone',
                },
                {
                    title: 'почта',
                    content: 'best_chika99@mail.ru',
                    icon: 'far fa-envelope',
                },
            ]
        }),

        methods: {
            submit () {
                this.$refs.observer.validate()
            },
        },
    }
</script>

<style scoped lang="sass">
    .contacts__title
        max-width: 80%
        margin: 0 auto

</style>
