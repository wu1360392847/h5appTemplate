/**
 * 这里用于配置vue各种单页面级组件路由地址
 */
const Login = () => import('@/views/Login.vue')
const Home = () => import('@/views/Home.vue')
const Wallet = () => import('@/views/Wallet.vue')
const Agent = () => import('@/views/Agent.vue')
const Share = () => import('@/views/Share.vue')
const Header = () => import('@/components/Header.vue')
const Footer = () => import('@/components/Footer.vue')

export default [
  {
    // 请求路径,这里配置为重定向
    path: '/',
    redirect: '/home',
    meta: {
      // 用于保存需要传递的验证信息等
      isNav: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      AppLogin: Login,
      AppHeader: Header
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
      icon: '&#xe636;'
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
      icon: '&#xe66d;'
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
      isAuthRequired: true,
      icon: '&#xe651;'
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
      isAuthRequired: true,
      icon: '&#xe637;'
    }
  }
]

