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
  PAN: false,
  ROTATE: false,
};

const INFO_LINES = [
  {
    color: "orange",
    width: 3,
  },
  {
    color: "orange",
    width: 3,
  },
  {
    color: "orange",
    width: 3,
  },
];

const DIALOG_TEXT = [
  {
    title: "Wings",
    text: `Pterodactylus had wings made of skin and muscle stretched over it's limbs. 
		They typically had wing spans of about 3 feet, but pterosaurs (the genus) had 
		wing spans ranging from 10 inches to over 30 feet - that's the difference between a
		sparrow and a plane!`,
  },
  {
    title: "Teeth",
    text: `Pterodactylus was a carnivore with a diet consisting of small animals.
		They had about 90 narrow and conical teeth. These
		extended back from the tips of both jaws. You probably wouldn't want to get bitten!`,
  },
  {
    title: "Reptile",
    text: `Pterodactylus was a flying reptile and was the first pterosaur fossil ever to be
		identified. Pterodactylus was not a dinosaur and, unlike dinosaurs, have left no living
		descendants.`,
  },
];

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
  DIALOG_TEXT,
  INFO_LINES,
};
