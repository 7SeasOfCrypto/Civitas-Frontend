import { Suspense } from 'react'
import VMarket from '/models/Market'
import Font from '/models/Font'

const Market = () => {
    return (
        <Suspense fallback={null}>
            <group position = {[61.5,1,11]} rotation={[0, 0, 0]} scale = {[1,1,1]}>
                <group position = {[0,0,0]}>
                <Font position = {[0.25,-0.75,30.75]} scale ={[0.04,0.04,0.04]}></Font>
                {/*
                <Font position = {[0.25,0.5,30.75]} scawle ={[2.5,2.5,2.5]}></Font>
                */}
                <VMarket position = {[0,0,-5]} scale={[1.75, 1.75, 1.75]}></VMarket>      
            </group>
            </group>
        </Suspense>
            ); 
                         };

export default Market