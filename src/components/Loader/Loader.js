import PropTypes from 'prop-types';
import Box from 'components/Box';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  const { count, width, height, gap } = props;
  return (
    <Box
      pt={3}
      pr={3}
      pl={3}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      as="ul"
      gridGap={gap ?? 3}
    >
      {Array(count)
        .fill(0)
        .map((item, idx) => (
          <Box as="li" key={idx}>
            <ContentLoader
              speed={2}
              backgroundColor="#545454"
              foregroundColor="#f3f2f2"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
            </ContentLoader>
          </Box>
        ))}
    </Box>
  );
};

Loader.propTypes = {
  count: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  gap: PropTypes.number,
};

export default Loader;
