<template>
  <div>
    <div v-if="messages" @scroll="fetchMore" class="message-container">
      <div :key="message.id" v-for="message in messages.items">
        <p class="message" :class="{ 'sender-message': isSenderOwn(message) }">
          {{ message.content }}
        </p>
      </div>
      <div v-if="isLoading" class="loading"></div>
      <div class="scroller"></div>
    </div>
    <div class="input-container">
      <label></label>
      <input
        class="input-text"
        type="text"
        placeholder="テキスト"
        v-model="content"
      />
      <font-awesome-icon
        @click="sendMessage"
        icon="paper-plane"
        class="fa-2x send-icon"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import gql from "graphql-tag";
import { Vue, Component } from "vue-property-decorator";
import { buildMutation } from "aws-appsync";
import { client } from "@/main";
import { getConvo } from "@/graphql/queries";
import { createMessage } from "@/graphql/mutations";
import { authModule } from "@/store/modules/auth";

@Component({
  apollo: {
    messages: {
      query: () => gql(getConvo),
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      update(data) {
        if (data.getConvo === undefined) {
          return [];
        }
        this.nextToken = data.getConvo.messages.nextToken;
        return data.getConvo.messages;
      },
      fetchPolicy: "cache-and-network"
    }
  }
})
export default class Messages extends Vue {
  messages;
  content: string = "";
  nextToken: string | null = "";
  authModule = authModule;

  created(): void {
    this.authModule.getCurrentUser().catch(() => {
      this.$router.push("/login");
    });
  }

  get username() {
    return this.authModule.username;
  }

  get nickname() {
    return this.authModule.nickname;
  }

  get isLoading() {
    if (this.$apollo.queries.messages === null) {
      return false;
    }
    return this.$apollo.queries.messages.loading;
  }

  async fetchMore(event) {
    const presentHeight = event.target.scrollTop + event.target.offsetHeight;
    const contentHeight = event.target.scrollHeight;
    if (presentHeight >= contentHeight) {
      this.$apollo.queries.messages.fetchMore({
        variables: {
          id: this.$route.params.id,
          nextToken: this.messages.nextToken
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          previousResult.getConvo.messages.items = [
            ...previousResult.getConvo.messages.items,
            ...fetchMoreResult.getConvo.messages.items
          ];
          previousResult.getConvo.messages.nextToken =
            fetchMoreResult.getConvo.messages.nextToken;
          return {
            getConvo: previousResult.getConvo
          };
        }
      });
    }
  }

  async sendMessage(): Promise<any> {
    if (this.content !== "") {
      await this.$apollo.mutate(
        buildMutation(
          client,
          gql(createMessage),
          {
            inputType: gql(`
              input CreateMessageInput {
                id: ID
                authorId: String
                content: String!
                messageConversationId: ID!
                createdAt: String
                updatedAt: String
              }
            `),
            variables: {
              input: {
                authorId: this.username,
                content: this.content,
                messageConversationId: this.$route.params.id
              }
            }
          },
          _variables => [gql(getConvo)],
          "Message"
        )
      );
      this.content = "";
    }
  }

  isSenderOwn(message): boolean {
    return message.authorId === this.username;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
.message-container {
  overflow: scroll;
  height: 75vh;
}
.message {
  background-color: #ededed;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
}
.sender-message {
  background-color: #ffff99;
  margin-left: 50px;
  color: $base-label-color;
}
.scroller {
  float: left;
  clear: both;
}
.input-container {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  .input-text {
    height: 45px;
    outline: none;
    border: 2px solid #ededed;
    border-radius: 30px;
    margin: 10px;
    padding: 0 20px;
    width: 85%;
  }
  .send-icon {
    vertical-align: -0.3em;
  }
}
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  display: flex;
  margin: 10px auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: $base-color;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
</style>
