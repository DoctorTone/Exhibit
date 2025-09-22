import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Line } from "@react-three/drei";
import { Vector3, Mesh, BufferGeometry, BufferAttribute } from "three";
import { Line2 } from "three-stdlib";
import Ocean from "./Ocean";
import { NUMBERED_PINS } from "../state/Config";
import NumberedPin from "./NumberedPin";

const from = new Vector3(0.88, 0.52, 0.35);

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
        linewidth={3}
        depthTest={true}
      />
      <primitive rotation={[0, -Math.PI / 5, 0]} ref={ref} object={scene} />
      <Ocean />
      {NUMBERED_PINS.map((position, index) => (
        <NumberedPin key={index} pinPosition={position} index={index} />
      ))}
    </group>
  );
};

export default Scene;
