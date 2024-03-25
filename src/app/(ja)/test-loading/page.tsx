const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  await sleep(3000);

  return <div>test api {JSON.stringify(data)}</div>;
}
