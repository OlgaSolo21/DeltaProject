import React from 'react';

interface ILogoProps extends React.SVGProps<SVGSVGElement> {}

export const LogoIcon: React.FC<ILogoProps> = ({ ...props }) => {
  return (
    <svg
      width="160"
      height="44"
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5408 28.9837L26.7834 10.3513C25.1897 7.59096 21.2054 7.59099 19.6118 10.3513L8.85433 28.9837C7.26062 31.7441 9.25275 35.1945 12.4401 35.1945H33.955C37.1424 35.1945 39.1345 31.7441 37.5408 28.9837ZM33.955 6.21081C29.1739 -2.07026 17.2212 -2.07027 12.4401 6.21079L1.68271 24.8432C-3.09836 33.1243 2.87796 43.4756 12.4401 43.4756H33.955C43.5171 43.4756 49.4935 33.1243 44.7124 24.8432L33.955 6.21081Z"
        fill="#65D6E3"
      />
      <path
        d="M150.424 31.6752C151.97 31.6752 153.143 31.5924 153.943 31.4268V25.8784C153.667 25.7956 153.267 25.7128 152.743 25.63C152.218 25.5472 151.639 25.5058 151.004 25.5058C150.452 25.5058 149.886 25.5472 149.306 25.63C148.754 25.7128 148.243 25.8646 147.774 26.0855C147.332 26.3063 146.974 26.6237 146.698 27.0378C146.421 27.4242 146.283 27.9211 146.283 28.5284C146.283 29.7153 146.656 30.5434 147.401 31.0127C148.147 31.4544 149.154 31.6752 150.424 31.6752ZM150.01 13.0014C151.666 13.0014 153.06 13.2084 154.192 13.6225C155.324 14.0365 156.221 14.6162 156.883 15.3615C157.573 16.1068 158.056 17.0177 158.332 18.0942C158.636 19.1432 158.788 20.3025 158.788 21.5723V34.6978C158.015 34.8634 156.842 35.0566 155.268 35.2774C153.723 35.5259 151.97 35.6501 150.01 35.6501C148.713 35.6501 147.526 35.5259 146.449 35.2774C145.373 35.029 144.448 34.6288 143.675 34.0767C142.93 33.5246 142.336 32.8069 141.895 31.9236C141.48 31.0403 141.273 29.95 141.273 28.6526C141.273 27.4104 141.508 26.3615 141.977 25.5058C142.474 24.6501 143.137 23.96 143.965 23.4355C144.793 22.8835 145.745 22.497 146.822 22.2762C147.926 22.0277 149.071 21.9035 150.258 21.9035C150.81 21.9035 151.39 21.9449 151.997 22.0277C152.605 22.0829 153.253 22.1934 153.943 22.359V21.5309C153.943 20.9512 153.874 20.3991 153.736 19.8747C153.598 19.3502 153.35 18.8947 152.991 18.5083C152.66 18.0942 152.204 17.7768 151.625 17.556C151.073 17.3351 150.369 17.2247 149.513 17.2247C148.354 17.2247 147.291 17.3075 146.325 17.4732C145.359 17.6388 144.572 17.832 143.965 18.0528L143.344 13.9951C143.979 13.7743 144.903 13.5535 146.118 13.3326C147.332 13.1118 148.63 13.0014 150.01 13.0014Z"
        fill="currentColor"
      />
      <path
        d="M123.182 7.8257L128.192 6.99759V13.5396H135.893V17.7216H128.192V26.5409C128.192 28.2799 128.468 29.5221 129.02 30.2674C129.572 31.0127 130.51 31.3853 131.835 31.3853C132.746 31.3853 133.547 31.2887 134.237 31.0955C134.955 30.9023 135.52 30.7228 135.934 30.5572L136.763 34.5321C136.183 34.7806 135.424 35.029 134.485 35.2774C133.547 35.5535 132.443 35.6915 131.173 35.6915C129.627 35.6915 128.33 35.4845 127.281 35.0704C126.259 34.6563 125.445 34.0629 124.838 33.29C124.231 32.4895 123.803 31.5371 123.554 30.433C123.306 29.3013 123.182 28.0177 123.182 26.5823V7.8257Z"
        fill="currentColor"
      />
      <path
        d="M118.674 35.6087C117.184 35.5811 115.941 35.4155 114.948 35.1118C113.982 34.8082 113.209 34.3803 112.629 33.8283C112.049 33.2486 111.635 32.5447 111.387 31.7166C111.166 30.8609 111.056 29.8948 111.056 28.8182V3.89222L116.066 3.06412V27.8659C116.066 28.4732 116.107 28.9839 116.19 29.3979C116.3 29.812 116.48 30.1708 116.728 30.4744C116.977 30.7505 117.308 30.9713 117.722 31.1369C118.164 31.2749 118.716 31.3854 119.378 31.4682L118.674 35.6087Z"
        fill="currentColor"
      />
      <path
        d="M86.2832 24.4707C86.2832 22.566 86.5592 20.896 87.1113 19.4606C87.691 18.0252 88.4501 16.8383 89.3886 15.8998C90.3271 14.9336 91.4037 14.2159 92.6182 13.7467C93.8328 13.2498 95.0749 13.0014 96.3447 13.0014C99.3259 13.0014 101.645 13.9261 103.301 15.7755C104.985 17.625 105.827 20.3853 105.827 24.0566C105.827 24.3326 105.813 24.6501 105.785 25.0089C105.785 25.3402 105.771 25.6438 105.744 25.9198H91.4589C91.5969 27.6589 92.2042 29.0114 93.2807 29.9776C94.3848 30.9161 95.972 31.3853 98.0423 31.3853C99.2569 31.3853 100.361 31.2749 101.355 31.0541C102.376 30.8333 103.177 30.5986 103.756 30.3502L104.419 34.4493C104.143 34.5874 103.756 34.7392 103.259 34.9048C102.79 35.0428 102.238 35.167 101.603 35.2774C100.996 35.4155 100.333 35.5259 99.6157 35.6087C98.898 35.6915 98.1665 35.7329 97.4212 35.7329C95.5166 35.7329 93.8604 35.4569 92.4526 34.9048C91.0448 34.3251 89.8855 33.5384 88.9745 32.5447C88.0636 31.5234 87.3873 30.3364 86.9457 28.9838C86.504 27.6037 86.2832 26.0993 86.2832 24.4707ZM100.816 22.2348C100.816 21.5447 100.72 20.896 100.527 20.2887C100.333 19.6538 100.044 19.1156 99.6571 18.6739C99.2983 18.2046 98.8428 17.8458 98.2907 17.5974C97.7663 17.3213 97.1314 17.1833 96.3861 17.1833C95.6132 17.1833 94.9369 17.3351 94.3572 17.6388C93.7776 17.9148 93.2807 18.2875 92.8666 18.7567C92.4802 19.226 92.1766 19.7643 91.9557 20.3715C91.7349 20.9788 91.5831 21.5999 91.5003 22.2348H100.816Z"
        fill="currentColor"
      />
      <path
        d="M62.9065 30.8886C63.2102 30.9162 63.6104 30.9438 64.1073 30.9714C64.6041 30.9714 65.2804 30.9714 66.1361 30.9714C69.6418 30.9714 72.2503 30.0881 73.9617 28.3215C75.7008 26.5272 76.5703 24.0291 76.5703 20.8271C76.5703 17.5699 75.7284 15.0718 74.0446 13.3327C72.3607 11.5937 69.7522 10.7242 66.219 10.7242C64.6732 10.7242 63.569 10.7656 62.9065 10.8484V30.8886ZM82.0358 20.8271C82.0358 23.3114 81.6493 25.4783 80.8764 27.3277C80.1035 29.1496 78.9994 30.6816 77.564 31.9237C76.1562 33.1383 74.4448 34.0492 72.4298 34.6565C70.4423 35.2361 68.234 35.526 65.8049 35.526C64.6455 35.526 63.3344 35.4708 61.8714 35.3604C60.4084 35.2775 59.0144 35.0843 57.6895 34.7807V6.9149C59.0144 6.61127 60.4222 6.41804 61.9128 6.33523C63.4034 6.25242 64.7284 6.21101 65.8877 6.21101C68.2892 6.21101 70.4837 6.50085 72.4712 7.08053C74.4586 7.6326 76.1562 8.51591 77.564 9.73047C78.9994 10.9174 80.1035 12.4356 80.8764 14.2851C81.6493 16.1069 82.0358 18.2876 82.0358 20.8271Z"
        fill="currentColor"
      />
    </svg>
  );
};
