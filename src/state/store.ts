import { create } from "zustand";

type Vec3 = { x: number; y: number; z: number };

type ExhibitState = {
  cameraPosition: Vec3;
  setCameraXPos: (pos: number) => void;
  setCameraYPos: (pos: number) => void;
  setCameraZPos: (pos: number) => void;
};

const useStore = create<ExhibitState>((set) => ({
  cameraPosition: { x: 0, y: 0, z: 0 },
  setCameraXPos: (x) =>
    set((state) => ({ cameraPosition: { ...state.cameraPosition, x } })),
  setCameraYPos: (y) =>
    set((state) => ({ cameraPosition: { ...state.cameraPosition, y } })),
  setCameraZPos: (z) =>
    set((state) => ({ cameraPosition: { ...state.cameraPosition, z } })),
}));

export default useStore;
