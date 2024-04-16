import create from 'zustand';

const useLocationStore = create((set) => ({
  selectedLocation: "Wellington", // Initial default location
  
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));

export default useLocationStore;
