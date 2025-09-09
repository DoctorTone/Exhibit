import { useEffect } from "react";
import { Stage, useGLTF, useAnimations } from "@react-three/drei";

const Scene = () => {
  const { scene, animations } = useGLTF("./models/dinosaur.glb");
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  return (
    <Stage adjustCamera={false} shadows="contact">
      <primitive ref={ref} object={scene} />
    </Stage>
  );
};

export default Scene;
