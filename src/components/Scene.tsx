import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Scene = () => {
  const { scene, animations } = useGLTF("./models/dinosaur.glb");
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  return <primitive ref={ref} object={scene} />;
};

export default Scene;
