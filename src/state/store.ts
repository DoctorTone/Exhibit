import { create } from "zustand";
import { CAMERA_POSITION } from "./Config";

type Vec3 = [x: number, y: number, z: number];

type ExhibitState = {
  cameraPosition: Vec3;
  setCameraXPos: (pos: number) => void;
  setCameraYPos: (pos: number) => void;
  setCameraZPos: (pos: number) => void;

  showPinDialog: number;
  setShowPinDialog: (dialog: number) => void;
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
};

const usePosition = create<ExhibitState>((set) => ({
  cameraPosition: [CAMERA_POSITION.X, CAMERA_POSITION.Y, CAMERA_POSITION.Z],
  setCameraXPos: (x) =>
    set((state) => ({
      cameraPosition: [x, state.cameraPosition[1], state.cameraPosition[2]],
    })),
  setCameraYPos: (y) =>
    set((state) => ({
      cameraPosition: [state.cameraPosition[0], y, state.cameraPosition[2]],
    })),
  setCameraZPos: (z) =>
    set((state) => ({
      cameraPosition: [state.cameraPosition[0], state.cameraPosition[1], z],
    })),

  showPinDialog: -1,
  setShowPinDialog: (dialog) => set(() => ({ showPinDialog: dialog })),
  infoDialogOpen: false,
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
}));

export default usePosition;
