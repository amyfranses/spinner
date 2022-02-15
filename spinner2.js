let spinnerArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 0;
for (let char of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, (delay += 200));
}
setTimeout(() => {
  console.log();
}, delay);
