import { Suspense } from 'react'
import Keep from '/models/Keep'

const TownCenter = () => {
    return (
        <Suspense fallback={null}>
            <group position = {[134.25,0,142.3]} rotation={[0, Math.PI/180*-90, 0]} scale = {[0.6,0.6,0.9]}>
                <group position = {[0,0,0.5]}>
                <Keep position = {[0,0,-5]} scale={[1.75, 1.75, 1.75]}></Keep>      
            </group>
            </group>
        </Suspense>
            );
                        };

export default TownCenter