

import React from 'react';
import WaterWave from 'react-water-wave';

const WaterWaveComponent = () => {
  return (
    <WaterWave
   // imageUrl="/event-pics.jpeg"
      dropRadius={20}
      perturbance={0.04}
      resolution={512}
      style={{ width: '100%', height: '100vh' }}
    >
      {({ drop }) => (
        <div
          style={{
            width: '100%',
            height: '100%',
            //backgroundImage: 'url("/event-pics.jpeg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
          onMouseMove={drop}
          onTouchMove={drop}
        />
      )}
    </WaterWave>
  );
};

export default WaterWaveComponent;
