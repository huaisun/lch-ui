import {
    mapGetters,
    mapMutations
} from 'vuex'

export default {
    name: "header-toolbar",
    computed: {
        ...mapGetters(['links'])
    },

    methods: {
        ...mapMutations(['toggleDrawer']),
        onClick(e, item) {
            e.stopPropagation()

            if (item.to || !item.href) return

            this.$vuetify.goTo(item.href)
        }
    }
}