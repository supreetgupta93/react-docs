import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {

  const ref = useRef(null);
 
  const data=[
    {
      desc: "THis is my props that render on display of container",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "Green" },
    },
    {
      desc: "THis is my props that render on display of container",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Blue" },
    },
    {
      desc: "THis is my props that render on display of container",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "Green" },
    },
  ];
  return (  
  <div  ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flexwrap-wrap p-10'>
   {data.map((item)=>(
    <Card data={item} reference={ref} />
     ))}
    </div>
  )
}

export default Foreground
