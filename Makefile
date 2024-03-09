
MAKEFLAGS += --always-make

DC=docker compose

init:
	${DC} build

start:
	${DC} up

stop:
	${DC} down

enter:
	${DC} exec -it base /bin/bash

logs:
	${DC} logs
