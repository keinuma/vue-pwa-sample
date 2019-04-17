<template>
  <div id="app">
    <chat-header></chat-header>
    <router-view />
    <chat-footer></chat-footer>
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatFooter from "@/components/ChatFooter";

export default {
  name: "App",
  components: {
    ChatHeader,
    ChatFooter
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";
</style>
