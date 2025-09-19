import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { Vector3 } from "three";

const tempVec = new Vector3();

const NumberedPin = () => {
  const circleRef = useRef(null);

  const showInfo = () => {
    console.log("Clicked me!");
  };

  useFrame(() => {
    if (circleRef.current) {
      circleRef.current.getWorldPosition(tempVec);
      console.log("Pos = ", tempVec);
    }
  });

  return (
    <Billboard>
      <group position={[1, 0, 0.5]}>
        <mesh ref={circleRef}>
          <circleGeometry args={[0.1, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh ref={circleRef}>
          <circleGeometry args={[0.08, 32]} />
          <meshBasicMaterial color="#5e5f61" />
        </mesh>
        <Text
          onClick={showInfo}
          fontSize={0.08}
          color="white"
          outlineWidth={0.012}
          outlineColor="black"
        >
          1
        </Text>
      </group>
    </Billboard>
  );
};

export default NumberedPin;
