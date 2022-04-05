import { createContext } from "react";

const defaultAnimeContext = { stateFilter: [], mainData: {}, selectedItem: null };
const AnimesContext = createContext(defaultAnimeContext);

export {
  AnimesContext,
  defaultAnimeContext,
}