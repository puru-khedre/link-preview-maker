import { useState } from 'react'
import { motion } from 'framer-motion';

const SearchAndPreviews = () => {
    let [url,setUrl] =useState("");
    let [isShowingPreview,setIsShowingPreview]=useState(false);
    return (
        <motion.div className={`rounded-xl shadow-lg mx-auto border w-max border-gray-100 ${isShowingPreview && "w-4/5"} w-5/6 md:w-[600px]` }>
            <input type="text" className="border-none outline-none p-4 w-full" placeholder="Enter your URL here..." value={url} onChange={(e) => setUrl(e.target.value)} />
        </motion.div>
    )
}

export default SearchAndPreviews