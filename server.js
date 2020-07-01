
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock! with the env var: ", process.env.ENVLOG);
    await sleep(5000);
  }
}

main();
