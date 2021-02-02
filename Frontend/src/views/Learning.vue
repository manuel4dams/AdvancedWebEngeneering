<template>
    <div class="container mt-5">
        <div
                class="position-relative"
                v-if="getPictureList.length >= 4">
            <div class="row justify-content-sm-center">
                <div class="col-lg-4 col-sm-6 imageContainer">
                    <img class="gameImage"
                         v-bind:src="getPictureList[getRandomNumbers.pictureIndexes[0]].url"
                         v-on:click="checkAnswer(getPictureList[getRandomNumbers.pictureIndexes[0]].name)"
                         style="width: 100%">
                    <span class="overlayPlaceholder"></span>
                </div>
                <div class="col-lg-4 col-sm-6 mt-sm-0 mt-3 imageContainer">
                    <img class="gameImage"
                         v-bind:src="getPictureList[getRandomNumbers.pictureIndexes[1]].url"
                         v-on:click="checkAnswer(getPictureList[getRandomNumbers.pictureIndexes[1]].name)"
                         style="width: 100%">
                    <span class="overlayPlaceholder"></span>
                </div>
            </div>
            <div class="mt-3 d-flex justify-content-center">
                <span id="pictureName">
                    {{ getPictureList[getRandomNumbers.nameIndex].name }}
                </span>
            </div>
            <div class="row justify-content-sm-center">
                <div class="col-lg-4 col-sm-6 mt-sm-4 mt-3 imageContainer">
                    <img class="gameImage"
                         v-bind:src="getPictureList[getRandomNumbers.pictureIndexes[2]].url"
                         v-on:click="checkAnswer(getPictureList[getRandomNumbers.pictureIndexes[2]].name)"
                         style="width: 100%">
                    <span class="overlayPlaceholder"></span>
                </div>
                <div class="col-lg-4 col-sm-6 mt-sm-4 mt-3 imageContainer">
                    <img class="gameImage"
                         v-bind:src="getPictureList[getRandomNumbers.pictureIndexes[3]].url"
                         v-on:click="checkAnswer(getPictureList[getRandomNumbers.pictureIndexes[3]].name)"
                         style="width: 100%">
                    <span class="overlayPlaceholder"></span>
                </div>
            </div>
        </div>
        <p v-else>
            es sind nicht genügen Bilder in der Kategorie {{getActiveCategoryName}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Learning",
        computed: {
            getPictureList() {
                this.$store.commit('setRandomNumbers');
                return this.$store.state.pictureList;
            },
            getRandomNumbers() {
                return this.$store.state.randomNumbers;
            },
            getActiveCategoryName(){
                return this.$store.state.ACTIVE_CATEGORY;
            }
        },
        methods: {
            checkAnswer(pictureName) {
                if (pictureName === document.getElementById("pictureName").innerText) {

                    // TODO
                     document.getElementById("pictureName").innerText.blink();

                    console.log("right");
                    this.$store.commit('setRandomNumbers');
                } else {

                    //TODO

                    console.log("wrong");
                    this.$store.commit('setRandomNumbers');
                }
            }
        }
    }
</script>

<style scoped>

</style>
