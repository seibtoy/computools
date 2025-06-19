import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: number | string;
}

export const LaptopIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 14"
    style={{ color }}
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15.189 9.39V1.757a.952.952 0 0 0-.953-.952H3.76a.952.952 0 0 0-.952.952V9.39m12.38 0H2.809m12.38 0 1.216 2.432a.953.953 0 0 1-.851 1.378H2.444a.952.952 0 0 1-.851-1.378L2.808 9.39"
    />
  </svg>
);

export const ComputerIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 16"
    style={{ color }}
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M1 1.581a.714.714 0 0 1 .714-.714h8.57a.714.714 0 0 1 .715.714v12.856a.714.714 0 0 1-.714.714h-8.57A.714.714 0 0 1 1 14.437V1.581Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M3.5 3.727h5"
    />
  </svg>
);

export const SmartphoneIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 16"
    style={{ color }}
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9.57.867H2.435c-.788 0-1.427.64-1.427 1.427v11.417c0 .788.639 1.427 1.427 1.427H9.57c.788 0 1.427-.639 1.427-1.427V2.294c0-.788-.639-1.427-1.427-1.427ZM6.008 12.29h.007"
    />
  </svg>
);

export const GamepadIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 14"
    style={{ color }}
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M4.997 6.164h3.334M6.664 4.497v3.334m5.833-.834h.009m2.491-1.666h.009m-.575-4.167H5.564A3.333 3.333 0 0 0 2.25 4.156c-.005.043-.008.084-.014.126-.068.562-.57 4.762-.57 6.049a2.5 2.5 0 0 0 2.5 2.5c.832 0 1.25-.417 1.666-.834l1.178-1.178a1.667 1.667 0 0 1 1.178-.488h3.62c.442 0 .866.176 1.179.488l1.178 1.178c.417.417.833.834 1.667.834a2.5 2.5 0 0 0 2.5-2.5c0-1.288-.504-5.487-.571-6.049-.006-.041-.01-.083-.014-.125a3.333 3.333 0 0 0-3.315-2.993Z"
    />
  </svg>
);

export const MonitorIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 16"
    style={{ color }}
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 11.336h5.833A1.667 1.667 0 0 0 16.5 9.669V3.003a1.667 1.667 0 0 0-1.667-1.667H3.167A1.667 1.667 0 0 0 1.5 3.003v6.666a1.667 1.667 0 0 0 1.667 1.667H9Zm0 0v3.333m0 0h3.333M9 14.67H5.667"
    />
  </svg>
);

export const SpeakerIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 16"
    style={{ color }}
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M2.438 15.14h7.135c.788 0 1.427-.638 1.427-1.427V2.297C11 1.509 10.361.87 9.573.87H2.437c-.788 0-1.427.639-1.427 1.427v11.416c0 .789.64 1.428 1.427 1.428ZM6 3.719h-.007"
    />
    <circle cx={6} cy={10} r={2} stroke="currentColor" strokeWidth={strokeWidth} />{' '}
  </svg>
);

export const WashingMachineIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 16"
    style={{ color }}
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M11.81 1H2.006a.7.7 0 0 0-.7.7v12.608a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M1.305 5.023H12.51"
    />
    <path fill="currentColor" d="M10.411 3.8a.7.7 0 1 0 0-1.402.7.7 0 0 0 0 1.401Z" />
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M6.905 12.56a2.452 2.452 0 1 0 0-4.904 2.452 2.452 0 0 0 0 4.904Z"
    />
  </svg>
);

export const HairdryerIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ color }} width={14} height={15} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M9.806 6.752H6.993l-.409.4a2.792 2.792 0 0 1-1.394.743l-.767.157L2.767 12.6a.7.7 0 0 1-1.316-.479l1.634-4.486-.556-.625a2.801 2.801 0 0 1 4.056-3.86l.41.4h2.811v3.202Zm1.4 0V3.55h1.401v3.202h-1.4Zm-3.64 1.4h5.041a1.4 1.4 0 0 0 1.4-1.4V3.55a1.4 1.4 0 0 0-1.4-1.4H7.566a4.202 4.202 0 0 0-6.083 5.79L.135 11.643a2.1 2.1 0 1 0 3.948 1.437l1.388-3.812a4.192 4.192 0 0 0 2.094-1.115ZM5.604 4.451H3.504a.7.7 0 0 0 0 1.4h2.1a.7.7 0 1 0 0-1.4Z"
    />
  </svg>
);

export const DrillIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 14"
    style={{ color }}
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M10.602.992H2.72A1.6 1.6 0 0 0 1.123 2.71l.234 3.2a1.6 1.6 0 0 0 1.596 1.485h7.649V.992Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M6.562 7.397H2.997l1.636 4.5A1.675 1.675 0 1 0 7.78 10.75l-1.22-3.354ZM13 2.195h-2.4v4.002H13V2.195Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12.999 4.195H17"
    />
  </svg>
);

export const DroneIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{ color }}
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="M9.03 11.508H6.98a.42.42 0 0 1-.417-.374L5.956 5.67a.42.42 0 0 1 .417-.467h3.265a.42.42 0 0 1 .417.467l-.607 5.464a.42.42 0 0 1-.418.374Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={strokeWidth}
      d="M2.751 4.503a1.751 1.751 0 1 0 0-3.503 1.751 1.751 0 0 0 0 3.503Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m2.75 2.75 3.152 2.452M2.75 13.258l3.503-2.802m7.005-7.706-3.152 2.452m3.152 8.056-3.503-2.802"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={strokeWidth}
      d="M2.751 15.01a1.751 1.751 0 1 0 0-3.502 1.751 1.751 0 0 0 0 3.502ZM13.26 4.503a1.751 1.751 0 1 0 0-3.503 1.751 1.751 0 0 0 0 3.503Zm0 10.507a1.752 1.752 0 1 0 0-3.503 1.752 1.752 0 0 0 0 3.503Z"
    />
  </svg>
);

export const FlaskIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{ color }}
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M10.158 1v6.458l3.865 4.92a1.616 1.616 0 0 1-1.27 2.615H3.258a1.615 1.615 0 0 1-1.27-2.615l3.864-4.92V1M4.238 1h7.535"
    />
  </svg>
);

export const CupIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 12"
    style={{ color }}
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M12.004 2.5v5.002a3.001 3.001 0 0 1-3.001 3.001H4.001a3 3 0 0 1-3.001-3V2.5a1 1 0 0 1 1-1h9.004a1 1 0 0 1 1 1Zm0 0h2a1 1 0 0 1 1.001 1v2.001a1 1 0 0 1-1 1h-2"
    />
  </svg>
);

export const TagIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{ color }}
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m4.904 4.54-.55-.55m2.853 10.383L1.53 8.697a1.56 1.56 0 0 1-.457-1.083L1 1.79A.78.78 0 0 1 1.79 1l5.824.074a1.56 1.56 0 0 1 1.083.457l5.676 5.676c.524.523.927 1.523.33 2.12l-5.374 5.375c-.599.598-1.599.195-2.122-.329Z"
    />
  </svg>
);

export const MagnifyingGlassIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    style={{ color }}
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m17 17-3.86-3.86m0 0A7.111 7.111 0 1 0 3.083 3.083 7.111 7.111 0 0 0 13.14 13.14Z"
    />
  </svg>
);

export const MenuAltIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    style={{ color }}
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M7.836 13.17H1.169m11.667-6.167H1.169M7.836.836H1.169"
    />
  </svg>
);

export const MicrophoneIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 18"
    style={{ color }}
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9.686 3.667a2.667 2.667 0 0 0-5.334 0v4.445a2.667 2.667 0 0 0 5.334 0V3.667ZM13.235 8.11a6.224 6.224 0 0 1-6.223 6.222m0 0A6.224 6.224 0 0 1 .79 8.11m6.223 6.223V17"
    />
  </svg>
);

export const InfoIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{ color }}
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M8.005 15.01a7.005 7.005 0 1 0 0-14.01 7.005 7.005 0 0 0 0 14.01ZM8.008 10.807V8.005m0-2.802h.007"
    />
  </svg>
);

export const FacebookLogoIcon = ({ color = 'currentColor', strokeWidth = 0.4, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 18"
    style={{ color }}
    width={10}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="m7.062.638 2.22.003A.15.15 0 0 1 9.43.79v2.613a.15.15 0 0 1-.15.15H7.786c-.531 0-.912.102-1.146.368-.23.26-.274.628-.274 1.025v1.847h2.81a.15.15 0 0 1 .15.15v2.814a.149.149 0 0 1-.15.148h-2.81v7.302a.15.15 0 0 1-.148.15H3.305a.149.149 0 0 1-.149-.15V9.905H.724a.149.149 0 0 1-.149-.148V6.942a.15.15 0 0 1 .149-.149h2.432V4.65c0-1.237.389-2.237 1.06-2.926C4.847 1.078 5.74.689 6.84.643l.223-.005Z"
    />
  </svg>
);

export const InstagramLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 19"
    style={{ color }}
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.078 0H4.985A4.99 4.99 0 0 0 0 4.985v8.093a4.99 4.99 0 0 0 4.985 4.985h8.093a4.99 4.99 0 0 0 4.985-4.985V4.985A4.99 4.99 0 0 0 13.078 0Zm3.382 13.078a3.386 3.386 0 0 1-3.382 3.382H4.985a3.386 3.386 0 0 1-3.382-3.382V4.985a3.386 3.386 0 0 1 3.382-3.382h8.093a3.386 3.386 0 0 1 3.382 3.382v8.093Z"
    />
    <path
      fill="currentColor"
      d="M9.03 4.375a4.66 4.66 0 0 0-4.655 4.654 4.66 4.66 0 0 0 4.654 4.655 4.66 4.66 0 0 0 4.655-4.655 4.66 4.66 0 0 0-4.655-4.654Zm0 7.706a3.055 3.055 0 0 1-3.052-3.052 3.055 3.055 0 0 1 3.051-3.051 3.055 3.055 0 0 1 3.052 3.051 3.055 3.055 0 0 1-3.052 3.052ZM13.886 3.016a1.18 1.18 0 0 0-1.175 1.175c0 .309.126.612.345.831.218.218.521.344.83.344.31 0 .612-.126.831-.344.22-.219.345-.522.345-.831a1.18 1.18 0 0 0-1.175-1.175Z"
    />
  </svg>
);

export const YoutubeLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 14"
    style={{ color }}
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.235 2.005c-.488-.868-1.018-1.028-2.097-1.089C14.06.843 11.35.812 9.002.812c-2.352 0-5.063.03-6.14.103-1.077.062-1.608.22-2.1 1.09C.259 2.872 0 4.366 0 6.997V7.006c0 2.619.259 4.124.762 4.982.492.869 1.022 1.026 2.099 1.1 1.078.062 3.789.1 6.141.1 2.348 0 5.058-.038 6.137-.1 1.079-.073 1.609-.23 2.097-1.099.508-.858.764-2.363.764-4.982V6.998c0-2.632-.256-4.126-.765-4.993Z"
    />
    <path fill="#EDEDED" d="M6.75 10.375v-6.75L12.375 7 6.75 10.375Z" />
  </svg>
);

export const TiktokLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 15"
    style={{ color }}
    width={13}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.947 10.019V4.884a5.995 5.995 0 0 0 3.508 1.123V4.053A3.503 3.503 0 0 1 10.54 2.93 3.499 3.499 0 0 1 9 .633H7.155v10.114a2.12 2.12 0 0 1-3.836 1.158 2.121 2.121 0 0 1 .977-3.997c.212.002.423.035.626.098V6.05a4.632 4.632 0 0 0-3.284 7.818c.786.53 1.716.805 2.663.787a4.647 4.647 0 0 0 4.647-4.637Z"
    />
  </svg>
);

export const DiscordLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 14"
    style={{ color }}
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.358 14h-.025l-.15-.012-.072-.005c-.01-.001-.019-.004-.028-.006l-.147-.006-.016-.005-.166-.015a7.22 7.22 0 0 1-.985-.17 6.529 6.529 0 0 1-1.547-.59A5.71 5.71 0 0 1 .71 12.025a4.054 4.054 0 0 1-.398-.5c-.012-.019-.03-.034-.045-.05v-.473c.005-.022.012-.043.013-.065.003-.048.003-.096.003-.143.007-.107.012-.215.02-.322a18.175 18.175 0 0 1 .1-1.187c.034-.294.07-.587.118-.88.062-.377.133-.754.21-1.13.098-.482.22-.96.354-1.435.12-.424.248-.847.395-1.263.103-.29.206-.582.316-.87.146-.384.303-.763.476-1.135.112-.242.231-.482.346-.723a.4.4 0 0 1 .144-.167c.15-.1.297-.206.447-.304a8.79 8.79 0 0 1 1.52-.792A8.236 8.236 0 0 1 6.458.09c.163-.028.328-.045.492-.066L6.964.02h.047l.016-.006c.028 0 .056-.003.084-.004.043 0 .086.014.126-.01h.112c.055.063.111.125.163.197L7.47.213c-.28.09-.562.177-.84.273A13.066 13.066 0 0 0 4.1 1.68c-.295.183-.58.38-.847.6l-.067.06.007.01.06-.027c.283-.139.562-.285.85-.414.476-.214.965-.398 1.463-.556A12.525 12.525 0 0 1 7.188.948c.149-.026.298-.047.448-.067.1-.014.2-.024.3-.036l.21-.025.04-.006c.063-.007.127-.013.19-.018L8.53.782l.214-.024.016-.006.134-.007.015-.005.158-.008.017-.005.183-.006.016-.006.108.002.016-.005.171-.005.028-.003h.245L9.867.7l.27.002.017.004c.09 0 .18 0 .27-.002l.015.004c.062 0 .123.003.185.004l.015.006h.097l.015.003.11.003.015.006h.072l.014.004c.029 0 .057.002.085.003l.016.005h.046l.016.003.134.007.016.005.116.015c.068.007.136.01.203.018.1.013.2.029.3.043.107.015.214.026.319.044.212.038.424.076.636.12a13.45 13.45 0 0 1 3.617 1.33l.05.023a.041.041 0 0 0-.015-.031 6.88 6.88 0 0 0-.737-.54c-.47-.307-.963-.57-1.472-.805A14.3 14.3 0 0 0 12.563.31c-.043-.013-.084-.028-.135-.045l.227-.264h.113c.04.023.083.009.125.01l.147.007.016.005.091.014c.101.013.202.022.302.036.414.061.818.161 1.215.288a8.893 8.893 0 0 1 1.509.642c.394.213.772.455 1.132.721a.19.19 0 0 1 .055.066c.097.192.197.383.286.58.149.327.296.657.433.99.21.508.397 1.024.565 1.547.072.225.146.45.21.677.108.387.212.776.31 1.165.061.244.115.492.163.74.062.315.117.631.17.947a17.06 17.06 0 0 1 .147 1.158c.021.214.04.428.057.642.01.134.011.269.017.403.003.055-.014.11.011.163v.685c-.056.077-.11.155-.167.23-.178.23-.378.44-.592.636a5.968 5.968 0 0 1-1.554 1.02c-.247.112-.5.209-.76.29a7.09 7.09 0 0 1-1.078.246c-.163.023-.326.05-.492.055-.009.002-.018.005-.028.006l-.133.007-.04.006-.074.004-.15.013h-.024c-.006-.013-.011-.027-.02-.038-.098-.12-.199-.239-.296-.359l-.74-.912c-.01-.012-.018-.027-.03-.045l.056-.02c.14-.046.28-.089.42-.138.457-.165.89-.38 1.297-.65.355-.236.679-.51.964-.828.08-.089.15-.186.225-.28.007-.01.009-.023.013-.035a1.033 1.033 0 0 0-.155.086 9.99 9.99 0 0 1-1.062.583c-.328.155-.668.283-1.006.415-.498.195-1.009.353-1.531.471-.352.08-.707.143-1.063.194a8.938 8.938 0 0 1-.32.038c-.054.006-.11.008-.165.013l-.258.026-.028.006-.159.006-.04.006-.258.008a9.52 9.52 0 0 1-.053.005h-.57l-.065-.005a41.69 41.69 0 0 0-.27-.007c-.01-.001-.019-.004-.028-.006l-.172-.006-.027-.006-.135-.006-.027-.007-.121-.006-.017-.006c-.125-.013-.25-.023-.376-.04a12.619 12.619 0 0 1-2.348-.538 20.05 20.05 0 0 1-.767-.274 9.047 9.047 0 0 1-.955-.42c-.19-.098-.38-.194-.558-.314-.125-.084-.258-.156-.388-.234-.006-.003-.014-.005-.02-.006a.92.92 0 0 0 .099.153c.17.22.365.417.575.6.347.302.73.553 1.14.762.326.165.664.3 1.014.408.018.006.035.014.056.023l-.035.047L5.41 13.93c-.022.02-.036.046-.052.07Zm9.312-6.036c-.012-.098-.019-.198-.038-.294a1.846 1.846 0 0 0-.547-1.005 1.607 1.607 0 0 0-.983-.444.65.65 0 0 0-.264 0c-.072.012-.147.018-.219.035-.351.08-.643.261-.879.531a1.957 1.957 0 0 0-.336 1.99c.177.452.48.793.927.999.156.072.322.116.495.131.1.02.2.019.3 0 .128-.01.252-.04.372-.084.477-.174.803-.506 1.008-.963a2.014 2.014 0 0 0 .164-.896ZM7.015 6.22a.59.59 0 0 0-.252 0c-.077.012-.155.019-.232.037a1.63 1.63 0 0 0-.96.635c-.284.38-.404.812-.38 1.285.02.348.122.668.314.958.241.363.567.614.99.727.076.02.154.03.232.044.108.02.216.02.324 0l.08-.011a1.63 1.63 0 0 0 1.05-.63c.296-.378.418-.813.405-1.289a1.811 1.811 0 0 0-.23-.856c-.295-.524-.735-.838-1.341-.9Z"
    />
  </svg>
);

export const RedditLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 18"
    style={{ color }}
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.019 9.024a2.203 2.203 0 0 1-.32 1.175 2.194 2.194 0 0 1-.897.824 3.936 3.936 0 0 1 .01.495 3.94 3.94 0 0 1-.01.165c0 3.366-3.92 6.1-8.758 6.1-4.837 0-8.758-2.734-8.758-6.1a4.027 4.027 0 0 1-.01-.495c.002-.056.005-.11.01-.165a2.194 2.194 0 1 1 2.418-3.591A10.771 10.771 0 0 1 6.498 6.08a10.744 10.744 0 0 1 3.065-.496L10.675.371a.464.464 0 0 1 .556-.36l3.68.736a1.502 1.502 0 1 1-.195.916L11.5.987l-.976 4.687a10.68 10.68 0 0 1 5.783 1.848 2.191 2.191 0 0 1 3.315.324c.243.346.38.756.396 1.178ZM5.11 11.102a1.503 1.503 0 1 0 2.777-1.153 1.503 1.503 0 0 0-2.777 1.153Zm8.605 3.606a.406.406 0 0 0-.278-.696.491.491 0 0 0-.298.105 4.924 4.924 0 0 1-3.14.917 4.903 4.903 0 0 1-3.125-.947.406.406 0 0 0-.57.571 5.778 5.778 0 0 0 3.71 1.157 5.783 5.783 0 0 0 3.71-1.157l-.01.05Zm-.276-2.559a1.507 1.507 0 0 0 1.42-.965c.072-.19.105-.394.097-.597a1.503 1.503 0 1 0-1.502 1.502l-.015.06Z"
    />
  </svg>
);

export const XLogoItem = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    style={{ color }}
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.174.867h2.76l-6.03 6.891 7.093 9.377h-5.553l-4.35-5.687-4.977 5.687H.355l6.45-7.37L0 .866h5.695l3.931 5.198L14.174.867Zm-.969 14.616h1.53L4.863 2.433H3.223l9.982 13.05Z"
    />
  </svg>
);

export const HeartIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 16"
    style={{ color }}
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m15.69 9.082-5.348 5.349a1.89 1.89 0 0 1-2.674 0L2.321 9.083A4.726 4.726 0 1 1 9.005 2.4a4.726 4.726 0 0 1 6.684 6.683Z"
    />
  </svg>
);

export const RightArrowIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 12"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 5.25a.75.75 0 0 0 0 1.5v-1.5Zm12.53 1.28a.75.75 0 0 0 0-1.06L8.757.697a.75.75 0 1 0-1.06 1.06L11.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L13.53 6.53ZM1 6.75h12v-1.5H1v1.5Z"
    />
  </svg>
);

export const ChevronDownIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 9"
    width={14}
    height={9}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m1.01 1.42 5.995 5.994L13 1.42"
    />
  </svg>
);

export const ChevronUpIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 9"
    width={14}
    height={9}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12.99 7.58 6.995 1.587 1 7.58"
    />
  </svg>
);

export const CartIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 18 18"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M1.016 1H4.02l1.07 10.643a1.23 1.23 0 0 0 1.23 1.045h7.752a1.23 1.23 0 0 0 1.23-.836L16.94 6.93a1.229 1.229 0 0 0-.172-1.107 1.23 1.23 0 0 0-1.059-.517H4.451m9.412 11.688a.615.615 0 1 1 0-1.23.615.615 0 0 1 0 1.23Zm-7.997 0a.615.615 0 1 1 0-1.23.615.615 0 0 1 0 1.23Z"
    />
  </svg>
);

export const UserIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 16 18"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M8.013 7.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM14.41 13.397c0 1.988 0 3.6-6.4 3.6s-6.4-1.612-6.4-3.6 2.865-3.6 6.4-3.6c3.534 0 6.4 1.612 6.4 3.6Z"
    />
  </svg>
);

export const CrossedUserIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 16 18"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M1.336 16.086v-1.667a3.334 3.334 0 0 1 3.333-3.333h2.917m7.083 5.833-4.166-4.166m0 4.166 4.166-4.166M3.003 4.419a3.333 3.333 0 1 0 6.666 0 3.333 3.333 0 0 0-6.666 0Z"
    />
  </svg>
);

export const CrissCrossIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 14"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} d="m1 1 12 12m0-12L1 13" />
  </svg>
);

export const EyeIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.675 9.743c-1.872-3.461-5.155-5.556-8.789-5.556-3.633 0-6.922 2.095-8.777 5.556l-.156.261.145.267c1.872 3.46 5.155 5.555 8.788 5.555 3.634 0 6.923-2.066 8.79-5.555l.144-.267-.145-.26Zm-8.789 4.944c-3.127 0-6-1.744-7.666-4.683 1.666-2.939 4.539-4.683 7.666-4.683 3.128 0 5.967 1.75 7.662 4.683-1.695 2.94-4.54 4.684-7.662 4.684Z"
    />
    <path
      fill="currentColor"
      d="M10.049 6.203a3.811 3.811 0 1 0 .056 7.622 3.811 3.811 0 0 0-.056-7.622Zm0 6.511a2.699 2.699 0 1 1 .055-5.397 2.699 2.699 0 0 1-.055 5.397Z"
    />
  </svg>
);

export const HideEyeIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M13.998 11.332a3.811 3.811 0 0 0-3.572-5.144c-.45 0-.895.08-1.317.238l.895.923a2.705 2.705 0 0 1 3.122 2.65c0 .137-.012.275-.033.41l.905.923Z" />
      <path d="M19.052 9.743c-1.873-3.461-5.156-5.556-8.79-5.556a9.344 9.344 0 0 0-2.91.473l.894.9a8.211 8.211 0 0 1 2.017-.261c3.127 0 5.972 1.744 7.666 4.683a9.86 9.86 0 0 1-2.427 2.833l.789.79a11.072 11.072 0 0 0 2.777-3.334l.145-.267-.161-.26ZM2.704 3.21 5.18 5.689a10.844 10.844 0 0 0-3.716 4.05L1.32 10l.145.267c1.872 3.461 5.155 5.556 8.789 5.556a9.406 9.406 0 0 0 4.094-.94l2.778 2.779.972-.834L3.654 2.383l-.95.828ZM8.12 8.628l3.695 3.695a2.672 2.672 0 0 1-1.39.4A2.706 2.706 0 0 1 7.72 9.999c.007-.485.145-.96.4-1.372Zm-.805-.805a3.806 3.806 0 0 0 5.305 5.305l.89.89a8.282 8.282 0 0 1-3.256.666c-3.128 0-5.973-1.745-7.667-4.684a9.605 9.605 0 0 1 3.4-3.5l1.328 1.323Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LanguagesIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m6.833 15 4.084-8.75L15 15m-7-2.333h5.833M1 3.039a37.7 37.7 0 0 1 4.667-.289m0 0c.87 0 1.736.03 2.593.089M5.667 2.75V1M8.26 2.839A14.02 14.02 0 0 1 1 12.279m7.26-9.44c.693.047 1.384.114 2.073.2M6.764 9.646a14.018 14.018 0 0 1-2.976-4.513"
    />
  </svg>
);

export const ListIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 17"
    width={14}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M11.172 1.328H2.839c-.92 0-1.667.746-1.667 1.667v10.833c0 .92.746 1.667 1.667 1.667h8.333c.92 0 1.666-.746 1.666-1.667V2.995c0-.92-.746-1.667-1.666-1.667Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="M4.508 5.492h5m-5 3.334h5m-5 3.333H7.84"
    />
  </svg>
);

export const FAQIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 16 15"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9.34 11.735c2.53 0 3.795 0 4.581-.787.786-.785.786-2.05.786-4.58 0-2.53 0-3.796-.786-4.582S11.87 1 9.34 1H6.656c-2.53 0-3.795 0-4.58.786-.787.786-.787 2.051-.787 4.581 0 2.53 0 3.796.786 4.581.438.44 1.026.633 1.898.718"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="M6.65 4.683c.335-.664.67-.995 1.341-.995.836 0 1.342.663 1.342 1.327 0 .663-.335.693-1.342 1.356v.671m0 1.677v.336m1.342 2.684c-.83 0-1.743.335-2.577.768-1.34.695-2.01 1.044-2.34.822-.33-.222-.269-.91-.143-2.284l.028-.313"
    />
  </svg>
);

export const HeadphonesMicIcon = ({ color = 'currentColor', strokeWidth = 0.7, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 16"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M12.065 6.787h-.035v-.849a4.938 4.938 0 1 0-9.876 0v.85h-.208c-.763 0-1.352.675-1.352 1.455v2.165a1.369 1.369 0 0 0 1.352 1.404h1.282a.33.33 0 0 0 .312-.364V7.203c0-.208-.122-.416-.312-.416h-.381v-.849a4.245 4.245 0 0 1 8.49 0v.85h-.381c-.191 0-.312.207-.312.415v4.245a.33.33 0 0 0 .312.364h.398l-.035.052a2.738 2.738 0 0 1-2.2 1.091 1.715 1.715 0 0 0-3.396.33c.01.95.782 1.715 1.733 1.715.47-.008.918-.2 1.247-.537.222-.227.367-.518.416-.832a3.43 3.43 0 0 0 2.755-1.369l.33-.485c.744-.052 1.212-.52 1.212-1.195V8.416c0-.745-.555-1.629-1.351-1.629ZM2.847 11.12h-.901a.676.676 0 0 1-.659-.71V8.242c0-.399.277-.763.659-.763h.9v3.639ZM8.2 13.978a1.022 1.022 0 0 1-.745.329 1.057 1.057 0 0 1-1.04-1.022 1.022 1.022 0 0 1 2.045-.001.918.918 0 0 1-.26.694Zm4.522-3.396c0 .467-.45.537-.659.537h-.727V7.48h.728c.38 0 .658.537.658.936v2.166Z"
    />
  </svg>
);

export const LeftArrowIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 14 12"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 6.75a.75.75 0 0 0 0-1.5v1.5ZM.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM13 5.25H1v1.5h12v-1.5Z"
    />
  </svg>
);

export const CheckIcon = ({ color = 'currentColor', strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 15 10"
    width={15}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m1.164 5.003 4.167 4.166L13.664.836"
    />
  </svg>
);

export const GoogleIcon = ({ color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    viewBox="0 0 18 19"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 8.976H9.6v2.8h5.125A6.002 6.002 0 0 1 3 9.976a6 6 0 0 1 10.265-4.219l2.033-2.209A9 9 0 1 0 9 18.976c4.354 0 8.166-3.092 9-7.2v-2.8Z"
    />
  </svg>
);
