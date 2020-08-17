declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue-masonry";

declare module "vue-progressbar" {
  import { PluginFunction } from "vue";

  export const install: PluginFunction<{}>;

  export interface ProgressMethods {
    start(): void;
    finish(): void;
    fail(): void;
  }

  module "vue/types/vue" {
    interface Vue {
      $Progress: ProgressMethods;
    }
  }
  module "vue";
}
