import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduledItems, setScheduledItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function createClass(e: FormEvent) {
    e.preventDefault();
    
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduledItems
    }).then(res => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(err => {
      alert('Erro ao realizar o cadastro.');
    });

  }

  function addNewScheduleItem() {
    setScheduledItems([
      ...scheduledItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduledItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduledItems.map((item, index) => {
      if (index === position) {
        return {...item, [field]: value };
      }
      return item;
    });
    setScheduledItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher o formulário de inscrição." />

      <main>
        <form onSubmit={createClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" value={name} onChange={e => { setName(e.target.value) }} />
            <Input name="avatar" label="Avatar" value={avatar} onChange={e => { setAvatar(e.target.value) }} />
            <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={e => { setWhatsapp(e.target.value) }} />
            <Textarea name="bio" label="Biografia" value={bio} onChange={e => { setBio(e.target.value) }} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select name="subject" label="Matéria" value={subject} onChange={e => { setSubject(e.target.value) }} options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Física', label: 'Física' }
            ]} />
            <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={e => { setCost(e.target.value) }} />
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
            </button>
            </legend>

            {scheduledItems.map((item, index) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <Select name="week_day" label="Dia da semana" value={item.week_day} onChange={e => setScheduledItemValue(index, 'week_day', e.target.value)} options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' }
                  ]} />

                  <Input name="from" label="Das" type="time" value={item.from} onChange={e => setScheduledItemValue(index, 'from', e.target.value)} />
                  <Input name="to" label="Até" type="time" value={item.to} onChange={e => setScheduledItemValue(index, 'to', e.target.value)} />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"></img>
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">
              Salvar cadastro
          </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm
