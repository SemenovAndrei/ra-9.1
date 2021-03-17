import React from 'react'
import PropTypes from 'prop-types'

function Menu(props) {
  return (
    <nav class="menu">
      <a class="menu__item" href="/">
        Главная
      </a>
      <a class="menu__item" href="/drift">
        Дрифт-такси
      </a>
      <a class="menu__item" href="/timeattack">
        Time Attack
      </a>
      <a class="menu__item" href="/forza">
        Forza Karting
      </a>
    </nav>
  )
}

Menu.propTypes = {}

export default Menu
