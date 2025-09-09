import { Box, Stage } from "@react-three/drei";

const Scene = () => {
  return (
    <Stage adjustCamera={false} shadows="contact">
      <Box>
        <meshStandardMaterial color="red" />
      </Box>
    </Stage>
  );
};

export default Scene;
