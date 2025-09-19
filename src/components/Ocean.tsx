import React, { useRef, useMemo } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, PlaneGeometry, Vector3 } from "three";
import { Water } from "three-stdlib";

extend({ Water });

const Ocean = () => {
  const waterRef = useRef<any>(null);
  const { gl } = useThree();
  const waterNormals = useTexture("./textures/waternormals.jpg");
  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;

  const geom = useMemo(() => new PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );

  useFrame((_, delta) => {
    waterRef.current!.material.uniforms.time.value += delta;
  });

  return (
    <water
      ref={waterRef}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position-y={-30}
    />
  );
};

export default Ocean;
