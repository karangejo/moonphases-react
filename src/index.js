import React from 'react';
import moon from './utils/moonPhase';

import nm from './images/newMoon.png'
import fm from './images/fullMoon.png'
import fqm from './images/firstQuarterMoon.png'
import lqm from './images/thirdQuarterMoon.png'
import wncm from './images/waningCrescentMoon.png'
import wxcm from './images/waxingCrescentMoon.png'
import wngm from './images/waningGibbousMoon.png'
import wxgm from './images/waxingGibbousMoon.png'

const phasesObj = {
                    newMoon: nm,
                    fullMoon: fm,
                    firstQuarterMoon: fqm,
                    lastQuarterMoon: lqm,
                    waningCrescentMoon: wncm,
                    waxingCrescentMoon: wxcm,
                    waningGibbousMoon: wngm,
                    waxingGibbousMoon: wxgm
                  }


function MoonPhase(props) {
  
  const getMoonPhase = () => {
    const today = new Date();
    const phase = moon.phase(today.getFullYear(), today.getMonth()+1, today.getDate());
    return(phase.name);
  };

    const phaseName = getMoonPhase();

    const camelToNormal = (camelString) => {
      return(
        camelString
          .replace( /([A-Z])/g, " $1" )
          .replace(/^\w/, c => c.toUpperCase())
      );
    }

    const phaseText = () => {
      return(
        <p style={{
            fontFamily: props.fontFamily, 
            fontSize: props.fontSize, 
            color: props.fontColor, 
            hidden:(props.showFont || "true"), 
            background: (props.backgroundColor || null)
          }}>
          {camelToNormal(phaseName)}
        </p>
      )
    }

    return (
      <div align="center">
        <img alt="current moon phase" src={phasesObj[phaseName]}/>
        {props.showText ? phaseText() : null}
      </div>
      
    )
}

export default MoonPhase;
