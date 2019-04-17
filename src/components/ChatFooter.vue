<template>
  <footer v-if="isFooterDisplayed">
    <div class="footer-container">
      <router-link class="footer-link" to="/users">ユーザー一覧</router-link>
      <router-link class="footer-link" to="/convos">会話一覧</router-link>
      <router-link class="footer-link" to="/profile">プロフィール</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ChatFooter",
  data() {
    return {
      logoPath: require("@/assets/logo.png")
    };
  },
  computed: {
    isFooterDisplayed: function() {
      console.log(!["login", "signUp"].includes(this.$route.name));
      return !["login", "signUp"].includes(this.$route.name);
    }
  },
  methods: {
    onClickSignOut: function() {
      this.$store.dispatch("auth/logout").catch();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/imports.scss";

footer {
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: $base-color;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
}
.footer-link {
  text-decoration: none;
}
</style>
