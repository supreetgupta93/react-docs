import { motion } from "framer-motion";
import React from "react";
import { FaFileInvoice, FaWindowClose } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
function Card({data, reference}) {
  return (
    <motion.div whileDrag={{ scale: 1.2 }}   drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-72 rounded-[45px]  bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaFileInvoice />
      <p className="text-sm mt-5 leading-tight">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0  w-full  left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          {" "}
          <h5>{data.filesize}</h5>
          <span className=" w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
           {data.close ? <FaWindowClose /> : <FaDownload size=".8em" color="#fff" />}

          </span>
        </div>
        {data.tag.isOpen && (
             <div className={`tag w-full py-4  ${data.tag.tagColor==  "Green" ? "bg-green-600": "bg-blue-600"} flex items-center justify-center `}>
             <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
       </div>
        )}
       
      </div>
    </motion.div>
  );
}

export default Card;
