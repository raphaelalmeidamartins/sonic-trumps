import React from 'react';
import { GiSonicShoes } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import '../sass/components/CpuAttribute.css';

function CpuAttribute() {
  const currAttr = useSelector((state) => state.game.currAttr);
  const attributeNames = useSelector((state) => state.game.attributeNames);

  return (
    <section className="CpuAttribute">
      <div className="CpuAttribute-icon">
        <GiSonicShoes />
      </div>
      <span className="CpuAttribute-text">{attributeNames[currAttr]}</span>
    </section>
  );
}

export default CpuAttribute;
