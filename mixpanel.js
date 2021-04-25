const mixpanel = require("mixpanel-browser");

mixpanel.init(
  "8596acab06eb9eaca8735f055af2b261",
  { api_host: "https://api-eu.mixpanel.com" },
  ""
);

let env_check = process.env.NODE_ENV === "production";

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;
