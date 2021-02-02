<template>
    <div>
        <div class="text-light" style="background: #0f0f1e;">
            <div class="container" style="padding: 6rem;">
                <div class="row">
                    <div class="col">
                        <h2>Neu hier?</h2>
                        <p class="w-75">
                            Klicke Dich durch unser Tutorial!
                        </p>
                        <router-link to="/how-to" class="btn btn-link border-primary mt-2">Zum Tutorial</router-link>
                    </div>
                    <div class="col">
                        <h2>Ausprobieren</h2>
                        <p class="w-75">
                            Probiere unsere Standkategorie!
                        </p>
                        <router-link to="/learning" class="btn btn-link border-primary mt-2">
                            <div v-on:click="$emit('change-active-category', getDefaultCategory)">
                                Zu den Affenarten
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <h2>Zuletzt verwendete Kategorie</h2>
            <p>Setzte deine letzte Prüfung fort.</p>
            <h4>{{ getLastUsedPictureList[0].category }}</h4>
            <DashboardListItem/>
            <RouterLink to="/learning" class="btn btn-primary btn-block mt-4">
                <div v-on:click="$emit('change-active-category', getLastUsedPictureList[0].category)">
                    Weiter
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import DashboardListItem from "../components/DashboardListItem";

    export default {
        name: "Dashboard",
        computed: {
            getLastUsedPictureList() {
                return this.$store.state.lastUsedPictureList;
            },
            getDefaultCategory() {
                return this.$store.state.DEFAULT_CATEGORY;
            }
        },
        components: {
            DashboardListItem
        }
    }
</script>

<style scoped>

</style>
