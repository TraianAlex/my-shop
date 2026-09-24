import React from 'react';
import { useParams } from 'react-router-dom';

const wineMakers = [
  { code: "WM1", name: "Wine & Wine", country: "Italy", description: "Wine & Wine produces an excellent Italian wine..." },
  { code: "WM2", name: "Wine & Co", country: "France", description: "Wine & Co is one of the most known producers of wine in France..." }
];

export default function WineMaker() {
  const { code } = useParams();
  const wineMaker = wineMakers.find(wm => wm.code === code);

  if (!wineMaker) {
    return <div><p>Wine maker not found.</p></div>;
  }

  return (
    <div>
      <h2>{wineMaker.name}</h2>
      <h3>{wineMaker.country}</h3>
      <p>{wineMaker.description}</p>
    </div>
  );
}
