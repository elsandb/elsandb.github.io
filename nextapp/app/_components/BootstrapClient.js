"use client"

import { useEffect } from 'react';

// since we want to load the bootstrap javascript only on the client side we'll make a new component and make use of "use client" which will load bootstrap javascript only for the client and not the server. https://1manstartup.com/blogs/install-bootstrap-for-nextjs-app-router

function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

export default BootstrapClient;