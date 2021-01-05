import React,{useState} from 'react'

export default function Modal(props) {
    const [val, setVal] = useState('')

    const saveEdit =()=>{
        props.save(props.id, val)
        props.setShowModal(false)
    }

    return (
        <div style={
            !props.showModal ? 
            {display:'none'} :
            {
            display:'block',
            position:'absolute',
            width:'50%',
            left:'25%',
            backgroundColor:'grey',
            height:'300px',
            textAlign:'center',
            top:'15%',
            boxShadow:'5px 5px 5px #000'
        }}>
            <h2>EDIT</h2>
            <span onClick={()=>
                props.setShowModal(false)
            }>X</span>
            <h4>{props.name}</h4>

            <input 
                type="text"
                value={val}
                onChange={(event)=>{
                    setVal(event.target.value)
                }}
            />
            <button
                onClick={
                    saveEdit
                }
            >Save</button>
            
        </div>
    )
}