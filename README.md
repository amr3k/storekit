# StoreKit

A next generation E-Commerce theme built with SvelteKit.

# What did I learn through this project?

## SvelteKit

> This is how to build a modern website

- Debugging backend code is not yet supported. [More info](https://github.com/vitejs/vite/issues/3930)
- Stores can't be updated in server as the `$app/env/browser` is not available
- It's better to use Svelte [Context API](https://svelte.dev/docs#run-time-svelte-setcontext) to share data between nested components than using props.
- For separated components, it's better to use stores.
- Use custom `__error.svelte` to show error message.
- It's better to separate reusable components into `$lib` directory.
- Always keep an eye on monthly changelog, as sveltekit is still in beta.
  > One example for this is in commit (63737b89b3881f891c68513189361a485e5c9ab2) When I found that `$page.path` was replaced with `$page.url.pathname`
- Always check `<slot />` in layouts and children components.
- The function `get` from `svete/store` will return `false` if the store is an empty array, So you should validate it with `if (!get(store)) ...`.
- If you found a bug, it's better to use incognito mode to ignore cache & localStorage.

### i18n

- SVG follows HTML direction.
- **Fancy** border radius follow HTML direction as well.

- Useful libraries:
  - [Typesafe i18n](https://github.com/ivanhofer/typesafe-i18n) (⭐+720)
    > An opinionated, fully type-safe, lightweight localization library for TypeScript and JavaScript projects with no external dependencies.
  - [svelte-i18n](https://github.com/kaisermann/svelte-i18n) (⭐+660)
    > Internationalization library for Svelte
  - [svelte-intl-precompiled](https://github.com/cibernox/svelte-intl-precompile) (⭐+180)
    > I18n library for Svelte.js that analyzes your keys at build time for max performance and minimal footprint.
  - 🔥 [sveltekit-i18n](https://github.com/jarda-svoboda/sveltekit-i18n) (⭐+30)
    > Internationalization library built for SvelteKit

## Typescript (&Javascript)

> What a discovery!

- localStorage is always text based, so it's better to use `JSON.stringify` and `JSON.parse` to store objects and arrays (which are objects btw).

## GraphQL

> Only the basics of client side

## WooCommerce REST API

> I already had experience with building with Wordperss+Woocommerce

> But this was a good refresher on the API

> Unfortunately it was not the right choice here. as Our website uses a 3rd party plugin for products, 
> And they changed the way it works with images so now it fetches images from their Google Cloud not from our server!
> This resulted in lots of CORS errors that I don't really care to fix anymore.
> I'll explore other options.

## Medusa

> A headless-first shopify alternative built with Javascript
> [More info](https://github.com/medusajs/medusa)

- Tried to use it but it had lots of issues!

## TailwindCSS v3.0

> I used v2 in previous projects

- Tailwind has some nice plugins available in [documentation](https://tailwindcss.com/docs/plugins)
- Most of DaisyUI components can be easily rebuilt with Tailwind (for better control)

## Vercel

The default bot action is to comment on each push with the deployment status.

To disable this, you can modify `vercel.json` as follows:

## Other

- This [website](https://realfavicongenerator.net/) is a great tool for managing favicons
- Use inline SVG instead of external for fewer HTTP requests and to disable right click save image as, also to avoid dealing with accessiblity for the image tag.

```json
{
	"github": {
		"silent": true
	}
}
```

# UI Components

## [DaisyUI](https://daisyui.com)

> [Source](https://github.com/saadeghi/daisyui) ⭐+7.3K

- ✅ Built with TailwindCSS.
- ✅ Easy to use and customize.
- ✅ Regular updates

## [SvelteMaterialUI](https://sveltematerialui.com)

> [Source](https://github.com/hperrin/svelte-material-ui) ⭐+2.2K

- ✅ Material design.
- ✅ Regular updates

## [SPaper](https://oli8.github.io/spaper/)

> [Source](https://github.com/Oli8/spaper) ⭐+70

- ✅ Great for prototyping (paper like).

## [Attractions](https://illright.github.io/attractions)

> [Source](https://github.com/illright/attractions) ⭐+500

- ✅ Gorgeous design.
- ✅ Regular updates.

## [Carbon](https://carbon-components-svelte.onrender.com)

> [Source](https://github.com/carbon-design-system/carbon-components-svelte) ⭐+1.3K

- ✅ Most feature complete, has most components I may need.
- ✅ Regular updates.
- ❎ Ugly design for my taste.

## [SvelteMUI](https://svelte-mui.vercel.app)

> [Source](https://github.com/vikignt/svelte-mui) ⭐+260

- ✅ Material design.
- ✅ Regular updates.
- ⚠ Still work in progress.

## [Smelte](https://smeltejs.com)

> [Source](https://smeltejs.com) ⭐+1.2K

- ⚠ Built with Tailwind 2.
- ⚠ A bit outdated.

## [Kahi-UI](https://kahi-ui.nbn.dev)

> [Source](https://kahi-ui.nbn.dev) ⭐+130

- ✅ Typescript + plain CSS.

## Other

- Svelte materialfy (deprecated)
- Svelteit (deprecated)

## Attractions

# Resources

- [Order button animation](https://codepen.io/akkk33/pen/NWvRZwB)
- [Credit card form](https://codepen.io/akkk33/pen/vYJjZqy)

> UI Inspired by [muroexe](https://eu.muroexe.com/)

# Credits

- [Undraw](https://undraw.co/illustrations) For awesome illustrations
- [jovianmoon](https://jovianmoon.io/blog/lazy-loading-images-in-svelte-kit-with-actions) for the lazy loading image function
