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

## Typescript (&Javascript)

> What a discovery!

- localStorage is always text based, so it's better to use `JSON.stringify` and `JSON.parse` to store objects and arrays (which are objects btw).

## GraphQL

> Only the basics of client side

## WooCommerce REST API

> I already had experience with building with Wordperss+Woocommerce

> But this was a good refresher on the API

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

# Resources

- [Order button animation](https://codepen.io/akkk33/pen/NWvRZwB)
- [Credit card form](https://codepen.io/akkk33/pen/vYJjZqy)

> UI Inspired by [muroexe](https://eu.muroexe.com/)

# Credits

- [Undraw](https://undraw.co/illustrations) For awesome illustrations
- [jovianmoon](https://jovianmoon.io/blog/lazy-loading-images-in-svelte-kit-with-actions) for the lazy loading image function
