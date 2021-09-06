import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteJokesContext = createContext<any>([]);

export default FavoriteJokesContext;

export function FavoriteJokesProvider({ children }: { children: React.ReactNode }) {
    const [favoriteJokes, setFavoriteJokes] = useLocalStorage("favoriteJokes", []);

    return (
        <FavoriteJokesContext.Provider value={{ favoriteJokes, setFavoriteJokes }}>
            {children}
        </FavoriteJokesContext.Provider>
    );
}
