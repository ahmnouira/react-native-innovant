import React, { createContext, PropsWithChildren } from 'react'

type ProviderProps<T> = {
  props: T
}

export interface ContextProps<T> {
  props: T
}

export const Context = createContext<ContextProps<any>>({} as ContextProps<any>)

export const PropsProvider = ({ props, children }: PropsWithChildren<ProviderProps<any>>) => {
  return (
    <Context.Provider
      value={{
        props,
      }}>
      {children}
    </Context.Provider>
  )
}
