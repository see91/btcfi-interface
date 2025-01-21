import './styles/Page404.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import img404 from './images/404.png'

const Page404 = (props: any) => {
  const { t }:any = useTranslation()
  return (
    <div className='page_404'>
      404页面
    </div>
  )
}

export default memo(Page404)