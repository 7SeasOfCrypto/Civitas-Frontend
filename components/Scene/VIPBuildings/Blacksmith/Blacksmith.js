import { Suspense } from 'react'
import VBlacksmith from '/models/Blacksmith'
import WallBgatedoor from '/models/WallBgatedoor'
import BallistaLl2 from '/models/BallistaLl2'
import CatapultLl2 from '/models/CatapultLl2'

const Blacksmith = () => {
    return (
        <Suspense fallback={null}>
            <group position = {[153.5,1,25]} rotation={[0, Math.PI/360*0, 0]} scale = {[0.9,0.9,0.9]}>
                <group position = {[0,0,0]}>
                <VBlacksmith position = {[0,0,13.5575]} scale={[1.75, 1.75, 1.75]}></VBlacksmith>
                <group  position = {[3.25,2,-5]} rotation={[ Math.PI/180*180, Math.PI/180*90,0]} scale = {[1,1,1.75]}>
                <WallBgatedoor position = {[0,0,-3.54]}></WallBgatedoor>
                <WallBgatedoor scale = {[1,1,0.91]}></WallBgatedoor>
                </group>

                <group  position = {[7,2,-1.25]} rotation={[ Math.PI/180*180, 0,0]} scale = {[1,1,1.75]}>
                <WallBgatedoor position = {[0,0,-3.54]}></WallBgatedoor>
                <WallBgatedoor scale = {[1,1,0.91]}></WallBgatedoor>
                <WallBgatedoor position = {[0,0,-8.2]}></WallBgatedoor>
                </group>

                <group  position = {[-7,2,-1.25]} rotation={[ Math.PI/180*180, 0,0]} scale = {[1,1,1.75]}>
                <WallBgatedoor position = {[0,0,-3.54]}></WallBgatedoor>
                <WallBgatedoor scale = {[1,1,0.91]}></WallBgatedoor>
                <WallBgatedoor position = {[0,0,-9.92]} scale = {[1,1,0.9]}></WallBgatedoor>
                </group>

                <group  position = {[3.25,2,20]} rotation={[ Math.PI/180*180, Math.PI/180*90,0]} scale = {[1,1,1.75]}>
                <WallBgatedoor position = {[0,0,-3.54]}></WallBgatedoor>
                <WallBgatedoor scale = {[1,1,0.91]}></WallBgatedoor>
                </group>


                <group>
                <BallistaLl2 position = {[2,0,-1]} rotation = {[0,Math.PI/180*-45,0]} scale = {[2,2,2]}></BallistaLl2>
                <CatapultLl2 position = {[-3,0,4]} rotation = {[0,Math.PI/180*-135,0]} scale = {[2,2,2]}></CatapultLl2>
                </group>
            </group>
            </group>
        </Suspense>
            );
                        };

export default Blacksmith