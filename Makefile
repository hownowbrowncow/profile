local_db:
	docker run -d --rm --name profile-postgres -p 127.0.0.1:5432:5432/tcp -e POSTGRES_PASSWORD=password -e POSTGRES_USER=profile_user -e POSTGRES_DB=profile_db postgres

run_migration:
	npx ts-node --compiler-options "{\"module\": \"commonjs\"}" ./node_modules/typeorm/cli.js migration:run

revert_migration:
	npx ts-node --compiler-options "{\"module\": \"commonjs\"}" ./node_modules/typeorm/cli.js migration:revert

create_migration:
	npx ts-node --compiler-options "{\"module\": \"commonjs\"}" ./node_modules/typeorm/cli.js migration:create -n $(name)

generate_migration:
	npx ts-node --compiler-options "{\"module\": \"commonjs\"}" ./node_modules/typeorm/cli.js migration:generate -n $(name)
