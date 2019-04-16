<template>
  <div>
    <main>
      <section>
        <div class="heading">Users</div>
        <div class="user-container">
          <div
            @click="checkConversion(user)"
            v-for="user in filteredUsers"
            :key="user.id"
            class="user"
          >
            <font-awesome-icon icon="user" class="fa-2x"></font-awesome-icon>
            <p class="username">{{ user.username }}</p>
            <div class="add-icon">
              <font-awesome-icon icon="plus" class="fa-1x"></font-awesome-icon>
            </div>
          </div>
        </div>
      </section>
      <section v-show="isModal" class="modal">
        <div class="modal-content">
          <p class="modal-title">会話を始めますか？</p>
          <button
            @click="onClickStartConversion"
            class="modal-button modal-active-button"
          >
            開始
          </button>
          <button
            @click="closeModal"
            class="modal-button modal-deactivate-button"
          >
            キャンセル
          </button>
          <button class="modal-cancel">
            <font-awesome-icon
              @click="closeModal"
              icon="times"
              class="fa-1x"
            ></font-awesome-icon>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";
import { listUsers } from "@/graphql/queries";
import { createConvo, createConvoLink } from "@/graphql/mutations";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      selectedUser: null,
      isModal: false
    };
  },
  apollo: {
    users: {
      query: () => gql(listUsers),
      variables() {
        return { filter: null, limit: 30, nextToken: null };
      },
      update: data => {
        return data.listUsers.items;
      }
    }
  },
  created() {
    this.$store.dispatch("auth/currentUser").catch(() => {
      this.$router.push("/login");
    });
  },
  computed: {
    ...mapGetters("auth", ["username"]),
    filteredUsers: function() {
      if (this.username === null || this.users === []) {
        return;
      }
      return this.users.filter(user => {
        return this.username !== user.id;
      });
    }
  },
  methods: {
    onClickLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
    checkConversion(user) {
      if (user.conversations.nextToken === null) {
        this.isModal = true;
        this.selectedUser = user;
      }
    },
    async onClickStartConversion() {
      const user = this.selectedUser;
      const members = [user.id, this.username].sort();
      const conversationName = members.join(",");
      const convo = { name: conversationName, members };
      const conversation = await this.$apollo.mutate({
        mutation: gql(createConvo),
        variables: { input: { ...convo } }
      });
      const {
        data: {
          createConvo: { id: convoLinkConversationId }
        }
      } = conversation;
      const relation1 = {
        convoLinkUserId: this.username,
        convoLinkConversationId
      };
      const relation2 = { convoLinkUserId: user.id, convoLinkConversationId };
      await this.$apollo.mutate({
        mutation: gql(createConvoLink),
        variables: { input: relation1 }
      });
      await this.$apollo.mutate({
        mutation: gql(createConvoLink),
        variables: { input: relation2 }
      });
    },
    closeModal() {
      this.isModal = false;
      this.selectedUser = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/imports.scss";
.heading {
  font-size: 1.8rem;
  color: $base-label-color;
  margin: 10px;
  border-bottom: 2px solid $base-background;
}

.user-container {
  margin: 0 10px;
}

.user {
  display: flex;
  align-items: center;
  padding: 10px;
  color: $base-label-color;
  margin-bottom: 10px;
  background-color: $base-background;
  border-radius: 10px;
}

.username {
  margin-left: 10px;
  color: $base-label-color;
}

.add-icon {
  margin-left: auto;
}

.modal {
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal-content {
  width: 70%;
  background-color: #fff;
  border-radius: 14px;
  left: 50%;
  top: 40%;
  padding: 50px 30px 50px;
  position: absolute;
  transform: translate(-50%, -50%);
}
.modal-title {
  color: $base-label-color;
  font-size: 1.5rem;
  text-align: center;
}
.modal-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
}

.modal-active-button {
  background-color: #ffff99;
}

.modal-deactivate-button {
  background-color: $base-background;
}

.modal-cancel {
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 15px;
  top: 7px;
}
</style>
