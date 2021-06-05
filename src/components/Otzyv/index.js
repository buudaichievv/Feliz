import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Sova from '../Sova/index'
import {db} from '../Mains/firebasemain'
import './style.css'
import Share from '../Share';
import { newOtzyv } from './firebase_otzyv';
import  InputBase  from '@material-ui/core/InputBase';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));


export default function Reviews(props) {
    
    let OtzyvText = React.createRef()
    let NameMess = React.createRef()
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");


    const [loader, setLoader] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('felizotzyv').add({
            name: name,
            message: message,
            phone: phone,

        })
            .then(() => {
                alert('Мы приняли ваш сообщении, в течении несколько минут,к вам обращаемся!')
                setLoader(false)
            })
            .catch((error) => {
                setLoader(false)
            })
        setName('')
        setMessage('')
        setPhone('')
    };
 
    let addOtzyv = () =>{
        let Name = NameMess.current.value
        let Text = OtzyvText.current.value
         newOtzyv(Text,Name)
        debugger;
    }
    let Otzyv =(props)=>{
        return(
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>{props.text}
                </p>
                    <p className='blockqute_text blockqute_text-credit'>{props.name}</p>
                </div>
        )
    }
    return (
        <div className='otzyv_header'>
            <div className='blockqutes'>
                {
                props.post.map((el)=>{
                    return(
                        <Otzyv name={el.name} text={el.mess}/>
                    )
                })
                }
            </div>
            <Sova />
            <Share />
            <div>
                <Button className='button' variant="contained" color='secondary' style={{ marginTop: '0%' }} onClick={handleClickOpen}>
                    Оставить отзыв
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Оставьте отзыв
                    </DialogTitle>
                    <form className={classes.root} id='contact-form'  onSubmit={handleSubmit}>
                        <input type='text' className="otzyv__input" placeholder="Ваше имя" label="Вашe имя" ref={NameMess}/><br />
                        <input type='phone' className="otzyv__input" placeholder="Ваш телефон" name='phone' label="Ваш телефон"/><br />
                        <label>Ваша</label><br />
                        <TextareaAutosize aria-label="minimum height" id='text' name='text'  ref={OtzyvText}  rowsMin={3} placeholder="Оставте отзыв" /><br />
                      
                    <button color="primary" className='sendbutton' onClick = {addOtzyv}>
                        Отправить
                        </button> <br /> 
                        <Button autoFocus onClick={handleClose} color="primary" style = {{margin:"0 15%"}}>
                        Отмена
                        </Button><br />
                    </form>
                   
                </Dialog> 
            </div>
        </div>
    )
}
