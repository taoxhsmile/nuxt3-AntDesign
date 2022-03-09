import { defineNuxtConfig } from 'nuxt3';

import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [
            Components({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'i'
                    }),
                    AntDesignVueResolver({
                        resolveIcons: true
                    })
                ],
            }),
        ]
    },
    build: {
        transpile: [
            'moment', 'compute-scroll-into-view', 'ant-design-vue',
        ],
    },
});
