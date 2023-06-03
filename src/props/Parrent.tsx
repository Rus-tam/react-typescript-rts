// import {Child} from './Child';
import {ChildAsFC} from "./Child";

const Parent = () => {
    // return <Child color="red" onClick={() => console.log('Clicked')}/>
    return (
        <ChildAsFC color="red" onClick={() => console.log('Clicked!')}>
            hello;
        </ChildAsFC>
    )
}

export default Parent;