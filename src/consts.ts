import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "lospipell",
  description:
    'lospipell berisi tulisan-tulisan tentang berbagai hal mulai dari refleksi mengenai kehidupan hingga tutorial dari rasa ingin tau dan berbagi dengan gaya penyampaian yang santai.',
  href: 'https://lospipell.pages.dev',
  author: 'gper00',
  locale: 'id-ID',
  featuredPostCount: 3,
  postsPerPage: 5,
  // keywords: 'lospipell, blog pribadi, tulisan reflektif, blog teknologi, tutorial pemrograman, pemikiran hidup, catatan pribadi, belajar koding, blog santai, pengembangan diri, blog indonesia, life reflection, belajar programming, sharing pengalaman, menulis bebas, blog mahasiswa, teknologi dan kehidupan, jurnal online, blog minimalis',
}


export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/gper00',
    label: 'GitHub',
  },
  // {
  //   href: 'https://twitter.com/gper00',
  //   label: 'Twitter',
  // },
  {
    href: 'mailto:alfariziuchiha@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
