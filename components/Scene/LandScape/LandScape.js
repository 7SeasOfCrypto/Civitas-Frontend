import {SplatStandardMaterial} from '@/utils/LandScape'
import {useTexture} from '@react-three/drei'
 const MySuperCoolTerrain=()=> {
   console.log("render")
  const [displacement, normal, noise, d1, n1, d2, n2, d3, n3, d4, splat1, splat2] = useTexture([
    '/hd/heightmap.png',
    '/hd/normalmap.png',
    '/simplex-noise.png',
    '/Assets/Cliffs_02/Rock_DarkCrackyCliffs_col.jpg',
    '/Assets/Cliffs_02/Rock_DarkCrackyCliffs_norm.jpg',
    '/Assets/Rock_04/Rock_sobermanRockWall_col.jpg',
    '/Assets/Rock_04/Rock_sobermanRockWall_norm.jpg',
    '/Assets/Mud_03/Ground_WetBumpyMud_col.jpg',
    '/Assets/Mud_03/Ground_WetBumpyMud_norm.jpg',
    '/Assets/Grass_020/ground_Grass1_col.jpg',
    '/hd/splatmap_00.png',
    '/hd/splatmap_01.png'
  ])

  const { width, height } = displacement.image

  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[100, 100, width, height]} />

    </mesh>
  )
}

export default MySuperCoolTerrain