export default function Index() {
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
  };

  return (
    <div>
      <h1>Hello from reusable component</h1>
      <button onClick={fetchData} style={{ padding: '1rem' }}>
        Fetch Data in this component
      </button>
    </div>
  );
}
