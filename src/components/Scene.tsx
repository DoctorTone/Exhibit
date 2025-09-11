import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Line } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";
import { Line2 } from "three-stdlib";

const from = new Vector3(1.562, 0, -1.249);

const Scene = () => {
  const { scene, animations } = useGLTF("./models/dinosaur.glb");
  const { ref, actions } = useAnimations(animations);
  const boneMarkerRef = useRef<Mesh>(null);
  const lineRef = useRef<Line2>(null);

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  // DEBUG
  let bone;
  scene.traverse((node) => {
    if (node.isSkinnedMesh) {
      // console.log("Bones = ", node.skeleton.bones);
      bone = node.skeleton.bones[6];
    }
  });

  let bonePosition = new Vector3();
  useFrame(() => {
    if (bone) {
      bone.getWorldPosition(bonePosition);
      bonePosition.y += 0.1;
      boneMarkerRef.current!.position.copy(bonePosition);
    }
    const geom = lineRef.current!.geometry as any;
    geom.setPositions([
      from.x,
      from.y,
      from.z,
      bonePosition.x,
      bonePosition.y,
      bonePosition.z,
    ]);
    lineRef.current!.computeLineDistances();
    geom.computeBoundingSphere();
  });

  return (
    <group>
      <mesh ref={boneMarkerRef}>
        <sphereGeometry args={[0.025]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <Line
        ref={lineRef}
        points={[
          [0, 0, 0],
          [0, 0, 0],
        ]}
        color="white"
        linewidth={2}
        depthTest={false}
        dashed={false}
        dashSize={0.05}
        gapSize={0.05}
      />
      <primitive ref={ref} object={scene} />
    </group>
  );
};

export default Scene;
