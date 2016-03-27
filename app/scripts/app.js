'use strict';

/**
 * @ngdoc overview
 * @name Solidarize
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

angular.module('Solidarize', ['ionic', 'ngCordova', 'ngResource'])

.run(function($ionicPlatform, $cordovaGoogleAnalytics) {
        try {
            Backendless.initApp("BE5B9D3B-C19E-993F-FF36-D6B6A013B900", "B0B7AC8D-FB1E-34E5-FF05-0F2EBA62D500", "v1");
        } catch (e) {alert(e);}
        $ionicPlatform.ready(function() {
            if (window.cordova) {
                try {
                    $cordovaGoogleAnalytics.startTrackerWithId('UA-75621040-1');
                } catch (e) {
                    console.log(e);
                }
            }
        });
    })
    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        // register $http interceptors, if any. e.g.
        // $httpProvider.interceptors.push('interceptor-name');
        // Application routing
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/views/login.html',
                controller: 'loginController'
            })
            .state('registro', {
                url: '/registro',
                templateUrl: 'templates/views/registro.html',
                controller: 'registroController'
            })
            .state('app.home', {
                url: '/home',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/home.html',
                        controller: 'HomeController'
                    }
                }
            })
            .state('app.anuncio', {
                url: '/anuncio',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/anuncio.html',
                        controller: 'anuncioController'
                    }
                }
            })
            .state('app.busca', {
                url: '/busca',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/busca.html',
                        controller: 'buscaController'
                    }
                }
            })
            .state('app.categoria', {
                url: '/categoria',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/categoria.html',
                        controller: 'categoriaController'
                    }
                }
            })
            .state('app.chat', {
                url: '/chat',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/chat.html',
                        controller: 'chatController'
                    }
                }
            })
            .state('app.notificacoes', {
                url: '/notificacoes',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/notificacoes.html',
                        controller: 'notificacoesController'
                    }
                }
            })
            .state('app.contato', {
                url: '/contato',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/contato.html',
                        controller: 'contatoController'
                    }
                }
            })
            .state('app.faq', {
                url: '/faq',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/faq.html',
                        controller: 'faqController'
                    }
                }
            })
            .state('app.favoritos', {
                url: '/favoritos',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/favoritos.html',
                        controller: 'favoritosController'
                    }
                }
            })
            .state('app.filtros', {
                url: '/filtros',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/filtros.html',
                        controller: 'filtrosController'
                    }
                }
            })
            .state('app.perfil', {
                url: '/perfil',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/perfil.html',
                        controller: 'perfilController'
                    }
                }
            })
            .state('app.regiao', {
                url: '/regiao',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/regiao.html',
                        controller: 'regiaoController'
                    }
                }
            })
            .state('app.config', {
                url: '/config',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/config.html',
                        controller: 'configController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/login');
    });
