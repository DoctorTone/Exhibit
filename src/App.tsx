import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { INTERACTIONS } from "./state/Config";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import UI from "./components/UI";
import ResponsiveCamera from "./components/ResponsiveCamera";

function App() {
  return (
    <>
      <Canvas>
        <ResponsiveCamera />
        <Lights />
        <Scene />
        <OrbitControls
          enablePan={INTERACTIONS.PAN}
          enableRotate={INTERACTIONS.ROTATE}
          enableDamping={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <UI />
    </>
  );
}

export default App;
