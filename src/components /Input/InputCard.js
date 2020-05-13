import React, { useState, useContext } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";
import storeApi from '../../utilis/storeAPI';


const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        background: 'green',
        color: '#fff',
        "&:hover": {
            background: fade("#5AAC44", 0.61),
        }

    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));



export default function InputCard({ setOpen, listId }) {
    const classes = useStyle();
    const { addMoreCard } = useContext(storeApi);
    const [cardTitle, setCardTitle] = useState('')
    const handleOnChange = (e) => {
        setCardTitle(e.target.value);
    }

    const handleBtnConfirm = () => {
        addMoreCard(cardTitle, listId);
        setCardTitle('');
        setOpen(false);
    }




    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        multiline
                        fullWidth
                        inputProps={{
                            classes: classes.input,
                        }}
                        value={cardTitle}
                        placeholder="Enter a title of this card..."
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>Add Card</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}
