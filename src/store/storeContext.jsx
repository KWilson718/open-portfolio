import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [state, setState] = useState({
        page: 0,
      });

      const switchPage = (page) => {
        if(page > -1 && page < 5) {
          setState(page)
        }
      }
    
      return (
        <StoreContext.Provider value={{ state, switchPage }}>
          {children}
        </StoreContext.Provider>
      );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};