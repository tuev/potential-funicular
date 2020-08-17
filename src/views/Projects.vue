<template>
  <div class="project-list">
    <div class="container">
      <ProjectItem
        v-for="project in projectList"
        :key="project.id"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projectList } from "@/common/constants/project";
import { IProjectItem } from "@/common/models/Project";
import ProjectItem from "@/components/project/ProjectItem.vue";

@Component({
  components: {
    ProjectItem,
  },
})
export default class Project extends Vue {
  projectList: IProjectItem[] = projectList;
}
</script>

<style lang="scss" scoped>
.project-list {
  margin-top: 64px;
}
</style>
