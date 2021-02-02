import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        DEFAULT_CATEGORY: "Affen",
        LAST_USED_CATEGORY: "Hunde",
        ACTIVE_CATEGORY: "Katzen",
        VIEW_CATEGORY: "",
        categoryList: [],
        categoryListLoaded: false,
        lastUsedPictureList: [],
        pictureList: [],
        categoryViewPictureList: [],
        pictureListLoaded: false,
        randomNumbers: {
            pictureIndexes: [],
            nameIndex: 0
        }
    },
    mutations: {
        loadCategoryList(state) {
            axios
                .get('http://localhost:3000/api/categories')
                .then(result => {
                    state.categoryList = result.data;
                    state.categoryListLoaded = true;
                    console.log("loadCategoryList", state.categoryList);
                })
                .catch(error => console.error("loadCategoryList", error));
        },

        loadLastUsedCategoryData(state) {
            axios
                .get('http://localhost:3000/api/pictures/' + state.LAST_USED_CATEGORY)
                .then(result => {
                    state.lastUsedPictureList = result.data;
                    console.log("loadDefaultCategoryData for " + state.LAST_USED_CATEGORY, state.lastUsedPictureList);
                })
                .catch(error => console.error("loadDefaultCategoryData", error));
        },

        loadActiveCategoryData(state) {
            axios
                .get('http://localhost:3000/api/pictures/' + state.ACTIVE_CATEGORY)
                .then(result => {
                    state.pictureList = result.data;
                    state.pictureListLoaded = true;
                    console.log("loadActiveCategoryData for " + state.ACTIVE_CATEGORY, state.pictureList);
                })
                .catch(error => console.error("loadActiveCategoryData", error));
        },

        loadCategoryViewData(state) {
            axios
                .get('http://localhost:3000/api/pictures/' + state.VIEW_CATEGORY)
                .then(result => {
                    state.categoryViewPictureList = result.data;
                    console.log("loadCategoryViewData for " + state.VIEW_CATEGORY, state.categoryViewPictureList);
                })
                .catch(error => console.error("loadCategoryViewData", error));
        },

        addCategory(state, categoryName) {
            state.VIEW_CATEGORY = categoryName;
            axios
                .post('http://localhost:3000/api/categories/', categoryName)
                .then(response => {
                    console.log("addCategory " + response);
                })
                .catch(error => console.error("addCategory ", error));
            this.commit('loadCategoryViewData');
        },

        addPicture(state, {pictureName, pictureURL, categoryName}) {
            axios
                .post('http://localhost:3000/api/pictures/', {
                    name: pictureName,
                    url: pictureURL,
                    category: categoryName,
                })
                .then(response => {
                    console.log("addPicture " + response);
                })
                .catch(error => console.error("addPicture ", error));
            this.commit('loadCategoryViewData');
        },

        updateCategoryName(state, {categoryName, newCategoryName}) {
            axios
                .put('http://localhost:3000/api/categories/', {
                    categoryname: categoryName,
                    newcategoryname: newCategoryName,
                })
                .then(response => {
                    console.log("updateCategoryName " + response);
                })
                .catch(error => console.error("updateCategoryName ", error));
            this.commit('loadCategoryViewData');
        },

        updatePicture(state, {pictureName, newPictureName, newPictureURL}) {
            axios
                .put('http://localhost:3000/api/pictures/', {
                    picturename: pictureName,
                    newpicturename: newPictureName,
                    newurl: newPictureURL,
                })
                .then(response => {
                    console.log("updatePicture " + response);
                })
                .catch(error => console.error("updatePicture ", error));
            this.commit('loadCategoryViewData');
        },

        deleteCategory(state, categoryName) {
            axios
                .delete('http://localhost:3000/api/categories/', categoryName)
                .then(response => {
                    console.log("deleteCategory " + response);
                })
                .catch(error => console.error("deleteCategory ", error));
            state.VIEW_CATEGORY = state.ACTIVE_CATEGORY;
            this.commit('loadCategoryViewData');
        },

        deletePicture(state, pictureName) {
            axios
                .delete('http://localhost:3000/api/pictures/', pictureName)
                .then(response => {
                    console.log("deletePicture " + response);
                })
                .catch(error => console.error("deletePicture ", error));
            this.commit('loadCategoryViewData');
        },

        setRandomNumbers(state) {
            for (let i = 0; i < 4; i++) {
                state.randomNumbers.pictureIndexes[i] = Math.floor(Math.random() * state.pictureList.length);
            }
            state.randomNumbers.nameIndex = state.randomNumbers.pictureIndexes[Math.floor(Math.random() * 4)];
            console.log("setRandomNumbers", state.randomNumbers);
        },

        setActiveCategory(state, categoryName) {
            state.ACTIVE_CATEGORY = categoryName;
            console.log("setActiveCategory" + state.ACTIVE_CATEGORY)
        },

        setCategoryView(state, categoryName) {
            state.VIEW_CATEGORY = categoryName;
            console.log("setCategoryView" + state.VIEW_CATEGORY)
        }
    },
    actions: {}
});
