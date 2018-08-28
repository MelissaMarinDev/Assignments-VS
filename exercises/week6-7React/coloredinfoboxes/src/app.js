import React from 'react'
import Box from './box'
import Box2 from './box2'
import Box3 from './box3'
import Box4 from './box4'
import BoxBig from './boxbig'

const App = () => {
    
    
    return (
        <div >
            <Box backgroundColor="#a158cc" text="I am cool"  />
            <Box backgroundColor="#58ccb8" text="" />
            <Box backgroundColor="#59d2bd" text="" />
            <Box backgroundColor="#fb9cc2" text="" />
            <Box backgroundColor="#f19027" text="" />
            <Box backgroundColor="#f1ee27" text="" />
            <Box backgroundColor="#9cf73f" text="" />
            <Box backgroundColor="#3fd846" text="" />
            <Box backgroundColor="#5aeabe" text="" />
            <Box backgroundColor="#5a9fea" text="" />
            

            <Box2 title="BOX2" sound="vroom" backgroundColor="#5a9fea"/>
            <Box3 backgroundColor="#692bda" textHeight="45" display="inline"/>
            <Box4 backgroundColor="#ec6ca5" fontSize="20px" />

            <BoxBig borderColor="black" age="money" backgroundColor="#41caac" height="100px" width="200px" title="1"/>
            <BoxBig borderColor="black" backgroundColor="#d09657" height="200px" width="100px" title="2"/>
            <BoxBig borderColor="black" backgroundColor="#41caac" height="100px" width="200px" title="3"/>
            <BoxBig borderColor="black" backgroundColor="#d09657" height="200px" width="100px" title="4"/>
            <BoxBig borderColor="black" backgroundColor="#41caac" height="100px" width="200px" title="5"/>
            <BoxBig borderColor="black" backgroundColor="#d09657" height="200px" width="100px" title="6"/>
            <BoxBig borderColor="black" backgroundColor="#41caac" height="100px" width="200px" title="7"/>
            <BoxBig borderColor="black" backgroundColor="#d09657" height="200px" width="100px" title="8"/>
        </div>
    )
}

export default App