import React, {memo, useEffect} from 'react';
import TableSize2x5 from "../../common/table/TableSize2x5";
import Typography from "@mui/material/Typography";
import UniversalTabWithTable from "../../../HOC/UniversalTabWithTable";

const Fade = require("react-reveal/Fade")


type CheckPropsType = {}

const Check40 = (props: CheckPropsType) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fade bottom cascade>
            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p> П р и м е ч а н и е . При проверке и регулировке порогов срабатывания компараторов в вычислителях
                    ВПК-51-01 каналов &#8544;, &#8546; достаточно изменять радиовысоту на КПА-034 (&#8544;), а для
                    вычислителей каналов &#8546;, &#8547; - на КПА-034 (&#8545;).</p>
                <p><b>Проверка порога срабатывания компараторов по H<span>рв</span>=200м.</b></p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034
                    (&#8544;, &#8546;) радиовысоту H<span>рв</span>=300-400м.</p>
                <p> С помощью жгута "902" подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 8 и 19 контрольного
                    соединителя Ш37 блока ВПК-52-01 канала &#8544;(&#8545;,&#8546;,&#8547;).</p>
                <p> Плавно уменьшайте значение H<span>рв</span> до момента изменения напряжения от 0-0,3 до 3-5В по
                    вольтметру ИП&#8544; пульта ППН-149.</p>
                <p> Произведите отсчет значения H<span>рв</span> по указателю радиовысоту. Значение H<span>рв</span> должно
                    находиться в пределах 190-210м.</p>
                <p> Последовательно подключая пульт ППН-149 к контрольным соединителям Ш37 блоков ВПК-52-01 каналов
                    &#8545;, &#8546;, &#8547;, произведите проверку соответствующих вычислителей ВПК-52-01.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 0)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p><b> Проверка порога срабатывания компараторов по H<span>рв</span>=100м.</b></p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034
                    (&#8544;, &#8546;) радиовысоту H<span>рв</span>=200-300м.</p>
                <p> С помощью жгута "902" подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 9 и 19 контрольного
                    соединителя Ш37 блока ВПК-52-01 канала &#8544;(&#8545;,&#8546;,&#8547;).</p>
                <p> Плавно уменьшайте значение H<span>рв</span> до момента изменения напряжения от 0-0,3 до 3-5В по
                    вольтметру ИП&#8544; пульта ППН-149.</p>
                <p> Произведите отсчет значения H<span>рв</span> по указателю радиовысоту. Значение H<span>рв</span> должно
                    находиться в пределах 90-110м.</p>
                <p> Последовательно подключая пульт ППН-149 к контрольным соединителям Ш37 блоков ВПК-52-01 каналов
                    &#8545;, &#8546;, &#8547;, произведите проверку соответствующих вычислителей ВПК-52-01.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 1)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p><b> Проверка порога срабатывания компараторов по H<span>рв</span>=60м.</b></p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034 (&#8544;, &#8546;)
                    радиовысоту H<span>рв</span>=100-200м.</p>
                <p> С помощью жгута "902" подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 10 и 19 контрольного
                    соединителя Ш37 блока ВПК-52-01 канала &#8544;(&#8545;,&#8546;,&#8547;).</p>
                <p> Плавно уменьшайте значение H<span>рв</span> до момента изменения напряжения от 0-0,3 до 3-5В по
                    вольтметру ИП&#8544; пульта ППН-149.</p>
                <p> Произведите отсчет значения H<span>рв</span> по указателю радиовысоту. Значение H<span>рв</span>
                    должно находиться в пределах 65-55м.</p>
                <p> Последовательно подключая пульт ППН-149 к контрольным соединителям Ш37 блоков ВПК-52-01 каналов
                    &#8545;, &#8546;, &#8547;, произведите проверку соответствующих вычислителей ВПК-52-01.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 2)(props)}

            <Typography sx={{padding: '0 20px'}} variant="body1" component='p'>
                <p><b> Проверка порога срабатывания компараторов по H<span>рв</span>=30м.</b></p>
                <p> В соответствии с производственной инструкцией (РЭ) на изд. А-034 задайте от КПА-034
                    (&#8544;, &#8546;) радиовысоту H<span>рв</span>=70-80м.</p>
                <p> С помощью жгута "902" подключите вольтметр ИП&#8544; пульта ППН-149 к контактам 11 и 19 контрольного
                    соединителя Ш37 блока ВПК-52-01 канала &#8544;(&#8545;,&#8546;,&#8547;).</p>
                <p> Плавно уменьшайте значение H<span>рв</span> до момента изменения напряжения от 0-0,3 до 3-5В по
                    вольтметру ИП&#8544; пульта ППН-149.</p>
                <p> Произведите отсчет значения H<span>рв</span> по указателю радиовысоту. Значение H<span>рв</span> должно
                    находиться в пределах 28-33м.</p>
                <p> Последовательно подключая пульт ППН-149 к контрольным соединителям Ш37 блоков ВПК-52-01 каналов
                    &#8545;, &#8546;, &#8547;, произведите проверку соответствующих вычислителей ВПК-52-01.</p>
            </Typography>

            {UniversalTabWithTable(TableSize2x5, 3)(props)}

        </Fade>
    );
}

export default memo(Check40);
