import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DOLDOL Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '기록', link: '/develop-history' },
    ],

    sidebar: [
      {
        text: 'Info',
        items: [
          { text: '개발하면서 기록하기', link: '/develop-history' },
          { text: 'Markdown 샘플페이지', link: '/markdown-examples' },
          { text: 'Runtime API 샘플페이지', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
