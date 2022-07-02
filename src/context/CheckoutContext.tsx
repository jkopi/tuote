import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

export enum Phase {
  CHECKOUT = 'CHECKOUT',
  PAYMENT = 'PAYMENT',
  CONFIRMATION = 'CONFIRMATION',
}

export enum Delivery {
  STANDARD = 'STANDARD',
  EXPRESS = 'EXPRESS',
}

type ContextProps = {
  phase: Phase;
  setPhase: (value: Phase) => void;
  deliveryMethod: Delivery;
  setDeliveryMethod: (value: Delivery) => void;
};

export const CheckoutContext = createContext<ContextProps | undefined>(undefined);

function CheckoutProvider({ children }: ProviderProps) {
  const [phase, setPhase] = useState<Phase>(Phase.CHECKOUT);
  const [deliveryMethod, setDeliveryMethod] = useState<Delivery>(Delivery.STANDARD);
  const phaseSetter = (value: Phase) => setPhase(value);
  const deliverySetter = (value: Delivery) => setDeliveryMethod(value);

  return (
    <CheckoutContext.Provider
      value={{
        phase: phase,
        setPhase: phaseSetter,
        deliveryMethod: deliveryMethod,
        setDeliveryMethod: deliverySetter
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutProvider };
