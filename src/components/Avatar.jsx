import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Avatar(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/646d9dcdc8a5f5bddbfac913.glb");

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX(
    "animations/Standing Idle.fbx"
  );
  const { animations: fallingAnimation } = useFBX(
    "animations/Falling Idle.fbx"
  );

  const { actions } = useAnimations(
    [...typingAnimation, ...standingAnimation, ...fallingAnimation],
    group
  );

  // Log all nodes to check their names
  useEffect(() => {
    Object.keys(nodes).forEach((nodeName) => {
      console.log(`Node: ${nodeName}`, nodes[nodeName]);
    });
  }, [nodes]);

  // Log all animation tracks to check their names
  useEffect(() => {
    typingAnimation.forEach((clip) => {
      clip.tracks.forEach((track) => {
        console.log(`Typing Animation Track: ${track.name}`);
      });
    });
    standingAnimation.forEach((clip) => {
      clip.tracks.forEach((track) => {
        console.log(`Standing Animation Track: ${track.name}`);
      });
    });
    fallingAnimation.forEach((clip) => {
      clip.tracks.forEach((track) => {
        console.log(`Falling Animation Track: ${track.name}`);
      });
    });
  }, [typingAnimation, standingAnimation, fallingAnimation]);

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    if (actions[animation]) {
      actions[animation].reset().fadeIn(0.5).play();
      return () => {
        actions[animation].reset().fadeOut(0.5);
      };
    } else {
      console.error(`Animation ${animation} not found in actions`);
    }
  }, [animation, actions]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/646d9dcdc8a5f5bddbfac913.glb");
