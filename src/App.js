import { Sky } from '@react-three/drei';

import BaseScene from './ui/BaseScene';
//import BaseBox from './ui/BaseBox';
import ThreeModel from './components/houseModel';
import BaseCharacter from './ui/BaseCharacter';

function App() {
  return (
    <BaseScene>
      
      <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
      <ThreeModel/>
      
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} />
      // <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} />
      <Sky />
    </BaseScene>
  );
}

export default App;
