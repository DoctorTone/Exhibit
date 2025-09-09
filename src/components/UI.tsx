import { useControls } from "leva";

const UI = () => {
  const { xCoord, yCoord, zCoord } = useControls({
    xCoord: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
    },
    y: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
    },
    z: {
      value: 0,
      min: -50,
      max: 50,
      step: 1,
    },
  });
  return null;
};

export default UI;
