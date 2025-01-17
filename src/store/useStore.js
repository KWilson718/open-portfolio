// useStore.js
import { useContext } from 'react';
import { StoreContext } from './storeContext'; // Ensure this path is correct

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};