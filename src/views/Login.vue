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
          <div v-if="errorMessage !== ''" class="error">
            {{ errorMessage }}
          </div>
          <div class="mod-form-item">
            <button class="form-submit mod-submit" @click="onClickLogin">
              ログイン
            </button>
          </div>
          <div>
            <div class="mod-form-link">
              <router-link class="mod-link" to="/signUp">
                新規登録はこちら
              </router-link>
            </div>
            <div class="mod-form-link">
              <router-link class="mod-link" to="/signUp">
                パスワードをお忘れの方はこちら
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <loading :is-loading-state="isLoading"></loading>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Loading from "@/components/Loading.vue";
import * as types from "@/store/mutation-types";
import gql from "graphql-tag";
import { getUser } from "@/graphql/queries";
import { createUser } from "@/graphql/mutations";
import { authModule } from "@/store/modules/auth";

@Component({
  components: { Loading }
})
export default class Login extends Vue {
  email: string = "";
  password = "";
  authModule = authModule;

  get username() {
    return this.authModule.username;
  }

  get nickname() {
    return this.authModule.nickname;
  }

  get errorMessage() {
    return this.$store.state.error.message;
  }

  get isLoading() {
    return this.$store.state.loading;
  }

  created() {
    this.$store.commit(types.SHOW_LOADING, {}, { root: true });
    authModule.getCurrentUser().then(() => {
      if (this.username) {
        this.$router.push("/users");
      }
    });
    this.$store.commit(types.HIDE_LOADING, {}, { root: true });
  }

  onClickLogin() {
    this.$store.commit(types.SHOW_LOADING, {}, { root: true });
    authModule
      .login({
        email: this.email,
        password: this.password
      })
      .then(() => {
        if (this.username) {
          this.checkIfUserExists(this.username).catch();
          this.$router.push("/users");
        }
      })
      .catch();
    this.$store.commit(types.HIDE_LOADING, {}, { root: true });
  }

  async checkIfUserExists(id: string) {
    const response = await this.$apollo
      .query({
        query: gql(getUser),
        variables: { id }
      })
      .catch(() => {});
    if (
      response !== undefined &&
      response instanceof Object &&
      response.data !== null &&
      response.data.getUser === null
    ) {
      this.$apollo.mutate({
        mutation: gql(createUser),
        variables: {
          input: {
            username: this.nickname
          }
        }
      });
    }
  }
}
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

.error {
  color: $base-warning-color;
  align-self: center;
  margin-bottom: 10px;
}
</style>
