<template>
    <footer class="footer bg-light mt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg">
                    <h3>Kontakt</h3>
                    Manuel Adams
                    <br>
                    <a href="mailto:manuel.adams@hs-weingarten.de" style="text-decoration: underline">manuel.adams@hs-weingarten.de</a>
                    <br>
                    Sonnenhalde. 4
                    <br>
                    88364 Wolfegg
                    <br>
                </div>
                <div class="col-lg">
                    <h3>Impressum</h3>
                    <p>
                        Weingarten
                        <br>
                        Design: Manuel Adams
                        <br>
                        Implementierung: Manuel Adams
                        <br>
                        <router-link to="/Privacy" style="text-decoration: underline">
                            Datenschutz
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>

</style>
