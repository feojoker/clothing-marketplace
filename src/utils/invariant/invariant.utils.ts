export function invariantCheck(value: unknown, msg: string): asserts value {
  if (!value) {
    throw new Error(msg);
  }
}