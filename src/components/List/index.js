import React, {useState} from 'react'
import Modal from '../Modal'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core/styles'

export default function List(props) {
    const [todo, setTodo] = useState('')
    const [id, setId] = useState()
    const [showModal, setShowModal] = useState(false)
    
    const edit =(todo, id)=>{
        setTodo(todo)
        setShowModal(true)
        setId(id)
    }

    const useStyles = makeStyles({
    root: {
        margin: '5%',
        border: '10px solid grey',
        borderRadius: '25px'
    },
    text: {
        fontSize: '20px',
        marginLeft: '9%',
        color: 'white'
    },
    buttons: {
        marginLeft: '4.5%',
        marginBottom: '2%'
    },
    button: {
        color: 'white',
        background: 'grey',
        marginLeft: '5%'
    }
});

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
                                <Button
                                    style={{ zIndex: '1'}}
                                    onClick={()=>props.done(el.id)}
                                    className={classes.button} 
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DoneIcon />}
                                >
                                    Done
                                </Button>
                            }
                            <Button
                                style={{ zIndex: '1'}}
                                onClick={()=>props.delete(el.id)}
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                                className={classes.button} 
                            >
                                Delete
                            </Button>
                            <Button
                                style={{ zIndex: '1'}}
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<EditIcon />}
                                className={classes.button}
                                onClick={()=>edit(el.todo, el.id)}
                            >
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
