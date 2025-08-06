import { useEffect, useState } from "react"

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=> {
        const chekScreen = () => {
            setIsMobile(window.innerWidth <=breakpoint)
        }; 
        chekScreen();
        window.addEventListener('resize', chekScreen); 
        return () => window.removeEventListener('resize', chekScreen);
    }, [breakpoint]);
    return isMobile;
 }

 export default useIsMobile;