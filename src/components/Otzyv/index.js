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


export default function Reviews() {
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
                alert(error.message)
                setLoader(false)
            })
        setName('')
        setMessage('')
        setPhone('')
    };
    return (

        <div className='otzyv_header'>

            <div className='blockqutes'>
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    {/* <EmojiEmotionsIcon style={{ fontSize: '50px', marginLeft:'90%', marginTop: '1%' }} /> */}
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>

                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    {/* <EmojiEmotionsIcon style={{ fontSize: '50px', marginLeft:'90%', marginTop: '1%' }} /> */}
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>
            </div>
            <Sova />
            <Share />
            <div>
                <Button className='button' variant="contained" color='secondary' style={{ marginTop: '10%' }} onClick={handleClickOpen}>
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
                        <TextField type='text' id="name" name='name' label="Ваша имя" value={name} onChange={(e) => setName(e.target.value)}  /><br />
                        <TextField type='phone' id="phone" name='phone' label="Ваш телефон"  value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                        <label>Ваша</label><br />
                        <TextareaAutosize aria-label="minimum height" id='text' name='text' value={message}  onChange={(e) => setMessage(e.target.value)}  rowsMin={3} placeholder="Оставте отзыв" /><br />
                      
                    <button color="primary" className='sendbutton'>
                        Отправить
                        </button> <br /> 
                        <Button autoFocus onClick={handleClose} color="primary">
                        Отмена
                        </Button><br />
                    </form>
                   
                </Dialog> 
            </div>
        </div>
    )
}
