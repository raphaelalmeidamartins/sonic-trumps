import React from 'react';
import {
  GiBoxingGlove,
  GiFoxTail,
  GiSonicShoes,
} from 'react-icons/gi';
import { useSelector } from 'react-redux';
import '../sass/components/CpuAttribute.css';

function CpuAttribute() {
  const currAttr = useSelector((state) => state.game.currAttr);
  const attributeNames = useSelector((state) => state.game.attributeNames);

  const icons = {
    cardAttr1: <GiSonicShoes />,
    cardAttr2: <GiFoxTail />,
    cardAttr3: <GiBoxingGlove />,
  };

  return (
    <section className="CpuAttribute">
      <div className="CpuAttribute-icon">
        {icons[currAttr]}
      </div>
      <span className="CpuAttribute-text">{attributeNames[currAttr]}</span>
    </section>
  );
}

export default CpuAttribute;
