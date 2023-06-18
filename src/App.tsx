import Like from "./Components/Like";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <Like onClick={() => console.log('Liked')}/>
    </div>
  );
}

export default App;


{/* <Button children="Test" onClick={() => {}}/> */}
{/* <ListGroup header="Cities" items={items} onSelectItem={() => {}} /> */}