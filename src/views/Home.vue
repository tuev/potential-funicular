<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/layouts/Banner.vue";

@Component({ components: { Banner } })
export default class Home extends Vue {}
</script>
