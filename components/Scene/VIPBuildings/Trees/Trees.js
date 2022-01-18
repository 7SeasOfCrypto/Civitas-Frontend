import { Suspense } from 'react'
import Tree from '/models/Tree'
import Tree3 from '/models/Tree3'
import Tree4 from '/models/Tree4'
import Floresitas from '/models/Floresitas'
import Floresitas2 from '/models/Floresitas2'
import TreeBig from '/models/TreeBig'
import TreeRuined from '/models/TreeRuined'
import RockGrassBig from '/models/RockGrassBig'
import WoodBench1 from '/models/WoodBench1'
import TreeCut from '/models/TreeCut'
import Bush1 from '/models/Bush1'
import Grass1 from '/models/Grass1'
import BushDec from '/models/BushDec'
import BannerA from '/models/SKBannerA'
import WellOfAscension from '/models/Well'


const Trees = () => {
    const TreeScale = [1.5,1.5,1.5]
    const RoyalTreeColor = 0x1A3229
    const FlowerRed = 'Textures/FlowerRed.webp'
    const FlowerPurple = 'Textures/FlowerPurple.webp'
    const FlowerPink = 'Textures/FlowerPink.webp'

    return (
        <Suspense fallback={null}>
            <group position = {[22,0,3]} scale = {[3,3,3]}>           {/*Hueco Derecha*/}
                <Tree3 position={[38.3,0,39.4]} scale = {TreeScale}></Tree3>

                <group position={[50.65,0,0]}>                        {/*Árboles arriba 1*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,24.025]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,28.5]} scale = {TreeScale}></Tree3>   
                </group>

                <group position={[39.5,0,0]}>                         {/*Árboles arriba 2*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,24.025]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,28.5]} scale = {TreeScale}></Tree3>    
                </group>    
                
                <group position={[27.3,0,4.5]}>                       {/*Árboles Plaza Arriba*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,24.025]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,28.5]} scale = {TreeScale}></Tree3>    
                </group>

                <group position={[14,0,4.5]}>                         {/*Árboles Plaza Abajo*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,24.025]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,28.5]} scale = {TreeScale}></Tree3>    
                </group>
                <group position={[1.75,0,4.5]}>                       {/*Árboles Abajo*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,28.45]} scale = {TreeScale}></Tree3>    
                </group> 
                
                <group position={[1.75,0,0]}>                       {/*Árboles Abajo 2*/}
                <Tree3 position={[0,0,19.55]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[0,0,15.45]} scale = {TreeScale}></Tree3>
                <Tree3 position={[0,0,11]}    scale = {TreeScale}></Tree3>
                <Tree3 position={[0,0,37.45]} scale = {TreeScale}></Tree3>
                <Tree3 position={[0,0,42.15]} scale = {TreeScale}></Tree3>
                <Tree3 position={[0,0,46.45]} scale = {TreeScale}></Tree3>
                </group>

                
                <group position={[0,0,2]}>                       {/*Árboles Abajo*/}
                <Tree3 position={[15.5,0,0]} scale = {TreeScale}></Tree3>    
                <Tree3 position={[26.5,0,0]} scale = {TreeScale}></Tree3>    
                </group> 
            </group>



            <group>
                <group position = {[18.34,3,1.5]} scale = {[0.75,1.25,0.75]}>       {/*Árbolitos decoración camino abajo izquierda 1*/}
                <Tree4 position = {[0,0,9.1]}></Tree4>
                <Tree4 position = {[0,0,22.4]}></Tree4>
                </group>
                
                <group position = {[28.34,3,1.5]} scale = {[0.75,1.25,0.75]}>       {/*Árbolitos decoración camino abajo izquierda 2*/}
                <Tree4 position = {[0,0,9.1]}></Tree4>
                <Tree4 position = {[0,0,22.4]}></Tree4>
                </group>
                
                <group position = {[54.9,3,15]} scale = {[0.75,1.25,0.75]}>         {/*Árbolitos decoración Edificio Izquierda*/}
                <Tree4 position = {[0,0,0]}></Tree4>
                <Tree4 position = {[17.8,0,0]}></Tree4>
                    <group position = {[4.4,0,0,]}>
                    <Tree4 position = {[0,0,0]}></Tree4>
                    <Tree4 position = {[8.9,0,0]}></Tree4>
                    </group>
                </group> 

                
                <group position = {[48.25,3,38.25]} scale = {[0.75,1.25,0.75]}>         {/*Árbolitos decoración Plaza Mercado*/}
                <Tree4 position = {[0,0,0]}></Tree4>
                <Tree4 position = {[35.5,0,0]}></Tree4>
                </group>
                
                <group position = {[54.8,1.8,25]} scale = {[2,2,2]}>                    {/*Arbustos decoración Plaza Mercado*/}
                <BushDec position = {[0,0,0]}></BushDec>
                <BushDec position = {[6.7,0,0]}></BushDec>
                    <group position = {[0,0,1.6]}>
                    <BushDec position = {[0,0,0]}></BushDec>
                    <BushDec position = {[6.7,0,0]}></BushDec>
                    </group>
                </group>


                <group position = {[71.5,0,29]} scale = {[3,3,3]}>                        {/*Árboles decoración Plaza Mercado*/}
                <Tree3 position = {[0,0,0]} scale = {TreeScale}></Tree3>
                <Tree3 position = {[8.9,0,0]} scale = {TreeScale}></Tree3>
                </group>


                <group position = {[55,0,21.9]} scale = {[3,3,3]}>    {/*Flores decoración Edificio Izquierda*/}
                <Floresitas2 position = {[4.45,0,-1.1]}></Floresitas2>
                <Floresitas2 position = {[0,0,-1.1]}></Floresitas2>
                    <group position = {[1.1,0,-1.1]}>
                    <Floresitas2 position = {[0,0,0]}></Floresitas2>
                    <Floresitas2 position = {[2.2,0,0]}></Floresitas2>
                    </group>
                </group>

                <group position = {[124.9,1.1,148.6]} scale = {[3,3,3]}>    {/*Flores decoración Edificio Derecha*/}
                <Bush1 position = {[3.35,0,0]}></Bush1>
                <Bush1 position = {[0,0,0]}></Bush1>
                <Bush1 position = {[-0.75,0,0]}></Bush1>
                <Bush1 position = {[4.1,0,0]}></Bush1>
                    <group position = {[0,0,0]}>
                    <Bush1 position = {[3.35,0,0]}></Bush1>
                
                    </group>
                </group>
                
                <group position = {[51.65,0,25.325]} scale = {[3,3,3]}>    {/*Flores decoración Plaza Mercado*/}
                <Floresitas2 color={FlowerPurple} position = {[0,0,0]}></Floresitas2>
                <Floresitas2 color={FlowerPurple} position = {[6.65,0,0]}></Floresitas2>
                    <group position = {[0,0,1.1]}>
                    <Floresitas2 color={FlowerRed} position = {[0,0,0]}></Floresitas2>
                    <Floresitas2 color={FlowerRed} position = {[6.65,0,0]}></Floresitas2>
                        <group position = {[-1.1,0,0]}>
                        <Floresitas2 position = {[0,0,0]}></Floresitas2>
                        <Floresitas2 position = {[8.85,0,0]}></Floresitas2>
                            <group position = {[0,0,1.1]}>
                            <Floresitas2 position = {[0,0,0]}></Floresitas2>
                            <Floresitas2 position = {[8.85,0,0]}></Floresitas2>
                                <group position = {[0,0,1.1]}>
                                <Floresitas2 color={FlowerPurple} position = {[0,0,0]}></Floresitas2>
                                <Floresitas2 color={FlowerPurple} position = {[8.85,0,0]}></Floresitas2>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>

                
                

                <group position = {[51.5,2.57,111.575]} scale = {[0.75,1.25,0.75]}>    {/*Árbolitos decoración Plaza Castillo*/}
                <Tree4 color2={RoyalTreeColor} position = {[0,0,0]}></Tree4>
                <Tree4 color2={RoyalTreeColor} position = {[26.65,0,0]}></Tree4>
                </group>
                
                <group position = {[55,2.57,148.25]} scale = {[0.75,1.25,0.75]}>    {/*Árbolitos decoración Camino al Castillo*/}
                <Tree4 color2={RoyalTreeColor} position = {[0,0,0]}></Tree4>
                <Tree4 color2={RoyalTreeColor} position = {[17.65,0,0]}></Tree4>
                    <group position = {[0,0,22.25]}>
                    <Tree4 color2={RoyalTreeColor} position = {[0,0,0]}></Tree4>
                    <Tree4 color2={RoyalTreeColor} position = {[17.65,0,0]}></Tree4>
                    </group>
                
                </group>
                
                <group position = {[51.6,0.55,149.25]} rotation = {[0,Math.PI/180*-180,0]}> {/*Banners Camino Castillo*/}
                <BannerA position={[0,0,0]}></BannerA>
                <BannerA position={[-20,0,0]}></BannerA>
                </group>
                <group position = {[55,0.55,65.25]} rotation = {[0,Math.PI/180*-180,0]}> {/*Banners Camino Castillo*/}
                <BannerA position={[0,0,0]}></BannerA>
                <BannerA position={[-13.5,0,0]}></BannerA>
                </group>

                <group position = {[54.95,0,158.6]} scale = {[3,3,3]}>    {/*Flores decoración Camino al Castillo*/}
                <Floresitas2 position = {[0,0,0]}></Floresitas2>
                <Floresitas2 position = {[4.45,0,0]}></Floresitas2>
                <Floresitas2 position = {[4.45,0,-1.1]}></Floresitas2>
                <Floresitas2 position = {[0,0,-1.1]}></Floresitas2>
                </group>

                <group position = {[18.25,0,15.25]} scale = {[3,3,3]}>    {/*Flores decoración Entrada Izquierda 1*/}
                <Floresitas2 position = {[0,0,0]}></Floresitas2>
                <Floresitas2 position = {[3.35,0,0]}></Floresitas2>
                <Floresitas2 position = {[0,0,-1.1]}></Floresitas2>
                <Floresitas2 position = {[3.35,0,-1.1]}></Floresitas2>
                </group>
                <group position = {[14.9,0,8.6]} scale = {[3,3,3]}>      {/*Flores decoración Entrada Izquierda 2*/}
                <Floresitas2 position = {[0,0,0]}></Floresitas2>
                <Floresitas2 position = {[-1.1,0,0]}></Floresitas2>
                <Floresitas2 position = {[6.68,0,0]}></Floresitas2>
                <Floresitas2 position = {[5.58,0,0]}></Floresitas2>
                </group> 
                
                <group position = {[58.25,0,72]} scale = {[3,3,3]}>      {/*Flores decoración Conector plazas centrales*/}
                <BushDec position = {[0,0.8,0]}></BushDec>
                <BushDec position = {[2.25,0.8,0]}></BushDec>
                    <group position = {[0,0,2.22]}>
                    <Floresitas2 position = {[0,0,0]}></Floresitas2>
                    <Floresitas2 color = {FlowerRed} position = {[2.25,0,0]}></Floresitas2>
                        <group position = {[0,0,2.22]}>
                        <Floresitas2 color = {FlowerRed} position = {[0,0,0]}></Floresitas2>
                        <Floresitas2  position = {[2.25,0,0]}></Floresitas2>                        
                                <group position = {[0,0,2.22]}>
                                <Floresitas2  position = {[0,0,0]}></Floresitas2>
                                <Floresitas2 color = {FlowerRed} position = {[2.25,0,0]}></Floresitas2>
                                    <group position = {[0,0,2.22]}>
                                    <Floresitas2 color = {FlowerRed} position = {[0,0,0]}></Floresitas2>
                                    <Floresitas2  position = {[2.25,0,0]}></Floresitas2>
                                        <group position = {[0,0,2.22]}>
                                        <BushDec position = {[0,0.8,0]}></BushDec>
                                        <BushDec position = {[2.25,0.8,0]}></BushDec>
                                        </group>
                                    </group>
                                </group>
                        </group>
                    </group>
                </group>

                

                <group position = {[85,0,127]} scale = {[5,5,5]}>        {/*Árboles Grandes decoración Plaza Mercado*/}
                <TreeBig position = {[0,0,0]}></TreeBig>
                <TreeBig position = {[4.675,0,0]}></TreeBig>
                </group>
                
                <group position = {[94.9,1.8,141.5]} scale = {[2,2,2]}>  {/*Árbustos decoración Plaza Mercado*/}
                <BushDec position = {[0,0,0]}></BushDec>
                <BushDec position = {[-33.3,0,0]}></BushDec>
                
                </group>

                <group position = {[150,0.4,20]} scale = {[3,3,3]}>
                <TreeRuined position = {[6.33,0,0]} rotation = {[0,Math.PI/2,0]}></TreeRuined>
                <RockGrassBig position ={[8.25,0,-0.25]}></RockGrassBig>
                <TreeCut position={[-5,0.1,3.6]} scale = {[2,2,2]}></TreeCut>
                <Grass1 position = {[0,0,0]}></Grass1>
                <Bush1 position = {[0,0.1,0]}></Bush1>
                <WoodBench1 position={[1,0.1,-2.25]} rotation = {[0,Math.PI/2,0]}></WoodBench1>
                <Tree3 position={[19.5,0,-1.75]} scale = {[3,3,3]}></Tree3>
                </group>

                <group position = {[150,0.4,152.5]} scale = {[3,3,3]}>
                <Grass1 position = {[0,0,0]}></Grass1>
                <Tree3 position={[17.3,-0.4,-2.5]} scale = {[2.5,2.5,2.5]}></Tree3>
                <Tree3 position={[18,-0.4,1]} scale = {[2.5,2.5,2.5]}></Tree3>
                <TreeCut position={[-5,0.1,4.8]} scale = {[2,2,2]}></TreeCut>
                <Bush1 position = {[-1,0.1,1]}></Bush1>
                <RockGrassBig rotation = {[0,Math.PI / 180 * 135,0]} position ={[1,0,-7.05]} scale ={[0.4,0.4,0.5]}></RockGrassBig>
                    <group position = {[-0.4,0,0.3]}>
                    <WellOfAscension position = {[3,0,-3.4]} scale = {[1.75, 1.75,1.75]} rotation = {[0,Math.PI/180*25,0]}></WellOfAscension>
                    <Bush1 position = {[0.75,0.1,-0.85]}></Bush1>
                    </group>
                </group>
                </group>
                
        </Suspense>
            ); 
                         };

export default Trees