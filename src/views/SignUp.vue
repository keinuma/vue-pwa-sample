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
          <div class="mod-form-item">
            <button class="form-submit mod-submit" @click="onClickSignUp">
              登録
            </button>
          </div>
          <div>
            <div class="mod-form-link">
              <router-link class="mod-link" to="/login">
                アカウントをお持ちの方はこちら
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onClickSignUp: function() {
      this.$store
        .dispatch("auth/signUp", {
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

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
.form-label {
  color: $base-label-color;
}

.form-submit {
  background-color: #daa520;
  color: white;
}
</style>
