
import { appConfig } from "../config/app.config";

export function applyTheme() {
  const root = document.documentElement;
  const { colors, typography } = appConfig.theme;

  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-primary-hover", colors.primaryHover);
  root.style.setProperty("--color-secondary", colors.secondary);
  root.style.setProperty("--color-accent", colors.accent);
  root.style.setProperty("--color-background", colors.background);
  root.style.setProperty("--color-surface", colors.surface);
  root.style.setProperty("--color-text", colors.text);
  root.style.setProperty("--color-muted", colors.muted);
  root.style.setProperty("--color-border", colors.border);
  root.style.setProperty("--color-success", colors.success);
  root.style.setProperty("--color-danger", colors.danger);

  root.style.setProperty(
    "--font-family",
    typography.fontFamily
  );

  root.style.setProperty(
    "--border-radius",
    appConfig.theme.borderRadius
  );

  document.title = appConfig.site.name;

  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {
    description.setAttribute(
      "content",
      appConfig.site.description
    );
  }
}
