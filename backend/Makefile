# Makefile

# Default target
all: start_ssh_agent add_ssh_key git_pull docker_compose_down docker_compose_up_build

# Start the ssh-agent
start_ssh_agent:
        eval `ssh-agent -s`
add_ssh_key:
        ssh-add ~/.ssh/dev_github
git_pull:
        ssh-add ~/.ssh/dev_github
docker_compose_down:
        docker compose down
docker_compose_up_build:
        docker compose up --build

