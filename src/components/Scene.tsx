import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3, Mesh } from "three";

const Scene = () => {
  const { scene, animations } = useGLTF("./models/dinosaur.glb");
  const { ref, actions } = useAnimations(animations);
  const boneRef = useRef<Mesh>(null);

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  // DEBUG
  let bone;
  scene.traverse((node) => {
    if (node.isSkinnedMesh) {
      console.log("Bones = ", node.skeleton.bones);
      bone = node.skeleton.bones[6];
    }
  });

  let bonePosition = new Vector3();
  useFrame(() => {
    if (bone) {
      bone.getWorldPosition(bonePosition);
      bonePosition.y += 0.1;
      boneRef.current!.position.copy(bonePosition);
    }
  });

  return (
    <group>
      <mesh ref={boneRef}>
        <sphereGeometry args={[0.025]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <primitive ref={ref} object={scene} />
    </group>
  );
};

export default Scene;
