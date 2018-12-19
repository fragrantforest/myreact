npm run dev
npm run build
npm run ybuild

#npm run 命令只能执行scripts里面定义的命令或者本身带有的命令
npm run webpack --mode production //会提示npm ERR! missing script: webpack

#yarn run 命令可以直接执行一个命令
yarn run webpack --mode production 