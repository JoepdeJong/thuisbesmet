FOLDER_PATH="build" ## point it to your static site folder
BUCKET="utrecht.thuisbesmet.nl"
npm install ## you can run your npm or ng commands here
npm run build ## build script for react
cd $FOLDER_PATH
## Now lets run the gsutil command for the storage
# Empty the bucket first
gsutil -m rm gs://$BUCKET/**
# Upload to your bucket with no cache
gsutil -m -h "Cache-Control:no-cache" cp -r ./ gs://$BUCKET/
# Make all the files public
gsutil -m acl set -R -a public-read gs://$BUCKET/
# set homepage and error page
gsutil web set -m index.html -e index.html gs://$BUCKET