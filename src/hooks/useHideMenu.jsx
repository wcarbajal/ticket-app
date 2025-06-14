import { useContext, useEffect } from 'react';
import { UiContext } from '../contex/UIContext-only';

export const useHideMenu = ( ocultar ) => {

  const { showMenu, hideMenu } = useContext( UiContext );

  useEffect( () => {

    if ( ocultar ) {
      hideMenu();

    } else {
      showMenu();
    }
  }, [ ocultar, showMenu, hideMenu ] );


};