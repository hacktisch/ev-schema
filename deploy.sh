read -p "Commit description: " desc
npm run timestamp && \
git add --all && \
git commit -m "$desc" && \
git push origin master && \

version=$(git log --pretty=format:'%h' -n 1)
echo "Installing version: $version to ev-api"
cd ../ev-api && npm i "https://hacktisch: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@github.com/hacktisch/ev-schema.git#$version"
echo "Installing version: $version to ev-cms"
cd ../ev-cms && npm i "https://hacktisch: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@github.com/hacktisch/ev-schema.git#$version"
