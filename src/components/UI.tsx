import { useControls } from "leva";
import usePosition from "../state/store";

const UI = () => {
  const setCameraXPos = usePosition((state) => state.setCameraXPos);
  const setCameraYPos = usePosition((state) => state.setCameraYPos);
  const setCameraZPos = usePosition((state) => state.setCameraZPos);

  const controls = useControls({
    xCoord: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
      onChange: (value) => {
        setCameraXPos(value);
      },
    },
    yCoord: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
      onChange: (value) => {
        setCameraYPos(value);
      },
    },
    zCoord: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
      onChange: (value) => {
        setCameraZPos(value);
      },
    },
  });
  return null;
};

export default UI;
