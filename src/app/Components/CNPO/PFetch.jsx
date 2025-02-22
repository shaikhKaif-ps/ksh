// app/components/PFetch.jsx

import Parent from "./Parent";

export default async function PFetch() {
  // Fetch data on the server
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=4&_page=${Math.floor(
      Math.random() * 10 + 1
    )}`,
    { cache: "no-store" } // Ensures fresh data on each request
  );
  const todos = await response.json();

  return <Parent  />;
}
