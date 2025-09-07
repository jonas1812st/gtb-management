import { useEffect, useState } from "react";

export default function useScrollUp() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [topReached, setTopReached] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY - lastScrollY > 0 && window.scrollY > 100) {
        // if scroll down hide the navbar and the user has scrolled more than 100px
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      setTopReached(window.scrollY <= 100 + 48); // 100 from above and 48 is the size of the navbar

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return {
    show,
    topReached,
  };
}
