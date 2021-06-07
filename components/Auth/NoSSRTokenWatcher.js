import dynamic from 'next/dynamic';

const NoSSRTokenWatcher = dynamic(() => import('./TokenWatcher'), {
  ssr: false,
});

export default NoSSRTokenWatcher;
