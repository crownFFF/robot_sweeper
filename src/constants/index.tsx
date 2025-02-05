import Image from "next/image"
import Link from "next/link"
export const skills = [
  {
    id: 1,
    name: "css",
    src: "@/assets/icons/css.svg",
    alt: "CSS",
  },
  {
    id: 2,
    name: "github",
    src: "@/assets/icons/github.svg",
    alt: "GitHub",
  },
  {
    id: 3,
    name: "javascript",
    src: "@/assets/icons/javascript.svg",
    alt: "JavaScript",
  },
  {
    id: 4,
    name: "nextjs",
    src: "@/assets/icons/nextjs.svg",
    alt: "Next.js",
  },
  {
    id: 5,
    name: "nodejs",
    src: "@/assets/icons/nodejs.svg",
    alt: "Node.js",
  },
  {
    id: 6,
    name: "scss",
    src: "@/assets/icons/scss.svg",
    alt: "SCSS",
  },
  {
    id: 7,
    name: "typescript",
    src: "@/assets/icons/typescript.svg",
    alt: "TypeScript",
  },
  {
    id: 8,
    name: "threejs",
    src: "@/assets/icons/threejs.svg",
    alt: "THREE.js",
  },
  {
    id: 9,
    name: "react",
    src: "@/assets/icons/react.svg",
    alt: "React",
  },
  {
    id: 10,
    name: "html",
    src: "@/assets/icons/html.svg",
    alt: "HTML",
  },
]
export const list = [
  {
    id: 1,
    title: "About Me",
    content: (
      <div>
        <div className="myImg">
          <Image
            src="/images/myPhoto.png"
            alt=""
            width="500"
            height="643"
            priority
          />
        </div>
        <div className="personInfo">
          <p>
            姓名:<span>黃冠樺</span>
          </p>
          <p>
            性別:<span>男</span>
          </p>
          <p>
            聯絡方式:<span>0963510598</span>
          </p>
          <p>
            E-mail:
            <span>
              <a href="mailto:asd8792323@gmail.com">asd8792323@gmail.com</a>
            </span>
          </p>
          <p>
            工作:<span>前端工程師</span>
          </p>
          <p>
            個人特色:<span>學習力佳,積極向上,善於溝通,持續學習</span>
          </p>
          <p>
            個人連結:
            <span>
              <a href="https://github.com/crownFFF" target="_blank">
                https://github.com/crownFFF
              </a>
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Learning Experience",
    content: (
      <div>
        {/* content: '描述自己的學習經歷，包括教育背景和重要課程。' */}
        <div className="personInfo">
          <p>
            學校名稱:<span>勞動部動力發展屬中彰投分署</span>
          </p>
          <p>
            就學狀態:<span>畢業</span>
          </p>
          <p>
            學校地區:
            <span>台灣</span>
          </p>
          <p>
            入學時間:<span>2023-12</span>
          </p>
          <p>
            離校時間:<span>2024-06</span>
          </p>
          <p>
            班級:<span>電子商務網站建置班</span>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            學校名稱:<span>中臺科技大學</span>
          </p>
          <p>
            學歷:<span>四技</span>
          </p>
          <p>
            就學狀態:<span>畢業</span>
          </p>
          <p>
            學校地區:
            <span>台灣</span>
          </p>
          <p>
            入學時間:<span>2017-09</span>
          </p>
          <p>
            離校時間:<span>2021-06</span>
          </p>
          <p>
            科系:<span>牙體技術暨材料系</span>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            學校名稱:<span>私立僑泰高中</span>
          </p>
          <p>
            學歷:<span>高中</span>
          </p>
          <p>
            就學狀態:<span>畢業</span>
          </p>
          <p>
            學校地區:
            <span>台灣</span>
          </p>
          <p>
            入學時間:<span>2014-09</span>
          </p>
          <p>
            離校時間:<span>2017-06</span>
          </p>
          <p>
            科系:<span>多媒體設計科</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Work Experience",
    content: (
      <div>
        {/* content: '列出過往的工作經驗，包括職位、公司名稱和主要貢獻' */}
        <div className="personInfo">
          <p>
            公司名稱:<span>蛙設計文創工作室</span>
          </p>
          <p>
            產業類別:<span>網際網路相關業</span>
          </p>
          <p>
            工作地點:<span>台中市西區</span>
          </p>
          <p>
            職務名稱:<span>前端工程師</span>
          </p>
          <p>
            任職日期:<span>2024-09</span>
          </p>
          <p>
            離職日期:<span>仍在職</span>
          </p>
          <span>
            工作描述:
            <span>
              <ul>
                <li>網頁架構與修改維護、前端動態效果呈現</li>
                <li>與視覺設計師合作,進行前端網頁設計</li>
                <li>發展前端動態互動及UIUX呈現</li>
              </ul>
            </span>
          </span>
          <span>
            工作技能:
            <span>
              <ul>
                <li>HTML、CSS(SACC/SCSS)網頁切版作業</li>
                <li>RWD網頁設計</li>
                <li>Git版控協作概念</li>
              </ul>
            </span>
          </span>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            公司名稱:<span>勞動部勞動力發展署中彰投分署</span>
          </p>
          <p>
            產業類別:<span>政府</span>
          </p>
          <p>
            工作地點:<span>台中市西屯區</span>
          </p>
          <p>
            職務名稱:<span>學生</span>
          </p>
          <p>
            任職日期:<span>2023-12</span>
          </p>
          <span>
            離職日期:<span>2024-06</span>
          </span>
          <span>
            學習描述:
            <span>
              <ul>
                <li>學習前、後端網站建設基礎</li>
                <li>學習PS、AI影像處理軟體</li>
                <li>Figma圓形設計工具學習</li>
                <li>Vscode、Dreamweave原始碼編輯器學習</li>
              </ul>
            </span>
          </span>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            公司名稱:<span>寶雅國際股份有限公司</span>
          </p>
          <p>
            產業類別:<span>百貨相關業</span>
          </p>
          <p>
            工作地點:<span>台中市大里區</span>
          </p>
          <p>
            職務名稱:<span>儲備幹部</span>
          </p>
          <p>
            職務性質:<span>全職</span>
          </p>
          <p>
            任職日期:<span>2023-07</span>
          </p>
          <p>
            離職日期:<span>2023-11</span>
          </p>
          <span>
            工作描述:
            <span>
              <ul>
                <li>部門商品管理、陳列</li>
                <li>商品訂購</li>
                <li>賣場商品調整</li>
                <li>顧客服務及調解客戶問題反映</li>
              </ul>
            </span>
          </span>
          <span>
            工作技能:
            <span>
              <ul>
                <li>客戶服務</li>
                <li>賣場管理</li>
              </ul>
            </span>
          </span>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            公司名稱:<span>朱比特牙體技術所</span>
          </p>
          <p>
            公司規模:<span>1-30人</span>
          </p>
          <p>
            產業類別:<span>其他醫療保健服務業</span>
          </p>
          <p>
            工作地點:<span>台中市南區</span>
          </p>
          <p>
            職務名稱:<span>牙體技術師</span>
          </p>
          <p>
            職務性質:<span>全職</span>
          </p>
          <p>
            任職日期:<span>2021-09</span>
          </p>
          <p>
            離職日期:<span>2023-06</span>
          </p>
          <span>
            工作描述:
            <span>
              <ul>
                <li>隱形牙套設計、生成、製造</li>
                <li>管理及保養3D列印機</li>
                <li>與醫師客戶溝通、協調產品內容</li>
              </ul>
            </span>
          </span>
          <span>
            工作技能:
            <span>
              <ul>
                <li>隱形校正</li>
                <li>3shape</li>
                <li>3D列印</li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Projects",
    content: (
      <div>
        {/* content: '介紹曾經參與的專案，強調自己在專案中的角色和成就' */}
        <div className="personInfo">
          <p>
            作品名稱:<span>Robot-個人資訊網站</span>
          </p>
          <span>
            使用技術:
            <span>
              <ul className="skillList">
                <li>react</li>
                <li>next.js</li>
                <li>three.js</li>
                <li>Theatre.js</li>
                <li>TypeScript</li>
                <li>R3F</li>
                <li>SCSS</li>
              </ul>
            </span>
          </span>
          <p>
            內容說明:
            <span>
              使用next建構的3D個人網站
              <br />
              以THREE.js呈現3D模型
              <br />
              以及使用Theatre.js製作3D動畫
            </span>
          </p>
          <p>
            <Link href="/project">詳細內容請至PROJECT頁面</Link>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            作品名稱:<span>Three_Island</span>
          </p>
          <span>
            使用技術:
            <span>
              <ul className="skillList">
                <li>react</li>
                <li>three.js</li>
                <li>TypeScript</li>
                <li>R3F</li>
                <li>SCSS</li>
                <li>Tailwind</li>
                <li>next.js</li>
              </ul>
            </span>
          </span>
          <p>
            內容說明:
            <span>
              使用next框架建構的3D網站
              <br />
              此網站為根據Youtube教學製作而成素材網址
              <br />
              此網站設置滑鼠點擊以及鍵盤左右按鍵功能
              <br />
              控制模型的動畫以及旋轉
            </span>
          </p>
          <p>
            <Link href="/project">詳細內容請至PROJECT頁面</Link>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            作品名稱:<span>DashBoard</span>
          </p>
          <span>
            使用技術:
            <span>
              <ul className="skillList">
                <li>react</li>
                <li>next.js</li>
                <li>TypeScript</li>
              </ul>
            </span>
          </span>
          <p>
            內容說明:
            <span>
              next官方網站的學習內容
              <br />
              跟著官方學習手冊建構而成的儀表板網站
              <br />
              學習next基礎以及與資料庫連結
            </span>
          </p>
          <p>
            <Link href="/project">詳細內容請至PROJECT頁面</Link>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            作品名稱:<span>TypeScript Learn</span>
          </p>
          <span>
            使用技術:
            <span>
              <ul className="skillList">
                <li>TypeScript</li>
                <li>MarkDown</li>
              </ul>
            </span>
          </span>
          <p>
            內容說明:
            <span>
              TypeScript的學習筆記記錄從零開始學習TypeScript的過程整理成MarkDown筆記
            </span>
          </p>
          <p>
            <Link href="/project">詳細內容請至PROJECT頁面</Link>
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>
            作品名稱:<span>Figma-GABI</span>
          </p>
          <span>
            使用技術:
            <span>
              <ul className="skillList">
                <li>Figma</li>
              </ul>
            </span>
          </span>
          <p>
            內容說明:
            <span>
              運用Figma模擬咖啡餐館官網設計,內建模擬網站元件,模擬展現出實際網站效果
            </span>
          </p>
          <p>
            <Link href="/project">詳細內容請至PROJECT頁面</Link>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Licenses & Language",
    content: (
      <div>
        {/* content: '列出獲得的證照或專業認證，例如 PMP、AWS 等' */}
        <div className="personInfo">
          <p>
            國家考試:<span>牙體技術師</span>
          </p>
          <span>
            證照:
            <span>
              <ul>
                <li>丙級印前製程技術士-圖文組板</li>
                <li>丙級視覺傳達設計技術士</li>
                <li>丙級網頁設計技術士</li>
                <li>乙級印前製程技術士</li>
              </ul>
            </span>
          </span>
        </div>
        <hr />
        <div className="personInfo">
          <span>
            語言:
            <span>
              <ul>
                <li>中文</li>
                <li>英文</li>
                <li>台語</li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Personal Statement",
    content: (
      <div>
        {/* content: '撰寫個人陳述，說明自己的職業目標和價值觀。' */}
        <div className="personInfo">
          <p>【關於我】</p>
          <p>
            您好,我叫黃冠樺,出生於1998年,畢業於中臺科技大學-牙體技術暨材料系,以及勞動部中彰投分署-電子商務網站建置班
          </p>
          <p>
            對於網頁設計及建置方面深感興趣,由於高中時期是就讀-多媒體設計科,所以對於設計以及色彩配置方面具備基礎概念,對於美感有一定的自我要求。
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>【求學經歷】</p>
          <p>
            大學畢業後,在牙體技術領域內工作1-2年,但發覺自己對於這分專業,熱忱並不高,所以決定投身於網頁資訊這方面去做學習與發展,
          </p>
          <p>
            在進入這份領域,我決定於
            勞動力發展署內所開設的職業訓練班-電子商務網站建置班
            作為學習的開端,在這學習的6個月中,我學習到了關於網站建置、切版的基礎知識,以及影像處裡的技術,並取得了丙級證照,在2024/06畢業
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>【工作經驗】</p>
          <p>由於自身並非於本科系出身,</p>
          <p>
            但在從事牙技師工作時,需得與客戶溝通並從中協調客戶需求,以及與公司相關部門合作,讓我學習到了與客戶溝通,協調,以及團隊合作,
          </p>
          <p>在從職業訓練班畢業之後,應徵上了前端工程師這份工作,</p>
          <p>
            在這份工作中我繼續精進自身的技術,不論是網頁切版、建置或是影像處裡,
          </p>
          <p>
            在工作結束後,我會額外的去學習更多不同的知識技術,例如TS、3D建模或是不同的前端框架
          </p>
          <p>
            未來會盡力在技術方面提高自身的能力與經驗,努力朝向專業的道路前進。
          </p>
        </div>
        <hr />
        <div className="personInfo">
          <p>【作品】</p>
          <p>以下是我的作品</p>
          <p>
            <a href="https://robot-sweeper.vercel.app/">robot_sweeper</a>
          </p>
          <p>
            這份作品為以我個人的資訊介紹做為內容來呈現,主要打造為個人資訊履歷網站
          </p>
          <p>在這個作品中,使用了NEXT作為框架,結合了3D模型來作呈現</p>
          <p>以電腦、機器這方面的素材作為主題,走向較為工業的風格</p>
          <p>LOGO以lottie製作生成的動畫LOGO</p>
          <p>
            首頁在互動方面以電腦螢幕作為基礎,將各個螢幕與不同的資訊連結,點擊每個螢幕都會呈現不同的資訊,並將畫面向螢幕作動畫過度,
          </p>
          <p>螢幕上的動畫雜訊與標題呈現出工業的氛圍</p>
          <p>
            在關於頁面以及聯絡頁面,結合了機器人模型作為呈現,並將畫面滾動或是點擊與模型綁定,呈現不一樣的動畫
          </p>
          <p>在聯絡頁面使用了第三方庫結合Email,可以實際將郵件寄送</p>
          <p>
            在作品頁面,內容呈現以個人的學習作品,以及自己發想的作品,在背景方面以3D模型並結合了3D動畫來呈現,
          </p>
          <p>以透過camera以及燈光來調整動畫</p>
          <br />
          <p>
            <a href="https://crownfff.github.io/TS/">TypeScript Learn</a>
          </p>
          <p>這份作品則為自己在學習TS的過程內容</p>
          <p>將學習的過程筆記,整理後以MD檔呈現</p>
          <p>內容皆為TS的基礎知識</p>
          <br />
          <p><Link href='/project'>---更多作品---</Link></p>
        </div>
        <hr />
        <div className="personInfo">
          <p>感謝您在百忙之中看完我的履歷！</p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Skills",
    content: (
      <div>
        {/* content: '列出自己的技能樹，例如程式語言、工具或軟技能' */}
        <div className="personInfo">
          <span>
            技術類:
            <span>
              <ul className="skillList">
                <li>HTML</li>
                <li>CSS / SCSS</li>
                <li>JavaSctipt / TypeScript</li>
                <li>AJAX</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Figma</li>
              </ul>
            </span>
          </span>
          <hr />
          <span>
            前端框架類:
            <span>
              <ul className="skillList">
                <li>Vue</li>
                <li>React</li>
                <li>Astro</li>
                <li>Next</li>
                <li>Vite</li>
              </ul>
            </span>
          </span>
          <hr />
          <span>
            應用類:
            <span>
              <ul className="skillList">
                <li>Git</li>
                <li>Word</li>
                <li>Excel</li>
                <li>PowerPoint</li>
              </ul>
            </span>
          </span>
          <hr />
          <span>
            影像向量處理類:
            <span>
              <ul className="skillList">
                <li>PhotoShop</li>
                <li>PhotoImpact</li>
                <li>Illustrator</li>
              </ul>
            </span>
          </span>
          <hr />
          <span>
            3D類:
            <span>
              <ul className="skillList">
                <li>Blender</li>
                <li>THREE.js</li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Future Expectations",
    content: (
      <div>
        {/* content: '說明未來的期望，例如職涯規劃或希望參與的項目類型' */}
        <div className="personInfo">
          <p>【未來規劃】</p>
          <p>在未來的規劃中,希望自己的技術將不再侷限在網頁中,</p>
          <p>期望自己能夠往更深入的技術方面學習,</p>
          <p>目前將會以Python以及C語言作為學習目標,</p>
          <p>將能力擴展至程式設計方面</p>
          <p>在後續的未來,目前的設想為將以APP設計方面前進。</p>
          <p>另外,也會繼續學習關於3D方面的知識,模型建構</p>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Copyright",
    content: (
      <div>
        {/* content: '補充版權資訊，例如個人作品的版權聲明。' */}
        <div className="personInfo">
          3D 模型來源於Sketchfab網站
          <br />
          並遵循其授權協議和使用條款
          <br />
          模型僅用於非商業用途（如展示、學習、研究等）
          <br />
          Sketchfab網站及其作者對模型擁有完整的知識產權。本網站不對模型的原創性、準確性或適用性承擔責任。
          <br />
          若在使用過程中侵犯到您的權益，請通過
          <Link href="/contact">聯繫郵箱</Link>
          與我聯繫，我將在收到通知後立即移除相關內容。
          <br />
        </div>
      </div>
    ),
  },
]
