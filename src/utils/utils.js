export function compare(a, b, c) {
  return (a == b) && (b == c);
}

export function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}