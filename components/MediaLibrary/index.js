import dynamic from 'next/dynamic';

const NoSSRUploadWidget = dynamic(
  () => {
    return import('./MediaLibrary');
  },
  { ssr: false }
);

export default NoSSRUploadWidget;
