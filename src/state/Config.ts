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

const NUMBERED_PINS = [new Vector3(1, 0, 0.5)];

export { CAMERA_POSITION, TARGET_POSITION, INTERACTIONS, NUMBERED_PINS };
