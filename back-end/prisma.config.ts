// prisma.config.ts

// 1. CARREGAMENTO DO DOTENV (para resolver o erro anterior)
import "dotenv/config"; 

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  
  // 2. CORREÇÃO DO NOVO ERRO: Remover 'engine' e 'datasource' daqui
  migrations: {
    path: "prisma/migrations",
    // Remova as linhas:
    // engine: "classic",
    // datasource: { url: env("DATABASE_URL") },
  },
  
  // 3. MOVENDO 'datasource' para o nível superior (se necessário)
  datasource: {
    url: env("DATABASE_URL"),
  },
});