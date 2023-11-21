import { DeliveryMethod, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import appUninstallHandler from "./webhooks/app_uninstalled";

const isDev = process.env.NODE_ENV === "development";

// Setup Shopify configuration
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_API_SCOPES,
  hostName: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  hostScheme: "https",
  apiVersion: process.env.SHOPIFY_API_VERSION,
  isEmbeddedApp: true,
  logger: { level: isDev ? 1 : 0 }, //Error = 0,Warning = 1,Info = 2,Debug = 3
});

shopify.webhooks.addHandlers({
  APP_UNINSTALLED: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks/app_uninstalled",
    callback: appUninstallHandler,
  },
  TEMPLATE_WEBHOOK: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: `${process.env.CLOUDFLARE_TUNNEL_URL}/api/webhooks/TEMPLATE_WEBHOOK`,
  },
});

export default shopify;
