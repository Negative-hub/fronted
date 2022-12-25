import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";

const NotFound = () => {
  return (
      <>
        <Breadcrumbs routes={[{isLink: true, route: '/', name: 'Главная'}, { name: 'Страница не найдена'}]} />
        <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
      </>
  )
}

export default NotFound