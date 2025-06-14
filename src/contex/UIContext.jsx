import Rect, { useState } from "react";
import { UiContext } from './UIContext-only';
//import { UiContext } from "./UIContext-only";

//export const UiContext = createContext();


export const UiProvider = ( { children } ) => {

  const [ ocultarMenu, setOcultarMenu ] = useState( false );

  const showMenu = () => {
    setOcultarMenu( false );
  };

  const hideMenu = () => {
    setOcultarMenu( true );
  };

  return (
    <UiContext.Provider value={ {
      ocultarMenu, showMenu, hideMenu
    } } >
      { children }
    </UiContext.Provider>
  );
};