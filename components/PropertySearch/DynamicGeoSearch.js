import dynamic from 'next/dynamic';

const DynamicGeoSearch = dynamic(() => import('./GeoSearch'), {
  ssr: true,
  loading: () => <p>Loading geosearch</p>,
});

export default DynamicGeoSearch;
