<template>
    <div id="app">
        <the-header
                v-on:change-category-view="setAndLoadCategoryView"
                v-on:change-active-category="setAndLoadActiveCategory"
        />

        <router-view
                v-if="$store.state.categoryListLoaded && $store.state.pictureListLoaded"
                v-on:change-active-category="setAndLoadActiveCategory"
        />

        <the-footer/>
    </div>
</template>

<script>
    import TheHeader from './components/TheHeader';
    import TheFooter from './components/TheFooter';

    export default {
        name: "app",
        components: {
            TheHeader,
            TheFooter,
        },
        methods: {
            setAndLoadActiveCategory: function (categoryName) {
                this.$store.commit('setActiveCategory', categoryName);
                this.$store.commit('loadActiveCategoryData');
            },
            setAndLoadCategoryView: function (categoryName) {
                this.$store.commit('setCategoryView', categoryName);
                this.$store.commit('loadCategoryViewData');
            },
        },
        created() {
            this.$store.commit('loadCategoryList');
            this.$store.commit('loadLastUsedCategoryData');
            this.$store.commit('loadActiveCategoryData');
        }
    };
</script>

<style>
</style>
