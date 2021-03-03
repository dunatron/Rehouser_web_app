import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Error from '@/Components/ErrorMessage';
import Loader from '@/Components/Loader';
import { useCurrentUser } from '@/Components/User';

import { sha256, sha224 } from 'js-sha256';
import moment from 'moment';

import { useQuery } from '@apollo/client';
import { MAKE_CLOUDINARY_ACCESS_QUERY } from '@/Gql/queries/index';

const MediaLibrary = ({ options, onUploadCompleted }) => {
  const [loaded, setLoaded] = useState(false);
  // const { data, loading, error } = useCurrentUser();
  const { data, loading, error } = useQuery(MAKE_CLOUDINARY_ACCESS_QUERY);

  const cloudinary_name = process.env.CLOUDINARY_CLOUD_NAME;
  const cloudinary_api_key = process.env.CLOUDINARY_API_KEY;
  const cloud_timestamp = moment().format();

  const sigString = `cloud_name=${cloudinary_name}&timestamp=${cloud_timestamp}&username=heath.dunlop.hd@gmail.comycbQ5CDW1mYKLi_JIFLgBRH7qYs`;

  // "cloud_name=dkhe0hx1r&timestamp=unixtime&username=clduser@domain.comapisecret"

  const shaString = sha256(sigString);

  console.log('THE data: ', data);

  // ToDo
  // might want a route tbh to hit the server and generate a sechure SHA with cloudinay secret to use for signature
  // they would have to be an admin
  //cloud_name=dkhe0hx1r&timestamp=1518601863&username=heath.dunlop.hd@gmail.comycbQ5CDW1mYKLi_JIFLgBRH7qYs

  //   api_key: ""
  // cloud_name: ""
  // signature: ""
  // timestamp: ""
  // username: ""
  // want to redo, i.e do this when they click the button? open it instead
  //
  useEffect(() => {
    if (!loading) {
      if (!loaded) {
        window.cloudinary.createMediaLibrary(
          {
            cloud_name: data.cloud_name,
            api_key: data.api_key,
            timestamp: data.timestamp,
            // username: data?.me?.email,
            signature: data.signature, // cloud_name=my_company&timestamp=1518601863&username=jane@mycompany.comabcd
            username: data.username,
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
    }
  }, [loading]);

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
