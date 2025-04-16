import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import fs from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Seu arquivo principal da biblioteca
      name: 'w3block-new-sdk', // Nome da sua biblioteca (usado para variáveis globais, se necessário)
      formats: ['es', 'cjs'], // Gera módulos ES e CommonJS
      fileName: (format) => `w3block-new-sdk.${format}.js`, // Nome dos arquivos de saída
    },
    rollupOptions: {
      // Certifique-se de que as dependências externas não sejam incluídas no seu bundle
      external: [], // Adicione aqui nomes de pacotes que você quer marcar como externos (ex: 'react')
      output: {
        // Para módulos ES, você pode querer preservar as importações
        preserveModules: true,
        preserveModulesRoot: 'src', // Mantém a estrutura de pastas dentro de 'dist/es'
        exports: 'named', // Garante que as exportações nomeadas funcionem corretamente

        // Configurações específicas para CommonJS (opcional, dependendo das suas necessidades)
        // entryFileNames: 'index.cjs',
      },
    },
    // Para evitar a cópia de arquivos .css para a pasta dist (se você for injetar no JS)
    // cssCodeSplit: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true, // Gera um arquivo index.d.ts na raiz da pasta de saída
      // libFolderPath: './dist/types', // Opcional: define onde os arquivos .d.ts serão gerados
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});