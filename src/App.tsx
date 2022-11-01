import Body from "./layouts/Body";
import Navigation from "./layouts/Navigation";

const App = () => {
  return (
    <>
      <main className="grid grid-rows-6 bg-black w-screen h-screen">
        <Navigation />
        <Body />
      </main>
    </>
  );
};

export default App;
