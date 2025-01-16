import { useContext } from 'react';
import { StoreContext } from './storeProvider';

// Custom hook to use the store context
export const useStore = () => useContext(StoreContext);