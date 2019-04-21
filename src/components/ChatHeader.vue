<template>
  <div class="container">
    <router-link class="wrapper" to="/users">
      <img class="logo" alt="Logo" :src="logoPath" />
      <h2 class="header-title">チャットアプリ</h2>
      <div v-if="isLogoutDisplayed" @click="onClickSignOut" class="sign-out">
        <font-awesome-icon
          icon="sign-out-alt"
          class="fa-1x"
        ></font-awesome-icon>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ChatHeader extends Vue {
  logoPath: string = require("@/assets/logo.png");

  get isLogoutDisplayed(): boolean {
    return !["login", "signUp"].includes(this.$route.name);
  }

  onClickSignOut(): void {
    this.$store.dispatch("auth/logout").catch();
    this.$router.push("/login");
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";

.container {
  background-color: $base-background;
}
.wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo {
  padding: 5px 10px;
}
.header-title {
  display: flex;
}
.sign-out {
  margin-left: auto;
  margin-right: 20px;
}
</style>
