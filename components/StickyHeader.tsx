import { useEffect, useRef, useState } from "react";


const useDetectSticky = (ref: any, observerSettings = {threshold: [1]}) => {
  const [isSticky, setIsSticky] = useState(false)
  const newRef = useRef()
  ref ||= newRef;
  
   // mount 
  useEffect(()=>{
    const cachedRef = ref.current,
          observer = new IntersectionObserver(
            ([e]) => setIsSticky(e.intersectionRatio < 1),
            observerSettings
          )

    observer.observe(cachedRef)
    
    // unmount
    return () => {
      observer.unobserve(cachedRef)
    }
  }, [])
  
  return [isSticky, ref, setIsSticky];
}

export default function StickyHeader({ children, sticky=false, className, ...rest }: any){
  // @ts-ignore
    const [isSticky, ref, setIsSticky] = useDetectSticky()
  
  return (
    <header className={className + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
      {children}
    </header>
  )
}
