import { type RefObject, useRef } from "react";
import type { Vector3, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

interface InfoProps {
  posRefs: RefObject<Vector3>[];
}

const InfoMarkers = ({ posRefs }: InfoProps) => {
  const meshRefs = [
    useRef<Mesh>(null!),
    useRef<Mesh>(null!),
    useRef<Mesh>(null!),
  ];

  useFrame(() => {
    for (let i = 0; i < posRefs.length; ++i) {
      if (meshRefs[i].current && posRefs[i].current) {
        meshRefs[i].current.position.copy(posRefs[i].current);
      }
    }
  });

  return (
    <>
      {meshRefs.map((ref, index) => (
        <mesh key={index} ref={ref}>
          <sphereGeometry args={[0.025]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </>
  );
};

export default InfoMarkers;
