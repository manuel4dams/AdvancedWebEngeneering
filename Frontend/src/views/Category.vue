<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <label for="name">{{getCategoryViewName}}</label>
                <input v-model="newCategoryName" type="text" class="form-control"
                       placeholder="Neuen Kategorie Namen eingeben" id="name">
                <button class="btn btn-primary" v-on:click="updateCategoryName(getCategoryViewName)">speichern</button>
            </div>
            <div class="col">
                <button type="button" class="btn btn-danger float-right"
                        style="border-radius: 50%; width: 60px; height:60px;"
                        v-on:click="deleteCategory(getCategoryViewName)">
                </button>
            </div>
        </div>

        <div class="position-relative"
             v-if="getCategoryViewPictureList.length >= 0">
            <div class="card-deck">
                <div class="card" v-for="(picture, index) in getCategoryViewPictureList" v-bind:key="picture.name">
                    <img v-bind:src="picture.url" class="card-img-top">
                    <button type="button" class="btn btn-danger"
                            v-on:click="deletePicture(picture.name)"
                            style="border-radius: 50%; position: absolute; right: 2px; top: 2px; width: 30px; height:30px;">
                    </button>
                    <div class="card-body">
                        <label for="name">{{picture.name}}
                            <input type="text" value="" placeholder="neuer Name" v-bind:id="picture.name">
                            <input type="text" value="" placeholder="neue Url" v-bind:id="picture.url">
                            <button class="btn btn-primary"
                                    v-on:click="updatePicture(picture.category, picture.name, picture.url)">
                                speichern
                            </button>
                        </label>
                    </div>
                </div>
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/640px--Insert_image_here-.svg.png"
                         class="card-img-top">
                    <div class="card-body">
                        <label>
                            <input v-model="newPictureName" placeholder="Name">
                            <input v-model="newURL" placeholder="url">
                            <button class="btn btn-primary" v-on:click="addPicture(getCategoryViewName)">speichern
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/640px--Insert_image_here-.svg.png"
                     class="card-img-top">
                <div class="card-body">
                    <label>
                        <input v-model="newPictureName" placeholder="Name">
                        <input v-model="newURL" placeholder="url">
                        <button class="btn btn-primary" v-on:click="addPicture(getCategoryViewName)">speichern</button>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            return {
                newPictureName: "",
                newURL: "",
                newCategoryName: "",
            }
        },
        methods: {
            addPicture: function (categoryName) {
                let pictureName = this.newPictureName;
                let pictureURL = this.newURL;

                this.$store.commit('addPicture', {pictureName, pictureURL, categoryName});
            },

            updateCategoryName: function (categoryName) {
                let newCategoryName = this.newCategoryName;
                this.$store.commit('updateCategoryName', {categoryName, newCategoryName});
            },

            updatePicture: function (pictureCategory, pictureName, pictureUrl) {
                let updatePictureName = document.getElementById(pictureName).value;
                let updatePictureURL = document.getElementById(pictureUrl).value;

                this.$store.commit('updatePicture', {
                        pictureName,
                        updatePictureName,
                        updatePictureURL,
                    }
                );
            },

            deleteCategory: function (categoryName) {
                this.$store.commit('deleteCategory', categoryName);
            },

            deletePicture: function (pictureName) {
                this.$store.commit('deletePicture', pictureName);
            },
        },
        computed: {
            getCategoryViewPictureList() {
                return this.$store.state.categoryViewPictureList;
            },
            getCategoryViewName() {
                return this.$store.state.VIEW_CATEGORY;
            }
        },
    };
</script>

<style scoped>

</style>
