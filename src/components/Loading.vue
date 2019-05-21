<template>
  <div v-if="isLoading" class="wrapper">
    <div class="bouncingLoader">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class Loading extends Vue {
  @Prop(Boolean)
  isLoadingState = false;

  get isLoading(): boolean {
    return this.isLoadingState;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -16px, 0);
  }
}

.wrapper {
  opacity: 0.5;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
}

.bouncingLoader > div,
.bouncingLoader:before,
.bouncingLoader:after {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: black;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}

.bouncingLoader > div,
.bouncingLoader:before,
.bouncingLoader:after {
  content: " ";
}

.bouncingLoader > div {
  margin: 0 5px;
}

.bouncingLoader > div {
  animation-delay: 0.2s;
}

.bouncingLoader:after {
  animation-delay: 0.4s;
}
</style>
