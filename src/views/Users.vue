<template>
  <div>
    Users
    <button @click="onClickLogout">ログアウト</button>
  </div>
</template>

<script>
export default {
  name: "Users",
  methods: {
    onClickLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
