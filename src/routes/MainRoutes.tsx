
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import userRoutes from './UserRouters';
import  DelayedFallback  from '../components/common/Fallback/DelayedFallback'

const MainRoutes: React.FC = () => {
  const routes = useRoutes(userRoutes);

  return (
    <div className="bg-black min-h-screen">
      <Toaster />
      {/* <Suspense fallback={<DelayedFallback />}> */}
      <Suspense fallback={<DelayedFallback />}>
        {routes}
      </Suspense>
    </div>
  );
};

export default MainRoutes;
