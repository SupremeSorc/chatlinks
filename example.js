module.exports = function chatlinkstest(mod) {
    let flag1 = true, flag2 = true, flag3 = true, flag4 = true;//used to demo placeholders in this test
    const chatlinks = require('../chatlinks');//load the library
    const commandlist = () => {//function version required if you want to support placeholders changing text like below
        return [
            [`test button 1 ${flag1 ? 'en' : 'dis'}abled `, flag1 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999901, 'chatlinkstest 1'],
            [`test button 2 ${flag2 ? 'en' : 'dis'}abled `, flag2 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999902, 'chatlinkstest 2'],
            [`test button 3 ${flag3 ? 'en' : 'dis'}abled `, flag3 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999903, 'chatlinkstest 3'],
            [`test button 4 ${flag4 ? 'en' : 'dis'}abled `, flag4 ? '#69ff61' : '#ff6961', 'click', '#6169ff', 999904, 'chatlinkstest 4']
        ]
    }

    /*
    const commandlist = [//example if you do not need to support placeholders changing messages
            ['test button 1', '#ff6961', 'click', '#6169ff', 999901, 'chatlinkstest 1'],
            ['test button 2', '#ff6961', 'click', '#6169ff', 999902, 'chatlinkstest 2'],
            ['test button 3', '#ff6961', 'click', '#6169ff', 999903, 'chatlinkstest 3'],
            ['test button 4', '#ff6961', 'click', '#6169ff', 999904, 'chatlinkstest 4']
        ]
    */

    //(mod, array of arrays['main text', 'main text color', 'button text', 'button text color', id, 'command to run'], silence next command.message, optional command to rerun when triggered)
    const buttons = new chatlinks(mod, commandlist(), false, 'chatlinkstest');

    mod.command.add('chatlinkstest', (flag) => {
        switch (flag) {
            case '1': flag1 = !flag1; break;
            case '2': flag2 = !flag2; break;
            case '3': flag3 = !flag3; break;
            case '4': flag4 = !flag4; break;
            default:
                buttons.chatlist = commandlist();//required to support placeholders, skip otherwise
                mod.command.message('\n' + buttons.printlist());
        }
    })
}