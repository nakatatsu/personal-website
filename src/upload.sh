#!/bin/bash

# [USAGE]
# cd /mnt/c/MyFile/GitHub/personal-website/src
# bash ./upload.sh develop

set -eu

if [ -z "$1" ]; then
    echo "環境名を引数で指定してください"
fi
 
ENV=$1
BUCKET_NAME=$ENV-public-tricrow

aws s3 sync ./out s3://$BUCKET_NAME/