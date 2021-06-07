import dynamic from 'next/dynamic';
import Loader from '@/Components/Loader';

const DynamicRichText = dynamic(() => import('./RichText'), {
  ssr: false,
  loading: () => <Loader loading={true} text="loading rich text..." />,
});

export default DynamicRichText;
