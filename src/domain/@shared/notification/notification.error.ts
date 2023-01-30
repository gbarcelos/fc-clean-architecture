export default class NotificationError extends Error {

    constructor(public errors: NotificationError[]) {
    super(
      errors.map(error => error.message).join(",")
    );
  }
}
