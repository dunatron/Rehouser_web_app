import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Error from '@/Components/ErrorMessage';
import Loader from '@/Components/Loader';
import { useCurrentUser } from '@/Components/User';

const MediaLibrary = ({ options, onUploadCompleted }) => {
  const [loaded, setLoaded] = useState(false);
  const { data, loading, error } = useCurrentUser();

  // ToDo
  // might want a route tbh to hit the server and generate a sechure SHA with cloudinay secret to use for signature
  // they would have to be an admin

  useEffect(() => {
    if (!loaded) {
      window.cloudinary.createMediaLibrary(
        {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          username: data?.me?.email,
          // username: 'heath.dunlop.hd@gmail.com',
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
    }
    setLoaded(true);
  }, [loaded]);

  if (loading) return <Loader loading={loading} text="Loading User Data" />;
  if (error) return <Error error={error} />;

  return (
    <>
      <div>
        <Button id="open-media-lib">Upload Files</Button>
      </div>
    </>
  );
};

export default MediaLibrary;
