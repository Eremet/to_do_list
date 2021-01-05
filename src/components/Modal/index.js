import React,{useState} from 'react'
import { makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const useStyles = makeStyles({
    text: {
       fontSize: '30px',
    },
    xButton: {
        cursore: 'pointer',
        fontSize: '50px',
        transform: 'rotate(45deg)'
    },
    root: {
        height: '38px'
    }
});



export default function Modal(props) {
    const [val, setVal] = useState('')

    const saveEdit =()=>{
        props.save(props.id, val)
        props.setShowModal(false)
    }
    const classes = useStyles();

    return (
        <div style={
            !props.showModal ? 
            {display:'none'} :
            {
            backgroundColor: 'white',
            display:'block',
            position:'absolute',
            width:'50%',
            left:'25%',
            border: '5px solid grey ',
            borderRadius: '25px',
            height:'300px',
            textAlign:'center',
            top:'15%',
        }}>
            <h2 className={classes.text}>EdiT</h2>
            <Button
                                 onClick={()=>
                                    props.setShowModal(false)
                                }
                                variant="contained"
                                color="secondary"
                                
                                startIcon={<CancelPresentationIcon />}
                                className={classes.button} 
                            >
                                Close
                            </Button>
           
            <h4>{props.name}</h4>
            <TextField className={classes.root} id="outlined-basic" label="enter text" variant="outlined" onChange={(event)=>{
                    setVal(event.target.value)
                }} />
            <Button
                                onClick={ saveEdit }
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                className={classes.button} 
                            >
                                Save
                            </Button>
           
            
        </div>
    )
}