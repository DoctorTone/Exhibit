import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, PlaneGeometry, Vector3 } from "three";
import { Water } from "three-stdlib";

extend({ Water });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        ref?: React.Ref<any>;
        args?: any[];
        "rotation-x"?: number;
        "position-y"?: number;
      };
    }
  }
}

const Ocean = () => {
  const waterRef = useRef<any>(null);
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
