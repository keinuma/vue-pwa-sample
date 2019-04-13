<template>
  <div class="container">
    <router-link class="wrapper" to="/">
      <img class="logo" alt="Logo" :src="logoPath" />
      <h2 class="header-title">チャットアプリ</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  data() {
    return {
      logoPath: require("@/assets/logo.png")
    };
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";

.container {
  background-color: $base-background;
  align-items: center;
  width: 100%;
  display: flex;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.logo {
  padding: 5px 10px;
}
.header-title {
  display: flex;
}
</style>
