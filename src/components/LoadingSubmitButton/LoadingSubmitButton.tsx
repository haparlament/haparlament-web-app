import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Loader from "./Loader";
import "../../styles.css/LoadingSubmitButton.scss"

interface LoadingSubmitButtonProp {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function LoadingSubmitButton ({
    isLoading,
    children,
    ...props
  }: LoadingSubmitButtonProp & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    /* showLoader is used to stay in the "isLoading state" a bit longer to avoid loading flashes
    if the loading state is too short. */
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const {className, style} = props
    useEffect(() => {
        if (isLoading) {
        setShowLoader(true);
        }

        // Show loader a bits longer to avoid loading flash
        if (!isLoading && showLoader) {
        const timeout = setTimeout(() => {
            setShowLoader(false);
        }, 400);

        return () => {
            clearTimeout(timeout);
        };
        }
    }, [isLoading, showLoader]);

    /* Capture the dimensions of the button before the loading happens
    so it doesn’t change size.
    These hooks can be put in a seprate file. */
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.getBoundingClientRect().width) {
        setWidth(ref.current.getBoundingClientRect().width);
        }
        if (ref.current && ref.current.getBoundingClientRect().height) {
        setHeight(ref.current.getBoundingClientRect().height);
        }
    }, [children]);

    // Hooks used to fade in/out the loader or the button contents
    const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
    const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

    return (
        <button
        {...props}
        className={`button ${className}`}
        ref={ref}
        style={
            (showLoader
            ? {
                width: `${width}px`,
                height: `${height}px`,
                }
            : {})
        }
        >
        {showLoader ? (
            <animated.div style={fadeOutProps}>
            <Loader />
            </animated.div>
        ) : (
            <animated.div style={fadeInProps}>{children}</animated.div>
        )}
        </button>
    );
    }