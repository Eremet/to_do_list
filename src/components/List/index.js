import React, {useState} from 'react'
import Modal from '../Modal'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
    root: {
        margin: '5%',
        border: '10px solid grey',
        borderRadius: '25px'
    },
    text: {
        fontSize: '20px',
        marginLeft: '5%',
        color: 'white'
    },
    buttons: {
        marginLeft: '4.5%',
        marginBottom: '2%'
    },
    button: {
        color: 'white',
        background: 'grey'
    }
});

export default function List(props) {
    const [todo, setTodo] = useState('')
    const [id, setId] = useState()
    const [showModal, setShowModal] = useState(false)
    
    const edit =(todo, id)=>{
        setTodo(todo)
        setShowModal(true)
        setId(id)
    }

    const classes = useStyles();

    return (
        <div>
            {props.data ? 
                props.data.map(el=>{
                    return(
                        <div
                        className={classes.root}
                         key={el.id}
                         style={
                             el.status ? 
                             {background:'#8EF13C'} : 
                             {background:'#FF3900'}
                             }
                        >
                            <h3 className={classes.text}>{el.todo}</h3>
                            <div className={classes.buttons}>
                            {
                                el.status ? '' :
                                <Button className={classes.button} variant="outlined" onClick={()=>props.done(el.id)}>
                                Done
                                </Button>
                            }
                            
                            <Button className={classes.button} variant="outlined"  onClick={()=>props.delete(el.id)}>
                            Delete
                            </Button>
                            <Button className={classes.button} variant="outlined"  onClick={()=>edit(el.todo, el.id)}>
                            Edit
                            </Button>
                            </div>    
                        </div>
                    )
                })
                :null
             }
             <Modal
                 name={todo}
                 showModal={showModal}
                 setShowModal={setShowModal}
                 id={id}
                 save = {props.save}
             />
        </div>
    )
}
