import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDjVq13j86NW6EtgfanUlaDZcmLd00EFlg',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'simulatore-tolc-i.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'simulatore-tolc-i',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'simulatore-tolc-i.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '868230398485',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:868230398485:web:bf30d97ad4ca8792c8c41c'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

auth.languageCode = 'it';

export function buildAppUrl(pathname = '/', params = {}) {
  const currentOrigin = typeof window !== 'undefined'
    ? window.location.origin.replace('127.0.0.1', 'localhost')
    : 'https://simulatore-tolc-i.web.app';

  const url = new URL(pathname, currentOrigin);

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return;
    }
    url.searchParams.set(key, String(value));
  });

  return url;
}
