import React from 'react'
import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList
