const AwardIcon = ({ disabled = true }: { disabled?: boolean }) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1278_17172)">
        <path
          d="M13.8524 19.0922C13.8524 19.4723 13.4228 19.6934 13.1135 19.4725L10.0543 17.2873C9.89179 17.1712 9.67353 17.1712 9.51105 17.2873L6.45179 19.4725C6.14251 19.6934 5.71289 19.4723 5.71289 19.0922V10.6979C5.71289 10.3896 5.8354 10.0938 6.05346 9.87573C6.27153 9.65766 6.56729 9.53516 6.87568 9.53516H12.6896C12.998 9.53516 13.2938 9.65766 13.5119 9.87573C13.7299 10.0938 13.8524 10.3896 13.8524 10.6979V19.0922Z"
          fill="#C2C2C2"
        />
        <path
          d="M8.74378 0.791778C9.39361 0.319653 10.2735 0.319653 10.9234 0.791778L15.9692 4.45779C16.619 4.92991 16.8909 5.76678 16.6427 6.53069L14.7154 12.4624C14.4672 13.2263 13.7553 13.7435 12.9521 13.7435H6.71508C5.91185 13.7435 5.19997 13.2263 4.95176 12.4624L3.02443 6.53069C2.77622 5.76678 3.04813 4.92991 3.69795 4.45779L8.74378 0.791778Z"
          fill="#E1E1E1"
        />
        <path
          clipRule="evenodd"
          d="M13.2609 5.40251C13.4329 5.57447 13.4329 5.85327 13.2609 6.02523L9.17398 10.1121C9.00427 10.2819 8.72991 10.2844 8.55708 10.1179L6.44316 8.08085C6.26805 7.91211 6.26288 7.63336 6.43163 7.45824C6.60037 7.28312 6.87913 7.27796 7.05424 7.4467L8.85691 9.18378L12.6382 5.40251C12.8101 5.23055 13.0889 5.23055 13.2609 5.40251Z"
          fill="white"
          fillRule="evenodd"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.128512"
        />
      </g>
      {disabled ? (
        <defs>
          <clipPath id="clip0_1278_17172">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      ) : (
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1278_13474"
            x1="9.78266"
            x2="9.78266"
            y1="9.53516"
            y2="20.0003"
          >
            <stop offset="0.520753" stop-color="#EE695D" />
            <stop offset="1" stop-color="#EA4335" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1278_13474"
            x1="9.83357"
            x2="9.83357"
            y1="0"
            y2="15.1945"
          >
            <stop stop-color="#FBBC04" />
            <stop offset="1" stop-color="#F9AB00" />
          </linearGradient>
          <clipPath id="clip0_1278_13474">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      )}
    </svg>
  );
};

export default AwardIcon;
