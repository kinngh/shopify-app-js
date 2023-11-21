# Shopify App JS

This is my personal production stack for when I'm building apps. Each folder in the root dir is it's own independant package that's deployed to different services and is available as an open source project.

I'm not going to be actively maintaining it because the idea of putting this in here is to serve as an example of how I like to structure my builds. This does not contain indepth notes on engineering and design decisions, that's something that cannot be put to words and varies from project to project.

## Structure

- `app/`: [`Next.js x Prisma ORM Boilerplate`](https://github.com/kinngh/shopify-nextjs-prisma-app) / [`Express x MongoDB Boilerplate`](https://github.com/kinngh/shopify-node-express-mongodb-app) | The actual Shopify app. I prefer the Nextjs boilerplate and swapped out with the Express boilerplate (both of which I've built and been maintaining) when needed.
- `extensions/`: All Shopify extensions live here. There's no need to build deeper into this since everything is generated and controlled by Shopify CLI 3.x. The only thing prebuilt here is my package.json that contains scripts so I don't have to remember commands.
- `webhooks/`: [`Cloudflare Workers Webhook Manager`](https://github.com/kinngh/shopify-cloudflare-workers-webhooks-app) |
- `client-manager/`: `proprietary` | Manage subscriptions (refunds, discounts via Billing API), customers and see overview data of what's happening. This is proprietary software and is not open source yet. Used in combination with [Metabase](https://github.com/metabase/metabase) for data visualization when necessary.
- `tests`: `proprietary` | Testing suite with Jest and Cypress.
- `notes`: `proprietary` | Notes going over features and other content of the project, strictly includes `.md` and `.png` files, along with excalidraw dumps.
- 3 other folders.

## Tech Stack

These are my go to services for whatever I'm building. These mostly do not change unless I'm specifically asked to swap something out, and more services may be added to the list but _it depends_ on what I'm building.

- [Vercel](https://vercel.com) - Next.js host.
- [Heroku](https://heroku.com) - Express.js host.
- [Planetscale](https://planetscale.com) - MySQL database.
- [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) - Data connection pooling.
- [Cloudflare](https://cloudflare.com) - Proxy, Workers, Queues, R2.
- [Resend](https://resend.com) - Email.
- [Axiom](https://axiom.co) - Log drains.
- [Zeitgeist](https://apps.apple.com/app/zeitgeist/id1526052028) - Mobile app to monitor Vercel deployments.
