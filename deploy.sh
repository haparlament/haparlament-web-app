export TAG=`date +%Y%m%d-%H%M%S`
docker-compose -f docker-compose.build.yaml build
docker-compose -f docker-compose.build.yaml push
gcloud run services --project haparlament update haparlament tag="$TAG"  --region=me-west1