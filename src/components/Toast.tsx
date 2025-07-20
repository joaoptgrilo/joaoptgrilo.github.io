// src/components/Toast.tsx
"use client";

import React, { useState, useEffect } from "react";
import { clsx } from "clsx";
import { FiInfo } from "react-icons/fi";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  show,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={clsx(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-md p-4 rounded-lg shadow-lg flex items-start transition-all duration-300 ease-in-out font-sans",
        "bg-light-panel-bg border border-border text-primary-text",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      role="alert"
      aria-live="assertive">
      <FiInfo className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Toast;
