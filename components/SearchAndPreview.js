import { useState } from 'react'
import { motion } from 'framer-motion';
import { SearchRounded } from '@mui/icons-material';
import Canvas from './Canvas';

const SearchAndPreviews = () => {
    let [url, setUrl] = useState("");
    let [meta, setMeta] = useState(null);
    async function getMetaData() {
        let res = await fetch("http://localhost:3000/api/url?url=" + url);
        let metaData = await res.json();
        setMeta(metaData);
    }

    let [isShowingPreview, setIsShowingPreview] = useState(false);
    return (
        <motion.div className={`rounded-xl shadow-lg mx-auto border w-max border-gray-100 ${isShowingPreview && "w-4/5"} w-5/6 md:w-[600px]`}>
            <div className='w-full flex items-center'>
                <input type="text" className="border-none outline-none bg-transparent p-4 w-full  rounded-full" placeholder="Enter your URL here..." value={url} onChange={(e) => setUrl(e.target.value)} />
                <SearchRounded className='w-12 h-12 p-2 mr-1 rounded-lg hover:bg-gray-200 cursor-pointer' onClick={getMetaData} />
            </div>
            {meta && (<>
                <Canvas meta={meta} orientation="horizontal" />
            </>)}
        </motion.div>
    )
}

export default SearchAndPreviews