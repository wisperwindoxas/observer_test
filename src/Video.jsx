import React, { useRef, useEffect } from 'react'

export default function Video() {

  const ref = useRef();

  useEffect(() => {
        const  observer = new IntersectionObserver(
         ([entry]) => {
    
           if (entry.isIntersecting) {
             setTimeout(() => {
                  entry.target.play()
                 },100)
                  console.log(entry);
            }else{
              entry.target.pause()
              entry.target.currentTime= 0
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
          }
        );
      
          observer.observe(ref.current);
        
     
  }, [ref]);


  return (

          <div className="App">
            <video ref={ref}   controls src="./video/dili.me.mp4"></video>
          </div>
    
  )
}
