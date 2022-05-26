import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check43 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Переключатели ОТКЛОНЕНИЕ на МИМ-70 установите в положение "0". Убедитесь, что на ПНП левого и правого
                летчиков убраны флажки К и Г. Включите канал тангажа нажатием кнопки-лампочки ТАНГАЖ &#8544; на пульте
                ПС-172-02. Включите режим стабилизации высоты до захвата глиссады нажатием кнопки-лампочки ВЕРТ на пульте
                ПР-173-02. На пульте ПК-31-01 переключатель РЕЖИМ установите в положение "4", переключатель ТЕСТ -
                в положение М, переключатель ТЕСТ-СИГНАЛ нажмите в положение "+". Убедитесь, что на пульте ПР-173-02 горит
                кнопка-лампочка ВЫС, на приборах ПКП не видны флажки Т.</p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 установите от КПА-034
                    H<span>рв</span>=140-180м, а затем H<span>рв</span>=70-90м.</p>
                <p> Наклоните стол КПА-5 с установленным на нем кронштейнами с датчиками ДВУ на (26±0,1)° в произвольную
                    сторону, что соответствует заданию вертикального ускорения (1±0,02)м/с2 вниз. Измерьте с помощью
                    пульта ППН-149 значение напряжения постоянного тока между
                    контактами 30, 11 контрольного соединителя Ш35 блока ВПК-52-01 всех каналов САУ.</p>
                <p> Значение напряжения должно быть в пределах (5±0,5)В.</p>
            </Typography>

                {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
            <p> Верните стол КПА-5 в нулевое положение. Отключите САУ кнопкой ОТКЛ АП на любом штурвале.</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check43);
