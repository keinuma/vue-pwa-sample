<template>
  <footer v-if="isFooterDisplayed">
    <router-link class="footer-link" to="/users">ユーザー一覧</router-link>
    <router-link class="footer-link" to="/convos">会話一覧</router-link>
    <router-link class="footer-link" to="/profile">プロフィール</router-link>
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

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";

footer {
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: $base-background;
  border-top: 1px solid $base-color;
}
.footer-link {
  text-decoration: none;
}
</style>
