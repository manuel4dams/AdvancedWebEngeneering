<template>
    <div style="height: 10%;">
        <div class="row justify-content-sm-center">
            <div class="col">
                <img v-bind:src="getLastUsedPictureList[0].url"
                     style="max-width: 100%;">
            </div>
            <div class="col">
                <img v-bind:src="getLastUsedPictureList[1].url"
                     style="max-width: 100%;">
            </div>
            <div class="col">
                <img v-bind:src="getLastUsedPictureList[2].url"
                     style="max-width: 100%;">
            </div>
            <div class="col">
                <img v-bind:src="getLastUsedPictureList[3].url"
                     style="max-width: 100%;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashboardListItem",
        computed: {
            getLastUsedPictureList() {
                return this.$store.state.lastUsedPictureList;
            },
        }
    };
</script>

<style scoped>

</style>
