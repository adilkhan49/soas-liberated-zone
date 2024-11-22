# Deploy on Ubuntu


## Install Docker CE

sudo apt update -y
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install -y docker-ce
sudo systemctl status docker
sudo usermod -aG docker ${USER}
sudo su - ${USER}

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

## Install Docker Compose 

sudo curl -L "https://github.com/docker/compose/releases/download/2.29.7/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
docker compose version

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04


## Clone Repo

sudo apt upgrade -y git
git config --global credential.helper store


## Add .env files

sudo vi /home/ubuntu/soas-liberated-zone/slz-docker/db/.env
sudo vi /home/ubuntu/soas-liberated-zone/backend/backend/.env

## Add public ipv4 address to ALLOWES_URLS

sudo vi /home/ubuntu/soas-liberated-zone/backend/settings.py


# Start Service

docker compose up --build -d

## Backup DB

```
docker exec -it slz-docker-db-1 bash
mariadb-dump -udev -p slz > mnt/slz.sql
scp -i "slz-aws-ec2-keypair.pem"  ubuntu@ec2-18-130-44-159.eu-west-2.compute.amazonaws.com:/home/ubuntu/soas-liberated-zone/slz-docker/db/slz.sql /Users/adil/repos/soas-liberated-zone/slz-docker/db/slz_nov13.sql
```
## Restore DB

```
scp -i "slz-aws-ec2-keypair.pem" /Users/adil/repos/soas-liberated-zone/slz-docker/db/slz.sql ubuntu@ec2-18-130-44-159.eu-west-2.compute.amazonaws.com:/home/ubuntu/soas-liberated-zone/slz-docker/db
docker exec -it slz-docker-db-1 bash
mariadb -udev -p slz < /mnt/slz.sql
```

# Migrate

docker exec -it slz-docker-backend-1 bash
python manage.py migrate

