<template>
  <div>
    <main>
      <section>
        <div class="heading">Conversations</div>
        <div class="user-container">
          <div
            @click="checkConversion(user)"
            v-for="convo in convos"
            :key="convo.id"
            class="user"
          >
            <font-awesome-icon icon="user" class="fa-2x"></font-awesome-icon>
            <p class="username">{{ convo.username }}</p>
            <div class="add-icon">
              <font-awesome-icon icon="plus" class="fa-1x"></font-awesome-icon>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";
import { getUserAndConversations } from "@/graphql/queries";

export default {
  name: "Convos",
  data() {
    return {
      convos: [],
      isModal: false
    };
  },
  apollo: {
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
  },
  created() {
    this.$store.dispatch("auth/currentUser").catch(() => {
      this.$router.push("/login");
    });
  },
  computed: {
    ...mapGetters("auth", ["username"])
  },
  methods: {}
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
</style>
