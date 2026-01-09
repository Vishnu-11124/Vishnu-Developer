
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Wait 2.5s then hide
        const timer = setTimeout(() => {
            setHide(true);
            // Wait for transition to finish before unmounting (1s in CSS)
            setTimeout(() => {
                onComplete();
            }, 1000);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`splash ${hide ? "hide" : ""}`}>
            <h1 id="splash-name">Hey, I’m Vishnu!</h1>
        </div>
    );
};

export default SplashScreen;
