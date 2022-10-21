import {MicrofrontendProperties} from '@orchy-mfe/models'
import 'vite-plugin-qiankun/dist/helper'

declare module 'vite-plugin-qiankun/dist/helper' {
  // eslint-disable-next-line no-unused-vars
  interface QiankunProps extends MicrofrontendProperties<any> {
  }
}