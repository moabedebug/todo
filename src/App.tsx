import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'

const App = () =>  {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão', done: false},
    { id: 2, name: 'Comprar um bolo', done: false},
  ])

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}

        {/* {list.map((item, index)=>(
          <div>...</div>
        ))} */}

      </C.Area>
    </C.Container>
  )
}

export default App