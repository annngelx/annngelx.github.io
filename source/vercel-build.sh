#!/bin/sh
# Build command for Vercel (see vercel.json). The 3D module must be built first: the pages link to it by
# the hash of its contents.
set -eu
cd "$(dirname "$0")"
npm ci --no-audit --no-fund
npm run build:world
python3 -m pip install --quiet --target .pydeps -r requirements.txt \
  || python3 -m pip install --quiet --break-system-packages --target .pydeps -r requirements.txt
PYTHONPATH=.pydeps python3 build.py
