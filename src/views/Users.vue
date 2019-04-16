<template>
  <div>
    <main>
      <section>
        <div class="heading">Users</div>
        <div class="user-container">
          <div v-for="user in filteredUsers" :key="user.id" class="user">
            <font-awesome-icon icon="user" class="fa-2x"></font-awesome-icon>
            <p class="username">{{ user.username }}</p>
            <div class="add-icon">
              <font-awesome-icon icon="plus" class="fa-1x"></font-awesome-icon>
            </div>
          </div>
        </div>
      </section>
      <section class="modal"></section>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";
import { listUsers } from "@/graphql/queries";

export default {
  name: "Users",
  data() {
    return {
      users: []
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
</style>
