export default async function Home() {
  const value = await fetch("http://localhost:8000").then(res => res.json())
  console.log(value)
  return (
    <div>
      Hello
    </div>
  );
}
