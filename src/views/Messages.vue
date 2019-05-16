<template>
  <div>
    <div class="message-container">
      <div :key="message.id" v-for="message in messages">
        <p class="message" :class="{ 'sender-message': isSenderOwn(message) }">
          {{ message.content }}
        </p>
      </div>
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
      update: data => {
        if (data.getConvo === undefined) {
          return [];
        }
        return data.getConvo.messages.items;
      }
    }
  }
})
export default class Messages extends Vue {
  messages: string[] = [];
  content: string = "";
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
</style>
