import type { DocsThemeConfig } from 'nextra-theme-docs';

import { DocsHead, DocsPage } from 'components/docs';
import { H1, H2, H3 } from 'components/MdxComponents';

const config: DocsThemeConfig = {
  project: {},

  footer: { component: null },
  feedback: { content: null },
  editLink: { component: () => null },
  navigation: { next: false, prev: false },

  head: DocsHead,
  main: DocsPage,
  components: { h1: H1, h2: H2, h3: H3 },

  gitTimestamp: null,
  useNextSeoProps: () => ({ titleTemplate: '%s – Omer UI' }),

  logo: <h1>Omer UI</h1>,
  primaryHue: 221,
  /** Dark mode is applied according to system preference */
  darkMode: false,
};

export default config;
