import { Billboard, Text } from "@react-three/drei";

const NumberedPin = () => {
  return (
    <group>
      <Billboard follow>
        <group>
          <mesh>
            <circleGeometry args={[0.08, 32]} />
            <meshBasicMaterial color="#5e5f61" />
          </mesh>
          <Text
            fontSize={0.08}
            color="white"
            outlineWidth={0.012}
            outlineColor="black"
          >
            1
          </Text>
        </group>
      </Billboard>
    </group>
  );
};

export default NumberedPin;
