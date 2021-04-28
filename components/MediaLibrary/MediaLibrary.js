import { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import Error from '@/Components/ErrorMessage';
import Loader from '@/Components/Loader';

import { useQuery, useLazyQuery } from '@apollo/client';
import { CLOUDINARY_ACCESS_QUERY } from '@/Gql/queries/index';
import moment from 'moment';

const MediaLibrary = ({ options, onUploadCompleted }) => {
  const [loaded, setLoaded] = useState(false);

  const [makeCloudinaryAccess, { called, loading, data, error }] = useLazyQuery(
    CLOUDINARY_ACCESS_QUERY,
    {
      fetchPolicy: 'network-only', // simply becaus emutation isnt updating lazyQuery. at very least should retrigger network fetch
      partialRefetch: true,
    }
  );
  useEffect(() => {
    if (!loading && !loaded && called) {
      window.cloudinary.createMediaLibrary(
        {
          cloud_name: data.cloudinaryAccess.cloud_name,
          api_key: data.cloudinaryAccess.api_key,
          timestamp: data.cloudinaryAccess.timestamp,
          // username: data?.me?.email,
          signature: data.cloudinaryAccess.signature, // cloud_name=my_company&timestamp=1518601863&username=jane@mycompany.comabcd
          username: data.cloudinaryAccess.username,
          // button_class: 'myBtn',
          button_caption: 'Open Media Library',
          ...options,
        },
        {
          insertHandler: function(data) {
            data.assets.forEach(asset => {
              console.log('Inserted asset:', JSON.stringify(asset, null, 2));
            });
          },
        },
        document.getElementById('open-media-lib')
      );
      setLoaded(true);
    }
  }, [loading]);

  if (loading) return <Loader loading={loading} text="Loading User Data" />;
  if (error) return <Error error={error} />;

  var a = moment(parseInt(data?.cloudinaryAccess?.timestamp));
  var b = moment(parseInt(data?.cloudinaryAccess?.timestamp)).add(1, 'hour');

  return (
    <>
      <div>
        <Typography>
          Access to the Media Library will last 1 hour. After that you will need
          to get a new signature dd
        </Typography>
        {data?.cloudinaryAccess && (
          <div>
            <pre>{JSON.stringify(data.cloudinaryAccess, null, 2)}</pre>
          </div>
        )}
        {data?.cloudinaryAccess && (
          <div>
            <Typography>Cloudinary access expires: {a.to(b)}</Typography>
          </div>
        )}
        <Button
          variant="outlined"
          onClick={async () => {
            await setLoaded(false);
            makeCloudinaryAccess();
          }}>
          {!loaded
            ? 'Get Cloudinary Access from Rehouser Server'
            : 'Refresh Access Token'}
        </Button>
        <div>
          <Button id="open-media-lib" disabled={!loaded}>
            Coudinary Library
          </Button>
        </div>
      </div>
    </>
  );
};

export default MediaLibrary;
