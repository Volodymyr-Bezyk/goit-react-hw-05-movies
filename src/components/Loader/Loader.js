import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={500}
    height={281}
    viewBox="0 0 400 225"
    backgroundColor="#545454"
    foregroundColor="#f3f2f2"
    {...props}
  >
    {/* <rect x="129" y="116" rx="0" ry="0" width="1" height="1" /> */}
    <rect x="0" y="0" rx="0" ry="0" width="400" height="225" />
  </ContentLoader>
);

export default MyLoader;
