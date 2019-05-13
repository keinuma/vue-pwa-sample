<template>
  <main>
    <div class="heading">プロフィール</div>
    <section class="wrapper">
      <div class="profile-block">
        <label class="profile-label">メールアドレス</label>
        <div class="profile-item">
          <div v-show="!isEditEmail">
            <span class="">
              {{ email }}
            </span>
            <font-awesome-icon
              @click="reverseEmailEditFlg"
              icon="edit"
              class="fa-1x"
            ></font-awesome-icon>
          </div>
          <div v-show="isEditEmail">
            <label>
              <input v-model="email" class="mod-input" />
            </label>
            <font-awesome-icon
              @click="reverseEmailEditFlg"
              icon="times-circle"
              class="fa-1x"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
      <div class="profile-block">
        <div>
          <label class="profile-label">ニックネーム</label>
          <div class="profile-item">
            <div v-show="!isEditNickname">
              <span class="mod-input-value">
                {{ nickname }}
              </span>
              <font-awesome-icon
                @click="reverseNicknameEditFlg"
                icon="edit"
                class="l-icon fa-1x"
              ></font-awesome-icon>
            </div>
            <div v-show="isEditNickname">
              <label>
                <input v-model="nickname" class="mod-input" />
              </label>
              <font-awesome-icon
                @click="reverseNicknameEditFlg"
                icon="times-circle"
                class="l-icon fa-1x"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { authModule } from "@/store/modules/auth";

@Component({})
export default class Profile extends Vue {
  authModule = authModule;
  email: string = "";
  nickname: string = "";
  isEditEmail = false;
  isEditNickname = false;

  get username() {
    return this.authModule.username;
  }

  get savedEmail(): string {
    return this.authModule.email;
  }

  get savedNickname(): string {
    return this.authModule.nickname;
  }

  @Watch("savedEmail")
  onEmailChange(newEmail: string, oldEmail: string): void {
    if (newEmail !== null) {
      this.email = newEmail;
    }
  }

  @Watch("savedNickname")
  onNicknameChange(newNickname: string, oldNickname: string): void {
    if (newNickname !== null) {
      this.nickname = newNickname;
    }
  }

  reverseEmailEditFlg(): void {
    this.isEditEmail = !this.isEditEmail;
  }

  reverseNicknameEditFlg(): void {
    this.isEditNickname = !this.isEditNickname;
  }

  created() {
    this.authModule.getCurrentUser().catch(() => {
      this.$router.push("/login");
    });
    this.email = this.savedEmail;
    this.nickname = this.savedNickname;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
.heading {
  font-size: 1.6rem;
  color: $base-label-color;
  margin: 15px;
  border-bottom: 2px solid $base-background;
}
.wrapper {
  margin: 3%;
  padding: 5%;
  color: $base-label-color;
}
.profile-block {
  margin-bottom: 10px;
}
.profile-label {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.profile-item {
  padding: 10px;
}
</style>
