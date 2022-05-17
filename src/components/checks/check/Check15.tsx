import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check15 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ УСП установите в положение "4". </p>
                <p> На пульте ПР-173-02 установите переключатель оежимов в положение КУРС &#8544;. </p>
                <p> Убедитесь, что шкалы задатчиков углов текущего курса на имитаторах ИМБ-5 установлены в "0".</p>
                <p> Включите канал САУ, для чего на пульте ПС-172-02 нажмите кнопку-лампочку КРЕН &#8544;; включите
                    режим стабилизации заданного курса, для чего на пульте ПР-173-02 нажмите кнопку-лампочку ЗК, она
                    должна гореть.</p>
                <p> Ручкой КУРС на пульте ПУ-165-01 совместите индекс ЗК на ПНП левого летчика с индексом отсчета
                    текущего курса</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактами 24 и 11
                    контрольного соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, оно должно быть не более
                    ±0,1В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Поворачивая ручку КУРС на пульте ПУ-165-01, отклоните индексы ЗК на обоих ПНП на угол 1-3°
                    (отсчитывайте по шкале текущего курса). Баранки штурвалов должны повернуться по (против) часовой
                    стрелке.</p>
                <p> Поворачивая ручку КУРС, отклоните индексы ЗК на обоих ПНП на угол (10±1)° по шкале текущего курса
                    вправо.</p>
                <p> Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактами 24 и 11
                    контрольного соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, оно должно быть минус
                    (3,2±0,3)В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p>Поворачивая ручку КУРС на ПУ-165-01 по часовой стрелке, установите индексы ЗК на
                    ПНП<span>лев</span>,
                    ПНП<span>прав</span> на отметку 90°.</p>
                <p>Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактами 25 и 11
                    контрольного соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, оно должно быть минус
                    5,7-5,9В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p>Поворачивая ручку КУРС на ПУ-165-01 против часовой стрелки, установите индексы ЗК на
                    ПНП<span>лев</span>, ПНП<span>прав</span> на отметку 270°.</p>
                <p>Измерьте с помощью пульта ППН-149 значение напряжения постоянного тока между контактами 25 и 11
                    контрольного соединителя Ш35 блока ВБК-51-01 во всех каналах САУ, оно должно быть минус 5,7-5,9В.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p>Отключите канал крена САУ кнопкой ОТКЛ АП на штурвале.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check15);
