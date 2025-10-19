import { t, mt, v } from "./config.js" with { type: "macro" };

export const apples = t({
  variants: [v("count")],
  target: {
    key: "count",
    zero: {
      en: "No apples",
      fr: "Aucune pomme",
      es: "No hay manzanas",
    },
    one: {
      en: "1 apple",
      fr: "1 pomme",
      es: "1 manzana",
    },
    other: {
      en: "{{count}} apples",
      fr: "{{count}} pommes",
      es: "{{count}} manzanas",
    },
  },
});

export const matrixApple = mt({
  variants: [v("count")],
  matrix: [
    {
      when: { count: ["zero"] },
      en: "No apples",
      fr: "Aucune pomme",
      es: "No hay manzanas",
    },
    {
      when: { count: ["one"] },
      en: "1 apple",
      fr: "1 pomme",
      es: "1 manzana",
    },
    {
      en: "{{count}} apples",
      fr: "{{count}} pommes",
      es: "{{count}} manzanas",
    },
  ],
});

export const pigs = t({
  variants: [
    v("count"),
    v("gender"),
    {
      name: "tone",
      key: (tone?: "formal" | "informal") => tone ?? "formal",
    },
  ],
  target: {
    key: "count",
    zero: {
      en: "No pigs",
      fr: "Aucun cochon",
      es: "No hay cerdos",
      target: {
        key: "gender",
        female: {
          fr: "Aucune cochonne",
          es: "No hay cerdas",
        },
      },
    },
    one: {
      en: "1 pig",
      fr: "1 cochon",
      es: "1 cerdo",
      target: {
        key: "gender",
        female: {
          fr: "1 cochonne",
          es: "1 cerda",
        },
      },
    },
    other: {
      en: "{{count}} pigs",
      fr: "{{count}} cochons",
      es: "{{count}} cerdos",
      target: {
        key: "tone",
        informal: {
          en: "{{count}} piggies",
          es: "{{count}} cerditos",
          target: {
            key: "gender",
            female: {
              fr: "{{count}} ptites cochonettes",
              es: "{{count}} cerditas",
            },
            male: {
              fr: "{{count}} ptits cochonets",
            },
          },
        },
      },
    },
  },
});

export const matrixPigs = mt({
  variants: [
    v("count"),
    v("gender"),
    {
      name: "tone",
      key: (tone?: "formal" | "informal") => tone ?? "formal",
    },
  ],
  matrix: [
    {
      when: {
        count: ["other"],
        gender: ["female"],
        tone: ["informal"],
      },
      en: "{{count}} piggies",
      fr: "{{count}} ptites cochonettes",
      es: "{{count}} cerditas",
    },
    {
      when: {
        count: ["other"],
        tone: ["informal"],
      },
      en: "{{count}} piggies",
      fr: "{{count}} ptits cochonets",
      es: "{{count}} cerditos",
    },
    {
      when: { count: ["other"], gender: ["female"] },
      en: "{{count}} pigs",
      fr: "{{count}} cochonnes",
      es: "{{count}} cerdas",
    },
    {
      when: { count: ["one"], gender: ["female"] },
      en: "1 pig",
      fr: "1 cochonne",
      es: "1 cerda",
    },
    {
      when: { count: ["one"] },
      en: "1 pig",
      fr: "1 cochon",
      es: "1 cerdo",
    },
    {
      when: { count: ["zero"], gender: ["female"] },
      en: "No pigs",
      fr: "Aucune cochonne",
      es: "No hay cerdas",
    },
    {
      when: { count: ["zero"] },
      en: "No pigs",
      fr: "Aucun cochon",
      es: "No hay cerdos",
    },
    {
      en: "{{count}} pigs",
      fr: "{{count}} cochons",
      es: "{{count}} cerdos",
    },
  ],
});

export const applesICU = {
  en: "{count, plural, =0 {No apples} one {1 apple} other {# apples}}",
  fr: "{count, plural, =0 {Aucune pomme} one {1 pomme} other {# pommes}}",
  es: "{count, plural, =0 {No hay manzanas} one {1 manzana} other {# manzanas}}",
};

export const pigsICU = {
  en: "{count, plural, =0 {No pigs} one {1 pig} other {{tone, select, informal {# piggies} other {# pigs}}}}",
  fr: "{count, plural, =0 {{gender, select, female {Aucune cochonne} other {Aucun cochon}}} one {{gender, select, female {1 cochonne} other {1 cochon}}} other {{tone, select, informal {{gender, select, female {# ptites cochonettes} male {# ptits cochonets} other {# ptits cochonets}}} other {{gender, select, female {# cochonnes} other {# cochons}}}}}",
  es: "{count, plural, =0 {{gender, select, female {No hay cerdas} other {No hay cerdos}}} one {{gender, select, female {1 cerda} other {1 cerdo}}} other {{tone, select, informal {{gender, select, female {# cerditas} other {# cerditos}}} other {{gender, select, female {# cerdas} other {# cerdos}}}}}",
};
