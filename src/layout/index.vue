<template>
  <div class="app-warpper">
    <Sidebar class="aidebar-container"></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <Nabar />
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Nabar from "./components/NavBar.vue";
import Sidebar from "./components/Sidebar/index.vue";
import AppMain from "./components/AppMain.vue";
import variables from "@/styles/variables.scss";
import {} from "vue";
console.log(variables);
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
