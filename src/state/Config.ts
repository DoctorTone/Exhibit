import { Vector3 } from "three";

const CAMERA_POSITION = {
  X: 0,
  Y: 2.2,
  Z: 1,
};

const TARGET_POSITION = {
  X: 0,
  Y: 1.2,
  Z: 0,
};

const INTERACTIONS = {
  PAN: true,
  ROTATE: true,
};

const NUMBERED_PINS = [
  new Vector3(1, 0, 0.5),
  new Vector3(-1.75, 0.5, 0.5),
  new Vector3(1.5, 1.5, 0.5),
];

const NUMBERED_PINS_WORLD = [
  new Vector3(0.85, 0.6, 0.35),
  new Vector3(-1.625, 0.707, 0),
  new Vector3(1.375, 1.41, -0.707),
];

const INFOMARKER_OFFSETS = [0.05, 0.1, 0.05];

export {
  CAMERA_POSITION,
  TARGET_POSITION,
  INTERACTIONS,
  NUMBERED_PINS,
  NUMBERED_PINS_WORLD,
  INFOMARKER_OFFSETS,
};
