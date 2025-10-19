import { createConfig } from "./boomer.js" with { type: "macro" };

export const {
  nestedTranslation: t,
  matrixTranslation: mt,
  v,
  initialize,
} = createConfig({
  base: {
    locale: "en",
    fallbackLocale: "en",
    requiredLocale: ["en", "fr", "es"],
    supportedLocales: ["en-US", "fr-CA"],
    interpolation: {
      interpolatationStyle: "{{value}}",
    },
  },
  variants: {
    count: {
      key: (count: number, locale: string) => {
        if (count === 0) return "zero";
        if (count === 1) return "one";
        return "other";
      },
      interpolation: (count: number) => count.toString(),
    },
    ordinal: {
      interpolation: (number: number, locale: string) => {
        const ordinalRules = new Intl.PluralRules(locale, { type: "ordinal" });
        const suffixes = new Map([
          ["one", "st"],
          ["two", "nd"],
          ["few", "rd"],
          ["other", "th"],
        ]);
        const rule = ordinalRules.select(number);
        const suffix = suffixes.get(rule);
        return `${number}${suffix}`;
      },
    },
    gender: {
      key: (gender: "male" | "female" | "other", locale: string) => gender,
      interpolation: (gender: "male" | "female" | "other") => gender,
    },
  },
  options: {
    modifiers: {
      list: (list: string[], locale: string) =>
        new Intl.ListFormat(locale, { style: "long" }).format(list),
    },
  },
});
