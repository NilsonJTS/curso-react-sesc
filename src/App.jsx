import React, { useState } from 'react'
import './App.css'
import dataCategories from '../src/data/data-categories.json'
import dataMembers from '../src/data/data-members.json'
import dataTasks from '../src/data/data-tasks.json'

function App() {


  const [categories, setCategories] = useState(dataCategories);
  const [members, setMembers]= useState(dataMembers);
  const [tasks, setTasks]= useState(dataTasks);
  const [currentTask, setCurrentTask]= useState("");


  const handleSubmit = (event) => {
    event.preventDeFault();

    if(!currentTask){
      alert('Todos os campos são obrigatórios!');
      return;
      }else{
        alert(`Você digitou: ${currentTask}`);
        return;
      }
  }

  return (
    <div>Meu App
      <section className='section-main'>
        <div className='container-card'>
          <h1>Cadastrar Tarefa</h1>
          <hr />
          <form onSubmit={handleSubmit}>

            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              name='title'
              id='title'
              placeholder='Digite o Título'
              value={currentTask}
              onChange={(event)=>setCurrentTask(event.target.value)}
            />

            <label htmlFor="category">Categoria</label>
            <select name="category" id='category'>
              <option value="">"Selecione uma categoria"</option>
              {categories && categories.map((category => {
                return(
                  <React.Fragment key={category.id}>
                    <option value={category.title}>{category.title}</option>
                  </React.Fragment>
                )
              }))}
            </select>

            <label htmlFor="member">Membros</label>
            <select name="member" id='member'>
              <option value="">"Selecione um membro da equipe"</option>
              {members && members.map((member) => {
                return(
                  <React.Fragment key={member.id}>
                    <option value={member.profile}>{member.name}</option>
                  </React.Fragment>
                )
              })}
            </select>

            <button className='btn-register' type='submit'>Cadastrar</button>

          </form>
        </div>

      </section>
      
      <section className='section-main'>
        <div className='container-card'>
          <h1>Lista de tarefas</h1>
          <hr />
        

          {tasks && tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className='task'>
                  <img src={`https://github.com/${task.member}.png`} className='task-img-member'/>
                  <div className='task-content'>
                    <h2 className='task-title'>{task.title}</h2>
                    <span className='task-member'>{task.member}</span>
                    <span className='task-category'>{task.category}</span>
                    <span className={`task-${task.status}`}>{task.status}</span>
                  </div>
                  <div className='task-actions'>
                    <button className='btn-start'>Iniciar</button>
                    <button className='btn-close'>Finalizar</button>
                    <button className='btn-delete'>x</button>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            )
          })}

          </div>


        


      </section>

      <footer className='footer-main'>
        <p>
          <strong>
            Introdução ao Desenvolvimento
            Front-End com React
          </strong>
        </p>
        <em>
          Professor: Anderson Carvalho
        </em>
      </footer>

    
  </div >
 )
}

export default App
