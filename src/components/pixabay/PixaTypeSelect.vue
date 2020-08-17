<template>
  <a-select
    label-in-value
    class="w-100"
    :default-value="{ key: 'all' }"
    @change="handleChange"
  >
    <a-select-option :value="type" v-for="type in pixaType" :key="type">
      {{ type }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PixabayType } from "@/common/enums/pixabay";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations("pixa", ["setType"]),
  },
})
export default class PixaTypeSelect extends Vue {
  pixaType = PixabayType;
  setType!: (type: PixabayType) => void;

  handleChange(value: { key: PixabayType; label: string }) {
    this.setType(value.key);
  }
}
</script>

<style></style>
