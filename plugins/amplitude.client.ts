import { defineNuxtPlugin } from "#app";
import * as amplitude from "@amplitude/analytics-browser";

export default defineNuxtPlugin((nuxtApp) => {
  amplitude.init("e0d58d1255bd7278f9f971291df6c110");

  return {
    provide: {
      amplitude,
    },
  };
});
