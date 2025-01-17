# HeroUI + PayloadCMS + Localization Boilerplate

A boilerplate for creating applications using Next.js, HeroUI, and PayloadCMS with built-in localization support. This template aims to provide a starting point for projects that require a modern UI framework, a headless CMS, and multi-language content management.

## Technologies Used

- [Next.js 15](https://nextjs.org/docs)
- [HeroUI v2](https://heroui.org/)
- [PayloadCMS](https://payloadcms.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [`@formatjs/intl-localematcher`](https://formatjs.io/docs/react-intl/setup)
- [`intl-messageformat`](https://formatjs.io/docs/core/formatjs)

## How to Use

1. **Installation:**

   Choose your preferred package manager:

   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   bun install
   ```

2. **Environment Variables:**

   Create a `.env` file in the root directory and configure your PayloadCMS database connection. Refer to the [PayloadCMS documentation](https://payloadcms.com/docs/configuration/overview) for configuration options.

3. **Run Development Servers:**

   To run the Next.js frontend:

   ```bash
   npm run dev
   ```

   To run the PayloadCMS admin panel (in a separate terminal):

   ```bash
   pnpm run dev
   ```

4. **Access the Admin Panel:**

   Once the PayloadCMS development server is running, access the admin panel at `http://localhost:3000/admin`.

5. **Localization:**

   The boilerplate is set up for localization using `@formatjs/intl-localematcher` and `intl-messageformat`. The frontend routes are structured with a `[lang]` dynamic segment (e.g., `/en/contact`, `/fr/contact`). You can find examples of how to implement localized content within the `app/(frontend)/[lang]` directory.
# nextui-payloadcms-i18n
