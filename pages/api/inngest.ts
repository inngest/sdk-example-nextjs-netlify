import { Inngest } from "inngest";
// we can make this `inngest/next` or directly expose via `nextRegister` etc
import { register } from "inngest/dist/handlers/next";
import { Events } from "../../__generated__/inngest";

const inngest = new Inngest<Events>("My App", "API_KEY");

const foo = inngest.createFunction(
  "Hello---my _=👍 :) heere we gooo!",
  "demo/event.sent",
  ({ event, ctx, steps }) => ({
    message: "I ran foo!",
    data: event.data,
  })
);

const bar = inngest.createFunction("Bar", "demo/event.blah", ({ event }) => ({
  message: "I ran bar!",
  data: event.data,
}));

console.log("foo:", foo.id, bar.id);

export default register(inngest, "SIGNING_KEY", [foo, bar]);
