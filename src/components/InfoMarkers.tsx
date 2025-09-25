import { type RefObject, useRef } from "react";
import { Vector3, type Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";

interface InfoProps {
  posRefs: RefObject<Vector3>[];
  colour: string;
}

const tempVec = new Vector3();

const InfoMarkers = ({ posRefs, colour }: InfoProps) => {
  const groupRefs = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    for (let i = 0; i < posRefs.length; ++i) {
      if (groupRefs[i].current && posRefs[i].current) {
        const parent = groupRefs[i].current!.parent;
        tempVec.copy(posRefs[i].current);
        parent?.worldToLocal(tempVec);
        groupRefs[i].current.position.copy(tempVec);
      }
    }
  });

  return (
    <>
      {groupRefs.map((ref, index) => (
        <Billboard key={index}>
          <group ref={ref}>
            <mesh>
              <circleGeometry args={[0.05, 32]} />
              <meshBasicMaterial color="orange" />
            </mesh>
            <mesh>
              <circleGeometry args={[0.04, 32]} />
              <meshBasicMaterial color="#5e5f61" />
            </mesh>
            <Text
              fontSize={0.04}
              color={colour}
              outlineWidth={0.006}
              outlineColor="black"
            >
              {index + 1}
            </Text>
          </group>
        </Billboard>
      ))}
    </>
  );
};

export default InfoMarkers;
