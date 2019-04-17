<template>
  <div>
    {{ messages }}
    <div class="input-container">
      <label></label>
      <input class="message-input" placeholder="テキスト" v-model="content" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";
import { getConvo } from "@/graphql/queries";

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
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
}
.message-input {
  height: 45px;
  outline: none;
  border: 2px solid #ededed;
  border-radius: 30px;
  margin: 5px;
  padding: 0 20px;
  width: 90%;
}
</style>
