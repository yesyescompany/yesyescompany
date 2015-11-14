#!/bin/bash
npm run build -- --release
(
cd dist
git init
git add -A
git commit -m "Deployed to Github Pages"
git push --force --quiet git@github.com-yyc:yesyescompany/yesyescompany.github.io.git master > /dev/null 2>&1
cd -
)
