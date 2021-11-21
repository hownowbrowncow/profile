local_db:
	docker run -d --rm --name profile-postgres -p 127.0.0.1:5432:5432/tcp -e POSTGRES_PASSWORD=password -e POSTGRES_USER=profile_user -e POSTGRES_DB=profile_db postgres

resetDB:
	npm run typeorm schema:drop
	npm run typeorm migration:run
	npm run typeseed seed
