const GalactapediaIcon = ({ width, height, classes }) => {
  return (
    <svg
      id="CommLinks_Icon"
      data-name="CommLinks Icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3072 3072"
      width={width}
      height={height}
      className="group-hover:[filter:url(#aris-glow)]"
    >
      <defs>
        <filter
          id="aris-glow"
          filterUnits="userSpaceOnUse"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur5"
          ></feGaussianBlur>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur10"
          ></feGaussianBlur>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="20"
            result="blur20"
          ></feGaussianBlur>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="30"
            result="blur30"
          ></feGaussianBlur>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="50"
            result="blur50"
          ></feGaussianBlur>

          <feMerge result="blur-merged">
            <feMergeNode in="blur20"></feMergeNode>
          </feMerge>

          <feColorMatrix
            result="aris-blur"
            in="blur-merged"
            type="matrix"
            values="0.00 0   0   0   0
                              0   1.00  0   0   0
                              0   0   0.91  0   0
                              0   0   0   1   0"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="aris-blur"></feMergeNode>
            <feMergeNode in="blur5"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <path
        className={classes}
        d="M1777.41,3072c1.53-10.05-3-20.55,3.29-30.38,5-7.89-2.61-19.33,6.46-26.56-2.67-13.68,3.65-26.25,4.91-39.44a117.74,117.74,0,0,1,3.42-18c5.52-21.62,7.14-44.2,11.33-66.21,4.44-23.33,5.15-47.42,13.57-69.95,3.59-9.58-3.72-21,5.12-29.59-1.18-26.82,12.57-51.67,10.38-78.89l7.69-7.2c52.62,0,106.13-.23,159.64.23,8.24.07,16.47,3.23,25.91,5.21l15,16.18c1.84,7.85,3.58,15.28,5.65,24.08-.92,1.84-4.21,5.3-4,8.55,1.19,20.76-1.73,41.1-5.2,61.41-1.28,7.51-3.32,14.89-4.78,22.38-1.31,6.75-.16,13.2-3.63,20.51-4.75,10-1.14,22.53-5.56,34.21-5.16,13.61-14.61,42.34-22.84,51.48-12,13.37-28.21,18.81-45.5,19.2-31.65.73-63.32.21-96.83.21-10,33.21-14.87,68-20.66,102.53Zm118.71-316.62c-9.69,56-19.51,112.95-29.3,169.63,14.44,7.85,14.44,7.85,81.07-1.41,15.16-18.71,14.37-42.62,19.43-64.6,2.94-12.76,1-27.36,6.44-38.64,5.51-11.45-1-23.33,4.12-32.29,6.31-11,2.74-21.33,4.68-32.69Z"
      />
      <path
        className={classes}
        d="M1603.15,2067.43c19.16-19.19,36.13-38,54.91-54.7,92.61-82.56,176.51-174,264.78-260.93,88.59-87.3,175.92-175.89,263.8-263.91l9-9V775.71c-4.17,2-7.25,2.74-9.24,4.61-31.6,29.8-63.37,59.43-94.47,89.76-30.84,30.08-59.52,62.54-91.72,91-65.52,58-124.46,122.58-187.27,183.24-2.11,2-4.9,3.36-7.77,5.28-4.69-19.26-5.91-136.21-2.86-243.55,13.79-13.81,28.14-27.09,41.27-41.5,108.73-119.35,227.87-228.43,339-345.39q42.35-44.58,85.15-88.78c28.7-29.65,58.22-58.51,88.8-89.14V1553.05c-10.36,10.1-22.81,21.71-34.67,33.9-55.25,56.75-112,112.15-164.89,171-36.18,40.31-77.17,75.86-112.13,116.93-35.18,41.32-77.1,76-112,117.07-36.71,43.23-80.55,79.37-117.18,122.25-35.24,41.25-77,76-112,117.06-35.17,41.33-77.06,76-112,117.07-35.16,41.33-75.55,77.26-112.4,116.74-12.46,13.34-24.13,27.41-36.31,41-2,2.18-4.71,3.64-9.08,6.93-1.19-4.77-2.14-7.38-2.46-10-9.32-78.9-3.15-158.12-4.91-237.18-8.39-34-4.16-68.59-4.75-102.93-.59-34.17,3.41-68.8-.94-102.41-7-54,1.27-108.16-5-161.51-5.57-47.56,1.18-95.16-4.79-142-5.86-45.91,1-91.92-4.87-137.11-6.17-47.52,1.26-95.19-4.87-142-7.08-54-.58-107.76-5.07-163.38-9.9-12.55-19.88-27.68-32.24-40.48-69.7-72.18-141.36-142.52-209.52-216.12-39.51-42.66-82.68-81.81-120.57-125.7-31.2-36.14-66.5-67.92-98.79-102.77-26.77-28.88-53.44-57.84-80.7-87.35-4.9,22.35-6.75,722.6-2.61,873,22.4,22.44,46.11,43.73,66.94,67.55,50.1,57.29,107.82,107.22,158.2,164,45.71,51.49,97.11,97.09,144.22,149.36v249.24c-4.13,3.11-4.59-2.22-6.72-3.44s-3.5-3.34-5.24-5.05c-83.77-82.27-166.08-166.1-251.81-246.26C901.2,1938,849.54,1880.9,792.15,1830.05c-40.59-36-76.37-76.46-115.69-111.52V293.67c8.86,6.57,17.39,11.68,24.36,18.41,6.65,6.44,11,15.24,17.53,21.83,50.37,50.84,103,99.56,151.06,152.5,58.79,64.79,124.35,122.87,182.67,187.82,55.76,62.1,118.57,117.13,174.14,179.11,58.42,65.15,124.32,122.9,182.53,187.94,53,59.17,111.41,112.66,166,170.07,10.74,11.31,19.48,23.38,24.74,38.61,2.26,6.55,2.27,12.44,2.28,18.47q.29,369.78.11,739.57c0,7.72-.4,14.84-4.18,22.69C1592.4,2041.67,1601.25,2053.15,1603.15,2067.43Z"
      />
      <path
        className={classes}
        d="M958.68,183.35V172.82h446.08c6.24-8.35,12.21-16.48,18.34-24.48s14.11-14.18,19.63-23.47C1449.8,113,1461,103.39,1470,92.3,1495.58,60.84,1523.11,31,1550.28,0c13.2,13.38,27.07,25,37.88,39,15.76,20.41,35.81,36.81,51.5,56.81,14.44,18.41,31.47,34,46.93,51.16,6.76,7.53,12.39,16.08,18.86,24.59h429.26l7.88,7c-45,55.89-100.41,101.26-147.36,154.53C1951.86,382.25,1902,425,1859,474.13c-44.83,51.16-96.56,95.51-141.17,146.5-43.73,50-93,94.27-138.26,142.58-4.7,5-7.49,11.86-12.32,16.71-5.34,5.35-9.18,14.06-22,11.4-15.92-18.91-39.26-33.89-53.1-58-1.56-2.72-4.51-4.64-6.79-7-83.86-85.62-168.87-170.15-251.17-257.25-52.74-55.82-108.65-108.62-160-165.6C1037.36,262.62,996.77,225.77,958.68,183.35Zm530.84,110.53c-73.76,0-145.15,0-216.55.07-.58,0-1.27,1-1.72,1.61a10.16,10.16,0,0,0-.81,2.1c.32,1.49.11,3.54,1,4.4,44.55,42,85.41,87.71,131.57,128.3,35,30.81,69.45,62.21,106.46,90.61,17.58,13.5,34.46,28.2,54,37,49.29-47.22,97.89-93.17,145.78-139.86,37.78-36.84,74.68-74.6,111.23-111.21v-13H1614.05l-52.48-59.05c-20.92,5.36-37.93,13.92-50.25,30.15C1504.21,274.38,1497.14,283.78,1489.52,293.88Z"
      />
      <path
        className={classes}
        d="M2492.36,2705.82c5.74-28.05,11.12-54.35,16.75-81.84h64c-6.29,38.1-13.1,75.74-19.88,113.49-6.95,38.69-13,77.6-20.06,116.31-7,37.86-12.66,75.95-19.21,115.69H2367.57c-24.09,0-24.09,0-47.42-15.4-10.07-22.65-5.61-46.78-6.52-70.39,9.3-11.82-.23-28.25,9.75-39.9-3.06-13.74,3.16-26.37,5.18-39.43,2.56-16.51,5.52-33.39,11.55-48.85,12.69-32.57,36.48-50.17,73.35-49.74C2439.46,2706.06,2465.46,2705.82,2492.36,2705.82Zm-6.9,43.94c-18.28,0-32.89.22-47.49-.08-11-.22-21.91-.28-31.23,6.94-16.81,45.63-20.08,94.13-28.5,140.82l4.05,13c4.77,6.23,8.61,11.27,11.93,15.61,21.35-3.67,40,10.29,60.1,2.75C2464.58,2869.83,2474.84,2810.78,2485.46,2749.76Z"
      />
      <path
        className={classes}
        d="M174.07,2830.72c-18-12.39-36.17-5.25-53.22-8.62,7.66-10,1.85-21.45,4.86-31.67l5.83-5.83H242.09c-8.36,61.55-21.55,122.32-30.93,184.29H45.93l-23.41-23.51c0-31.93-2.85-62.27.89-91.77,3.05-24,3.56-48.91,13-72.39,3.44-8.55,3.84-19.64,5-29.46,2.89-23.84,12.56-45.34,20.45-67.32,7.75-21.62,21.91-38.89,52-46.53h145.7c7.34,14.92-6.6,27.43-2.08,43.49-23.91,0-46.39-.15-68.87,0-21.2.19-42.75-2.67-64,7-9.61,16.48-16,34.35-20.11,54.4-6.48,31.45-10.6,63.35-17.54,94.78-5.36,24.22-10.83,50-4.47,77.23l10.63,10.65H157C162.69,2893.89,168.41,2862.16,174.07,2830.72Z"
      />
      <path
        className={classes}
        d="M430.85,2803.46c2.54-18.23,4.88-35.05,7.5-53.86H321.45c1.67-15.32,3.17-29,4.77-43.78,44.4,0,88.91-.67,133.38.45,11.65.29,23.17,6.15,33.39,9.07l11.9,24.31c-2.26,10.23,3.17,23.2-3.58,36.8-5.3,10.69.11,24.11-5.17,36.82-5.18,12.48-2.08,28.19-6.09,41.42-6.48,21.32-5.85,43.75-13.49,65-5.38,15-4.28,32.29-6.13,49.1H291.24l-20.7-16.54c-11.1-20.24-8.54-37.8-9.27-55.05-.9-21.07,7.57-39.13,18.67-55.62,7.54-11.19,13.1-24.67,28.49-29.65,10.9-3.53,21-8.77,33-8.62C371.24,2803.71,401.1,2803.46,430.85,2803.46Zm-20.37,121.32c4-24.31,7.8-47.72,11.67-71.46H340c-14.46,20.29-17,42.24-14.86,65.25l6.21,6.21Z"
      />
      <path
        className={classes}
        d="M3013.17,2706.64c11.69,6.15,23.74,12.5,37.35,19.65-1,14.42.73,29.48-3.7,42.44s3.18,26.78-6.36,39c-3.15,4,.13,12.7-.69,19.1-.66,5.14-3.65,10-4.56,15.1-2,11.46-.13,25.09-5.82,34-6.95,10.91,1.6,24.41-8.92,33.08-1.87,17.93-3.73,35.87-5.54,53.31-4.32,8.67-12,7.16-19.15,7.17h-156c-15.71-7.14-26.83-16.5-32.66-31.22-2.69-8.53,1.82-18.81-5.88-26.68-.81-.84-.46-3.25-.05-4.76,5.11-19,4.64-40.17,15.31-57,11.54-18.16,24.56-35.88,47-43.65a47.7,47.7,0,0,1,15.89-2.62c31.64-.21,63.29-.11,95.44-.11,2.35-15.31,4.7-30.59,7-45.59-8.93-9.25-20-8.21-30.94-8.14-19.48.11-39,.46-58.45-.17-9-.29-18-2.65-28.34-4.29,2.43-13.73,4.55-25.67,6.84-38.63Zm-60.49,218.87c5-26.33,9.75-51.53,14.68-77.58h-65.25l-19.9,10.22c-17.56,22.34-12.44,45-12.37,67.36Z"
      />
      <path
        className={classes}
        d="M967.2,2969.47c-53.94,0-106.63.09-159.32,0a44.65,44.65,0,0,1-44.39-44.32c-.11-11.37-.06-22.75,0-34.12.09-19.23,5.21-36.54,19.12-50.56,7.36-7.41,9.18-18.82,21.74-23.06,8.92-3,17.65-8.17,27-11a58.09,58.09,0,0,1,15.83-2.81c28.32-.27,56.64-.13,86.26-.13,2.41-17.21,4.77-34.12,7.4-52.92h-120c2.47-7.67,5-13,5.75-18.5.88-6.33.21-12.86.21-18.9l7.31-7.32c42.14,0,84.31-.06,126.48.06,5.47,0,11.19.08,16.36,1.6,24.21,7.13,35.94,30.9,28.33,56.38a84.4,84.4,0,0,0-2.93,11c-1.67,10.69,2,21.37-4.28,32.45-4.53,8.06,2.77,20.5-5.53,29.29,3.51,14.55-5,27.61-5.17,41.84-.16,10.72-1.37,22-5.07,31.91-3.12,8.39-3.89,16.4-4.6,25-.62,7.53-2.67,15-4.8,22.32C971.69,2961.87,969,2965.76,967.2,2969.47Zm-133.82-44.73h80.07c3.85-25.83,7.58-50.86,11.38-76.33H846.77c-13.83,22-24.84,43.86-19,70.74Z"
      />
      <path
        className={classes}
        d="M1577.6,2742.7c2.14-11.92,4.3-23.94,6.62-36.88,44.27,0,88.79-.25,133.3.24,7.42.08,14.8,3.37,23.87,5.58l15,16.85c1.84,4.1,5.15,8.72,5.86,13.71,1.33,9.25,2.2,18.9-4.34,27.09,3.49,16.12-2.82,31.38-5.47,46.64-3.91,22.53-5,45.71-13.17,67.55-3.76,10-.73,21-4.9,32.08-5.37,14.23-4.72,30.75-6.84,47.77l-6.66,6.14c-52.48,0-106,.09-159.46-.06-16.16,0-38.21-16.22-42.13-31.82-2.82-11.22-6.92-23.83-4.33-34.3,4.15-16.76,4-34.83,13.69-50.31,8.34-13.36,16.9-26.39,28.9-36.73,6.26-5.39,33.23-12.74,45.82-12.77,28.27-.06,56.55,0,84.6,0,2.4-16.26,4.64-31.51,6.82-46.32-9.37-7-19.19-7.73-29.57-7.51-19.47.43-39,.14-58.43.12C1593.52,2749.74,1593.52,2749.72,1577.6,2742.7Zm102.22,104.71H1663.1c-12.95,0-25.93.56-38.84-.13-22.78-1.22-38.6,9.34-41.65,41.62-1.12,11.86-.18,23.91-.18,36.21h79.91l5.93-5C1672.28,2894.86,1675.9,2872.06,1679.82,2847.41Z"
      />
      <path
        className={classes}
        d="M2119.05,2712.73c24-10.31,46.48-6.41,68.58-6.8,26.69-.48,53.4-.11,77.62-.11l19.83,10.09c17,18.19,14.89,39.16,13.63,59.33-1.39,22.21-9.85,43.1-21.53,61.53-10.93,17.25-29.94,24.5-50,25.05-32.32.88-64.68.23-97.48.23-4.62,18.11,4,37.22-7.59,56.4l14.46,6.34c10.5,1.37,26.72,4.23,43,5.31,8.21.55,17.22,3.38,25.09-4.19,2.47-2.38,11.27-2.23,13.76.23,7.76,7.65,17,2.12,26.91,5.43-.56,12.33,3.19,25.61-8.75,37.9-41.55,0-85.25-.11-128.94.05-20.81.07-36.56-8.36-47.52-27.24,0-9.69,1.18-20.36-.33-30.64-1.59-10.86,3.81-19.77,5.32-29.68,1.39-9.1-4.66-19.57,4.76-27.24-2.05-11.26,2.7-21.47,4.84-32.1,5-24.76,9.28-49.67,15-74.25,1.47-6.29,6.71-12,11.14-17.2C2106.66,2724.4,2113.36,2718.43,2119.05,2712.73ZM2138.32,2823c18.15,0,35.8.23,53.45-.07,15.29-.25,29.13-4.39,38.85-17.06,1.7-9.28,4.22-18.31,4.78-27.46.59-9.59,11.6-18.27,2.65-28.64h-65.58c-17.54,6.6-24.93,17.51-25,34.39,0,5.47-5,10.66-4.77,17.52C2142.89,2808.14,2140.14,2814.72,2138.32,2823Z"
      />
      <path
        className={classes}
        d="M713.74,2969.42H505.12c1-5.3,2-10.13,2.79-15,1.21-7.64,2.26-15.31,3.5-23.79h70.82c2.41-25.32,7.38-49.61,11.64-73.87,4.34-24.81,8.32-49.88,14-74.5,2.46-10.73,2.39-22,5.36-31.94,3-10.16.41-21.79,4.87-29.45,6.31-10.83.26-23.28,8.42-33.42,3.14-3.89.51-12.43.51-19.78h-65.8c-8.55-15.88,10-28.73,0-44.19H699.75c-1,8.53,1.48,16.44-3.47,26.41-4.8,9.65-1.43,22.54-5.31,34.25-4.32,13.06-.44,29.46-6.42,41.19-6.44,12.66,1.87,27.36-8.82,37.88,3.48,14.55-5,27.63-5.16,41.86-.07,8.29-3.13,16.51-4.55,24.81-2.23,13.06-7.06,25.81-4.91,39.42-11.91,9.24,1.17,24.87-9.25,35.47-3.22,3.26-.5,12.37-.5,20.5H721C718.45,2940.89,716.21,2954.46,713.74,2969.42Z"
      />
      <path
        className={classes}
        d="M1289.64,2749c2.43-14.73,4.58-27.75,7-42.76h60c4.58-24.12,8.53-46.6,15.26-68.29h63.32l-9.36,67.6h80.26c-2.47,15.69-4.61,29.3-6.86,43.61h-81.4c-2.1,12.73-2,25.71-6.65,36.72-4.85,11.57-2.73,24-8.38,35.62-4.34,8.95-2.67,21-4.89,31.9-4.71,23-5,46.87-7.08,69.8l40.72,8.14c-2.32,12.71-4.39,24.09-6.94,38.1-23.93,0-49.79,1.76-75.22-.78-12-1.19-26.12-7.59-25.6-25.35.05-1.79-2.81-3.66-2.92-3.8,6-17.37-.88-35.15,3.94-50.44,4.71-14.95,4.77-30.24,8.66-45.08,4.07-15.52,5-31.72,9-47.45,3.82-14.75,4-30.44,6-47.54Z"
      />
      <path
        className={classes}
        d="M1261.48,2705.82c-2.41,15-4.59,28.51-7.07,43.94-36.41,0-73.54-.25-110.67.17-9.09.11-18.15,2.4-25.82,3.49-17.67,26.14-14.68,56-21.77,83.11a221.69,221.69,0,0,0-4.9,88.4h127.84c8.4,16-5.78,29-1.76,44.09H1047.91l-22-16.73c-4.45-9.73-7.81-14.32-8.56-19.3-1.41-9.29-1.92-18.92,4.44-27.15-3.52-16.14,4.61-31,5.16-46.78.41-11.49,1.75-23.51,5.72-34.15,4.64-12.43,5.06-25.43,8.46-37.94,4-14.71,4.92-30.48,10.45-44.5,9-22.91,29.24-35.22,52.33-36.06C1155.7,2704.51,1207.58,2705.82,1261.48,2705.82Z"
      />
      <path
        className={classes}
        d="M2662.88,2750.1h-71.31c2.14-14.45,4.13-27.95,6.43-43.48-1.1,1.05-.58.39.09,0a4.25,4.25,0,0,1,2.11-.73c45.29,0,90.59,0,136.87,0l-38.5,219.31h66.75c5.06,16-.73,29.22-4.8,43.52H2552.37c2.27-12.76,4.39-24.72,6.68-37.64h68.8c2.48-4.85,4.55-8.88,5.2-10.14C2643.27,2862.38,2653,2806.6,2662.88,2750.1Z"
      />
      <path
        className={classes}
        d="M2672.89,2670.9c2.39-16.26,4.61-31.4,6.94-47.28H2758l-10.56,47.28Z"
      />
    </svg>
  );
};

export default GalactapediaIcon;