import { useRef, useEffect, useCallback, useState } from "react"
import { toPng } from "html-to-image";
import { LinkRounded } from "@mui/icons-material";



const Canvas = ({ meta, orientation }) => {
    const ref = useRef(null);
    const imgContainer = useRef(null);
    let [isImgRendered, setIsImgRendered] = useState(false);
    // let elem;
    // useEffect(()=>{

    // })
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            console.log("return")
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                var img = new Image();
                img.src = dataUrl;
                setIsImgRendered(true)
                imgContainer.current.appendChild(img);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <>
            { (<div ref={ref} className="md:w-[400px] w-4/5 p-3 flex flex-col m-auto my-10 rounded-lg overflow-hidden border border-gray-400">
                <img src={meta.img} className=" object-cover h-[150px] w-full rounded-lg" />
                <div className="mt-4">
                    <h2 className="text-clip font-bold text-lg">{meta.title}</h2>
                    <p>{meta.description}</p>
                    <p className="opacity-60 underline text-ellipsis overflow-hidden whitespace-nowrap">
                        <LinkRounded className="mr-1" />{meta.url}
                    </p>
                </div>
            </div>)}
            <div ref={imgContainer} className={`md:w-[400px] w-4/5 p-3 m-auto my-10 rounded-sm ${!isImgRendered? "h-0":"h-auto"}`}>
            </div>
            <button onClick={onButtonClick}>Click me</button>
        </>
    )
}

export default Canvas