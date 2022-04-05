
import { useState } from 'react';

const useNavbarState = () => {

  const [state, setState] = useState({
    isSearchButtonClicked: false,
  });

  const onSearchPress = () => {
    setState((state) => ({
      ...state,
      isSearchButtonClicked: !state.isSearchButtonClicked,
    }));
  }

  return { state, onSearchPress };
}

export default useNavbarState;
