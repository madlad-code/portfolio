
# Oscar Enghag | AI & Maskininlärning Portfolio

## Project info

**URL**: https://lovable.dev/projects/130815ca-e0fc-4e59-924a-ef9fcd0145cc

## Hur du kör projektet lokalt

För att köra projektet på din lokala maskin, följ dessa steg:

### Förutsättningar

- **Node.js & npm**: Installera Node.js (som inkluderar npm) från [Node.js officiella hemsida](https://nodejs.org/)
  - Rekommenderad version: Node.js 18.x eller senare
  - Kontrollera installationen genom att köra `node -v` och `npm -v` i terminalen

### Installation och körning

```sh
# Steg 1: Klona repositoryt
git clone <projektets-git-url>

# Steg 2: Navigera till projektmappen
cd <projektmappens-namn>

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

## Hur du kan deploya projektet

Du kan enkelt deploya projektet genom att öppna [Lovable](https://lovable.dev/projects/130815ca-e0fc-4e59-924a-ef9fcd0145cc) och klicka på Share -> Publish.

## Anpassad domän

Vi stödjer inte anpassade domäner ännu. Om du vill deploya ditt projekt under din egen domän rekommenderar vi Netlify. Besök vår dokumentation för mer information: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Utvecklingsnotiser

### Filstruktur
- `src/pages/`: Innehåller alla huvudsidor
- `src/components/`: Innehåller återanvändbara komponenter
- `src/lib/`: Innehåller data och hjälpfunktioner
