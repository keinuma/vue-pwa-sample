<template>
  <div class="l-wrapper">
    <main>
      <section class="l-form-container">
        <div class="mod-form">
          <div class="mod-form-item">
            <label class="mod-input-text form-label">メールアドレス</label>
            <input
              v-model="email"
              placeholder="メールアドレスを入力してください"
              class="mod-input"
              type="text"
            />
          </div>
          <div class="mod-form-item">
            <label class="mod-input-text form-label">パスワード</label>
            <input
              v-model="password"
              class="mod-input"
              type="password"
              placeholder="パスワードを入力してください"
            />
          </div>
          <div>
            <button class="form-submit mod-submit" @click="onClickLogin">
              ログイン
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    onClickLogin: function() {
      this.$store
        .dispatch("auth/login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log("success");
        });
    }
  }
};
</script>

<style scoped></style>
