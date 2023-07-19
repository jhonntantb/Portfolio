import { createContext, useContext, useState } from 'react';
//import { useModal } from '../hooks/useModal';

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [navPosition, setNavPosition] = useState('');
  const [projectId, setProjectId] = useState(1);
  const [initPage, setInitPage] = useState('active');

  //const [isOpenDetail, openModalDetail, closeModalDetail] = useModal();

  const setNavClass = (value) => {
    console.log('cambiando el header');
    localStorage.setItem('navPosition', value);
    setNavPosition(value);
    setInitPage('');
  };

  const handleDetailModal = (value) => {
    setProjectId(parseInt(value));
    //openModalDetail();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        navPosition,
        setNavPosition,
        setNavClass,
        projectId,
        setProjectId,
        // isOpenDetail,
        // openModalDetail,
        // closeModalDetail,
        handleDetailModal,
        initPage,
        setInitPage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
