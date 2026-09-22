#!/usr/bin/env node
// Reads the URL portless assigns and passes it as Hugo's --baseURL.
const { spawnSync } = require('node:child_process');

const baseURL = process.env.PORTLESS_URL ?? 'http://localhost:1313';

const result = spawnSync(
  'hugo',
  ['server', '--baseURL', baseURL, '--appendPort=false', '--disableFastRender', '--noHTTPCache'],
  { stdio: 'inherit', shell: true }
);

process.exit(result.status ?? 1);
