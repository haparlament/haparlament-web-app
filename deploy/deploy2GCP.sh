#!/bin/bash

creation_date=$(date +%Y%m%d-%H%M%S)
app_name=haparlament
repo_url=me-west1-docker.pkg.dev/haparlament/haparlament-repo
echo "Docker creation timestamp: $creation_date"
docker build . --tag $app_name:"$creation_date"
docker tag $app_name:"$creation_date" $repo_url/$app_name:"$creation_date"
docker push $repo_url/$app_name:"$creation_date"
