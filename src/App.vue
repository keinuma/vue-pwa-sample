<template>
  <div id="app">
    <chat-header></chat-header>
    <router-view />
    <chat-footer></chat-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ChatHeader from "@/components/ChatHeader.vue";
import ChatFooter from "@/components/ChatFooter.vue";

@Component({
  components: {
    ChatHeader,
    ChatFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";
</style>
