
# Oscar Enghag | AI & Maskininlärning Portfolio

## Hur du kör projektet lokalt

För att köra projektet på din lokala maskin, följ dessa steg:

### Förutsättningar

- **Node.js & npm**: Installera Node.js (som inkluderar npm) från [Node.js officiella hemsida](https://nodejs.org/)
  - Rekommenderad version: Node.js 18.x eller senare
  - Kontrollera installationen genom att köra `node -v` och `npm -v` i terminalen

- **API nyckel**: Du behöver en API nyckel för att använda OpenRouter API. Du kan få en nyckel genom att skapa ett konto på [OpenRouter](https://openrouter.ai/), välja en AI modell du vill använda (föredragsvis en smart en) och klistra in din API nyckel i `.env` filen istället för variabeln: >> _API_KEY <<.

### Installation och körning

```sh
# Steg 1: Klona repositoryt
git clone https://github.com/madlad-code/portfolio.git

# Steg 2: Navigera till projektmappen
cd portfolio

# Steg 3: Installera beroenden
npm install

# Steg 4: Starta utvecklingsservern
npm run dev
```

Efter att du kört dessa kommandon bör applikationen vara igång på `http://localhost:8080` (eller en annan port om 8080 är upptagen).

### För utvecklare utan Git

Om du fått projektkoden som en zip-fil eller på annat sätt:

1. Packa upp filerna till en mapp
2. Öppna mappen i Visual Studio Code
3. Öppna terminalen i VS Code (Terminal > New Terminal)
4. Fortsätt från steg 3 i instruktionerna ovan

## Teknologier som används i projektet

Projektet är byggt med:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Filstruktur
- `src/pages/`: Innehåller alla huvudsidor
- `src/components/`: Innehåller återanvändbara komponenter
- `src/lib/`: Innehåller data och hjälpfunktioner
