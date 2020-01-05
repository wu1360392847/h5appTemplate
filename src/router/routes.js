const Login = () => import('@/views/Login.vue')
const Home = () => import('@/views/Home.vue')
const Wallet = () => import('@/views/Wallet.vue')
const Agent = () => import('@/views/Agent.vue')
const Share = () => import('@/views/Share.vue')
const Header = () => import('@/components/Header.vue')
const Footer = () => import('@/components/Footer.vue')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isNav: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      isLogin: Login
    },
    meta: {
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      mainWindow: Home,
      AppHeader: Header,
      AppFooter: Footer
    },
    meta: {
      isNav: true,
      title: '首页',
      isAuthRequired: false,
      icon: '&#xe6f2;'
    }
  },
  {
    path: '/wallet',
    name: 'wallet',
    components: {
      mainWindow: Wallet,
      AppHeader: Header,
      AppFooter: Footer
    },
    meta: {
      isNav: true,
      title: '钱包',
      isAuthRequired: false,
      icon: '&#xe6f4;'
    }
  },
  {
    path: '/agent',
    name: 'agent',
    components: {
      mainWindow: Agent,
      AppHeader: Header,
      AppFooter: Footer
    },
    meta: {
      isNav: true,
      title: '代理',
      isAuthRequired: false,
      icon: '&#xe6f3;'
    }
  },
  {
    path: '/share',
    name: 'share',
    components: {
      mainWindow: Share,
      AppHeader: Header,
      AppFooter: Footer
    },
    meta: {
      isNav: true,
      title: '分享',
      isAuthRequired: false,
      icon: '&#xe783;'
    }
  }
]
