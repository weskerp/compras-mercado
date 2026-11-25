
export const appConfig = {
    site: {
      name: "Iago Nogueira Compras",
      shortName: "Iago Compras",
      slogan: "Sua lista de compras, do seu jeito!",
      description:
        "Monte sua lista de compras e envie diretamente ao mercado.",
      logo: "/images/logo.png",
      favicon: "/favicon.ico",
      contactPhone: "5538998861089",
      contactDisplay: "(38) 99886-1089",
      contactEmail: "",
      currency: "BRL",
      locale: "pt-BR",
    },
  
    theme: {
      mode: "light",
  
      colors: {
        primary: "#14532D",
        primaryHover: "#166534",
        secondary: "#16A34A",
        accent: "#F59E0B",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: "#1E293B",
        muted: "#64748B",
        border: "#E2E8F0",
        success: "#16A34A",
        danger: "#DC2626",
      },
  
      typography: {
        fontFamily: "Inter, Arial, sans-serif",
      },
  
      borderRadius: "12px",
    },
  
    catalog: {
      productsPerPage: 24,
      showPrices: true,
      showDescriptions: true,
      allowQuantityDecimal: false,
      defaultSort: "name",
    },
  
    features: {
      registration: true,
      guestShopping: true,
      savedCarts: true,
      savedMarkets: true,
      purchaseHistory: true,
      pwa: true,
      darkMode: false,
      productSearch: true,
      productCategories: true,
    },
  
    advertising: {
      enabled: true,
      provider: "adsense",
      adsenseClientId: "",
      placements: {
        homeBanner: true,
        categoryBanner: true,
        productBetweenCards: true,
        footerBanner: true,
      },
    },
  
    whatsapp: {
      enabled: true,
      defaultMessage:
        "Olá! Gostaria de solicitar os produtos desta lista:",
      askAvailability: true,
    },
  
    footer: {
      showContact: true,
      showSocialNetworks: true,
      showCopyright: true,
      copyrightText: "Todos os direitos reservados.",
      socialNetworks: {
        instagram: "",
        facebook: "",
      },
    },
  } as const;
  