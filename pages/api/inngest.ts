import { Inngest } from "inngest";
import { serve } from "inngest/next";
import { Events } from "../../__generated__/inngest";

const inngest = new Inngest<Events>({ name: "My App" });

const foo = inngest.createFunction(
  "Hello---my _=👍 :) heere we gooo!",
  "demo/event.sent",
  ({ event, ctx, steps }) => ({
    message: "I ran foo!",
    data: event.data,
  })
);

const bar = inngest.createFunction("Bar", "demo/event.sent", ({ event }) => ({
  message: "I ran bar!",
  data: event.data,
}));

export default serve(inngest, process.env.INNGEST_SIGNING_KEY as string, [
  foo,
  bar,
]);
