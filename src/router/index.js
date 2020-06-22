// Basic
import Vue from 'vue';
import Router from 'vue-router';

// Views :: Onboarding
import Welcome from '@/views/ongoing/Welcome.vue';
import howIsTheJourneyOrganized from '@/views/ongoing/HowIsTheJourneyOrganized.vue';
import chooseYourNavigationType from '@/views/ongoing/ChooseYourNavigationType.vue';

// Views :: Pages
import GerindoDePertoAEquipe from '@/views/pages/GerindoDePertoAEquipe.vue';
import FotoNovela from '@/views/pages/FotoNovela.vue';
import Proximidade from '@/views/pages/Proximidade.vue';
import SituacoesDelicadas from '@/views/pages/SituacoesDelicadas.vue';
import CriarEspaco from '@/views/pages/CriarEspaco.vue';
import PrincipiosDaColaboracao from '@/views/pages/PrincipiosDaColaboracao.vue';
import OEssencialParaDelegar from '@/views/pages/OEssencialParaDelegar.vue';
import DispostoACorrerORisco from '@/views/pages/DispostoACorrerORisco.vue';
import UmMapaDaConﬁanca from '@/views/pages/UmMapaDaConﬁanca.vue';
import PrepareSeParaDelegar from '@/views/pages/PrepareSeParaDelegar.vue';
import InspireSeAqui3 from '@/views/pages/InspireSeAqui3.vue';
import QuemJaPassouPorIsso from '@/views/pages/QuemJaPassouPorIsso.vue';
import MestreAprendiz from '@/views/pages/MestreAprendiz.vue';
import OPoderDoHabito from '@/views/pages/OPoderDoHabito.vue';
import UmaExperienciaTransformadora from '@/views/pages/UmaExperienciaTransformadora.vue';
import VoceConheceOOutro from '@/views/pages/VoceConheceOOutro.vue';
import InspireSeAqui4 from '@/views/pages/InspireSeAqui4.vue';
import AssuntosDificeisDeTratar from '@/views/pages/AssuntosDificeisDeTratar.vue';
import ComunicacaoComAEquipe from '@/views/pages/ComunicacaoComAEquipe.vue';
import DaAtracaoADemissao from '@/views/pages/DaAtracaoADemissao.vue';
import OsCaminhosDaContratacao from '@/views/pages/OsCaminhosDaContratacao.vue';
import PerguntasNaHoraDeContratar from '@/views/pages/PerguntasNaHoraDeContratar.vue';
import CheckList from '@/views/pages/CheckList.vue';
import OMomentoDeDemitir from '@/views/pages/OMomentoDeDemitir.vue';
import ParaReﬂetir from '@/views/pages/ParaReﬂetir.vue';
import AParceriaComORH from '@/views/pages/AParceriaComORH.vue';
import BaixoDesempenhoProfissional from '@/views/pages/BaixoDesempenhoProfissional.vue';
import ReestruturacaoDaEmpresa from '@/views/pages/ReestruturacaoDaEmpresa.vue';
import FaltaDeAderenciaACultura from '@/views/pages/FaltaDeAderenciaACultura.vue';
import RelacionamentoRuimComAEquipe from '@/views/pages/RelacionamentoRuimComAEquipe.vue';
import FaltaDeEtica from '@/views/pages/FaltaDeEtica.vue';
import InspireSeAqui5 from '@/views/pages/InspireSeAqui5.vue';

// View :: Login
import Login from '@/views/login/Login.vue';
import Profile from '@/views/login/Profile.vue';
import ForgotPassword from '@/views/login/ForgotPassword.vue';
import SSO from '@/views/login/Sso.vue';

// Use Router
Vue.use(Router);

// Init Onboarding
const productOnboardingKey = `product-${process.env.VUE_APP_PRODUCT_ID}-onboarding`;
localStorage.setItem(productOnboardingKey, 'N');  ///////// DESABLE ONBOARDING  /////////
if (localStorage.getItem(productOnboardingKey) === null) {
  localStorage.setItem(productOnboardingKey, 'Y');
}

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: () => {
        if (process.env.VUE_APP_SCORM_MODE !== 'ON')  return '/login';
        else  return '/estar-preparado-faz-diferenca';
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/sso/:token',
      name: 'sso',
      component: SSO,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { transitionName: 'slide', transitionOrder: 1 },
    },
    {
      path: '/how-is-the-journey-organized',
      name: 'howIsTheJourneyOrganized',
      component: howIsTheJourneyOrganized,
      meta: { transitionName: 'slide', transitionOrder: 2 },
    },
    {
      path: '/choose-your-navigation-type',
      name: 'chooseYourNavigationType',
      component: chooseYourNavigationType,
      meta: { transitionName: 'slide', transitionOrder: 3 },
    },
    {
      path: '/gerindo-de-perto-a-equipe',
      name: 'GerindoDePertoAEquipe',
      component: GerindoDePertoAEquipe,
      meta: { transitionName: 'slide', transitionOrder: 34, pageId: 43 },
    },
    {
      path: '/foto-novela',
      name: 'FotoNovela',
      component: FotoNovela,
      meta: { transitionName: 'slide', transitionOrder: 35, pageId: 44 },
    },
    {
      path: '/proximidade',
      name: 'Proximidade',
      component: Proximidade,
      meta: { transitionName: 'slide', transitionOrder: 36, pageId: 45 },
    },
    {
      path: '/situacoes-delicadas',
      name: 'SituacoesDelicadas',
      component: SituacoesDelicadas,
      meta: { transitionName: 'slide', transitionOrder: 37, pageId: 46 },
    },
    {
      path: '/criar-espaco',
      name: 'CriarEspaco',
      component: CriarEspaco,
      meta: { transitionName: 'slide', transitionOrder: 38, pageId: 47 },
    },
    {
      path: '/principios-da-colaboracao',
      name: 'PrincipiosDaColaboracao',
      component: PrincipiosDaColaboracao,
      meta: { transitionName: 'slide', transitionOrder: 39, pageId: 48 },
    },
    {
      path: '/o-essencial-para-delegar',
      name: 'OEssencialParaDelegar',
      component: OEssencialParaDelegar,
      meta: { transitionName: 'slide', transitionOrder: 40, pageId: 49 },
    },
    {
      path: '/disposto-a-correr-o-risco',
      name: 'DispostoACorrerORisco',
      component: DispostoACorrerORisco,
      meta: { transitionName: 'slide', transitionOrder: 41, pageId: 50 },
    },
    {
      path: '/um-mapa-da-conﬁanca',
      name: 'UmMapaDaConﬁanca',
      component: UmMapaDaConﬁanca,
      meta: { transitionName: 'slide', transitionOrder: 42, pageId: 51 },
    },
    {
      path: '/prepare-se-para-delegar',
      name: 'PrepareSeParaDelegar',
      component: PrepareSeParaDelegar,
      meta: { transitionName: 'slide', transitionOrder: 43, pageId: 52 },
    },
    {
      path: '/inspire-se-aqui-3',
      name: 'InspireSeAqui3',
      component: InspireSeAqui3,
      meta: { transitionName: 'slide', transitionOrder: 44, pageId: 53 },
    },
    {
      path: '/quem-ja-passou-por-isso',
      name: 'QuemJaPassouPorIsso',
      component: QuemJaPassouPorIsso,
      meta: { transitionName: 'slide', transitionOrder: 45, pageId: 54 },
    },
    {
      path: '/mestre-e-aprendiz',
      name: 'mestreAprendiz',
      component: MestreAprendiz,
      meta: { transitionName: 'fade', transitionOrder: 46, pageId: 24 },
    },
    {
      path: '/o-poder-do-habito',
      name: 'oPoderDoHabito',
      component: OPoderDoHabito,
      meta: { transitionName: 'fade', transitionOrder: 47, pageId: 25 },
    },
    {
      path: '/uma-experiencia-transformadora',
      name: 'umaExperienciaTransformadora',
      component: UmaExperienciaTransformadora,
      meta: { transitionName: 'fade', transitionOrder: 48, pageId: 26 },
    },
    {
      path: '/voce-conhece-o-outro',
      name: 'voceConheceOOutro',
      component: VoceConheceOOutro,
      meta: { transitionName: 'fade', transitionOrder: 49, pageId: 27 },
    },
    {
      path: '/inspire-se-aqui-4',
      name: 'inspireSeAqui4',
      component: InspireSeAqui4,
      meta: { transitionName: 'fade', transitionOrder: 50, pageId: 28 },
    },
    {
      path: '/assuntos-dificeis-de-tratar',
      name: 'assuntosDificeisDeTratar',
      component: AssuntosDificeisDeTratar,
      meta: { transitionName: 'fade', transitionOrder: 51, pageId: 29 },
    },
    {
      path: '/comunicacao-com-a-equipe',
      name: 'ComunicacaoComAEquipe',
      component: ComunicacaoComAEquipe,
      meta: { transitionName: 'fade', transitionOrder: 52, pageId: 55 },
    },
    {
      path: '/da-atracao-a-demissao',
      name: 'DaAtracaoADemissao',
      component: DaAtracaoADemissao,
      meta: { transitionName: 'fade', transitionOrder: 53, pageId: 56 },
    },
    {
      path: '/os-caminhos-da-contratacao',
      name: 'OsCaminhosDaContratacao',
      component: OsCaminhosDaContratacao,
      meta: { transitionName: 'fade', transitionOrder: 54, pageId: 57 },
    },
    {
      path: '/perguntas-na-hora-de-contratar',
      name: 'PerguntasNaHoraDeContratar',
      component: PerguntasNaHoraDeContratar,
      meta: { transitionName: 'fade', transitionOrder: 55, pageId: 58 },
    },
    {
      path: '/check-list',
      name: 'CheckList',
      component: CheckList,
      meta: { transitionName: 'fade', transitionOrder: 56, pageId: 59 },
    },
    {
      path: '/o-momento-de-demitir',
      name: 'OMomentoDeDemitir',
      component: OMomentoDeDemitir,
      meta: { transitionName: 'fade', transitionOrder: 57, pageId: 60 },
    },
    {
      path: '/para-reﬂetir',
      name: 'ParaReﬂetir',
      component: ParaReﬂetir,
      meta: { transitionName: 'fade', transitionOrder: 58, pageId: 61 },
    },
    {
      path: '/a-parceria-com-o-rh',
      name: 'AParceriaComORH',
      component: AParceriaComORH,
      meta: { transitionName: 'fade', transitionOrder: 59, pageId: 62 },
    },
    {
      path: '/baixo-desempenho-profissional',
      name: 'BaixoDesempenhoProfissional',
      component: BaixoDesempenhoProfissional,
      meta: { transitionName: 'fade', transitionOrder: 60, pageId: 63 },
    },
    {
      path: '/reestruturacao-da-empresa',
      name: 'ReestruturacaoDaEmpresa',
      component: ReestruturacaoDaEmpresa,
      meta: { transitionName: 'fade', transitionOrder: 61, pageId: 64 },
    },
    {
      path: '/falta-de-aderencia-a-cultura',
      name: 'FaltaDeAderenciaACultura',
      component: FaltaDeAderenciaACultura,
      meta: { transitionName: 'fade', transitionOrder: 62, pageId: 65 },
    },
    {
      path: '/relacionamento-ruim-com-a-equipe',
      name: 'RelacionamentoRuimComAEquipe',
      component: RelacionamentoRuimComAEquipe,
      meta: { transitionName: 'fade', transitionOrder: 63, pageId: 66 },
    },
    {
      path: '/falta-de-etica',
      name: 'FaltaDeEtica',
      component: FaltaDeEtica,
      meta: { transitionName: 'fade', transitionOrder: 64, pageId: 67 },
    },
    {
      path: '/inspire-se-aqui-5',
      name: 'InspireSeAqui5',
      component: InspireSeAqui5,
      meta: { transitionName: 'fade', transitionOrder: 65, pageId: 68 },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Check if it is public
  const publicPages = ['login', 'forgotPassword', 'sso'];
  const authRequired = !publicPages.includes(to.name);

  // check token
  const productId = process.env.VUE_APP_PRODUCT_ID;
  const productTokenKey = `product-${productId}-token`;
  const loggedIn = localStorage.getItem(productTokenKey);

  // Check authentication
  if (authRequired && !loggedIn && process.env.VUE_APP_SCORM_MODE !== 'ON') {
    return next('/');
  }

  // Check tutorial
  const onBoardingPages = ['welcome', 'howIsTheJourneyOrganized', 'chooseYourNavigationType'];
  if (localStorage.getItem(productOnboardingKey) === 'N' && onBoardingPages.includes(to.name)) {
    if (process.env.VUE_APP_SCORM_MODE !== 'ON')  next({ path: '/comece-por-aqui' })
    else  next({ path: '/estar-preparado-faz-diferenca' })
  }

  next();
})

export default router;