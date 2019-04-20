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

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";
import { getConvo } from "@/graphql/queries";
import { createMessage } from "@/graphql/mutations";

export default {
  name: "Messages",
  data() {
    return {
      messages: [],
      content: ""
    };
  },
  apollo: {
    messages: {
      query: () => gql(getConvo),
      variables() {
        return { id: this.$route.params.id };
      },
      update: data => {
        return data.getConvo.messages.items;
      }
    }
  },
  computed: {
    ...mapGetters("auth", ["username", "nickname"])
  },
  created() {
    this.$store.dispatch("auth/currentUser").catch(() => {
      this.$router.push("/login");
    });
  },
  methods: {
    async sendMessage() {
      if (this.content === "") return;
      const response = await this.$apollo.mutate({
        mutation: gql(createMessage),
        variables: {
          input: {
            authorId: this.username,
            content: this.content,
            messageConversationId: this.$route.params.id
          }
        }
      });
      console.log(response);
      this.content = "";
    },
    isSenderOwn(message) {
      return message.authorId === this.username;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
.message-container {
  overflow: scroll;
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
