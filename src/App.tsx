import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SCENE, INTERACTIONS } from "./state/Config";
import DaySky from "./components/DaySky";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.CAMERA_POSITION }}>
        <DaySky />
        <Scene />
        <OrbitControls
          makeDefault
          enablePan={INTERACTIONS.PAN}
          enableRotate={INTERACTIONS.ROTATE}
          enableDamping={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}

export default App;
