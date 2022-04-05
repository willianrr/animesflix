import { useContext, useState } from "react";
import { AnimesContext } from "../../../../context/anime-context";

const useSearchState = (onClick) => {
  const { context, setContext } = useContext(AnimesContext);
  const [filtered, setFiltered] = useState(context?.mainData?.animes);

  const resetFilter = (e) => {
    
    setTimeout(() => setFiltered([]), 50)
  }

  const handleFilter = (event) => {
    const { value } = event.target;
    const animes = context?.mainData?.animes;

    if (!animes) {
      setFiltered([])
      return;
    }
    if (!value) {
      setFiltered(animes);
      onClick();
      return filtered;
    }


    const filtered = context?.mainData?.animes?.filter(item => item.dsTitulo.toLowerCase().includes(value.toLowerCase()));
    setFiltered(filtered);
    onClick();
  }

  const handleAnime = (anime) => {
    setContext((context) => ({ ...context, selectedItem: anime }));
  }

  return {
    context,
    filtered,
    handleFilter,
    resetFilter,
    handleAnime,
  }

}

export default useSearchState;
