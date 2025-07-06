import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface DelayedFallbackProps {
  children?: ReactNode;
}

const DelayedFallback: React.FC<DelayedFallbackProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl">
        <h1 className="from-purple-500 to-violet-700 text-transparent bg-clip-text font-extrabold bg-gradient-to-r">
          LetsChat...
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default DelayedFallback;
