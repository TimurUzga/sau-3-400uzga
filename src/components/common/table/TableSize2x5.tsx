import React, {useCallback, useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import CalculateIcon from '@mui/icons-material/Calculate';
import Button from '@mui/material/Button';
import styles from './Table.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {CheckType, saveDataAC} from "../../../redux/checksReducer";
import AlertDialog from "../alertDialog/AlertDialog";


export default function TableSize2x5(props: any) {

    console.log('отрисовка компаненты Table')

    const params = useParams()
    const checks = useSelector((state: AppStateType) => state.checks[params.header ? params.header : 'head1'])
    const check = checks.filter((ch: CheckType) => ch.idCheck === params.page)[0]
    const headerOfCheck = check.title
    const numbersOfContacts = check.numbersOfContacts[props.indexOfTable]
    const typeOfBlock = check.typesOfBlocks[props.indexOfTable]
    const controlFunction = check.controlFunctions[props.indexOfTable].bind(check)
    const valuesOfBlock = check.valuesOfBlocks[props.indexOfTable]
    const isHaveSettings = check.isHaveSettings[props.indexOfTable]
    const directionOfCheck = check.directionsOfChecks

    const [openDialogAlert, setOpenDialogAlert] = React.useState(false);
    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {errors}, getValues} = useForm();

    const onClickCalculateHandler = useCallback(() => {
        let inputValue1 = getValues("channel1");
        let inputValue2 = getValues("channel2");
        let inputValue3 = getValues("channel3");
       let inputValue4 = getValues("channel4");


        // switch () {
        //
        // }
        if ((+inputValue1 !== valuesOfBlock["channel1"] ||
            +inputValue2 !== valuesOfBlock["channel2"] ||
            +inputValue3 !== valuesOfBlock["channel3"] ||
            +inputValue4 !== valuesOfBlock["channel4"]) && isHaveSettings) {
            setOpenDialogAlert(true)
        }

        dispatch(saveDataAC(
            [+inputValue1, +inputValue2, +inputValue3, +inputValue4],
            params.head ? params.head : "head1",
            params.page ? params.page : "check1",
            props.indexOfTable))
        debugger

    }, [])


// useEffect((onClickCalculateHandler),[])


    const onSubmit = (data: any) => {
        let inputValue1 = getValues("channel1");
        let inputValue2 = getValues("channel2");
        let inputValue3 = getValues("channel3");
        let inputValue4 = getValues("channel4");


        // switch () {
        //
        // }
        if ((+inputValue1 !== valuesOfBlock["channel1"] ||
            +inputValue2 !== valuesOfBlock["channel2"] ||
            +inputValue3 !== valuesOfBlock["channel3"] ||
            +inputValue4 !== valuesOfBlock["channel4"]) && isHaveSettings) {
            setOpenDialogAlert(true)
        }

        dispatch(saveDataAC(
            [+inputValue1, +inputValue2, +inputValue3, +inputValue4],
            params.head ? params.head : "head1",
            params.page ? params.page : "check1",
            props.indexOfTable))
        debugger


    }


    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <table className={styles.table}>
                <tr>
                    <td></td>
                    <td colSpan={4}>{numbersOfContacts} {directionOfCheck?directionOfCheck[props.indexOfTable]:''}</td>
                </tr>
                <tr>
                    <td>{typeOfBlock} </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="1 канал"
                            defaultValue={valuesOfBlock['channel1']}
                            error={errors.channel1}
                            // error={Boolean(statusError[0])}
                            {...register("channel1", {validate: (value => controlFunction(value, 'channel1', props.indexOfTable))})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="2 канал"
                            defaultValue={valuesOfBlock['channel2']}
                            error={errors.channel2}
                            {...register("channel2", {validate: (value => controlFunction(value, 'channel2', props.indexOfTable))})}


                        />
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="3 канал"
                            defaultValue={valuesOfBlock['channel3']}
                            error={errors.channel3}
                            {...register("channel3", {validate: ((value) => controlFunction(value, 'channel3', props.indexOfTable))})}/>
                    </td>
                    <td>
                        <TextField
                            sx={{marginTop: '10px'}}
                            color='secondary'
                            id="outlined-helperText"
                            label="4 канал"
                            defaultValue={valuesOfBlock['channel4']}
                            error={errors.channel4}
                            {...register("channel4", {validate: (value => controlFunction(value, 'channel4', props.indexOfTable))})}/>
                    </td>
                </tr>
            </table>

            {errors.exampleRequired && <span>This field is required</span>}

            <div className={styles.btn}>

                <Button
                    onClick={onSubmit}
                    type={"submit"}
                    variant="outlined"
                    endIcon={<CalculateIcon/>}
                    color="secondary"
                    // onClick={onClickCalculateHandler}
                >
                    Расчёт
                </Button>
                <AlertDialog openDialogAlert={openDialogAlert}
                             setOpenDialogAlert={setOpenDialogAlert}

                />
            </div>
        </form>


    );
}