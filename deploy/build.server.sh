running_path=$PWD
if ! [[ "$running_path" == *haparlament/deploy ]]
then
  echo "[ERROR] This script has to run from 'deploy' folder"
  echo "[ERROR] Change your current folder to deploy and run it"
  exit 1
fi
cd ..
go mod tidy
go build
