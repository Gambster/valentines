import ParticleSad from "./components/ParticleSad";

const Sad = () => {
  return (
    <>
      <div className="w-100 gap-y-11 flex justify-center flex-col items-center h-lvh">
        <img className="imageGif" src={`/cat-banana.gif`} />
        <h2 className="text-7xl">Eres cuyeya mendiga!</h2>
      </div>
      <ParticleSad />
    </>
  );
};

export default Sad;
