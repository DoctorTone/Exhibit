// import { useRef } from "react";
import { Billboard, Text } from "@react-three/drei";
import { Vector3, Group } from "three";
import useStore from "../state/store";
// import { useFrame } from "@react-three/fiber";

interface PinProps {
  pinPosition: Vector3;
  index: number;
}

const tempVec = new Vector3();

const NumberedPin = ({ pinPosition, index }: PinProps) => {
  const setShowPinDialog = useStore((state) => state.setShowPinDialog);
  // const pinRef = useRef<Group>(null);

  const showInfo = () => {
    setShowPinDialog(index);
  };

  // useFrame(() => {
  //   if (index === 1) {
  //     pinRef.current?.getWorldPosition(tempVec);
  //     console.log("Pos = ", tempVec);
  //   }
  // });

  return (
    <Billboard>
      <group position={pinPosition}>
        <mesh>
          <circleGeometry args={[0.1, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh onClick={showInfo}>
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
          {index + 1}
        </Text>
      </group>
    </Billboard>
  );
};

export default NumberedPin;
