import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

function PlainCssPriorityProvider({ children }) {
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
}

export default PlainCssPriorityProvider