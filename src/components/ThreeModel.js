import { useBox } from '@react-three/cannon';
import { useGLTF, Sparkles } from '@react-three/drei';

const ThreeModel = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/model.glb');
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  console.log('ls: ', nodes)

  return (
    <group ref={ref} {...props} dispose={null}>
      <Sparkles count={40} scale={[20, 20, 10]} size={3} speed={2} />
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['imagetostl_mesh0'].geometry}
        material={materials.color_main}
        onPointerOver={(e) => {
	  alert('cat')
        }}
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
    </group>
  );
};

export default ThreeModel;
