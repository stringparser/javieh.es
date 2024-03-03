
MAKEFLAGS += --always-make

# aliases
DC=docker compose

init:
	${DC} build

start:
	${DC} up

stop:
	${DC} down

dev: stop start

enter:
	${DC} exec -it base /bin/bash

logs:
	${DC} logs
