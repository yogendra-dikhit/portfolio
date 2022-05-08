import { useEffect, useState } from 'react';
import { WINDOW_SIZES } from './constants';

const useDeviceType = () => {
  const isSSR = typeof window !== 'undefined';
  const getDeviceType = (width) => {
    return width
      ? width >= 992
        ? WINDOW_SIZES.XL
        : width >= 768
        ? WINDOW_SIZES.L
        : width >= 600
        ? WINDOW_SIZES.M
        : WINDOW_SIZES.S
      : WINDOW_SIZES.XL;
  };
  const [deviceType, setDeviceType] = useState(
    getDeviceType(isSSR && window.innerWidth)
  );

  useEffect(() => {
    const changeDeviceType = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };
    document.addEventListener('resize', changeDeviceType);

    return () => {
      document.removeEventListener('resize', changeDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
