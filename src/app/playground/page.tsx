import JavaScriptPlayground from '@/components/javascript-playground';
import React from 'react';

const playgroundPage = () => {
  return (
    <>
      <div className="container pt-20 h-screen flex ">
        <div
          className="mx-auto h-full w-full justify-center items-center content-center"
          style={{
            maxHeight: 'calc(100vh - 200px)',
            maxWidth: 'calc(100vw - 60px)',
          }}
        >
          <div className="h-full w-full overflow-auto border border-gray-300 rounded-md p-4 mt-2 sm:mt-4 bg-gray-100">
            <JavaScriptPlayground />
          </div>
        </div>
      </div>
    </>
  );
};

export default playgroundPage;
