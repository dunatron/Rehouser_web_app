import React, { Component } from 'react';

import FileUploader from '@/Components/FileUploader';

const HomePage = props => {
  return (
    <div>
      <FileUploader
        title="Upload test file"
        files={[]}
        fileParams={{
          folder: 'test',
        }}
        recieveFile={() => alert('FIle was recieved')}
      />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
