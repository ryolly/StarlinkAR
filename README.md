# Sky Chart AR (PWA)

Web app che sovrappone una mappa del cielo alla fotocamera del telefono in AR. Funziona su iPhone e Android via HTTPS (GitHub Pages).

## File inclusi
- `index.html` – app principale
- `manifest.webmanifest` – PWA manifest
- `sw.js` – service worker (cache offline)
- `icons/` – icone PWA (192/512, maskable)
- `sample-skychart.jpg` – esempio di mappa (sostituibile)

## Deploy su GitHub Pages (da web)
1. Crea un nuovo repository pubblico su GitHub (es. `sky-chart-ar`).
2. Carica **tutti i file** di questa cartella (trascina nella pagina *Add files ➜ Upload files*).
3. Vai su **Settings ➜ Pages**.
4. In *Source*, seleziona **Deploy from a branch**.
5. In *Branch*, seleziona **main** e la cartella **/** (root), poi *Save*.
6. Dopo il deploy, l’app sarà su `https://USERNAME.github.io/REPO/`.

## Deploy via git (facoltativo)
```bash
git init
git remote add origin https://github.com/USERNAME/sky-chart-ar.git
git add .
git commit -m "Initial PWA"
git branch -M main
git push -u origin main
```
Poi attiva GitHub Pages come sopra.

## iPhone
- Apri l’URL su Safari, premi **Avvia AR** e consenti **fotocamera** e **sensori**.
- Usa **Condividi ➜ Aggiungi alla schermata Home** per installarla come app. 

## Uso rapido
1. Carica un’immagine di mapa del cielo (o premi “Usa esempio”).
2. “Rimuovi fondo bianco” per evidenziare stelle e freccia della traiettoria dei satelliti.
3. Allinea con “Fissa allineamento” e rifinisci con Offset azimut/altitudine.
