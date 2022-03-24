import Image from 'next/image'
import {useContext} from 'react'
import { ShipTechnologieModalContext } from 'context/ShipTechnologieModalContext'

const TechCarrack = () => {
  const [selectedTech, setSelectedTech] = useContext(ShipTechnologieModalContext)
  
  return (
    <svg
      id="TechCarrack"
      data-name="TechCarrack"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1825 635"
      className="opacity-50"
    >
      {/* <defs>
    <style>
      .cls-1 {
        fill: #fe0101;
      }

      .cls-2 {
        fill: #fedc00;
      }

      .cls-3 {
        fill: #feaa01;
      }

      .cls-4 {
        fill: #02fee0;
      }

      .cls-5 {
        fill: #0217fe;
      }

      .cls-6 {
        fill: #02aafe;
      }

      .cls-7 {
        fill: #3c722e;
      }

      .cls-8 {
        fill: #f1fe03;
      }

      .cls-9 {
        fill: #249800;
      }

      .cls-10 {
        fill: #02fe88;
      }

      .cls-11 {
        fill: #6804fe;
      }

      .cls-12 {
        fill: #f502fe;
      }

      .cls-13 {
        fill: #fecc6a;
      }

    </style>
  </defs> */}
      {/* PROPULSION */}
      <g
        id="propulsiongroup"
        className="fill-[#fe0101]/50 hover:fill-[#fe0101] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("11")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="propulsion"
          d="M273,316c-.18-1.67-1.49-1-2.29-1-9.83,0-19.66,0-29.49,0h-4.3l-5.66-5.85H208.11c.23-6.77-2.17-13.24-.8-20H455.05c-.3.9-.56,1.68-.85,2.53,1.8,1.29-.32,4.71,2.71,5.51V302l-6.35,1.21c-.45-.95-.75-1.57-1.39-2.9v4.07a44.71,44.71,0,0,1-6.65,2.5c-2.17.45-3.68,2.29-6.16,2.19-2.27-.09-4,2.66-6.85,1.74L427.88,313h-14.4l-2.82-2.89h-5.24l-2.2,2.89H385.46l-1-2.18-.73,2.07L376.15,309c-2.18-.24-4.86.66-7.24-1a1.72,1.72,0,0,0-1.47,0c-2.89,1.52-6,.74-9,1-.86,2.69-3.3,4-4.83,5.9H327.71l-3.34-3.88h-9.73L309.3,315H291.48c-.56-1-1.11-1.93-1.86-3.22l-10.35,1.45c-.22,2-2.08,2-3.27,2.8Zm17.17-5.19c1.19-7.65,1-16.65,0-20.22Zm121-2,.83,0q0-8.64,0-17.29c0-.12-.2-.27-.34-.35s-.22,0-.48,0Z"
        />
        <path
          id="propulsion"
          d="M450,277v-2.25l6.91,2.78v3.65L453.79,286l1.33,1.78H207c-.09-5.65,0-11.55,0-17.77h24c0,2.66-.07,5.32,0,8s-.37,5.3.35,8.19c.41-.47.62-.59.62-.71q0-7.72,0-15.46l5.17-5.9H279V267c0,3.16-.07,6.32,0,9.48s-.4,6.29,1,9.35V267h10c0,3.16-.07,6.32,0,9.48s-.4,6.29,1,9.35V264c6.16-.07,12.34,0,18.32,0l4.68,4c0,3-.06,6,0,9s-.35,6,1,8.85V268h8.14a17.5,17.5,0,0,0,2.73-1.42,28.41,28.41,0,0,0,2.55-2.5H352V267c0,3.33-.07,6.65,0,10s-.4,6.62,1,9.85V263.36l6.69,7.49h14.86c2.18-2.65,6.39-2.07,9-6,.24,2.11.36,3.13.47,4.15,0,3-.06,6,0,9s-.35,6,1,8.85V266.18a50,50,0,0,1,7.25-.17c2.47-.05,4.94,0,7.75,0v3c0,3-.06,6,0,9s-.35,6,1,8.85V266c2.46.08,3.09,2.13,4.65,3h5.86l3-3c5.08.38,10.45-.91,15.52,1.55V269c0,2.83-.07,5.66,0,8.48s-.42,5.63,1,8.35V269c3.73-.25,6.93,1.46,10.25,2.74,2.43.93,4.89,1.78,7.75,2.82V277c.17,3.28-.38,6.61,1,9.83Zm-125.17-7.84-.83,0q0,8.64,0,17.3c0,.12.2.26.34.34s.23,0,.48,0Z"
        />
        <path
          id="propulsion"
          d="M150,301v15.83c-1.57.06-3.17.14-4.78.16s-3.28,0-4.84,0l-.86-2.38L137.09,317c.53-.25.25,0,0,0-2.24,0-4.58.37-6.56-1s-4.58-.7-6.83-1.63a14.08,14.08,0,0,0-6.44-1.45c-1.28.1-2.63-.77-4.1-1.26V284.21l2.67-.41.09-.43-2.72-.55-.21-2.58,3-.45,0-.53-2.76-.43v-28.5l24.74-5.79v4.36h1.88v-3.25c.29-.27.41-.48.53-.48,3.11,0,6.23,0,9.52,0v5.72c.74,1.43,1.16,2.26,1.57,3.06l5-5.85h9.52c.75.83,1.63,2.45,3,3.18s2,2.21,3.07,3.29c0,18.09-.07,36.24,0,54.39,0,5.28-.08,5.62-5.53,10.05H155.64c-1.86-.31-.89-3.37-3.23-3.08-.57-1.44-1.56-2.65-1.47-4.42.2-3.49.06-7,.06-10.49q0-22.72,0-45.46c0-.12-.19-.27-.32-.35s-.23,0-.67,0Z"
        />
        <path
          id="propulsion"
          d="M151.16,234.73l3.44-.87.74,2.1c3.95-1.29,7.81-1.6,11.93.13l3-2.7,1.68,3.24v6.29l-1.72,2.65-2.8-2.51a15.67,15.67,0,0,1-11.71-.15l-2.66,2.3-2-1.41Z"
        />
      </g>

      {/* CARGO */}
      <g
        id="cargogroup"
        className="fill-[#fedc00]/50 hover:fill-[#fedc00] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("1")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="cargo1"
          d="M887.17,420.09H911v25.8c1.28-4.14.87-8.34.94-12.51s0-8.64,0-13.17h88.88V453.7c-3.6.46-3.64,4.62-6.68,6.29.26-.06.11,0-.05,0H895.71a.79.79,0,0,0-.41.2,4,4,0,0,0-.36.35l-.49.49c-1.89-2.89-4.67-4.87-7.28-8.27Z"
        />
        <path
          id="cargo2"
          d="M770,420.1h27.06v24.82c1.12-4,.89-8.05.93-12.08s0-8.31,0-12.65h83.67c-.1-.08.05,0,.14.13a.78.78,0,0,1,.18.42c0,11,0,21.95,0,32.62-.91,1.65-2.89,1.48-3.42,3.39-.35,1.26-2,2.16-3.07,3.24H774.35c-.91-2-3.17-3.16-3.81-5.74a15.94,15.94,0,0,1-.51-3.75C770,440.5,770,430.5,770,420.1Z"
        />
        <path
          id="cargo3"
          d="M1115.83,458.88c-1.17.69-2.25,1.33-3.34,2-1-1.41-2.59-.85-4-.85q-20,0-40,0H1013a30.74,30.74,0,0,1-3.81-2.42,30,30,0,0,1-3-3.66V420.34c-.07.08,0-.06.15-.15a.75.75,0,0,1,.42-.18H1031v24.85c1.36-3.93.91-7.93,1-11.9.09-4.15,0-8.31,0-12.71h83.83Z"
        />
        <path
          id="cargo4"
          d="M1000.91,381.16v36.66h-89V395c-1.14,2.35-.82,4.78-.88,7.17,0,2.66,0,5.33,0,8v7.62H888.3l-1.2-1.31V381.16Z"
        />
        <path
          id="cargo5"
          d="M798.07,417.84c-.24-7.71.16-15.29-.93-22.84v22.85H770.23V381.14H881.66a1,1,0,0,1,.33.64c0,12,0,23.93,0,36.06Z"
        />
        <path
          id="cargo6"
          d="M1006.08,417.83V381.17H1115.9v36.64h-84v-23a5.21,5.21,0,0,0-.69.55.78.78,0,0,0-.18.42c0,7.3,0,14.61,0,22.09Z"
        />
      </g>

      {/* FUEL */}
      <g
        id="fuelgroup"
        className="fill-[#feaa01]/50 hover:fill-[#feaa01] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("10")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="fuel1"
          d="M591,311l1,1.24-1,.76H533.54c-.12,0-.27.19-.35.32s0,.23,0,.67H591c.33.43,1,.86,1,1.29,0,13.79,0,27.57,0,41.71H532.37l-1.72-8H360v-2H529.63a6.13,6.13,0,0,1,1,.1c.13,0,.22.25.36.34a2.73,2.73,0,0,0,.71.39c.07,0,.23-.21.34-.32V344c0-5.32.1-10.64,0-16-.06-2.36-.75-4.7-.91-7.07s0-5,0-7.35l1.22-1.62c-.49-.66-.85-1.16-1.22-1.67,2-4.05.46-8.38,1.19-13,.79-1.14,1.87-2.7,2.93-4.21h52.47a25.67,25.67,0,0,1,2.78,2.84,6.85,6.85,0,0,1,1.55,3.31c.16,3.46,0,6.94-.1,10.41,0,.12-.54.23-.82.35H533.54c-.12,0-.27.19-.35.32s0,.23,0,.67Z"
        />
        <path
          id="fuel2"
          d="M348,358c-3.5,0-7-.08-10.49,0-1.71.06-3.67-.81-5.08,1-1.79-.49-3.59-1-5.39-1.45-.87-.23-1.76-.44-3-.74.75,2.38,1.36,4.34,1.94,6.19,12.47,0,24.45.08,36.43,0,4,0,6.65,1.85,8.56,5.1,1.3,2.2,2.4,4.43,2.05,7.16a50,50,0,0,0,0,5.78H334.54c-.12,0-.27.19-.35.32s0,.23,0,.67H371l1.56,2h-38c-.12,0-.27.19-.35.32s0,.23,0,.67h35.33c-.82,1.28-1.14,2.43-1.79,2.67a16.35,16.35,0,0,1-5.45,1.28c-22.28.08-44.56.05-66.78.05-2-2.36-5.35-3.09-6.54-6.3s-1.11-6.72-.85-10.07a9,9,0,0,1,2-5.08c1.76-1.95,4.13-3.37,6.89-5.52l2.78-5.56,5.26-1.64,5,3.38v3.49c.73.5,1.51,1,2.39,1.6.61-2.21,1.14-4.15,1.8-6.53l8.59-1.11v-17l3.73-3.67H332c0,3.66-.08,7.32,0,11s-.44,7.28,1,10.85V335a19.88,19.88,0,0,1,3.55-1,18.8,18.8,0,0,1,5.9.06,17.86,17.86,0,0,0,5.55.9Z"
        />
        <path
          id="fuel3"
          d="M1306,240c-1.24-.15-2.72.58-3.55-1.37-4.57,3.17-9.65,2.24-14.56,2.38-4.43-2.57-10.07-3-13.1-8-2.7,0-5.33.14-7.94,0s-5.15.89-7.72-1c.71,5.24-5.23,3.87-6.48,7H1246V220.22c6.21-1.1,10.87,2,15.64,5.7h14c2-3.86,6.68-6.89,10.6-6.92,3.49,0,7,.06,10.47,0a7.86,7.86,0,0,1,5.94,2.08c.69-1.75.27-3.51.35-5.19s0-3.64,0-5.46a22.56,22.56,0,0,1-3.49.56c-12,.05-23.94,0-35.92.05-1.38,0-2.65,0-3.5-1.5v-5.11l1.41-1.41h33.57c2,0,4.23-.56,5.92.15s3.16-.91,5,.21V240Z"
        />
        <path
          id="fuel4"
          d="M248.54,217.09c-1.83,1.32-3.55,1.62-5.37-.44V201.32l1.1-1.07c3.25,0,6.36,0,9.48,0,.24,0,.47.44.72.69,1-1.33,2-1.25,3-.11l1.53-1,1.73,1.14c3.91-1.78,8-.92,12-.75.94,1.66,1.42-.52,2.28-.28a9.84,9.84,0,0,0,2.49,0h21.18c.7,1.1,1.47,2.29,2.33,3.62-.36,1.53.8,3.49-1.27,5.1l2.14.33v-7.62l.65.48,1-2.37,1-.06.87,2.44.59-.53v15.22l-1.81,1.64-2-1.49v-5.37l-1.91-.61c-.11,2.06-.21,3.94-.32,5.82L298.5,218c-16.1,0-32.53,0-49,0C249.18,218,248.82,217.35,248.54,217.09Z"
        />
        <path
          id="fuel5"
          d="M589,361h2.84c0,1.57.12,3.17.15,4.76s0,3,0,4.24l-6,6c-14.88,0-30.31,0-45.74-.05a34.57,34.57,0,0,1-5.92-1c-3.82-4.14-1.77-9.06-2.44-13.93H589Z"
        />
        <path
          id="fuel6"
          d="M300,226.32v14.45H243.15V226.42l5-1.27a6.57,6.57,0,0,0,5.71.51c.87-.29,2.29-.87,2.61-.52,1.28,1.39,2.8.82,4.19.83q12.48.09,25,0a10.74,10.74,0,0,0,5.16-.81c1.34-.68,3.45.11,5.2.34C297.23,225.68,298.45,226,300,226.32Z"
        />
        <path
          id="fuel7"
          d="M1160,236.38l-5.68,3.62H1130.5c-2.36,0-4.67.08-5.85-2.73-.27-.65-1.57-.88-2.49-1.34V225.34c.58-.57,1.3-1.27,2-2a7.68,7.68,0,0,1,6-2.38c8.66.08,17.33,0,26,0l3.75,2.65C1162.19,229.22,1162.21,230.48,1160,236.38Z"
        />
        <path
          id="fuel8"
          d="M256.5,174l11.37,11.37-11.52,11.5h-18c-.88-1.06-1.8-2.85-3.27-3.77-1.72-1.07-2.39-3-3.79-4-1.63-1.17-1.87-3.08-4-4.15,2.61-2.11,5.17-3.48,6.65-5.61,1.29-1.85,3.66-2.69,4.39-5.36,1.5,0,3.12.05,4.75,0s3.37.13,4.81-.44,2.38,1,3.89.55S255,174,256.5,174Z"
        />
        <path
          id="fuel9"
          d="M288.73,174c.3-.9.48-1.45.79-2.35l.79,2.27h7.24c.41,1.82,2.08,2.46,2.91,3.85a11.35,11.35,0,0,0,4.33,3.73c1.35.76,2,2.73,3,4.2l-11.2,11.2H281.41c-4.77-2.64-8-7.56-12.24-11.14L280.93,174Z"
        />
        <path
          id="fuel10"
          d="M1189,240h-25.47a2.26,2.26,0,0,1-.35-.34.77.77,0,0,1-.17-.42c0-6,0-11.94,0-18.24h26Z"
        />
        <path
          id="fuel11"
          d="M1317,203c.26-.33.52-.95.79-1,2.3-.07,4.61,0,7.14,0,0,1,.08,1.76.12,2.75l2.82.47v4.58l-2.82.42v30.85c-3.64-.31-7.16.57-10.57-1-.4-.2-1,0-1.48,0V203h3q0,17.73,0,35.46c0,.12.19.27.32.35s.23,0,.67,0Z"
        />
        <path
          id="fuel12"
          d="M233.41,218H209.67c-4-2.25.72-5.05-.85-7.38,3.06-1.38,4-4.67,7-6.2a53.39,53.39,0,0,1,8.92-3.83c3.31-1,6.52,0,10.14-.87.05,2.18.1,4.1.12,6,0,2.16.1,4.32,0,6.48C234.86,214.09,235.79,216.23,233.41,218Z"
        />
        <path
          id="fuel13"
          d="M1342,203a9.68,9.68,0,0,1,7.09-5.07c.83-.12,1.54-1.09,2.54-1.84h6.12c2.39,7.31,6.42,14,8.71,21.91-5.94,0-11.36.1-16.78-.07a6.8,6.8,0,0,1-3.76-1.62A38.37,38.37,0,0,1,1342,212Z"
        />
        <path
          id="fuel14"
          d="M332.85,213.6v4.3H309.4l-1.52-1.52c.77-5.31-1-10.95,1.17-16.64,4.66,1,9.3.48,13.33,2.36a20.6,20.6,0,0,1,9.16,8.94C332,211.85,332.39,212.69,332.85,213.6Z"
        />
        <path id="fuel15" d="M361,344H531v1.85H359.56Z" />
        <path
          id="fuel16"
          d="M207.81,226.57c2.16-1.15,3.8-1.93,6.28-.75,1.89.9,4.57.36,6.87.13s4.41.78,6.66-.8a4.21,4.21,0,0,1,4.61.49c.52.45,1.52.33,2.54.51v14.54C220.77,242,215.68,240.91,207.81,226.57Z"
        />
        <path
          id="fuel18"
          d="M1208,227V216.09h2V224c.17,3.28-.38,6.61,1,9.83V224l6.87-4c1.43,0,3.39,0,5.35,0,.27,0,.52.63.78,1v17.74h-6.7a7.3,7.3,0,0,0-7.18-2.6v5.6l-2.12.32V227Z"
        />
        <path
          id="fuel17"
          d="M319.22,240.89H308.14V226.43c2.42-.89,5.15-2.34,7.69-1.3,3.07,1.25,6.07.67,9.09.81a9.26,9.26,0,0,0,2.94-.79l5.42,1.33C331.08,233.63,326,237.87,319.22,240.89Z"
        />
        <path
          id="fuel19"
          d="M1242,239h-14c0-3.15-.14-6.31,0-9.46a41.26,41.26,0,0,0-1-9.54h15v19Z"
        />
        <path
          id="fuel20"
          d="M243.76,223.85l-1-3.71h57.07c0,1.07.11,2.31.18,3.71Z"
        />
        <path
          id="fuel21"
          d="M359,349v4.52L355.77,358H349V335h5.76l4.24,3.42V349Z"
        />
        <path id="fuel22" d="M1307,205v-1.82l5-.22v37h-5Z" />
        <path
          id="fuel23"
          d="M1120.89,228.33c.17,1.68.54,3.36-1.43,4.61h-11.9l-1.21,1.21c-.67,7.06-.62,7.84.75,10.61h-6.83c0-.07-.24-.24-.21-.3,1.77-3.72,1-7.43.28-11.9l1.07-4.56c2.51,0,5.29.1,8,0,1.71-.08,3.58.76,5.13-.9.3-.32,1.5.14,2.26.3C1118.08,227.63,1119.29,227.94,1120.89,228.33Z"
        />
        <path
          id="fuel24"
          d="M1198,205h3.9c.22,6,.07,12.07.09,18.11s0,12.23,0,18.67c-1.4.13-2.85,1-4-.78Z"
        />
        <path
          id="fuel25"
          d="M1190,221V205h4v36c-.59,1.94-2.18.61-3.24,1-.11,0-.28-.1-.76-.29V221Z"
        />
        <path
          id="fuel26"
          d="M590,358h1.72l.39,2H532.52c-.6-1.84-.6-1.84,1.48-2Z"
        />
        <path
          id="fuel29"
          d="M1243,222a6.71,6.71,0,0,1,0-1.49c.07-.27.44-.48.65-.68-1.4-3.61-.3-7.34-.81-11.43L1247,206h11.69l.4,1.28c-.29.27-.51.66-.74.66-4,0-7.95,0-11.83,0l-1.5,1.5V239h-2Z"
        />
        <path id="fuel27" d="M234.91,220.16v3.68H208.17l-.2-3.68Z" />
        <path
          id="fuel28"
          d="M307.42,220.08h26.39v3.51c-.05,0-.3.39-.55.39-7.95,0-15.9,0-24.21,0Z"
        />
        <path
          id="fuel30"
          d="M1184,198.44v2.12l-3.93,3.63v15.57l-1.78.36V205.77c-2.08-2.21-4.61-4-4.21-7.33A8.8,8.8,0,0,1,1184,198.44Z"
        />
        <path id="fuel31" d="M1197,241l-1.24,1c-.26-.33-.51-.67-.76-1V205h2Z" />
        <path
          id="fuel32"
          d="M240.83,218.24l-3.69-1.52V201.36c.85-1,1.89-2,3.69-1.08Z"
        />
        <path id="fuel33" d="M240.83,240.91h-3.66V226.18l3.66-.21Z" />
        <path id="fuel34" d="M305.83,240.91h-3.66V226.19l3.66-.23Z" />
        <path id="fuel35" d="M1207,235v6.91h-1.84V216.09H1207V235Z" />
        <path
          id="fuel36"
          d="M1341,212c-.42.33-1,1-1.23.94-3-1.43-6.28-.74-9.09-1-1.94-1-1.69-2.53-1.68-4h12Z"
        />
        <path id="fuel37" d="M1329,207c0-1.43-.29-3,1.77-4H1341v4Z" />
        <path
          id="fuel38"
          d="M303.83,348.22h18.11l0,.55-2.94.41v4.67l-.69,0c-.11-.63-.29-1.25-.34-1.89-.05-.82,0-1.65,0-2.76-2-.48-4.14-.18-6.22-.23s-4.27,0-6.74,0v4.75l-.69.1C304.19,352.08,304,350.32,303.83,348.22Z"
        />
        <path id="fuel39" d="M1226,220v19c-1.5-.09-.85-1.24-1-2V221Z" />
        <path
          id="fuel40"
          d="M306.68,223.91h-4.51v-3.74a8.3,8.3,0,0,1,3-.1C307,220.66,305.35,222.4,306.68,223.91Z"
        />
        <path
          id="fuel41"
          d="M240.92,220.15v3.93a8.67,8.67,0,0,1-2.72-.46c-1.27-.69-1.54-1.94-.95-3.47Z"
        />
      </g>

      {/* LIVESUPPORT */}
      <g
        id="livesupportgroup"
        className="fill-[#02fee0]/50 hover:fill-[#02fee0] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("13")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="livesupport1"
          d="M570,206.63a2.29,2.29,0,0,1-1.51.37c-.11.11-.33.23-.33.35,0,10,0,19.91,0,29.66l-2.87,3.87h-9.8c-1.32-2.13-2.65-4.18-3-6.79-.17-1.28.61-2.14.59-3.35-.16-7.13-.08-14.26-.08-21.51l-1.51-.3c.32,2.09-.73,4-.54,6,.22,2.48,0,5,0,7.48v7a46.39,46.39,0,0,1-.09,7c-.24,1.61-1.29,3.1-1.93,4.56H538.64c-.75-1.1-1.54-2.25-2.64-3.84V207c-.77,0-1.38,0-2.1-.06-2.09-1.25-4.67-1.33-7.93-.06,2.87,0,5.45,0,7.93.06a10.43,10.43,0,0,1,.1,1.9l-8,.34c0,.25,0,.49,0,.73h7.85v27.48l-2.16,3.69c-3.77-.48-7.71.9-11.6-1.47-1.79-1.74-1-4.57-1.69-6.94-.63-2.19.39-4.86.71-7.53h-7.46l-2.95-2.89c.43-2.82.89-5.82,1.38-9h6.4c1.85-2.93,3.69-5.68,1.5-9.13l1.51-4.1,2.83-2.83h8.3l3.26,3.26v4.26l1.86.51c.12-2,.24-3.93.34-5.58l3.66-2.48h7.68c1.58,1.46,4,2.46,5,6.15l.63-3.4,2.77-2.76h8.36l3.77,4.18v3.48l1.77.33v-4.43l4.14-3.62h8.6l.94,1.93h1c.14.13.39.26.37.33-.54,2.66,2.45,4.94.69,7.82-.61,1-.47,2.51-.47,3.78,0,9.17,0,18.33,0,27.65L582.16,241h-9.55c-.76-1.11-1.55-2.28-2.49-3.67V209.91H575l0-.68-5-.4v-2.2a5.71,5.71,0,0,0,4.91-.37A21.93,21.93,0,0,0,570,206.63Z"
        />
        <path
          id="livesupport2"
          d="M333.21,321.74,332,320.43l1.46-4.4c.25.22.48.59.72.6,4.43.2,8.86.36,13.63.54.47,1.85.14,4,.2,6.05s0,4.28,0,6.33c-4,2.61-8.39.86-12.06,1.51l-2.61-1.37C332.76,327.16,330.56,324.45,333.21,321.74Z"
        />
        <path
          id="livesupport3"
          d="M680,213v14.89c2.87.23,5.77.05,9,.13V213h1v14.89c2.87.23,5.77.05,9,.13V213h1v15h8v1h-7.91v3H708v1c-2.26,0-4.52-.05-6.77.05-.42,0-.82.62-1.23.95h-1c-.26-.33-.52-1-.79-1q-8.72-.07-17.42,0c-.27,0-.53.63-.79,1h-1c-.64-2.3-3,0-4.15-1.79l4-.35v-2.67l-3.84-.43.06-.67H679V213Zm18.9,16c-2.36,0-4.63,0-6.91,0-1.84,0-1.84,0-1.8,2.81h8.71Zm-18.81,2.84h8.82v-2.68h-8.82Z"
        />
      </g>

      {/* QUANTUMDRIVE */}
      <g
        id="quantumdrivegroup"
        className="fill-[#02aafe]/50 hover:fill-[#02aafe] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("6")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="quantumjump1"
          d="M175.15,188.46A37.59,37.59,0,0,1,178,185a49,49,0,0,1,4.23-3.3l14.08-1,6.72,7.18c0,15.71,0,31.84,0,48,0,1.55-.37,3.08.83,4.67,1,1.4-.46,3.08-1.3,4.28-1.13,1.59-2.59,3.5-4.27,4s-.8,2.08-2.38,2.23l-1.2-.71a13.55,13.55,0,0,1-2.6.65c-2.16.09-4.33,0-6.49.05a6.91,6.91,0,0,1-5.16-2c-1.62-1.52-3.35-2.9-5.31-4.59Z"
        />
        <path
          id="quantumjump2"
          d="M151,225.14v-19.6l6.95-6.65H164v-.62h-5.72L153.05,193v-3.38l4.22-5.64h8.22c6.88,6.23,5.38,9-.46,14.53l6.84,6.84v20l-4.72,5.51H155.39Z"
        />
        <path
          id="quantumjump3"
          d="M199,255.16v4.34l3.94,3.91v11.13L197.87,279l-1.61.11,3.74,3.57v6.09H179.16v-6.41l2.5-2.5h2.18l.07-.53-3.62-.45L177,274.27V263.4l4.55-3.33-.8-4.93C187,254.93,193,254.89,199,255.16Z"
        />
      </g>

      {/* COMPUTER */}
      <g
        id="computergroup"
        className="fill-[#0217fe]/50 hover:fill-[#0217fe] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("15")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="computer1"
          d="M366.17,206.17c2.7-.18,5.18-2.52,7.73-.16,1.87-.92,2.18-.92,3.67-.08l1.47-1.47c1.78.2,3.29.51,4.81.52,9.65,0,19.31-.09,29,.08a84.41,84.41,0,0,1,10,1.24c.26,0,.47.44.71.68,1.76-2,4.06-.51,5.95-1L431,207.5c0,9.1,0,18.24,0,27.39a7.29,7.29,0,0,1-2.31,5.88H425.2L423.81,239l-3.43,1.82c-2.57-.32-4.6-.62-6.64-.81-2.59-.23-5.18-.49-7.77-.5-2.29,0-4.59.39-6.88.47-2.63.09-5.26,0-7.78,0l-.81-2.36c-.31.91-.5,1.48-.68,2L385.73,241l-1.62-1.11c-3.36,2.45-6.46.58-9.78-.74l-1.61,1.73h-4c-.79-.87-1.44-1.58-2.55-2.78Z"
        />
        <path
          id="computer2"
          d="M1581.92,308.17v36.66H1534c-.06-5.9,0-12,0-18.08s0-12.27,0-18.58Z"
        />
        <path
          id="computer3"
          d="M1608,356.46v-18l2.77-2.34h11.8l2.3,2.3v12.47Z"
        />
        <path
          id="computer4"
          d="M1598,331h-5.59c-.19-.53-.38-1.1-.63-1.82l-1.36-.27-1.24-5c1.63-2.75.56-6.06.81-9.24s-.7-6.48,1.62-9.9c1.61-.21,3.6-.5,5.61-.68.23,0,.52.62.78.95Z"
        />
        <path
          id="computer5"
          d="M1599,305c1.29-1.85,3.13-1.08,4.67-.73,1.14.25,2.12,1.25,3.23,2v22.33l-2.46,2.45H1599Z"
        />
      </g>

      {/* RADAR */}
      <g
        id="radargroup"
        className="fill-[#3c722e]/50 hover:fill-[#3c722e] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("7")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="radar1"
          d="M546.41,137c-4.38-1.6-8.27-1.34-12.49-.3-4.43-1.6-9.4-.67-14.26-.65-4.69,0-9.5-1.05-14.08.91-.56.92-1.12,1.84-1.73,2.86H488c.66-2.48,1.31-5,2-7.59l-3.14-.54c.45-1.83.87-3.59,1.35-5.56h15.54l2.07,2.87c.88.67,2.8,1,4.95,1,5.16-.1,10.33.07,15.49-.08,2-.06,4.06.54,6.21-.71a18.68,18.68,0,0,0,3.91-3.39c3.11-3.21,7.2-4.52,10.91-6.47,1.83-1,4.33-.61,5.92-2.11,4.52-.77,8.86-1.83,13.26-2.19,4.63-.37,9.32-.08,14-.08l1.59,1.71c10.92,1,19.93,5.42,26.87,14V136H597.67c-2.84,0-5.67-.07-8.5,0a19.79,19.79,0,0,0-3.65.91c-.12-.11-.57-.89-1-.9q-18.51-.09-37,0C547.14,136,546.79,136.68,546.41,137Z"
        />
        <path
          id="radar2"
          d="M409.53,331.82c.22-2.14.43-4.15.69-6.55l3.57-3.24h7.93l3.48-5.94h14.51l2.17,3.5V327c-1.26,1.28-2.51,2.55-3.62,3.66-3.14-.21-6.33-.55-9.53-.62A7.5,7.5,0,0,1,423,327.5V323c-2.2,1.55-4.46.71-6.58,1-4.44,2.75-5.07,4.09-3.51,7.76Z"
        />
      </g>

      {/* WEAPON */}
      <g
        id="weapongroup"
        className="fill-[#f1fe03]/50 hover:fill-[#f1fe03] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("12")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="weapons1"
          d="M576.49,466l1.5,4.12c-.48.93-1,1.9-1.46,2.87-6.56-.44-13,1.78-19.54,1-6.42,2-13,.46-19.58,1.12-1.46,1-2.22,3.36-4.39,2.94l-8.34,5.65c-4.55.43-9.15.42-13.51,1.44-3.23.75-6.13,1.32-9.2-.12a1.77,1.77,0,0,0-1.46,0c-2.6,1.83-5.08.9-7.7,0a59.16,59.16,0,0,0-6.66-1.47v-6.85a28.73,28.73,0,0,0-2.66-3.69c-3.25-3.23-5.1-6.92-4.39-11.82h61.62l2.12,2.93c1,.77,3,.94,5.18.87,3.15-.09,6.32-.1,9.48,0,1.71.07,3.5-.61,5.16.88a3.71,3.71,0,0,0,3.36,0c2.52-1.45,4.77-.94,7.23,0C574.24,466.32,575.51,466,576.49,466Z"
        />
        <path
          id="weapons2"
          d="M736.22,126.34l1,3.18c-5.34,4.4-11.38,1.5-17.16,2.79-.38.63-.95,1.56-1.61,2.62H706.87l-5.5,4h-4l-.49,1.6c-.1.1-.33.48-.55.48-13.29,0-26.59,0-40.23,0v-4.92h-6.9V130.3c2.89-3,6.24-5.83,11.46-6.69l4.67-3.61c10,0,19.8-.08,29.61.06,2.17,0,4.38-.73,6.66.81,1.55,1,4.22-.81,6,1.13,2.79-.48,5.37.87,8.06.94,2.91.07,5.73.86,8.53,1.28C728,124.8,731.9,125.49,736.22,126.34Z"
        />
        <path
          id="weapons3"
          d="M531,432l3.83,1.2c.82,6.17-.93,12.29,1.13,18.29l-1.35,1.42H478.42l-1.31-5.32,1-1.36c-2.94-3.74.4-7.75,0-11.74l2.44-2.49H531Z"
        />
        <path
          id="weapons4"
          d="M485,430h-3.87c-.28-2.54-.06-5.12-.15-7.84h51c0,2.44,0,4.75,0,7,0,.27-.63.53-1,.79Z"
        />
      </g>

      {/* SHIELD */}
      <g
        id="shieldgroup"
        className="fill-[#249800]/50 hover:fill-[#249800] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("8")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="shields1"
          d="M1297.5,433l.53.53,5.4-.7,4.79-3.43a6.62,6.62,0,0,0-4.21-3.88v-4c.24-.17.49-.51.75-.51,6,0,11.94,0,17.81,0,1.3,2.24-.43,3.32-1.91,4.82h9.91l1.82-2.85,1.28,1.06c8.74-3.57,17.85-1.33,26.89-2.19l2,3.14h2a4.57,4.57,0,0,1,4.69-3c8.14,0,16.28,0,24.54,0l.34,1.66,1.75.6v5.39a8,8,0,0,1-6.41,2.39c-7.32-.12-14.65,0-22.14,0l-3.93-3.49L1360.7,432c-6.07,0-11.9-.05-17.73,0-2,0-3.78-.8-5.59-.87-1.57-.06-3-.72-4.75-.48s-1.63-1.89-1.74-3.53c-5.31-.37-10.59-.42-15.76,1.24,0,.29-.09.61-.18,1.3a7.81,7.81,0,0,1,4.81,2.43,6.87,6.87,0,0,0,4.18,1.77c2.16.05,3.93,1.1,5.93,1.49a13.8,13.8,0,0,1,4.61,1.39c1.67,1,4,.83,6,1.24,2.59.52,5.34.54,7.53,2.22v5.59a64.36,64.36,0,0,1-8.34,2.09c-2.37.3-4.53,1.6-7.08,1.14-2.22-.4-4.4.7-6.54,1.11-9.52,1.83-19.07.15-28.39,1l-2.46-2.46V435.34Zm54.67-6.83c0,.27,0,.55,0,.83,1.62,0,3.24.06,4.85,0s3.31.33,4.81-.81Zm13,0c2.89.66,5.8,1.17,8.65,0Z"
        />
        <path
          id="shields2"
          d="M278.5,369l-.82-.82c-.58.26-1.3.89-1.83.75a10.86,10.86,0,0,0-4.68,0,38.44,38.44,0,0,1-6,.07c-1.83,0-3.66,0-5.49,0a28.13,28.13,0,0,1-12.17-1.94c-.42-.19-1,0-1.46-.08-1.85-.37-3.75.6-5.67-.87-1.2-.91-3.3.24-5.08-1-1.13-.77-3.21-.14-4.44-.14L228,363.53V358.3a29.91,29.91,0,0,1,9.35-2.3c2.57-2.56,6.2-1.84,9.27-2.91s6.4-1.43,9.54-2.08l4.72-3.73v-5.91l-5.7-1.43v-2.36l-2.2-1v-2.29h16.84v5.44l-1.71.59v7.44l1.64.48c.13,1.11.29,2.46.46,4l1-1c1.45.89,3,1.17,4.4-.1,1.4,1.72,3.45.31,5.2,1.12v14.38Z"
        />
        <path
          id="shields3"
          d="M250.1,336.9c2.64,3,2,5.36.51,7.93-1.63,1.3-3.88,1.19-6.14,1.18q-9.48,0-19,0c-2.15,0-3.93-.55-4.81-2.89H218.5l-1.65,2.72c-4,.64-7.48-.32-11-1.44a5.51,5.51,0,0,0-3.31-.33c-4.63,1.84-9.41.43-14,1-1.81-4-1.81-4-.52-7.59,3.28-1.66,6.82-1.54,10.36-1.51,6,0,12,0,18.28,0l1.9,3h2.07l.54-1.43a7.76,7.76,0,0,1,5-1.61q9.48.15,19,0A10,10,0,0,1,250.1,336.9Zm-28.9,3.28c2.86.68,5.78,1,8.65,0Zm-3.2.57v-.5h-9v.5Z"
        />
        <path
          id="shields4"
          d="M273,316h3l2.88,2.36v9.11L275.05,330c-2.28-.48-5.39,1-8.32-.72-2.88,1.62-6,.26-8.79.88L254,327.22v-3h-6.79c-4.2,2.68-4.89,4.12-3.21,7.61h-3.69l1.67-8.93,10.88-1.54,3.2-5.32Z"
        />
        <path
          id="shields5"
          d="M280.07,323.93c0-.7-.06-1-.09-1.57l7.67-1,3.66,2.7c.25,1.93.61,4.72,1,7.76H289.2C291.36,327.63,288,323.24,280.07,323.93Z"
        />
      </g>

      {/* COOL */}
      <g
        id="coolgroup"
        className="fill-[#02fe88]/50 hover:fill-[#02fe88] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("16")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="cool1"
          d="M514,292c1.27-2,3.15-.43,4.88-1.24v10.75L522,303l4,4v16.56l-5.58,5.34h-22l-5.29-5.29V306.41c2.11-1.49,3.17-4.8,6.91-4.56V291h5v9.91h2V291h5v10.91h2Z"
        />
        <path
          id="cool2"
          d="M730.07,233.24l9-.42v-.68h-7.87v-3h8c-1.36-1.9-2.87-.83-4.11-1a23.5,23.5,0,0,0-3.95-.05c0-1-.07-1.61-.12-2.61l5.15-4.35h30.24c2.91,3.63,5.65,7.35,4.44,12.61l-3.8,4.92c-5.89,2.33-11.34,1.17-16.7,1.4-3.16.14-6.34-.1-9.5.07a8.55,8.55,0,0,1-7.27-3C732.58,236,731.61,234.93,730.07,233.24Z"
        />
        <path
          id="cool3"
          d="M523,352.34v7.33L519.43,362c-14.1,0-28.37,0-42.65,0a7.14,7.14,0,0,1-5.66-2.42v-7.22a7.59,7.59,0,0,1,6-2.41q19.94.11,39.88,0A8.71,8.71,0,0,1,523,352.34Z"
        />
        <path
          id="cool4"
          d="M474.42,375.85,471,372.52v-4.87l3.47-3.65h44.95l3.56,3.48v5l-3.34,3.34Z"
        />
        <path
          id="cool5"
          d="M672,428.3l4-4.52v-2.61h11.8c.1,1.06.22,2.3.34,3.63l3.7,2.35v3.61h-8.7v-3.45l3.74-3v-2.07h-9.83c-.12,3.6,5,4.54,3.74,8.59l-3.83.57,3.9.92c0,.38.1.7.19,1.33l-3,.67,0,.46,2.78.4V445.7L677.38,449c-3.37.5-3.86-2.65-5.38-4.64Z"
        />
        <path
          id="cool6"
          d="M700,213c.12-.62,0-1.39.39-1.82.93-1.16,2-2.18,3.15-3.33,2.63,1,5,2.16,5.89,5.11h27.11l2.35,2.77v4.59a9.34,9.34,0,0,1-1.87-1.24c-1.17-1.34-2.24-2.76-3.18-3.93H709c0,3.95,0,7.76,0,11.56,0,.43-.63.86-1,1.29h-8Z"
        />
        <path
          id="cool7"
          d="M679,234l-5,4.22-3.88-3.54V211.5l3.4-3.49h2.15c.91,1.76,3.69,2.29,3.37,5v15.09h-3.93l-.06.67,3.84.43v2.67l-4,.35C676,234,678.36,231.7,679,234Z"
        />
        <path
          id="cool8"
          d="M749,445.9V435.3l4.13-.82-4-.7-.17-1.55,2.82-.43.08-.44-2.58-.51c-1.25-2,.9-3.27,1.22-5.09l3.82-2,3.61,4.07v17.71L754,449.13Z"
        />
        <path
          id="cool9"
          d="M690,213c.35-1.19.71-2.37,1.11-3.7l4.14-1.63c1.13,1.93,3.92,2.44,3.75,5.33v15c-3.23-.08-6.13.1-9-.13Z"
        />
        <path
          id="cool10"
          d="M680,213c.12-.62,0-1.4.39-1.82,1-1.15,2.08-2.15,3.09-3.17h2c1.38,1,1.54,3.1,3.48,3.55.11,0,0,.94,0,1.44v15c-3.23-.08-6.13.1-9-.13Z"
        />
        <path
          id="cool11"
          d="M694.07,430.83v-3.51l4-3.55v-2.56h11.73c.1.62.24,1.51.38,2.44l3.84,3.84v3.45c-2.86.13-5.76,0-8.91.08-.51-3.81,3.2-5.42,4-8.59-1.72-.91-3.54-.27-5.25-.4s-3.22,0-5.08,0c.59,2.78,2.85,3.63,4.12,5.61v3.22Z"
        />
        <path
          id="cool12"
          d="M694,435.08h8.83v10.59c-1,1-2.17,2.16-3.33,3.33-3,.59-3.69-2.33-5.5-3.4Z"
        />
        <path
          id="cool13"
          d="M727,435.09h8.84v10.52L732.52,449c-3,.58-3.72-2.32-5.52-3.4Z"
        />
        <path
          id="cool14"
          d="M738,445.6V435.19c2.86-.49,5.78,0,8.83-.27v10.75L743.48,449C740.52,449.59,739.81,446.67,738,445.6Z"
        />
        <path
          id="cool15"
          d="M716.17,435.09h8.67V445.5l-3.3,3.48h-2.07l-3.3-4Z"
        />
        <path
          id="cool16"
          d="M691.92,435.17v9.95L688,449c-3,.33-3.38-2.66-4.94-4.55v-9.31Z"
        />
        <path
          id="cool17"
          d="M714.26,435.17l-.92,2.15a10.5,10.5,0,0,1-.33,8.62c-.92,1.83-2,3.3-4.57,3L705,445c0-2.49,0-5.61,0-8.74a6.22,6.22,0,0,1,.21-1.05Z"
        />
        <path
          id="cool18"
          d="M731.84,421.11c.1.92.18,1.7.26,2.49l3.74,3.74v3.57h-8.67v-3.56c1.15-1.46,3.06-2.59,4.26-5-4.07-.46-7.72-.83-11.41.36V421.2c1.37-.06,2.89-.49,4.16-.1s1.83-1.67,3.34-.31C728.36,421.54,730.31,421,731.84,421.11Z"
        />
        <path
          id="cool19"
          d="M742.18,421.24c2.08-.82,4.41.69,6.18-1.1,1.55,1.57,3.67.41,5.5,1.1,0,.46.07.91.12,1.51-3.63-1.56-7.25-.26-11.1-.92.33,3,2.75,3.69,4,5.83v3.12h-8.73v-3.37C739.65,425.44,742.5,424.34,742.18,421.24Z"
        />
        <path
          id="cool20"
          d="M680,234c.26-.33.52-1,.79-1q8.72-.07,17.42,0c.27,0,.53.63.79,1L695.33,237h-3c-.21-.6-.42-1.17-.66-1.84h-4.85L684.61,239Z"
        />
        <path
          id="cool22"
          d="M700,234c.41-.33.81-.94,1.23-.95,2.25-.1,4.51-.05,6.77-.05l1.45.81-4.05,4.4-4-1.28C700.47,236,701.92,234.23,700,234Z"
        />
        <path
          id="cool23"
          d="M708,232h-7.91v-3H708C709.37,230,709.37,231,708,232Z"
        />
        <path id="cool24" d="M694.1,433.82v-1.64h8.8v1.64Z" />
        <path id="cool25" d="M727.09,433.83v-1.66h8.82v1.66Z" />
        <path id="cool26" d="M716.1,433.82v-1.64h8.8v1.64Z" />
        <path id="cool27" d="M705.09,433.83v-1.66h8.82v1.66Z" />
        <path id="cool28" d="M683.1,433.82v-1.64h8.8v1.64Z" />
        <path id="cool29" d="M746.91,432.17v1.66h-8.82v-1.66Z" />
        <path
          id="cool21"
          d="M719.94,423.61l5,4v3.32c-2.85.14-5.75,0-8.92.08C715.73,427.79,717.55,425.86,719.94,423.61Z"
        />
        <path
          id="cool30"
          d="M698.9,229v2.82h-8.71c0-2.78,0-2.8,1.8-2.81C694.27,229,696.54,229,698.9,229Z"
        />
      </g>

      {/* IFCS */}
      <g
        id="ifcsgroup"
        className="fill-[#6804fe]/50 hover:fill-[#6804fe] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("2")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="ifcs1"
          d="M1648.6,295h-2l-5.57-5.56c.66-.13,1.84-.72,2.22-.38,1.29,1.12,2.71.91,4.14.91,5.49,0,11,.3,16.47-.06,6.75-.46,13.25,1.61,19.89,1,.65,2.31-1.24,2.8-2.12,3.78a12.74,12.74,0,0,1-3.43,2.49c-4.19,2.19-3.37,5.93-3,9.48a29.66,29.66,0,0,0,1.23,4.37l4.35-1v4.83h-5.79c-.18,2.33,1.6,3,2.54,4.18l8.81-1.32c.94,1.9,1.7,3.42,2.64,5.3l-2,3.54c-3.86,1.63-7.12-1.41-10.82-.45-1.77-2.56-3.47-5-5.3-7.7V307.3l-14.82-3v6.47a10.72,10.72,0,0,0,6.85-.61,15.53,15.53,0,0,0-.86,2.23,18.46,18.46,0,0,0-.24,2.49l-4.86.22v1.62l10.89,3.73v8.65l-10-1.3c-4.46-1.14-5.48-5.12-7.89-7.78-1.41-1.55-1.33-3.7-.89-5.52.19-.79.88-1.58.88-2.61,0-4.66,0-9.32-.07-14C1649.93,297.1,1649.2,296.28,1648.6,295Z"
        />
        <path
          id="ifcs2"
          d="M1153,446.51a29.25,29.25,0,0,1-2.85,3.76,27.77,27.77,0,0,1-4,2.62h-9.53c-2-2.07-5.79-2.56-6.62-6.29,0-2.15.17-4.31,0-6.44-.42-4.47,1.73-7.26,5.51-9.11a5.91,5.91,0,0,1,1.48-.25c.27-3.38-.79-7,2.51-9.69h4.22l.64,1.71,1.53.4v5c1.64,1.81,1.88,4.58,4.71,4.82l2.44,4.83Z"
        />
        <path
          id="ifcs3"
          d="M546.08,454.85c0-.78-.07-1.42-.11-2.21l-4.27-3.84,5.7-5.7h10.11l2.3,2.87h8l2.52-3h11.23c.17,1.46,1.32,1.81,2.34,2.52s1.29,2,1.94,3.15L582,453c0,.13-.1.91-.21,1.83Z"
        />
        <path
          id="ifcs4"
          d="M1565.54,359l-3.9,3.9h-18.43l-9.17-6.47a2.75,2.75,0,0,1,1.26-3.17,57.83,57.83,0,0,1,5.9-3.84,9.56,9.56,0,0,1,4.91-1.43c4.8.16,9.62.05,14,.05,3.45,1.43,5.37,4.43,8.7,5.43.73.22,1.07,1.76,1.54,2.6C1568.79,357.57,1568,359.44,1565.54,359Z"
        />
        <path
          id="ifcs5"
          d="M1456,356.48v-2l6.43-6.42h10.66l7,7-6.2,7.9h-11.08C1459.84,361.48,1458.87,358,1456,356.48Z"
        />
        <path
          id="ifcs6"
          d="M1481.88,355.14,1489,348h10l7.09,7.17c-2.06,2.55-4.27,5.27-6.33,7.83h-11.58Z"
        />
        <path
          id="ifcs7"
          d="M1525,348l7.09,7.1-6.14,7.74h-11.54c-1-1.19-1.86-2.8-3.21-3.76s-1.6-3-3.79-3.7c1.42-1.52,2.49-2.7,3.6-3.85s2.34-2.36,3.5-3.53Z"
        />
        <path
          id="ifcs8"
          d="M1431.78,363h-6.71l-4.07-4.07v-6.44l3.59-3.49h6.34l4.07,4.07v5.45Z"
        />
        <path
          id="ifcs9"
          d="M1441.07,363l-4.07-4.07v-5.86l4.07-4.07h5.45l4.48,3.22v6.3l-3.22,4.48Z"
        />
        <path
          id="ifcs10"
          d="M1693.08,289.86l-7-1.2a38.6,38.6,0,0,0,.89-4.26c.18-1.93-.28-3.58-2.37-4.48-.47-.2-.52-1.36-.83-2.32,1.61-.91,4-1.31,3.07-4.19l4.62-1.69C1694,277.89,1692.58,283.89,1693.08,289.86Z"
        />
        <path
          id="ifcs11"
          d="M568,439.53c4-4.09,10.43-2.82,13.95,0C576.19,443,573.67,442.86,568,439.53Z"
        />
        <path
          id="ifcs12"
          d="M545,439.52c4.23-3.32,9-3.4,13.78-.22C555.27,442.85,549.55,443,545,439.52Z"
        />
      </g>

      {/* POWERPLANT */}
      <g
        id="powerplantgroup"
        className="fill-[#f502fe]/50 hover:fill-[#f502fe] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("powerplant")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="powerplant"
          d="M184,295.49v-5.27l1.86-.33c.08,1.68.16,3.27.23,4.7l1.3,1.3h5.42v-4.33l3-2.3c.14,2.57.23,4.45.33,6.33,3,1,4.29,3.9,6.76,5.57v21.53l-1.71.6-.24,2.15-3.72,2.42H183.43c-2.14-1.62-3.47-4.3-6.36-5.24V301.4C179.21,299.65,180.82,296.88,184,295.49Z"
        />
      </g>

      {/* GRAVITATIONGENERATOR */}
      <g
        id="gravitationsgeneratorgroup"
        className="fill-[#fe0101]/50 hover:fill-[#fe0101] transition-colors duration-200 hover:duration-300"
        onMouseEnter={() => setSelectedTech("grav")}
        onMouseLeave={() => setSelectedTech(undefined)}
      >
        <path
          id="grav1"
          d="M496,239c-.34.92-.68,1.83-1.35,3.61,4.21-2.09,6.07-5.33,8.79-7.46h4.48c3.43,5.8,2.09,11.72.77,17.74h-6.64l-7-7v-1.62l-4-.43V241h3v-2Z"
        />
        <path
          id="grav2"
          d="M491,241c-2.16.72-2.62-2.33-4.58-2.08l-6.51-8.57,1.19-2.72c4.36-3.61,9.3-2.43,14-2.65L499,227.2V230c-.21.71-.23,1.61-.68,2.11-1.4,1.53-3,2.91-4.32,4.21V239Z"
        />
        <path
          id="grav5"
          d="M481,253c-1.53.24-3.3-.69-4.34.73l-3.51-1.11a37.77,37.77,0,0,1-2.08-6.12,16.41,16.41,0,0,1,2.4-10.5,19.57,19.57,0,0,1,3.33.05,11.44,11.44,0,0,1,2.57,1.09c.78,1,1.57,2.16,2.49,3.19s2.09,2.12,3.14,3.17v3.2l3,.52V250h-3l-.26-2L483,249a2.56,2.56,0,0,0-3.05,2.08C480.31,251.74,480.65,252.37,481,253Z"
        />
        <path
          id="grav6"
          d="M488,250l3.41-1.31c1.33,3.59,4.45,5.15,6.49,7.81V263c-2.61-.09-5.22.84-7.5.7s-4.65-.63-6.91-.73L482,261.5V257c1-1.36,2-2.7,3-4.08.15-.21,0-.61,0-.92A2.46,2.46,0,0,0,488,250Z"
        />
        <path
          id="grav7"
          d="M480,255v5.3l-3.75-1.55c-.46-1.1-.91-2.2-1.55-3.75Z"
        />
        <path id="grav8" d="M501,234v-4h1.45c.79,1.24,1.58,2.47,2.57,4Z" />
        <path id="grav9" d="M481,254l-1,1Z" />
        <path id="grav10" d="M500,235l1-1Z" />
        <path id="grav11" d="M481,253l.83.67L481,254Z" />
      </g>

      <g id="transparent">
        <ellipse
          className="fill-transparent"
          cx="508"
          cy="431"
          rx="32.53"
          ry="1.41"
        />
        <ellipse
          className="fill-transparent"
          cx="562"
          cy="357.5"
          rx="39.6"
          ry="0.71"
        />
        <ellipse
          className="fill-transparent"
          cx="561.5"
          cy="360.5"
          rx="38.89"
          ry="0.71"
        />
        <ellipse
          className="fill-transparent"
          cx="1194.5"
          cy="223"
          rx="0.71"
          ry="25.46"
        />
        <ellipse
          className="fill-transparent"
          cx="1197.5"
          cy="223"
          rx="0.71"
          ry="25.46"
        />
        <ellipse
          className="fill-transparent"
          cx="1306.5"
          cy="222.5"
          rx="0.71"
          ry="24.75"
        />
        <ellipse
          className="fill-transparent"
          cx="1312.5"
          cy="222.5"
          rx="0.71"
          ry="24.75"
        />
        <ellipse className="cls-11" cx="1598.5" cy="318" rx="0.71" ry="18.38" />
        <ellipse
          className="fill-transparent"
          cx="348.5"
          cy="346.5"
          rx="0.71"
          ry="16.26"
        />
        <ellipse
          className="fill-transparent"
          cx="1189.5"
          cy="230.5"
          rx="0.71"
          ry="13.43"
        />
        <ellipse
          className="fill-transparent"
          cx="1245.5"
          cy="230.5"
          rx="0.71"
          ry="12.02"
        />
        <ellipse
          className="fill-transparent"
          cx="1242.5"
          cy="230.5"
          rx="0.71"
          ry="12.02"
        />
        <ellipse
          className="fill-transparent"
          cx="1224.5"
          cy="229"
          rx="0.71"
          ry="11.31"
        />
        <ellipse
          className="fill-transparent"
          cx="1207.5"
          cy="231"
          rx="0.71"
          ry="5.66"
        />
        <ellipse className="cls-10" cx="684.5" cy="230.5" rx="6.17" ry="1.91" />
      </g>
    </svg>
  )
}

export default TechCarrack
