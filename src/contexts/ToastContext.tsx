// src/contexts/ToastContext.tsx
"use client";

import React, { createContext, useState, useContext, useCallback } from "react";
import Toast from "@/components/Toast";

// Context now provides the function AND the visibility state
interface ToastContextType {
  showToast: (message: string) => void;
  isToastVisible: boolean;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [show, setShow] = useState(false);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setShow(true);
  }, []);

  // The value now includes the visibility state
  const value = {
    showToast,
    isToastVisible: show,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast
        message={toastMessage}
        show={show}
        onClose={() => setShow(false)}
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
