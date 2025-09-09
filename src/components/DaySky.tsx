import { Sky } from "@react-three/drei";

const DaySky = () => {
  return (
    <Sky
      distance={450000}
      sunPosition={[0, 1, 1]}
      inclination={0}
      azimuth={0.25}
    />
  );
};

export default DaySky;
