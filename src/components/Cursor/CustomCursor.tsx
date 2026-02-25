import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [visible, setVisible] = useState(false);
    const [clicking, setClicking] = useState(false);
    const [hovering, setHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
    const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

    useEffect(() => {
        // Hide on small screens (mobile/tablet)
        const isSmallScreen = window.innerWidth < 768;
        if (isSmallScreen) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const handleMouseDown = () => setClicking(true);
        const handleMouseUp = () => setClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            ) {
                setHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            ) {
                setHovering(false);
            }
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        width: clicking ? 6 : hovering ? 40 : 8,
                        height: clicking ? 6 : hovering ? 40 : 8,
                        opacity: hovering ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className="rounded-full bg-white"
                />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        width: clicking ? 24 : hovering ? 56 : 36,
                        height: clicking ? 24 : hovering ? 56 : 36,
                        borderColor: hovering
                            ? 'rgba(139, 92, 246, 0.8)'
                            : 'rgba(139, 92, 246, 0.4)',
                        boxShadow: hovering
                            ? '0 0 20px rgba(139, 92, 246, 0.3)'
                            : '0 0 10px rgba(139, 92, 246, 0.1)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border-[1.5px]"
                />
            </motion.div>
        </>
    );
};
