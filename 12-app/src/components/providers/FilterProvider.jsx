import { createContext, useState } from 'react';

const initialState = {
  showCheckedItems: true,
  searchTerm: '',
};

export const FilterContext = createContext(initialState);

export const FilterProvider = (props) => {
  const { children } = props;

  const [filters, setFilters] = useState(initialState);

  const handleSetSearchTerm = (val) => {
    setFilters((prev) => ({ ...prev, searchTerm: val }));
  };

  const handleToggleShowCheckedItems = () => {
    setFilters((prev) => ({
      ...prev,
      showCheckedItems: !prev.showCheckedItems,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setSearchTerm: handleSetSearchTerm,
        toggleShowCheckedItems: handleToggleShowCheckedItems,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
