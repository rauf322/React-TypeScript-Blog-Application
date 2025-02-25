import { useEffect, useRef } from "react";

const useObserver = (ref:React.RefObject<HTMLDivElement>,canLoad:boolean,isLoading:boolean,callback:(value: React.SetStateAction<number>) => void) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        const cb = function(entries: IntersectionObserverEntry[]) {
          if(entries[0].isIntersecting && canLoad) {
            callback(0); // or any appropriate value
          }
        };
        observer.current = new IntersectionObserver(cb);
        if (ref.current) {
            observer.current.observe(ref.current);
        }
      }, [callback, canLoad, isLoading, ref])
};

export default useObserver;