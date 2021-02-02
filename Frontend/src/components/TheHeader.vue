<template>
    <header class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="https://bootstrap-vue.js.org/_nuxt/img/c2b2fd3.png"
                     style="width: 40px; height: 40px;">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            Kategorien
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown"
                             v-bind:categoryList="getCategoryList">
                            <div v-for="category in getCategoryList" class="dropdown-item"
                                 v-bind:key="category.name">
                                <div class="row">
                                    <router-link class="col" to="/Learning">
                                        <div v-on:click="$emit('change-active-category', category.name)">
                                            {{category.name}}
                                        </div>
                                    </router-link>
                                    <div class="col">
                                        <div v-on:click="$emit('change-category-view', category.name)">
                                            <router-link class="btn btn-secondary btn-sm" to="/Category"
                                                         style="border-radius: 50%; position: absolute; right: 9px; width: 30px; height: 30px;">
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dropdown-item">
                                <div class="row">
                                    <input class="col" type="text" placeholder="Neue Kategorie" id="newCategoryName">
                                    <div class="col" v-on:click="addCategory">
                                        <router-link class="btn btn-primary btn-sm" to="/Category"
                                                     style="border-radius: 50%; position: absolute; right: 9px; width: 30px; height: 30px;">
                                        </router-link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "TheHeader",
        methods: {
            addCategory: function () {
                let categoryName = document.getElementById("newCategoryName").value;
                this.$store.commit('addCategory', categoryName);
            },
        },
        computed: {
            getCategoryList() {
                return this.$store.state.categoryList;
            }
        },
    }

</script>

<style scoped>

</style>
