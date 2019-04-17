import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faPlus,
  faSignOutAlt,
  faTimes,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faPlus, faSignOutAlt, faTimes, faComment);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import AWSAppSyncClient from "aws-appsync";
import VueApollo from "vue-apollo";
import AWSConfig from "./aws-exports";

const config = {
  url: AWSConfig.aws_appsync_graphqlEndpoint,
  region: AWSConfig.aws_appsync_region,
  auth: {
    type: AWSConfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await AmplifyModules.Auth.currentSession()).getIdToken().getJwtToken()
  }
};
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
};

const client = new AWSAppSyncClient(config, options);

const apolloProvider = new VueApollo({
  defaultClient: client
});

Amplify.configure(AWSConfig);

Vue.use(VueApollo);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  apolloProvider
}).$mount("#app");
