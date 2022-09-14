/**
 * The event payload structure for sending data to Inngest
 */
export type Events = {
  "demo/event.sent": {
    /**
     * A unique identifier for the event
     */
    name: "demo/event.sent";
    /**
     * Any data pertinent to the event
     */
    data: {
      foo: string;
    };
    /**
     * Any user data associated with the event
     * All fields ending in "_id" will be used to attribute the event to a particular user
     */
    user?: {
      /**
       * Your user's unique id in your system
       */
      external_id?: string;
      /**
       * Your user's email address
       */
      email?: string;
      /**
       * Your user's phone number
       */
      phone?: string;
      [key: string]: any;
    };
    /**
     * A specific event schema version
     * (optional)
     */
    v?: string;
    /**
     * An integer representing the milliseconds since the unix epoch at which this event occurred.
     * Defaults to the current time.
     * (optional)
     */
    ts?: number;
  };

  "demo/event.blah": {
    /**
     * A unique identifier for the event
     */
    name: "demo/event.blah";
    /**
     * Any data pertinent to the event
     */
    data: {
      bar: boolean;
    };
    /**
     * Any user data associated with the event
     * All fields ending in "_id" will be used to attribute the event to a particular user
     */
    user?: {
      /**
       * Your user's unique id in your system
       */
      external_id?: string;
      /**
       * Your user's email address
       */
      email?: string;
      /**
       * Your user's phone number
       */
      phone?: string;
      [key: string]: any;
    };
    /**
     * A specific event schema version
     * (optional)
     */
    v?: string;
    /**
     * An integer representing the milliseconds since the unix epoch at which this event occurred.
     * Defaults to the current time.
     * (optional)
     */
    ts?: number;
  };
};
