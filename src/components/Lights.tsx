import { Environment, GradientTexture } from "@react-three/drei";
import { BackSide } from "three";

const Lights = () => {
  return (
    <>
      <Environment background>
        <mesh scale={10}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={BackSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["white", "#5e74d6"]} // Colors need to match the number of stops
            />
          </meshBasicMaterial>
        </mesh>
      </Environment>
      <directionalLight intensity={2} position={[10, 10, 5]} />
      <directionalLight intensity={1} position={[-10, 10, 5]} />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default Lights;
