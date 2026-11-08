import type { ImageMetadata } from 'astro';

/**
 * Huecos de «El local».
 * Para publicar una foto real:
 * 1. Guarda el archivo en src/assets/local/ (jpg, png o webp).
 * 2. Impórtalo aquí y asígnalo a `src`.
 * 3. Escribe un `alt` que describa esa foto.
 * 4. Cambia `label` si ya no hace falta el aviso [por confirmar].
 * Si `src` no está, la web muestra el placeholder.
 */
export interface LocalSlot {
  id: string;
  slot: string;
  alt: string;
  label: string;
  src?: ImageMetadata;
}

const pending = 'Foto del local [por confirmar]';

export const localSlots: LocalSlot[] = [
  {
    id: 'sala',
    slot: 'Sala',
    alt: 'Sala del restaurante',
    label: pending,
  },
  {
    id: 'barra',
    slot: 'Barra de sushi',
    alt: 'Barra de sushi',
    label: pending,
  },
  {
    id: 'entrada',
    slot: 'Entrada del C.C. Alzamora',
    alt: 'Entrada del Centro Comercial Alzamora',
    label: pending,
  },
  {
    id: 'decoracion',
    slot: 'Decoración',
    alt: 'Detalle de la decoración',
    label: pending,
  },
  {
    id: 'cocina',
    slot: 'Equipo o cocina',
    alt: 'Equipo o cocina',
    label: pending,
  },
];
