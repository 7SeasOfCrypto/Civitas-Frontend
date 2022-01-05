import { models } from 'models'
import { useStore } from 'store'
import Progress from './Progress'

import { CELL_SIZE } from 'constants'
import { useGesture } from '@use-gesture/react'
const Buildings = () => {
    const { listBuild } = useStore()

    const ArrayBuild = listBuild.map((value, index) => {
        const { x, y, Id, id_model, level, completed,timeCreated } = value
        const { id, maxlevel, complete, build, size,buildTime } = models[id_model]
        const { width, height } = size
        const model = completed === 2 ? complete.model : build.model[completed]
        const Model = model
        const posX = width % 2 === 0 ? (x) * CELL_SIZE : (.5 + x) * CELL_SIZE
        const posZ = height % 2 === 0 ? (y) * CELL_SIZE : (.5 + y) * CELL_SIZE
        
        
        return (
            <group key={index} position={[posZ, 0, posX]}>
                {completed!==2?
                    <Progress timeCreated={timeCreated} buildTime={buildTime[level]*1000}></Progress>
                    : null
                }
                <Model position={[0, .44, 0]} key={index} />

            </group>)
    })
    return (ArrayBuild)

}
/*----------------------------------------------------------------
    const { width, height } = modelSize
          const posX = width % 2 === 0 ? (value.x) * CELL_SIZE : (.5 + value.x) * CELL_SIZE
          const posZ = height % 2 === 0 ? (value.y) * CELL_SIZE : (.5 + value.y) * CELL_SIZE
          */



/*----------------------------------------------------------------



    

const timeElapsed =(new Date().getTime()-timeCreated) 
            {x:4,y:1,Id:2,id_model:0,completed:0,timeCreated:1641304401093},
            {x:8,y:1,Id:3,id_model:0,completed:1,timeCreated:1641304401093},
            {x:12,y:1,Id:4,id_model:0,completed:2,timeCreated:1641304401093}
        const percent=timeElapsed<buildTime? (timeElapsed*100)/buildTime:100
        //const percent=100
        //barRef.current.scale.set([percent/100,1,1])
        barRef.current.scale.set(percent/100,1,1)
        barRef.current.position.set(-5 * (100- percent) / 200, 12, -.1)
        
        //barRef.current.position.set([-5 * (100- percent) / 200, 12, -.1])
        //barRef.current.position.set([-5, 12, -.1])






    const ArrayBuild = listBuild.map((value, index) => {
        const { x, y, Id, id_model, level, completed } = value

        const { id, maxlevel, complete, build, size } = models[id_model]

        const model = completed === 2 ? complete.model : build.model[completed]

        const Model = model
                
        const percent=50
        return (
            <group key={index} position={[posZ, 0, posX]}>
                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false} // Lock the rotation on the z axis (default=false)
                >
                    <Plane args={[5.2, .7]} position={[0, 12, -.11]}>
                        <meshBasicMaterial color={0x000000}></meshBasicMaterial>
                    </Plane>
                    <Plane  args={[5, .5]} position={[0, 12, -.1]} >
                            <meshBasicMaterial color={0xff0000}></meshBasicMaterial>
                    </Plane>
                    
                    <Plane args={[5*percent/100, .5]} position={[-5*(100-percent)/200, 12, -.1]} >
                            <meshBasicMaterial color={0x00ff00}></meshBasicMaterial>
                    </Plane>
                    




                </Billboard>
                <Model position={[0, .44, 0]} key={index} />

            </group>)
    })*/


/*
<operatorNode attach={"color"} op={"*"}>
                                <uVNode attach='a'></uVNode>
                                <vector4Node attach={"b"} value={[1, 0]} />
                            </operatorNode>
 
                                <positionNode attach="a"> </positionNode>
                                <floatNode attach="b" value='.5'> </floatNode>
                                <colorNode attach={"ifNode"} value={0xff0000} />
                                <colorNode attach={"elseNode"} value={0x00ff00} />
                            
                            </condNode>
                            




                            <mathNode attach={"color"} method={Nodes.MathNode.MIX} >
                                <textureNode attach={"b"} value={logo} />
                                <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
                                    <textureNode attach={"a"} value={difuse} />
                                    <mathNode attach={"b"} method={Nodes.MathNode.MIX} >
                                        <colorNode attach={"b"} value={roof} />
                                        <operatorNode attach={"a"} op={"*"}>
                                            <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
                                                <colorNode attach={"a"} value={flag1} />
                                                <colorNode attach={"b"} value={flag2} />
                                                <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                                                    <textureNode attach={"a"} value={mixchannels} />
                                                    <vector4Node attach={"b"} value={[0, 1, 0, 0]} />
                                                </mathNode>
                                            </mathNode>
                                            <textureNode attach={"b"} value={flag} />
                                        </operatorNode>
                                        <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                                            <textureNode attach={"a"} value={mixchannels} />
                                            <vector4Node attach={"b"} value={[1, 0, 0, 0]} />
                                        </mathNode>
                                    </mathNode>
                                    <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                                        <textureNode attach={"a"} value={mixchannels} />
                                        <vector4Node attach={"b"} value={[1, 1, 1, 0]} />
                                    </mathNode>
                                </mathNode >
                                <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                                    <textureNode attach={"a"} value={logo} />
                                    <vector4Node attach={"b"} value={[0, 0, 0, 1]} />
                                </mathNode>
                            </mathNode>


*/
export default Buildings