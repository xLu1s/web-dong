# Dōng Asian & Sushi Bar

Demo estática del restaurante en Alcoy / Alcoi. Hecha con Astro y publicada en GitHub Pages.

- Carta transcrita de la carta impresa del local.
- Dirección de la carta: Centro Comercial Alzamora, C/ Els Alçamora, 44, 2.ª planta.
- Teléfono: 966 333 230.
- Pedido online real: [dongasiansushi.com](https://www.dongasiansushi.com/).

## Desarrollo

```bash
npm install
npm run dev
```

La base de producción es `/web-dong`.

```bash
npm run build
npm run preview
```

## Fotos de «El local»

La sección no usa fotos de stock del restaurante. Los huecos están en `src/data/local.ts` y los archivos van en `src/assets/local/`.

Cada hueco tiene `slot`, `alt`, `label` y, cuando ya exista la foto, `src`. Si `src` no está, se muestra el placeholder. Si está, Astro genera AVIF y WebP en el build.

Para sustituir un hueco:

1. Guarda la foto en `src/assets/local/`, por ejemplo `sala.jpg`.
2. Impórtala en `src/data/local.ts`:

```ts
import sala from '../assets/local/sala.jpg';
```

3. Asígnale `src: sala`, un `alt` que describa esa foto y, si ya no hace falta el aviso, cambia `label`.

```ts
{
  id: 'sala',
  slot: 'Sala',
  alt: 'Sala del restaurante, con las mesas junto a la ventana',
  label: 'Sala',
  src: sala,
}
```
