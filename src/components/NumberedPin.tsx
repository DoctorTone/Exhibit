import { Billboard, Text } from "@react-three/drei";
import { Vector3 } from "three";
import useStore from "../state/store";

interface PinProps {
  pinPosition: Vector3;
  index: number;
}

const NumberedPin = ({ pinPosition, index }: PinProps) => {
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  const showInfo = () => {
    setShowInfoDialog(true);
  };

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
