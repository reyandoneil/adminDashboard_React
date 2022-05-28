import { useEffect } from 'react';
import { GlobalSyle } from './GlobalStyle';
import { Router } from './Config';
import { useBreakpoints } from './Helper';
import { useDispatch } from 'react-redux';
import { setScreenSize } from './Store/Action/ScreenSizeAction';

function App() {
  const dispatch = useDispatch();
  const breakpoint = useBreakpoints();
  useEffect(() => {
    dispatch(setScreenSize(breakpoint));
  }, [breakpoint, dispatch]);

  return (
    <>
      <GlobalSyle />
      <Router />
    </>
  );
}

export default App;
