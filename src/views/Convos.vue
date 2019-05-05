<template>
  <div>
    <main>
      <section>
        <div class="heading">会話一覧</div>
        <div class="convo-container">
          <div
            @click="getConvo(convo)"
            v-for="convo in convos"
            :key="convo.id"
            class="convo"
          >
            <font-awesome-icon icon="comment" class="fa-2x"></font-awesome-icon>
            <p class="username">{{ getUsername(convo) }}</p>
            <div class="add-icon">
              <font-awesome-icon icon="plus" class="fa-1x"></font-awesome-icon>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import gql from "graphql-tag";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { getUserAndConversations } from "@/graphql/queries";

export default class Convos extends Vue {
  convos = [];
  isModal = false;

  @Getter("auth/username") username;
  @Getter("auth/nickname") nickname;

  created() {
    this.$store.dispatch("auth/currentUser").catch(() => {
      this.$router.push("/login");
    });
  }

  getUsername(convo): string {
    if (convo === null) {
      return "";
    }
    return convo.conversation.associated.items.find(response => {
      return response.user.id !== this.username;
    }).user.username;
  }

  getConvo(convo) {
    this.$router.push({
      name: "convo",
      params: { id: convo.conversation.id }
    });
  }

  get apollo() {
    return {
      convos: {
        query: () => gql(getUserAndConversations),
        variables() {
          if (this.username === null) {
            return;
          }
          return { id: this.username };
        },
        update: data => {
          return data.getUser.conversations.items;
        }
      }
    };
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

.convo-container {
  margin: 0 10px;
}

.convo {
  display: flex;
  align-items: center;
  padding: 10px;
  color: $base-label-color;
  margin-bottom: 10px;
  background-color: #ffff99;
  border-radius: 10px;
}

.username {
  margin-left: 10px;
  color: $base-label-color;
}

.add-icon {
  margin-left: auto;
}
</style>
