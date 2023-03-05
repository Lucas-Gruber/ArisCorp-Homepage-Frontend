import { BasicPanel } from "components/panels"

const Avionics = ({ data, components, valid }) => {
  function setSize (size) {
    let label
    size == 0
      ? (label = 'XS')
      : size == 1
        ? (label = 'S')
        : size == 2
          ? (label = 'M')
          : size == 3
            ? (label = 'L')
            : size == 4
              ? (label = 'XL')
              : size == 5
                ? (label = 'C')
                : null

    return label
  }

  if(!data.hardpoints.filter((e) => e.type == 'computer' || e.type == 'computers' || e.type == 'radar' || e.type == 'radars')[0]) {
    return valid(false)
  }
  
  return (
    <BasicPanel>
      <div className={"hardpointGroupInner"}>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className={"hardpointTypeIcon"} fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 44.93 45.42">
              <path d="m31.49 43.8h-18.41l2-2h15.58l10.93-10.93v-15.58l2-2v18.41zm-27.92-29.09 10.93-10.93h14.6l2-2h-17.43l-12.1 12.1v18.41l2-2zm28.9 14.29v-12.38l-3.72-3.72h-12.34l-3.72 3.72v12.38l3.72 3.72h12.34zm-17.78-.83v-10.72l2.55-2.55h10.68l2.55 2.55v10.68l-2.55 2.55h-10.68z" opacity=".4" />
              <path d="m12.3 28.28a2.93 2.93 0 1 0 -3.09-.67 2.9 2.9 0 0 0 1.09.68v2.76l-7.81 7.86 1.42 1.41 8.39-8.43zm-1.68-3.4a.93.93 0 1 1 0 1.32.93.93 0 0 1 0-1.32zm-3.07-3.15 2.45-2.39a2.93 2.93 0 0 0 3.33-4.72 3 3 0 0 0 -4.15 0 2.91 2.91 0 0 0 -.59 3.29l-3.05 3v10l-5.54 5.53 1.41 1.42 6.14-6.13zm3.06-5.73a.93.93 0 0 1 1.32 0 .93.93 0 0 1 0 1.32 1 1 0 0 1 -1.32 0 .93.93 0 0 1 0-1.32zm6.23 19a2.93 2.93 0 0 0 .63.95 2.52 2.52 0 0 0 1.89.86 3.35 3.35 0 0 0 2.26-.81 2.93 2.93 0 0 0 0-4.15 3 3 0 0 0 -4.15 0 2.9 2.9 0 0 0 -.71 1.21h-3.31l-8.32 8.34 1.41 1.41 7.74-7.74zm2-1.79a.93.93 0 1 1 1.32 1.32 1 1 0 0 1 -1.32 0 .93.93 0 0 1 0-1.32zm13.96-15.86a2.93 2.93 0 1 0 3.14.65 2.9 2.9 0 0 0 -1.14-.69v-3.11l7.64-7.68-1.44-1.42-8.2 8.27zm1.73 3.39a.93.93 0 1 1 0-1.32.94.94 0 0 1 0 1.32zm9-13.17-6 6v10l-2.46 2.39a2.93 2.93 0 1 0 1.41 1.42l3.06-3v-10l5.39-5.38zm-9.07 21.68a.93.93 0 1 1 0-1.32.94.94 0 0 1 0 1.32zm-6.29-18.73a2.9 2.9 0 0 0 -.69-1.11 2.94 2.94 0 1 0 0 4.15 2.91 2.91 0 0 0 .66-1h3.2l8.47-8.56-1.42-1.39-7.87 7.91zm-2.1 1.62a1 1 0 0 1 -1.32 0 .93.93 0 1 1 1.32 0zm4 19.79a3 3 0 0 0 -4.15 0 2.9 2.9 0 0 0 -.57 3.33l-2.79 2.87h-8.97l-5.86 5.87 1.42 1.41 5.28-5.29h8.95l3.37-3.46a2.93 2.93 0 0 0 3.25-4.73zm-1.41 2.74a1 1 0 0 1 -1.32 0 .93.93 0 0 1 1.32-1.32.93.93 0 0 1 0 1.32zm-11.83-20.18a2.92 2.92 0 0 0 2.64-4.19l2.93-3h8.93l5.87-5.88-1.41-1.42-5.28 5.29h-8.95l-3.56 3.61a3 3 0 0 0 -3.29.58 2.93 2.93 0 0 0 2.08 5zm-.66-3.59a.93.93 0 0 1 1.32 0 .93.93 0 1 1 -1.32 0z" />
            </svg>
            <span> Computer </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> {data.hardpoints.filter((e) => e.type == 'computer' || e.type == 'computers').length} </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner"}>
                    <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'computer' || e.type == 'computers')[0].size)} ({(data.hardpoints.filter((e) => e.type == 'computer' || e.type == 'computers')[0].size)}) </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"hardpointType"}>
          <div className={"hardpointTypeLabel"}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hardpointTypeIcon' fill="#00ffe8" stroke="#00ffe8" viewBox="0 0 41.32 41.32">
              <circle cx="20.66" cy="20.66" opacity=".3" r="16.46" strokeMiterlimit="10" strokeWidth="5" />
              <path d="m41.32 20.16h-20.16v-20.16h-1v20.16h-20.16v1h20.16v20.16h1v-19.42l11.26 11.94a1 1 0 1 0 1.41-1.41l-12-11.26h19.49z">
                <circle cx="20.66" cy="20.66" opacity=".2" r="9.18" strokeMiterlimit="10" strokeWidth="5" />
                <circle cx="20.66" cy="20.66" opacity=".15" r="5.58" strokeMiterlimit="10" strokeWidth="5" />
              </path>
            </svg>
            <span> Radar </span>
          </div>
          <div className={"hardpointItems"}>
            <div className={"hardpointItem"}>
              <div className={"hardpointItemQuantity"}>
                <span> {data.hardpoints.filter((e) => e.type == 'radar' || e.type == 'radars').length} </span>
                <span className='text-[#7c7c7c] lowercase'>x</span>
              </div>
              <div className={"hardpointItemSlots"}>
                <div className={"hardpointItemSlot"}>
                  <div className={"hardpointItemInner"}>
                    <div className={"hardpointItemSize"}> Size {setSize(data.hardpoints.filter((e) => e.type == 'radar' || e.type == 'radars')[0].size)} ({(data.hardpoints.filter((e) => e.type == 'radar' || e.type == 'radars')[0].size)}) </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicPanel>
  )
}

export default Avionics