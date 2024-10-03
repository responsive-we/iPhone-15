import React, { Suspense } from "react";
import { OrbitControls, View, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import Iphone from "./Iphone";
import Loader from "./Loader";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <Lights />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <OrbitControls
        ref={controlRef}
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        position={[0, 0, 0]}
        name={index === 1 ? "small" : "large"}
      >
        <Suspense fallback={<Loader/>}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
