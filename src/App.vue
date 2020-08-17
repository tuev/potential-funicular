<template>
  <div id="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DefaultLayout from "@/layouts/default.vue";

@Component({ components: { DefaultLayout } })
export default class App extends Vue {
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  }

  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }
}
</script>

<style lang="scss">
@import "./index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
