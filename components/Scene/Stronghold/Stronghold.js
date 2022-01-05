import { Suspense } from 'react'
import Castle from '/models/Castle'
import TowerC from '/models/TowerC'
import WallBcorner from '/models/WallBcorner'
import WallBgate from '/models/WallBgate'
import WallBwall from '/models/WallBwall'
import WallBgatedoor from '/models/WallBgatedoor'
const Stronghold = () => {
    return (
        <Suspense fallback={null}>
            <group position = {[60.15,14,200]} rotation={[0, Math.PI/360*-176, 0]} scale = {[0.9,0.9,0.9]}>
                <group position = {[0,0,0.5]}>
                <Castle position = {[0,0,-5]} scale={[1.75, 1.75, 1.75]}></Castle> /Castle's Center
                <TowerC position = {[0,2.65,9]}   rotation={[0, Math.PI/4*-2, 0]} scale={[1.75, 1.75, 1.75]}></TowerC> /Left Tower
                <TowerC position = {[0,2.65,-18]}  rotation={[0, Math.PI/4*-2, 0]} scale={[1.75, 1.75, 1.75]}></TowerC> /Right Tower
                </group>
                <group scale={[1.75, 1.75, 1.75]}>
                <group position = {[-7,0,-2.6]}>
                    <WallBgate scale={[1, 1, 1.1]}></WallBgate>
                    <WallBgatedoor scale={[1, 1, 1.1]}></WallBgatedoor>
                    <WallBwall position = {[0,0,-7.4]} scale={[1, 1, 1.4]}></WallBwall>
                    <WallBwall position = {[0,0,7.4]} scale={[1, 1, 1.4]}></WallBwall>
                    <WallBcorner position = {[0,0,-12.6]}></WallBcorner>
                    <WallBcorner position = {[0,0,12.6]}></WallBcorner>
                </group>
                <group position={[7,0,0]}>
                    <WallBwall></WallBwall>
                    <WallBwall position = {[0,0,-6]}></WallBwall>
                    <WallBwall position = {[0,0,6]}></WallBwall>
                    <WallBwall position = {[0,0,-11.5]}></WallBwall>
                    <WallBcorner position = {[0,0,-15]}></WallBcorner>
                    <WallBcorner position = {[0,0,10]}></WallBcorner>
                </group>
                <group position={[2.75,0,10]}>
                    <WallBwall rotation={[0, Math.PI/2*1, 0]}></WallBwall>
                    <WallBwall position = {[-6,0,0]} rotation={[0, Math.PI/2*1, 0]}></WallBwall>
                </group>
                <group position={[2.75,0,-15]}>
                    <WallBwall rotation={[0, Math.PI/2*1, 0]}></WallBwall>
                    <WallBwall position={[-6,0,0]} rotation={[0, Math.PI/2*1, 0]}></WallBwall>
                </group>
                </group>
                
                {/*
                
           
                
                
                <group scale={[1.4, 1.4, 1.4]}> /Corners
                    <WallBcorner position = {[8,0,-12.5]}></WallBcorner> /Upper Left Corner
                    <WallBcorner position = {[8,0,12.5]}></WallBcorner> /Upper Right Corner
                    <WallBcorner position = {[-8,0,-12.5]}></WallBcorner> /Bottom Left Corner
                    <WallBcorner position = {[-8,0,12.5]}></WallBcorner> /Bottom Right Corner
                </group>

                <group position = {[-11.75,0,0]} scale={[1.5, 1.5, 1.5]}> /Front Gate + Fence
                    <WallBgate></WallBgate>         /Front Gate
                    <WallBgatedoor></WallBgatedoor> /Front Fence
                </group>

                <group scale={[1.5, 1.5, 1.5]}> /Walls
                    <WallBwall position = {[0,0,-11.75]} rotation={[0, Math.PI/2*1, 0]}></WallBwall> /Left Wall
                    <WallBwall position = {[0,0,11.75]} rotation={[0, Math.PI/2*1, 0]}></WallBwall> /Right Wall
                    <WallBwall position = {[10,0,0]}></WallBwall> /Upper Wall
                    <WallBwall position = {[-10,0,10]}></WallBwall> /Bottom Wall 1
                    <WallBwall position = {[-10,0,-10]}></WallBwall> /Bottom Wall 2
                </group>
                */}
                
            </group>
        </Suspense>
    
            );
                        };

export default Stronghold