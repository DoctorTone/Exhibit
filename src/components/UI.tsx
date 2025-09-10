import { useControls } from "leva";
import usePosition from "../state/store";
import { CAMERA_POSITION } from "../state/Config";

const UI = () => {
  const setCameraXPos = usePosition((state) => state.setCameraXPos);
  const setCameraYPos = usePosition((state) => state.setCameraYPos);
  const setCameraZPos = usePosition((state) => state.setCameraZPos);

  useControls({
    xCoord: {
      value: CAMERA_POSITION.X,
      min: 0,
      max: 10,
      step: 0.1,
      onChange: (value) => {
        setCameraXPos(value);
        // DEBUG
        console.log("Cam x = ", value);
      },
    },
    yCoord: {
      value: CAMERA_POSITION.Y,
      min: -5,
      max: 10,
      step: 0.1,
      onChange: (value) => {
        setCameraYPos(value);
      },
    },
    zCoord: {
      value: CAMERA_POSITION.Z,
      min: 0,
      max: 10,
      step: 0.1,
      onChange: (value) => {
        setCameraZPos(value);
      },
    },
  });

  return null;
};

export default UI;
