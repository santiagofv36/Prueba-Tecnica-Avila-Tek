export default function Dropbox() {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_434_990)">
        <circle cx="24.5" cy="24" r="21" fill="#0F287F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 12L9.5 16.5L17 21L9.5 25.5L17 30L24.5 25.5L32 30L39.5 25.5L32 21L39.5 16.5L32 12L24.5 16.5L17 12ZM24.5 16.5L32 21L24.5 25.5L17 21L24.5 16.5Z"
          fill="#DAF8FE"
        />
        <path d="M17 33L24.5 28.5L32 33L24.5 37.5L17 33Z" fill="#DAF8FE" />
      </g>
      <defs>
        <filter
          id="filter0_dd_434_990"
          x="-2.5"
          y="-2"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_434_990"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_434_990"
            result="effect2_dropShadow_434_990"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_434_990"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
