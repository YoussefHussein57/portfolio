export const Logo = ({ size = 40 }: { size?: number }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="logo-gradient-subtle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
                </linearGradient>
            </defs>

            {/* Hexagon background */}
            <polygon
                points="50,3 93,28 93,72 50,97 7,72 7,28"
                fill="url(#logo-gradient-subtle)"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* Y letter — gradient */}
            <path
                d="M28 28 L42 50 L42 65"
                stroke="url(#logo-gradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M56 28 L42 50"
                stroke="url(#logo-gradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* H letter — white */}
            <path
                d="M52 38 L52 72"
                stroke="white"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M52 55 L72 55"
                stroke="white"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M72 38 L72 72"
                stroke="white"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
};
