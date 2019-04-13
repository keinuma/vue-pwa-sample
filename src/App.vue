<template>
  <div id="app">
    <chat-header></chat-header>
    <router-view />
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader"

export default {
  name: "App",
  components: {
    ChatHeader
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";
</style>
