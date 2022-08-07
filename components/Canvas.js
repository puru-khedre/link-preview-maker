import { useVisualElementContext } from "framer-motion";
import { useRef } from "react"
import { useEffect } from "react";

function draw(ele) {
    const ctx = ele.getContext('2d');
    ctx.font = '18px serif';
    ctx.fillText('Hello world', 10, 50);
}

const Canvas = () => {
    const elementRef = useRef(null);
     let elemContext=null;
    useEffect(()=>{
        elemContext=elementRef.current;
    })
    const handleClick = () => {
        draw(elemContext);
    }
    return (
        <div onClick={handleClick}>
            <canvas className="border border-red-300" width="100px" height="100px" ref={elementRef} />
            puru
        </div>
    )
}

export default Canvas