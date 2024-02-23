import { useBox } from '@react-three/cannon';
import { useGLTF, Sparkles } from '@react-three/drei';

const ThreeModel2 = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/ad.glb');
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  console.log('ls 2: ', nodes)

  var nodesX = Object.keys(nodes)
  console.log('al: ', nodesX)
  var resx = []
  if(nodesX.length > 0){
    for(var e=0; e<nodes.length; e++){
      resx.push(<mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes[nodes[e]].geometry}
        material={materials.color_main}
      /> )

    }

  }

  return (
    <group ref={ref} {...props} dispose={null}>
      {resx}
      {/* <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh0'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh1'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh2'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh3'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh4'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh5'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh6'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh7'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh8'].geometry}
        material={materials.color_main}
      />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh9'].geometry}
        material={materials.color_main}
      /> */}
    </group>
  );
};

export default ThreeModel2;
