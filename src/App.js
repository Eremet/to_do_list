import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import List from './components/List'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
// import Background from "./images/wood.jpg"

export default function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [value, setVal] = useState('')
 

  const updateTodo = allTodos =>{
    setData(allTodos)
  }
  const updateLocalstaorage = todoList =>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  }
  const addTodo=(event)=>{
    event.preventDefault()

    let todo = {
      id: data.length ? data[data.length-1].id + 1 : 1,
      todo:value,
      status:false
    }

    let arr = [...data, todo]
    updateTodo(arr)
    updateLocalstaorage(arr)
    setVal('')
  }
  
  const doneTodo =(id)=>{
    let todos = data
    let todo = data.findIndex(item=>item.id === id)
    todos[todo].status=true
    updateTodo(todos)
    updateLocalstaorage(todos)
  }
  const deleteTodo =(id)=>{
    let todos = data.filter(todos=>todos.id !== id)
    updateTodo(todos)
    updateLocalstaorage(todos)
  }

  const save = (id, val)=>{
    let todos = data
    let todo = data.findIndex(item=>item.id === id)
    todos[todo].todo=val
    updateTodo(todos)
    updateLocalstaorage(todos)
  }

 
const useStyles = makeStyles({
  root: {
   height: '40px',
   display: 'flex',
  //  paddingBottom: '10%'
  },
  bg: {
    backgroundColor: '#5ED0BD',
    paddingBottom: '2%',
    backgroundImage: `url(${"./images/wood.jpg"})`,
    marginTop: '-3.2%'
  },
  div: {
    marginLeft: '20%',
  },
  button: {
    marginLeft: '5%',
    height: '40px'
  },
  text: {
    color: 'white',
    fontSize: '50px',
    marginLeft: '55%',
    marginTop: '-6%'
  },
  never: {
    fontSize: '120px',
    marginLeft: '15%',
    color: 'white',
  }
});
const classes = useStyles();
  return(  
    <div className={classes.bg}>
      <Header/>
      <form onSubmit={addTodo}
       className={classes.div}
       style={{
          display: 'flex',
      }}
      >
      <TextField className={classes.root} id="outlined-basic" label="enter text" variant="outlined" onChange={(event)=>{
            setVal(event.target.value)
          }}/>
            <Button
                
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddIcon />}
                className={classes.button} 
                >
                ADD
              </Button>
       
      </form>
      <h4 className={classes.text}>Keep calm<br/>and carry on</h4>
      <List
        data={data}
        done={doneTodo}
        delete = {deleteTodo}
        save = {save}
      />
      <h1 className={classes.never}>Never say never</h1>
    </div>
  )
}
