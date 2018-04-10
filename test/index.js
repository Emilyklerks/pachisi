const req = require.context(".", true, /.spec.tsx?$/);
req.keys().forEach(req);