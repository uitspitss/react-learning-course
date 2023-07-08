import { ReactNode, createContext, useMemo, useState } from 'react';

type FilterType = {
  showCheckedItems: boolean;
  searchTerm: string;
};

type FilterContextType = {
  filters: FilterType;
  setSearchTerm: (val: string) => void;
  toggleShowCheckedItems: () => void;
};

const initialState: FilterType = {
  showCheckedItems: true,
  searchTerm: '',
};

export const FilterContext = createContext<FilterContextType>({
  filters: initialState,
  setSearchTerm: () => {},
  toggleShowCheckedItems: () => {},
});

export const FilterProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [filters, setFilters] = useState(initialState);

  const handleSetSearchTerm = (val: string) => {
    setFilters((prev) => ({ ...prev, searchTerm: val }));
  };

  const handleToggleShowCheckedItems = () => {
    setFilters((prev) => ({
      ...prev,
      showCheckedItems: !prev.showCheckedItems,
    }));
  };

  const memorizedValue = useMemo(
    () => ({
      filters,
      setSearchTerm: handleSetSearchTerm,
      toggleShowCheckedItems: handleToggleShowCheckedItems,
    }),
    []
  );

  return (
    <FilterContext.Provider value={memorizedValue}>
      {children}
    </FilterContext.Provider>
  );
};
