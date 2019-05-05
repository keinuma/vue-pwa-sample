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
  </div>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";
import gql from "graphql-tag";
import { getUser } from "@/graphql/queries";
import { createUser } from "@/graphql/mutations";

@Component({})
export default class Login extends Vue {
  email: string = "";
  password = "";

  @Getter("auth/username") username: string = "";
  @Getter("auth/nickname") nickname: string = "";

  created() {
    this.$store
      .dispatch("auth/currentUser")
      .then(() => {
        if (this.username) {
          this.$router.push("/users");
        }
      })
      .catch();
  }

  onClickLogin() {
    this.$store
      .dispatch("auth/login", {
        email: this.email,
        password: this.password
      })
      .then(() => {
        if (this.username) {
          this.$router.push("/users");
        }
      })
      .catch();
  }

  async checkIfUserExists(id: string) {
    const response = await this.$apollo
      .query({
        query: gql(getUser),
        variables: { id }
      })
      .catch(err => {
        console.log(err);
      });
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
</style>
