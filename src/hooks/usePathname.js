import { useSyncExternalStore } from 'react';

function emitLocationChange() {
  window.dispatchEvent(new Event('popstate'));
}

function subscribe(callback) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}

function getSnapshot() {
  return `${window.location.pathname}${window.location.search}`;
}

function getServerSnapshot() {
  return '/';
}

export function navigate(path, { replace = false } = {}) {
  if (replace) {
    window.history.replaceState({}, '', path);
  } else {
    window.history.pushState({}, '', path);
  }
  emitLocationChange();
}

export function useLocationState() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const url = new URL(snapshot, window.location.href);

  return {
    pathname: url.pathname,
    search: url.search,
    searchParams: url.searchParams
  };
}
