import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/37565843?s=460&u=25228add319047862c1b98724ab4a40bd5c18752&v=4" alt="Luiz Guilherme de Bem" />
        <div>
          <strong>Luiz Guilherme de Bem</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi illum
        fuga dolore amet libero facilis, excepturi in iure eius facere aperiam, optio omnis labore eligendi.
        Repellat doloribus saepe tempora!
    </p>

      <footer>
        <p>
          Preço/hora: <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem
