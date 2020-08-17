<template>
  <div>
    <Navigation />
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navigation from "@/layouts/Navigation.vue";

@Component({
  components: { Navigation },
})
export default class DefaultLayout extends Vue {}
</script>

<style></style>
