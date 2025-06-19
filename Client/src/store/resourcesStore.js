import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useResourceStore = create(
    persist(
        (set) => ({
           savedResources: [],
           setSavedResource: (savedResources) => set([...savedResources, savedResources]),
        }),
        {
           name: 'savedResourcesForCUser', 
        }      
    )
)