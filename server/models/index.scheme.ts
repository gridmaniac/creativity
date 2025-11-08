import { defineMongooseModel } from "#nuxt/mongoose";

export const Poll = defineMongooseModel<Poll>("Poll", {
  yes: Number,
  no: Number,
});
