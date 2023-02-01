git clone ...
npm install

if node-tspsolver error:
make sure you install visual studio and python 
npm install -g node-gyp
npm config set msvs_version (your version of visual studio) 
[expample: npm config set msvs_version 2019]


use mirosoft visual studio 2017 for stablility
make sure to install .Net desktop development and desktop development with c++ 
make sure to install 
should use node 14.17.3

can't find binding file: 
cd to ...\node_modules\node-tspsolver
run node-gyp configure
run node-gyp build