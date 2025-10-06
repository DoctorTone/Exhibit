import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3, Bone, SkinnedMesh } from "three";
import Ocean from "./Ocean";
import { INFOMARKER_OFFSETS } from "../state/Config";
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

  useEffect(() => {
    actions?.Animation?.play();
  }, []);

  useEffect(() => {
    if (!scene) return;

    const skinnedMesh = scene.getObjectByName("Object_135") as SkinnedMesh;
    if (!skinnedMesh) return;

    boneMarkerRefs[0].current = skinnedMesh.skeleton.bones[30];
    boneMarkerRefs[1].current = skinnedMesh.skeleton.bones[14];
    boneMarkerRefs[2].current = skinnedMesh.skeleton.bones[90];
  }, [scene]);

  useFrame(() => {
    for (let i = 0; i < boneMarkerRefs.length; ++i) {
      boneMarkerRefs[i].current!.getWorldPosition(tempVec);
      tempVec.y += INFOMARKER_OFFSETS[i];
      bonePosRefs[i].current.copy(tempVec);
    }
  });

  return (
    <group>
      <InfoMarkers posRefs={bonePosRefs} colour={"#487fd9"} />
      <primitive rotation={[0, -Math.PI / 5, 0]} ref={ref} object={scene} />
      <Ocean />
    </group>
  );
};

export default Scene;
