import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check18 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПК-31-01 переключатель ИСКЛЮЧ ПОСАДКА установите в положение &#xC9;, ИСКЛЮЧ УСП - в
                    положение "4".</p>
                <p> На пульте ПР-173-02 переключатель режимов установите в положение ЗАХОД.</p>
                <p> Включите имитаторы МИМ-70. Установите на МИМ-70-&#8544;(&#8545;) соответствующую режиму частоту.
                    Переключатель ОТКЛОНЕНИЕ на МИМ-70 установите в положение "0". Убедитесь, что на пультах ПУР системы
                    КУРС МП-70 горят лампочки К1, К2, Г1, Г2.</p>
                <p> Нажмите на пульте ПС-172-02 кнопку-лампочку КРЕН на пульте ПР-173-02 кнопку-лампочку ГОРИЗ.</p>
                <p> На имитаторах МИМ-70 переключатели ОТКЛОНЕНИЕ установите в положение, соответствующее отклонению
                    "вправо/вверх" ("влево/вниз") и 2Т.</p>
                <p> Измерьте с помощью универсального вольметра и пульта ППН-149 значение напряжения постоянного тока
                    U<span>5-6</span>&#8544;(&#8546;) между контактам 5 и 6 контрольного соединителя Ш35 блока ВБК-51-01
                    &#8544; и &#8546; каналов</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Измерьте с помощью вольметра ИП&#8544; пульта ППН-149 значение напряжения постоянного тока
                    U<span>24</span>&#8544;,&#8545;,&#8546;,&#8547; между контактам 24 и 11 контрольного соединителя Ш35
                    блока ВБК-51-02 во всех каналах САУ; </p>
                <p> Проверьте, что коэфициенты</p>
                <p>K<span>Eк</span>&#8544;=U<span>24</span>&#8544;/U<span>5-6</span>&#8544;,
                    K<span>Eк</span>&#8545;=U<span>24</span>&#8545;/U<span>5-6</span>&#8545;,
                    K<span>Eк</span>&#8546;=U<span>24</span>&#8546;/U<span>5-6</span>&#8546;,
                    K<span>Eк</span>&#8547;=U<span>24</span>&#8547;/U<span>5-6</span>&#8547; находятся в пределах
                    (19±2).</p>
                <p> Индекс команд на ПKП<span>лев(прав)</span> должен повернуться по (против) часовой стрелке, стрелки
                    положения на приборах ПКП, ПНП - вправо.</p>
                <p> Баранки штурвалов должны повернуться по (против) часовой стрелке.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> Произведите проверку, задавая сигнал отклонения РСЛК влево.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}
            {UniversalTabWithTable(TableSize2x5, 3)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> На пульте ПС-172-02 нажмите кнопку КРЕН ОТКЛ.</p>
                <p> Переключатели ОТКЛОНЕНИЕ на имитаторе МИМ-70 установите в положение "0".</p>
            </Typography>
        </Fade>
    );
}

export default memo(Check18);