/**
 * Router list
 * @param {string} path
 * @param {string} name
 */
import { ComponentType } from 'react'
import { ConnectedComponent } from 'react-redux'
import { PageHome } from '../pages/PageHome'
// import { Page404 } from '../pages/Page404'

export interface IRouter {
  path: string
  name: string
  redirect?: string
  component?: ConnectedComponent<ComponentType<any>, any>
  auth?: boolean
}

const routers: Array<IRouter> = [
  {
    path: '*',
    name: 'pageHome',
    component: PageHome,
  }
]

export default routers