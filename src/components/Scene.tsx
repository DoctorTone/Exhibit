import { Stage, useGLTF } from "@react-three/drei";

const Scene = () => {
  const { scene } = useGLTF("./models/dinosaur.glb");

  return (
    <Stage adjustCamera={false} shadows="contact">
      <primitive object={scene} />
    </Stage>
  );
};

export default Scene;
