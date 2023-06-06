function fibonacci(num: number) {
  if (num === 1 || num === 2) {
    return 1;
  }
  console.log("num: ", num);
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));
