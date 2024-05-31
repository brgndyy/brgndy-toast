import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Toast from './Toast';

const TOAST_DOM_ID = 'toast';

export default function ToastContainer() {
  useEffect(() => {
    let toastRoot = document.getElementById(TOAST_DOM_ID);
    if (!toastRoot) {
      toastRoot = document.createElement('div');
      toastRoot.id = TOAST_DOM_ID;
      document.body.appendChild(toastRoot);
    }
  }, []);

  const toastRoot = document.getElementById(TOAST_DOM_ID);
  if (!toastRoot) return null;

  return createPortal(<Toast />, toastRoot);
}
