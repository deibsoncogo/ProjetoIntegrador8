import React, { createContext, useContext, useState } from 'react'

type IContext = {
  pageActive: string,
  ChangePageActive: (page: string) => string,
}

type IProvider = {
  children: React.ReactNode
}

export const AllContext = createContext({} as IContext)

export function AllProvider({ children }: IProvider) {
  const [pageActive, setPageActive] = useState('home')

  function ChangePageActive(page: string): string {
    setPageActive(page)
    return page
  }

  return (
    <AllContext.Provider value={{
      pageActive,
      ChangePageActive,
    }}>
      { children }
    </AllContext.Provider>
  )
}

export function UseAll() {
  return useContext(AllContext)
}
