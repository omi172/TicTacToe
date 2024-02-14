import React from 'react';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';

const HoneycombMap = () => {
  // Dummy data for hexagons
  const hexagonData = [
    { q: 0, r: 0, s: 0 },
    // Add more hexagon data based on your world map
  ];

  return (
    <HexGrid width={800} height={600}>
      <Layout size={{ x: 10, y: 10 }} origin={{ x: 0, y: 0 }}>
        {hexagonData.map((hex, index) => (
          <Hexagon key={index} q={hex.q} r={hex.r} s={hex.s} />
        ))}
      </Layout>
    </HexGrid>
  );
};

export default HoneycombMap;
