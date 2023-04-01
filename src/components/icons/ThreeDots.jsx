const ThreeDots = ({ width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 512 512"
    >
      <path d="M315.1,452.9c0,32.6-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1S315.1,420.3,315.1,452.9z M315.1,256c0,32.6-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1S315.1,223.4,315.1,256z M315.1,59.1 c0,32.6-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S223.4,0,256,0S315.1,26.5,315.1,59.1z" />
    </svg>
  )
}

export default ThreeDots