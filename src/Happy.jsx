import Particle from "./components/Particle";

const Happy = () => {
  return (
    <>
      <div className="w-100 gap-y-11 flex justify-center flex-col items-center h-lvh">
        <img className="imageGif" src={`/cat-happy.gif`} />
        <h2 className="text-7xl">Sabía que dirías que sí!</h2>
      </div>
      <Particle />
    </>
  );
};

export default Happy;
