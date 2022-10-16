const fs = require('fs');
const markedjs = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const path = require('path')

const fileDirPath = `${__dirname}/blog`;
const config = require('./.vitepress/index.json');

const listData = [];
const { marked } = markedjs;


const isFile = async (path) => {
    return await fs.existsSync(path);
}

const readFileContent = async (path) => {
    if (await isFile(path)) {
        return fs.readFileSync(path);
    }
    return undefined;
}

const writeFileContent = (path, data) => {
    return fs.writeFileSync(path, data);
}

const isFileChange = (data) => {

}

const formatDate = (t, str) => {
    var obj = {
        yyyy: t.getFullYear(),
        yy: ("" + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function ($1) { return obj[$1] });
}



const code = `
<script id="theCoolWorld__" setup>
import LastUpdated from "../.vitepress/components/LastUpdated/index.vue";
import Comment from "../.vitepress/components/Comment/index.vue";
</script>
<LastUpdated time='2020.1.1' />
<Comment />
`;


(async function () {
    let dataFileDir = await fs.readdirSync(fileDirPath);

    let timeJsonFile = await readFileContent(path.join(__dirname, './mdTime.json'));
    if (!timeJsonFile) {
        await writeFileContent(path.join(__dirname, './mdTime.json'), JSON.stringify({}));
        timeJsonFile = JSON.stringify({});
    }
    let timeJson = JSON.parse(timeJsonFile.toString());

    for (let pop of dataFileDir) {
        let fileState = await fs.statSync(`${fileDirPath}/${pop}`);
        let time = "";

        if (!timeJson[pop]) {
            timeJson[pop] = {
                editTime: fileState.mtime,
                birthtime: fileState.birthtime
            };
            time = fileState.mtime;
        } else {
            if (JSON.stringify(fileState.mtime).indexOf(timeJson[pop].editTime) == -1) {
                timeJson[pop] = {
                    ...timeJson[pop],
                    editTime: fileState.mtime,
                };
                time = fileState.mtime;
            }
        }

        let data = await fs.readFileSync(`${fileDirPath}/${pop}`, 'utf-8');
        if (data.indexOf('theCoolWorld__') == -1) {
            fs.appendFileSync(`${fileDirPath}/${pop}`, code.replace(/time=\'[\w\W]+\'/g, `time='${formatDate(new Date(time), 'yyyy-MM-dd-HH-mm-ss')}'`));
        } else {
            if (time) {
                await writeFileContent(`${fileDirPath}/${pop}`, data.replace(/time=\'[\w\W]+\'/g, `time='${formatDate(new Date(time), 'yyyy-MM-dd-HH-mm-ss')}'`));
                timeJson[pop] = {
                    ...timeJson[pop],
                    editTime: time,
                };
            }
        }

        await writeFileContent(path.join(__dirname, './mdTime.json'), JSON.stringify(timeJson));


        const markdown = new JSDOM(marked(data)).window.document.body.children;
        let title = markdown[0]?.textContent || "";
        let desc = markdown[1]?.textContent + ' ' + markdown[2]?.textContent || "";

        pop = pop.slice(0, pop.length - 3);

        let filePath = `${config.base}blog\/${pop}`;

        let imgSrc = marked(data).match(/<img.*?src="(.*?)".*?\/?>/i) || "";
        if (imgSrc) {
            imgSrc = imgSrc[1].split('/')[imgSrc[1].split('/').length - 1];
        }

        if (title) {
            listData.push({
                id: new Date().getTime(),
                title,
                desc,
                imgSrc,
                path: filePath,
            })
        }
    }
    
    fs.writeFileSync(path.join(__dirname, '../docs/.vitepress/data/listData.json'), JSON.stringify(listData), 'utf-8');

}())










