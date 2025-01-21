import { connect } from 'react-redux'
import Routers, { IRouter } from './routerMap'
import { Routes, Route, Navigate } from 'react-router-dom'

const RoutesList = (props: any) => {
  return (
    <div className="css-root-main">
      <Routes>
        {Routers.map((item: IRouter, index) => (
          <Route
            path={item.path}
            key={index}
            element={
              item.redirect ? (
                <Navigate to={item.redirect} replace />
              ) : (
                item.component && <item.component />
              )
            }
          />
        ))}
      </Routes>
    </div>
  )
}

export default connect((state) => state, { })(RoutesList)