import { Vector3 } from "three";

export type ScreenSize = {
  width: number;
  height: number;
};

export const CAMERA_POSITION = {
  X: 0,
  Y: 2.2,
  Z: 1.25,
};

export const TARGET_POSITION = {
  X: 0,
  Y: 1.2,
  Z: 0,
};

export const INTERACTIONS = {
  PAN: false,
  ROTATE: false,
};

// According to material UI
export const RESOLUTIONS = {
  SMALL: 600,
  MEDIUM: 900,
  LARGE: 1200,
  X_LARGE: 1536,
};

export const CONFIGURATIONS = {
  small: new Vector3(0, 2.2, 1.25),
  landscape: new Vector3(0, 2.2, 0.75),
};

export const DIALOG_TEXT = [
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
    title: "History",
    text: `Pterodactylus was a flying reptile and was the first pterosaur fossil ever to be
		identified. Pterodactylus was not a dinosaur and, unlike dinosaurs, have left no living
		descendants.`,
  },
];

export const INFOMARKER_OFFSETS = [0.05, 0.1, 0.05];
