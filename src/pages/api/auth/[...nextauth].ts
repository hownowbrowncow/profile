import NextAuth from "next-auth"
import {TypeORMLegacyAdapter} from "@next-auth/typeorm-legacy-adapter"

import {connectionOptions} from "utils/database"
import * as entities from "entity"

export default NextAuth({
  adapter: TypeORMLegacyAdapter(connectionOptions, {entities}),
  providers: [],
  debug: true,
})
