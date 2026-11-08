export type AllergenId =
  | 'altramuces'
  | 'apio'
  | 'cacahuetes'
  | 'gluten'
  | 'crustaceos'
  | 'frutos'
  | 'sesamo'
  | 'huevos'
  | 'lacteos'
  | 'moluscos'
  | 'mostaza'
  | 'pescado'
  | 'soja'
  | 'sulfitos';

export interface Allergen {
  id: AllergenId;
  label: string;
  color: string;
}

export const allergens: Allergen[] = [
  { id: 'altramuces', label: 'Altramuces', color: '#E6C200' },
  { id: 'apio', label: 'Apio', color: '#3C9A45' },
  { id: 'cacahuetes', label: 'Cacahuetes', color: '#D48A4A' },
  { id: 'gluten', label: 'Contiene gluten', color: '#E0A020' },
  { id: 'crustaceos', label: 'Crustáceos', color: '#1F8FCB' },
  { id: 'frutos', label: 'Frutos de cáscara', color: '#D85A52' },
  { id: 'sesamo', label: 'Granos de sésamo', color: '#8C7352' },
  { id: 'huevos', label: 'Huevos', color: '#E8A317' },
  { id: 'lacteos', label: 'Lácteos', color: '#6E3A22' },
  { id: 'moluscos', label: 'Moluscos', color: '#2BB4C8' },
  { id: 'mostaza', label: 'Mostaza', color: '#C49212' },
  { id: 'pescado', label: 'Pescado', color: '#24357A' },
  { id: 'soja', label: 'Soja', color: '#2F7D42' },
  { id: 'sulfitos', label: 'Dióxido de azufre y sulfitos', color: '#8E3052' },
];

export interface Dish {
  code: string;
  name: string;
  description?: string;
  price: string;
  altPrice?: string;
  allergens: AllergenId[];
  /** Shown instead of icons when the printed marks could not be read. */
  allergensPending?: boolean;
  spicy?: 1 | 2 | 3;
  novel?: boolean;
}

export interface Section {
  id: string;
  kicker: string;
  title: string;
  note?: string;
  dishes: Dish[];
}

export interface SetMenu {
  id: string;
  letter: 'A' | 'B';
  title: string;
  price: string;
  euros: number;
  cents: number;
  items: string[];
  drink?: string;
  allergens: AllergenId[];
}

const d = (
  code: string,
  name: string,
  price: string,
  allergens: AllergenId[],
  extra: Partial<Dish> = {},
): Dish => ({ code, name, price, allergens, ...extra });

export const sections: Section[] = [
  {
    id: 'nigiri',
    kicker: 'Sushi',
    title: 'Nigiri',
    note: '2 unidades',
    dishes: [
      d('S1', 'Atún', '3,00', ['pescado'], {
        description: 'Bolas de arroz con atún crudo',
      }),
      d('S2', 'Salmón', '2,50', ['pescado'], {
        description: 'Bolas de arroz con salmón crudo',
      }),
      d('S2B', 'Pez mantequilla', '2,50', ['pescado'], {
        description: 'Bolas de arroz con pez mantequilla',
      }),
      d('S3', 'Pulpo', '2,50', ['moluscos'], {
        description: 'Bolas de arroz con pulpo cocido',
      }),
      d('S4', 'Langostino', '2,50', ['pescado'], {
        description: 'Bolas de arroz con langostino cocido',
      }),
      d('S5', 'Caballa', '2,50', ['pescado'], {
        description: 'Bolas de arroz con caballa cruda',
      }),
      d('S6', 'Anguila', '3,00', ['pescado'], {
        description: 'Bola de arroz con anguila asada y salsa teriyaki',
      }),
    ],
  },
  {
    id: 'maki',
    kicker: 'Sushi',
    title: 'Maki',
    note: '8 unidades',
    dishes: [
      d('S7', 'Atún', '4,00', ['pescado'], {
        description: 'Rollo de arroz con alga nori y atún crudo',
      }),
      d('S8', 'Salmón', '3,50', ['pescado'], {
        description: 'Rollo de arroz con alga nori y salmón crudo',
      }),
      d('S9', 'Boca de mar', '3,00', ['crustaceos', 'gluten'], {
        description: 'Rollo de arroz con alga nori y boca de mar',
      }),
      d('S10', 'Pepino', '3,00', [], {
        description: 'Rollo de arroz con alga nori y pepino',
      }),
      d('S11', 'Nabo', '3,00', [], {
        description: 'Rollo de arroz con alga nori y nabo',
      }),
      d('S12', 'Aguacate', '3,00', [], {
        description: 'Rollo de arroz con alga nori y aguacate',
      }),
    ],
  },
  {
    id: 'temaki',
    kicker: 'Sushi',
    title: 'Temaki',
    note: 'Cono de alga nori',
    dishes: [
      d('S13', 'Atún', '3,50', ['pescado'], {
        description: 'Con atún crudo, lechuga, pepino, aguacate y mayonesa japonesa',
      }),
      d('S14', 'Salmón', '3,00', ['pescado'], {
        description: 'Con salmón crudo, lechuga, pepino, aguacate y mayonesa japonesa',
      }),
      d('S15', 'Langostino', '3,00', ['crustaceos'], {
        description: 'Con langostino rebozado, lechuga, nabo, pepino y mayonesa japonesa',
      }),
    ],
  },
  {
    id: 'uramaki',
    kicker: 'Sushi',
    title: 'Uramaki',
    note: '8 unidades',
    dishes: [
      d('S16', 'Vegetariano', '6,00', ['sesamo'], {
        description: 'Arroz, sésamo, aguacate, pepino y nabo',
      }),
      d('S17', 'California', '7,00', ['sesamo', 'gluten'], {
        description: 'Arroz, sésamo, boca de mar, pepino, aguacate',
      }),
      d('S18', 'Doble langostino', '8,50', ['crustaceos', 'gluten'], {
        description: 'Gambas, arroz, gamba en tempura y aguacate',
      }),
      d('S19', 'Salmón y queso', '7,00', ['pescado', 'crustaceos', 'gluten'], {
        description: 'Arroz, salmón, queso Philadelphia',
      }),
      d('S20', 'Maki crujiente', '8,00', ['pescado', 'crustaceos', 'gluten'], {
        description: 'Arroz, langostino tempura, bonito seco',
      }),
      d('S21', 'Rainbow', '8,00', ['pescado', 'crustaceos', 'gluten'], {
        description: '4 pescados, boca de mar, pepino y aguacate',
      }),
      d('S22', 'Hueva de pescado', '7,00', ['pescado', 'crustaceos', 'gluten'], {
        description: 'Huevas de pescado, arroz, nabo, boca de mar y salmón',
      }),
      d('S23', 'Especial gambas', '8,00', ['sesamo', 'gluten', 'crustaceos'], {
        description: 'Arroz, sésamo, gambas en tempura, aguacate y salsa',
      }),
      d('S24', 'Especial anguila', '11,00', ['pescado'], {
        description: 'Arroz, anguila, aguacate y salsa',
      }),
      d('S25', 'Especial tempura', '8,00', ['crustaceos', 'gluten'], {
        description: 'Arroz, langostino en tempura, pepino',
      }),
      d('S26', 'Futimaki de cangrejo concha blanda', '11,00', ['crustaceos', 'lacteos', 'gluten']),
    ],
  },
  {
    id: 'combinados',
    kicker: 'Sushi',
    title: 'Combinados',
    dishes: [
      d('S27', 'Sushi y maki variado', '12,50', ['pescado', 'sesamo', 'crustaceos'], {
        description: '2 nigiris salmón, 2 nigiris langostino, 4 maki salmón, 4 maki atún, 8 california',
      }),
      d('S28', 'Sashimi variado', '16,00', ['pescado'], {
        description: 'Cortes de pescado crudo: 6 caballa, 6 atún, 8 salmón',
      }),
      d('S29', 'Nigiri variado', '14,50', ['pescado'], {
        description: 'Cinco tipos de pescado. 12 u.',
        novel: true,
      }),
      d('S30', 'Maki variado', '13,50', ['pescado', 'crustaceos', 'sesamo', 'gluten'], {
        description: 'Uramamaki Especial Gambas, Maki salmón, Maki aguacate',
        novel: true,
      }),
    ],
  },
  {
    id: 'dim-sum',
    kicker: 'Entrantes',
    title: 'Dim sum',
    dishes: [
      d('31', 'Gyouzas fritas (5)', '4,50', ['gluten'], {
        description: 'Típica empanadilla japonesa de carne de pollo con verdura',
      }),
      d('32', 'Shumai de cerdo al vapor (4)', '3,95', ['gluten']),
      d('33', 'Dim sun al vapor (4)', '4,50', ['gluten'], {
        description: 'Empanadillas chinas de carne cocinadas al vapor',
      }),
      d('34', 'Bao bun', '4,00', ['gluten', 'moluscos'], {
        description: 'Relleno de sepia o carne de cerdo',
        novel: true,
      }),
      d('91', 'Pan chino (2)', '1,20', ['gluten']),
    ],
  },
  {
    id: 'ensaladas',
    kicker: 'Entrantes',
    title: 'Ensaladas',
    dishes: [
      d('01', 'Ensalada de la casa', '5,75', ['huevos', 'crustaceos'], {
        description: 'Lechugas con gambas, aguacate, tomate, pepino, huevo y una deliciosa salsa china',
      }),
      d('02', 'Nuestra ensalada César', '5,75', ['gluten', 'huevos'], {
        description: 'Lechugas, pollo plancha, tomate cherry, pepino, maíz, picatostes y salsa césar',
      }),
      d('04', 'Ensalada wakame', '2,95', ['sesamo'], {
        description: 'Algas, sésamo, especias',
      }),
      d('05', 'Ensalada vermicelle', '2,95', ['sesamo', 'soja'], {
        description: 'Algas',
      }),
      d('06', 'Ensalada de pepino', '2,50', ['sesamo', 'soja'], {
        description: 'Pepino crudo gaza [por confirmar] con salsa típica china, ajo, vinagre y toque picante',
        spicy: 1,
      }),
      d('07', 'Ensalada de bambú', '3,50', ['sesamo'], {
        description: 'Brotes de bambú',
        spicy: 1,
      }),
      d('08', 'Ensalada edamame', '2,95', ['soja'], {
        description: 'Soja en sus vaina',
      }),
    ],
  },
  {
    id: 'marinados',
    kicker: 'Entrantes',
    title: 'Marinados',
    dishes: [
      d('12', 'Tartar de salmón', '7,00', ['pescado', 'sesamo', 'soja'], {
        description: 'Marinado de salmón crudo',
      }),
      d('14', 'Tartar de atún', '7,00', ['pescado', 'sesamo', 'soja'], {
        description: 'Marinado de atún crudo',
      }),
      d('15', 'Pollo «Guangdong»', '5,50', ['sesamo', 'soja'], {
        description: 'Pollo cocido aderezado con una deliciosa salsa especiada',
      }),
      d('17', 'Gambón al plancha (4)', '3,95', ['crustaceos']),
      d('18', 'Gambas al ajillo', '5,95', ['crustaceos'], {
        description: 'Sabrosas gambas con su salsa al ajillo y toque picante',
        spicy: 1,
      }),
      d('19', 'Alitas de pollo', '2,95', ['gluten']),
    ],
  },
  {
    id: 'rollos',
    kicker: 'Entrantes',
    title: 'Rollos y pinchos',
    dishes: [
      d('20', 'Rollito de primavera', '1,50', ['gluten'], {
        description: 'Relleno de carne y verduras',
      }),
      d('21', 'Rollito de vietnamita (2)', '3,75', ['gluten'], {
        description: 'Masa extra fina rellena de carne, bambú y fideos',
      }),
      d('22', 'Rollito edamame (4)', '3,95', ['gluten', 'soja', 'lacteos'], {
        description: 'Rollito pequeño relleno de edamame y queso',
      }),
      d('23', 'Rollito tailandés', '5,95', ['gluten'], {
        description: 'Relleno de carne y verduras con salsa curry picante',
        spicy: 1,
      }),
      d('24', 'Tempura de verdura con gambas', '7,95', ['gluten', 'crustaceos']),
      d('25', 'Wantun frito Tai-Wan', '3,75', ['gluten', 'crustaceos', 'soja'], {
        description: 'Una fina masa con sésamo crujiente relleno de pollo y gambas',
      }),
      d('26', 'Triángulo al curry (4)', '3,75', ['gluten', 'sesamo', 'soja'], {
        description: 'Una masa rellena de sabroso pollo al curry',
        spicy: 1,
      }),
      d('27', 'Pincho de setas (2)', '2,50', ['sesamo', 'soja'], {
        description: 'Setas en salsa teriyaki',
      }),
      d('28', 'Pincho de Mongolia (2)', '3,95', ['soja'], {
        description: 'Brocheta de magro adobado con un ligero picante dulce',
      }),
      d('29', 'Pincho de gambas (2)', '3,95', ['crustaceos', 'gluten', 'sesamo', 'soja'], {
        description: 'A la plancha, salsa teriyaki',
      }),
      d('30', 'Fritura de calamar', '4,50', ['gluten', 'moluscos']),
    ],
  },
  {
    id: 'sopas',
    kicker: 'Entrantes',
    title: 'Sopas',
    note: 'Precio de 1 unidad. La carta indica también 2 unidades a 6,95 €',
    dishes: [
      d('35', 'Sopa de marisco thai (1)', '3,95', [], {
        description: 'Sopa de marisco con un toque tailandés',
        altPrice: '6,95',
        allergensPending: true,
      }),
      d('36', 'Sopa de wan-ton (1)', '3,95', ['gluten', 'crustaceos', 'soja'], {
        description: 'Como base una pasta muy fina rellena de carne picada y gambas',
        altPrice: '6,95',
      }),
      d('37', 'Sopa de miso (1)', '3,95', ['gluten', 'soja'], {
        description: 'Sopa japonesa de miso (pasta aromatizada de soja), con algas y tofu',
        altPrice: '6,95',
      }),
      d('38', 'Sopa agripicante (1)', '3,95', ['gluten', 'soja', 'huevos'], {
        description: 'Pollo y verdura picada, setas oreja de madera y tofu agripicante',
        altPrice: '6,95',
        spicy: 1,
      }),
    ],
  },
  {
    id: 'carne',
    kicker: 'Principales',
    title: 'Carne',
    dishes: [
      d('41', 'Costillas con salsa tailandesa', '6,50', ['gluten', 'soja'], {
        description: 'Costilla de cerdo frito con salsa dulce-picante',
        spicy: 1,
      }),
      d('44', 'Pollo almendrado con limón', '5,75', ['gluten', 'frutos'], {
        description: 'Pechuga de pollo frito rebozado con almendra en salsa de limón',
      }),
      d('45', 'Pollo Tai-Wan', '6,95', ['soja'], {
        description: 'Tiras de pollo con champiñones y verduras con una salsa de TaiWan picante',
        spicy: 1,
      }),
      d('46', 'Pollo con anacardo', '6,75', ['soja', 'frutos'], {
        description: 'Pollo con zanahoria, cebolla, pimiento verde con anacardos y salsa de ostras',
      }),
      d('47', 'Ternera o pollo al curry tailandés', '6,75', ['gluten', 'soja'], {
        description: 'Carne y verdura con salsa curry',
        spicy: 2,
      }),
      d('48', 'Ternera o pollo picante Sichuan', '6,75', ['gluten', 'soja'], {
        description: 'Carne con bambú y pimienta de Sichuan',
        spicy: 3,
      }),
      d('49', 'Wok de ternera con espárragos', '7,75', ['soja']),
      d('50', 'Ternera o pollo al tie-ban', '7,75', ['soja'], {
        description: 'Carne con bambú y setas chinas servidas en Tie-ban (fuente de hierro caliente)',
      }),
      d('52', 'Pato a la pekinesa', '13,95', ['gluten', 'soja'], {
        description: 'Pato asado crujiente con crepes mandarín, pepino, puerro y salsa especial',
      }),
      d('53', 'Pato tailandés al tieban', '10,95', ['gluten', 'soja'], {
        description: 'Servido en Tie-ban (plancha de hierro caliente) con verduras y salsa thai',
        spicy: 1,
      }),
    ],
  },
  {
    id: 'arroz',
    kicker: 'Arroz y pasta',
    title: 'Arroz y pasta',
    dishes: [
      d('55', 'Arroz oro', '5,50', ['huevos'], {
        description: 'Arroz tailandés «jazmín» con pollo, maíz y yema de huevo',
      }),
      d('56', 'Arroz frito con piña thai', '5,75', ['gluten'], {
        description: 'Arroz tailandés «jazmín» con pollo, gambas, pimiento, cebolla, piña y salsa Thai',
        spicy: 1,
      }),
      d('57', 'Arroz tres delicias', '3,50', ['huevos']),
      d('58', 'Arroz de la casa', '5,50', ['huevos', 'soja', 'crustaceos'], {
        description: 'Arroz tailandés «jazmín» con carne, brotes de soja, gambas, setas y salsa de soja',
      }),
      d('90', 'Arroz blanco', '1,50', []),
      d('59', 'Tallarines japoneses con salsa teriyaki', '5,75', ['crustaceos', 'gluten', 'huevos', 'soja'], {
        description: 'Tallarines gruesos (Wu-Dong) con gambas, champiñones, cebolla y salsa terriyaki',
      }),
      d('60', 'Tallarines vietnamitas', '5,75', ['gluten', 'huevos', 'soja'], {
        description: 'Tallarines finos de huevo con verduras y pollo',
      }),
      d('62', 'Tallarines al tieban', '5,95', ['crustaceos', 'gluten', 'huevos', 'soja'], {
        description: 'Plancha de hierro caliente. Tallarines crujientes servidos en Tie-ban con gambas, pollo y verduras',
      }),
      d('63', 'Tallarines de la casa', '5,50', ['crustaceos', 'huevos', 'gluten', 'soja'], {
        description: 'Tallarines al huevo con carne, gambas y verduras',
      }),
      d('64', 'Fideos de arroz Singapur', '5,95', ['crustaceos', 'huevos', 'soja'], {
        description: 'Fideo de arroz fino con gambas, verduras y salsa curry',
        spicy: 1,
      }),
      d('65', 'Fideos de arroz de la casa', '5,50', ['crustaceos', 'huevos', 'soja'], {
        description: 'Fideo de arroz fino con gambas, carnes y verduras',
      }),
      d('66', 'Especial pasta de arroz coreano', '6,50', ['huevos', 'soja'], {
        description: 'Típica comida coreana de pasta de arroz con setas, carne y verduras',
      }),
    ],
  },
  {
    id: 'pescados',
    kicker: 'Principales',
    title: 'Pescados',
    dishes: [
      d('69', 'Calamares vietnamita', '7,95', ['moluscos', 'soja'], {
        description: 'Corte limpio de calamares con salsa especiada un poquito picante',
        spicy: 1,
      }),
      d('70', 'Calamares al vapor', '12,50', ['moluscos', 'soja'], {
        description: 'Con su salsa de jengibre y soja especial',
      }),
      d('71', 'Gambas con curry thai', '7,95', ['gluten', 'crustaceos'], {
        description: 'Gambas peladas con salsa curry',
        spicy: 1,
      }),
      d('72', 'Gambas con huevo', '6,95', ['crustaceos', 'huevos'], {
        description: 'Tortilla con gambas',
      }),
      d('73', 'Gambas al tieban', '8,95', ['crustaceos', 'soja'], {
        description: 'Plancha de hierro caliente. Gambas con bambú y setas chinas en Tieban',
      }),
      d('75', 'Cangrejos al jengibre', '7,95', ['gluten', 'crustaceos'], {
        description: 'Salteado salsa al jengibre',
      }),
      d('78', 'Almejas', '4,50', ['moluscos'], {
        description: 'Almejas a la plancha con salsa de perejil',
      }),
    ],
  },
  {
    id: 'verdura',
    kicker: 'Principales',
    title: 'Verdura y combinados',
    dishes: [
      d('80', 'Verdura mixto al wok', '5,50', ['soja'], {
        description: 'Mixto verdura al wok con salsa de ostras',
      }),
      d('81', 'Mixto verdura al plancha', '5,95', [], {
        description: 'Mixto verdura plancha con salsa perejil',
      }),
      d('83', 'Entrecot', '12,95', [], {
        description: 'Lomo alto de ternera al plancha con patatas fritas',
      }),
      d('84', 'Costillas coreanas BBQ', '7,95', ['gluten'], {
        description: 'Costilla de cerdo al horno con salsa BBQ',
      }),
    ],
  },
];

export const setMenus: SetMenu[] = [
  {
    id: 'menu-a',
    letter: 'A',
    title: 'Menú x2 pers.',
    price: '15,95',
    euros: 15,
    cents: 95,
    items: [
      'Rollito de primavera (2)',
      'Arroz tres delicias',
      'Pollo rebozado con salsa de limón',
      'Ternera con salsa curry',
    ],
    allergens: ['gluten', 'huevos', 'soja'],
  },
  {
    id: 'menu-b',
    letter: 'B',
    title: 'Menú x2 pers.',
    price: '29,95',
    euros: 29,
    cents: 95,
    items: [
      'Combinado plato frío (2)',
      'Pincho de Mongolia (2)',
      'Rollo de primavera (2)',
      'Pollo con anacardos',
      'Gambas curry Thai',
      'Arroz / Tallarines de la casa',
    ],
    drink: 'Refresco / Cerveza / Vino',
    allergens: ['crustaceos', 'gluten', 'huevos', 'soja'],
  },
];

export const phone = '+34966333230';
export const phoneDisplay = '966 333 230';
export const orderUrl = 'https://www.dongasiansushi.com/';

export function allergenById(id: AllergenId): Allergen {
  const found = allergens.find((item) => item.id === id);
  if (!found) throw new Error(id);
  return found;
}

export function allergenLabels(ids: AllergenId[]): string {
  return ids.map((id) => allergenById(id).label).join(', ');
}
