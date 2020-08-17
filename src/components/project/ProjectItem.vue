<template>
  <section class="border-bottom pb-4 mb-5">
    <a-row type="flex">
      <a-col :md="12" class="mb-4">
        <div
          class="bg-image h-100 hover-overlay ripple shadow-2-strong"
          :style="{ 'background-image': 'url(' + img + ')' }"
          data-ripple-color="light"
        >
          <router-link :to="'/project/' + id">
            <div
              class="mask"
              :style="{ 'background-image': 'url(' + img + ')' }"
            ></div>
          </router-link>
        </div>
      </a-col>
      <a-col :md="12" class="px-4 project-item__content">
        <a-row justify="start" type="flex">
          <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            {{ time }}
          </span>
        </a-row>
        <h4 class="text-left">
          <strong>{{ title }}</strong>
        </h4>
        <p class="text-muted text-left">
          {{ description }}
        </p>
        <a-row type="flex" justify="start">
          <router-link :to="'/project/' + id">
            <button type="button" class="btn btn-primary">Read more</button>
          </router-link>
        </a-row>
      </a-col>
    </a-row>
  </section>
</template>

<script lang="ts">
// import { Row, Col } from "ant-design-vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
export default class ProjectItem extends Vue {
  public id!: string;
  public img!: string;
  public name!: string;
  public time!: string;
  public description!: string;
}
</script>

<style lang="scss" scoped>
.project-item {
  &__content {
    min-height: 250px;
  }
}

.bg-image {
  background-size: cover;
  background-position: center;
}
.mask {
  background-color: rgba(251, 251, 251, 0.15);
  background-size: cover;
  background-position: center;
  background-attachment: unset;
  transform: scale(1.1);
  transition: all 200ms cubic-bezier(0.4, 0, 1, 1);
}
</style>
