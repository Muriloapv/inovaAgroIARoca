# Instruções de Instalação e Execução do Projeto

## Pré-requisitos

- Node.js (versão 14.17 ou superior)
- npm (versão 8.19.4 ou superior)
- Expo CLI (será instalado durante o processo)

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Instale o Expo CLI globalmente (caso ainda não tenha):
```bash
npm install -g expo-cli
```

## Executando o Projeto

### Desenvolvimento

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm start
```

Este comando iniciará o servidor de desenvolvimento do Expo. Você verá um QR code no terminal que pode ser escaneado com o aplicativo Expo Go no seu dispositivo móvel.

### Plataformas Específicas

Para executar em plataformas específicas:

- Android:
```bash
npm run android
```

- iOS:
```bash
npm run ios
```

- Web:
```bash
npm run web
```

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run android`: Inicia o aplicativo no Android
- `npm run ios`: Inicia o aplicativo no iOS
- `npm run web`: Inicia o aplicativo na versão web
- `npm run build`: Compila o projeto
- `npm run lint`: Executa a verificação de código
- `npm run format`: Formata o código usando dprint

## Estrutura do Projeto

- `/src`: Contém o código fonte principal
- `/lib`: Bibliotecas e dependências
- `/bin`: Scripts executáveis
- `App.tsx`: Componente principal da aplicação
- `package.json`: Configurações e dependências do projeto

## Solução de Problemas

Se você encontrar problemas durante a instalação ou execução:

1. Certifique-se de que todas as dependências foram instaladas corretamente:
```bash
npm install
```

2. Limpe o cache do npm:
```bash
npm cache clean --force
```

3. Verifique se o Node.js e npm estão nas versões corretas:
```bash
node --version
npm --version
```

4. Se estiver tendo problemas com o Expo, tente:
```bash
expo doctor
```

## Suporte

Para mais informações ou ajuda, consulte a documentação do Expo em https://docs.expo.dev/ 