import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

export enum Phase {
  CHECKOUT = "CHECKOUT",
  PAYMENT = "PAYMENT",
  CONFIRMATION = "CONFIRMATION"
}

type ContextProps = {
  phase: Phase;
  setPhase: (value: Phase) => void;
};

export const CheckoutContext = createContext<ContextProps | undefined>(undefined);

function CheckoutProvider({ children }: ProviderProps) {
  const [phase, setPhase] = useState<Phase>(Phase.CHECKOUT);
  const phaseSetter = (value: Phase) => setPhase(value);

  return (
    <CheckoutContext.Provider
      value={{
        phase: phase,
        setPhase: phaseSetter,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutProvider };
