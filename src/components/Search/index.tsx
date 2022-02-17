import React from 'react'

type Props = {
  children?: React.ReactNode;
}

export const index: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}