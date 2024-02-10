import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Particle from "./components/Particle";

const imagesSad = ["cat-sad", "cat-sad2", "cat-sad3", "cat-sad4", "cat-sad5"];
const textSad = [
  "",
  "Seburaaa?",
  "Seburitaaa?",
  "Algo no está bien...",
  "Me preocupas",
  "Última oportunidad...",
];

const Home = () => {
  const [yesSize, setYesSize] = useState(2.5);
  const [imageSad, setImageSad] = useState(0);
  const [image, setImage] = useState("cat-flower");
  const [sadTest, setSadText] = useState("No");
  const handleNoClick = () => {
    if (imageSad + 1 === 6) {
      window.location.href = "/sad";
      return;
    }
    const image = imageSad;
    setImage(imagesSad[image]);
    setSadText(textSad[imageSad + 1]);
    setImageSad(imageSad + 1);
    setYesSize(yesSize + 0.5);
  };
  return (
    <>
      <div className="w-100 gap-y-11 flex justify-center flex-col items-center h-lvh">
        <img className="imageGif" src={`/${image}.gif`} />
        <h2 className="text-7xl">Lola, will you be my valentine?</h2>
        <div className="flex gap-x-16 items-center">
          <Button
            text="Yes"
            size={yesSize}
            color="#ae00ff"
            hover="rgb(174 0 255 / 63%)"
            onClick={() => {
              window.location.href = "/yei";
            }}
          />
          <Button text={sadTest} onClick={handleNoClick} />
        </div>
      </div>
      <Particle />
    </>
  );
};

export default Home;
