import { useEffect, useState } from 'react';

export default function useCustomMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    setMatches(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };



    mediaQueryList.addEventListener('change', (e) => {handleChange(e)});

    return () => {
      mediaQueryList.removeEventListener('change', (e) => {handleChange(e)});
    };
  }, [mediaQuery]);

  return matches;
}