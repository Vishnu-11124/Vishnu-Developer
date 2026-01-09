
import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="content show w-full overflow-hidden">
            {children}
        </div>
    );
};

export default Layout;
