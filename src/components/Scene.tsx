import { useEffect, useRef, createRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Line } from "@react-three/drei";
import {
  Vector3,
  Mesh,
  BufferGeometry,
  BufferAttribute,
  Bone,
  SkinnedMesh,
} from "three";
import { Line2 } from "three-stdlib";
import Ocean from "./Ocean";
import { NUMBERED_PINS } from "../state/Config";
import NumberedPin from "./NumberedPin";
import InfoMarkers from "./InfoMarkers";

const tempVec = new Vector3();

const Scene = () => {
  const { scene, animations } = useGLTF("./models/dinosaur.glb");

  const { ref, actions } = useAnimations(animations);
  const boneMarkerRefs = [
    useRef<Bone>(null),
    useRef<Bone>(null),
    useRef<Bone>(null),
  ];
  const bonePosRefs = [
    useRef<Vector3>(new Vector3()),
    useRef<Vector3>(new Vector3()),
    useRef<Vector3>(new Vector3()),
  ];
  const lineRefs = [
    useRef<Line2>(null),
    useRef<Line2>(null),
    useRef<Line2>(null),
  ];

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  useEffect(() => {
    if (!scene) return;

    const skinnedMesh = scene.getObjectByName("Object_135") as SkinnedMesh;
    if (!skinnedMesh) return;

    boneMarkerRefs[0].current = skinnedMesh.skeleton.bones[6];
    boneMarkerRefs[1].current = skinnedMesh.skeleton.bones[24];
    boneMarkerRefs[2].current = skinnedMesh.skeleton.bones[30];
  }, [scene]);

  useFrame(() => {
    for (let i = 0; i < boneMarkerRefs.length; ++i) {
      boneMarkerRefs[i].current!.getWorldPosition(tempVec);
      tempVec.y += 0.1;
      bonePosRefs[i].current.copy(tempVec);
    }

    for (let i = 0; i < lineRefs.length; ++i) {
      const geom = lineRefs[i].current!.geometry as any;
      const from = NUMBERED_PINS[i];
      const to = bonePosRefs[i].current;
      geom.setPositions([from.x, from.y, from.z, to.x, to.y, to.z]);
      lineRefs[i].current!.computeLineDistances();
      geom.computeBoundingSphere();
    }
  });

  return (
    <group>
      <InfoMarkers posRefs={bonePosRefs} />
      {NUMBERED_PINS.map((position, index) => (
        <Line
          ref={lineRefs[index]}
          points={[
            [0, 0, 0],
            [0, 0, 0],
          ]}
          color="white"
          linewidth={3}
          depthTest={true}
        />
      ))}
      <primitive rotation={[0, -Math.PI / 5, 0]} ref={ref} object={scene} />
      <Ocean />
      {NUMBERED_PINS.map((position, index) => (
        <NumberedPin key={index} pinPosition={position} index={index} />
      ))}
    </group>
  );
};

export default Scene;
