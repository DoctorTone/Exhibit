import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import usePosition from "../state/store";
import { Vector3 } from "three";

const ResponsiveCamera = () => {
  const { camera } = useThree();
  const { cameraPosition } = usePosition();

  useEffect(() => {
    const camPos = new Vector3(
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2]
    );
    camera.position.copy(camPos);
    camera.updateProjectionMatrix();
  }, [cameraPosition]);

  return null;
};

export default ResponsiveCamera;
