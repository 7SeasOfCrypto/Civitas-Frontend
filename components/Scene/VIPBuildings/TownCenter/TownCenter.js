import { Suspense } from 'react'
import Keep from '/models/Keep'

const TownCenter = () => {
    return (
        <Suspense fallback={null}>
            <group position = {[135.7,0,141]} rotation={[0, Math.PI/180*-90, 0]} scale = {[0.6,0.6,0.6]}>
                <group position = {[0,0,0.5]}>
                <Keep position = {[0,0,-5]} scale={[1.75, 1.75, 1.75]}></Keep>      
            </group>
            </group>
        </Suspense>
            );
                        };

export default TownCenter