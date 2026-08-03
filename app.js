const IMG={
  rice:'images/1-rice.jpg',
  grain:'images/2-grain.jpg',
  granule:'images/3-granule.png',
  flour:'images/4-flour.jpg',
  bun:'images/5-bun.jpg',
  noodle:'images/6-noodle.jpg',
  cookie:'images/7-cookie.jpg',
  snack:'images/8-snack.png',
  zongzi:'images/9-zongzi.jpg',
  probiotic:'images/1-rice.jpg'
};
const BG={
  riceField:'',
  wheat:'',
  lab:'',
  doctor:'',
  world:'',
  family:'',
  data:'',
  kitchen:'',
  plant:''
};
const IC=['🍚','🌾','🌽','🫓','🥟','🍜','🍪','🥨','🫔'];

const P=[
{id:1,img:IMG.rice,name:'森无忧低蛋白米饭',en:'Low Protein Ready Rice',tags:['180g','8个月','0g蛋白'],ings:'大米、饮用水、DL-苹果酸、酿造食醋',w:'180g',shelf:'8个月',store:'0℃以上避光避高温',sc:'',method:['微波撕口高火2分钟','沸水未拆封浸泡12分钟','开袋直接炒饭'],craft:'真米生物脱蛋白+日式UHT高温灭菌，三层氮气高阻隔包装，0防腐剂，加热即食。',tech:'真米酶解脱蛋白；UHT灭菌；氮气封装',n:{protein:'0g',na:'0mg',k:'0mg',p:'18mg',energy:'671kJ'},advantage:'三餐可提供48%日需热量，开袋即食',ni:['🥩','🧂','🍌','🦴','⚡']},
{id:2,img:IMG.grain,name:'森无忧低蛋白大米',en:'Low Protein Rice',tags:['1kg','18个月','0g蛋白'],ings:'纯大米',w:'1kg',shelf:'18个月',store:'常温、冷藏均可',sc:'',method:['无需淘洗，米水1:1.1~1:1.3','保温焖15-20分钟口感最佳'],craft:'真米酶解脱蛋白，Phe仅0.014%为普通大米1/20。',tech:'完整大米生物酶解，去除90%以上蛋白与Phe',n:{protein:'0g',na:'19mg',k:'1.38mg',p:'34.8mg'},advantage:'0g蛋白，适合主食搭配',ni:['🥩','🧂','🍌','🦴']},
{id:3,img:IMG.granule,name:'森无忧低蛋白挤压淀粉颗粒',en:'Low Protein Extruded Starch',tags:['1kg','18个月','0g蛋白'],ings:'小麦淀粉',w:'1kg',shelf:'18个月',store:'干燥通风，开封密封',sc:'',method:['无需浸泡，米水1:1.3~1:1.5','保温焖15-20分钟'],craft:'瑞士布勒热挤压设备，淀粉充分熟化无异味。',tech:'瑞士布勒热挤压，熟化无异味',n:{protein:'0g',na:'20mg',k:'35mg',p:'44mg'},advantage:'瑞士布勒热挤压工艺，方便易煮',ni:['🥩','🧂','🍌','🦴']},
{id:4,img:IMG.flour,name:'森无忧低蛋白面粉',en:'Low Protein Flour',tags:['500g','18个月','0g蛋白'],ings:'小麦淀粉、玉米淀粉、玉米预糊化淀粉、车前子壳粉、南瓜粉',w:'500g',shelf:'18个月',store:'阴凉、干燥、通风处',sc:'',method:['100g粉+45-50g开水搅拌成絮状','降温至40℃揉团，可做面条饺子'],craft:'无食用胶复配配方，添加膳食纤维。',tech:'无胶配方，膳食纤维助肠道',n:{protein:'0g',na:'20mg',k:'35mg',p:'44mg'},advantage:'无食用胶，可做面条饺子馄饨皮',ni:['🥩','🧂','🍌','🦴']},
{id:5,img:IMG.bun,name:'森无忧低蛋白馒头粉',en:'Low Protein Bun Flour',tags:['500g','18个月','0g蛋白'],ings:'小麦淀粉、木薯预糊化淀粉、玉米预糊化淀粉、低聚果糖、燕麦膳食纤维、真菌淀粉酶',w:'500g',shelf:'18个月',store:'阴凉干燥通风',sc:'',method:['500g粉+泡打粉5g+酵母5g+糖5g+醋5g','两次醒发后蒸10分钟焖5分钟'],craft:'专用发酵酶配方，成品松软易操作。',tech:'发酵酶+两次醒发，成品松软',n:{protein:'0g',na:'19mg',k:'39mg',p:'75mg'},advantage:'新手友好，自制馒头花卷',ni:['🥩','🧂','🍌','🦴']},
{id:6,img:IMG.noodle,name:'森无忧低蛋白米粉',en:'Low Protein Rice Noodles',tags:['750g/125g','12个月','0g蛋白'],ings:'低蛋白大米、玉米淀粉、水',w:'750g/125g',shelf:'12个月',store:'阴凉干燥避光',sc:'',method:['冷水泡6-8h/40-50℃温水泡45分钟','煮熟冲凉，可汤粉拌粉炒粉'],craft:'真米脱蛋白原料，非纯淀粉合成，口感顺滑。',tech:'脱蛋白真米原料，还原传统米粉口感',n:{protein:'0g',na:'9mg',k:'未标注',p:'未标注'},advantage:'钠仅9mg，三吃法百搭',ni:['🥩','🧂']},
{id:7,img:IMG.cookie,name:'森无忧低蛋白轻松曲奇',en:'Low Protein Cookies',tags:['10g×10包','9个月','1.7~2.7g蛋白'],ings:'安佳黄油、MCT、原味/蔓越莓/奇亚籽',w:'单包10g，整盒100g',shelf:'9个月',store:'阴凉干燥避光',sc:'',method:['开袋即食','独立小包装，精确控量'],craft:'0色素0防腐剂，安佳黄油+MCT快速供能，钠仅9mg。',tech:'0添加，MCT+安佳黄油',n:{protein:'1.7~2.7g',na:'9mg',k:'≤20mg',p:'≤15mg'},advantage:'钠比普通曲奇低98%，安心日常加餐',ni:['🥩','🧂','🍌','🦴']},
{id:8,img:IMG.snack,name:'森无忧谷纤趣挤压淀粉零食',en:'Low Protein Snacks',tags:['160g/袋','120天','1g蛋白'],ings:'可可、海苔两种口味',w:'160g/袋',shelf:'120天',store:'阴凉干燥避光',sc:'',method:['开袋即食','可搭配酸奶沙拉'],craft:'瑞士布勒热挤压，非油炸，低糖低脂高膳食纤维。',tech:'非油炸，低糖低脂高纤维',n:{protein:'1g',na:'14mg',k:'—',p:'—',more:'低糖低脂高纤维'},advantage:'极低钠便携零食',ni:['🥩','🧂']},
{id:9,img:IMG.zongzi,name:'森无忧低蛋白大米粽',en:'Low Protein Rice Dumplings',tags:['100g/只','120天','0g蛋白'],ings:'低蛋白大米为主原料',w:'单只100g',shelf:'120天',store:'阴凉干燥避光',sc:'',method:['真空包装加热即食','单只定量方便管控'],craft:'真米脱蛋白，4种口味（白米/赤豆/桂花红枣/咸粽）。',tech:'真米原料真空锁鲜4味可选',n:{protein:'0g',na:'6mg',k:'≤25mg',p:'≤20mg'},advantage:'节日便携，单只定量',ni:['🥩','🧂','🍌','🦴']},
{id:10,key:'probiotic',img:IMG.probiotic,name:'森无忧复合益生菌',en:'Probiotics Complex',tags:['2g×20条','18个月','300亿CFU'],ings:'乳双歧杆菌、鼠李糖乳杆菌、嗜酸乳杆菌等',w:'2g×20条',shelf:'18个月',store:'阴凉干燥处保存，避免高温',sc:'',method:['每日1-2条，直接口服或加入40℃以下饮品','建议饭后食用'],craft:'多联菌株科学配比，耐胃酸耐胆汁，高活菌高定殖率。',tech:'多联菌株+冻干保护技术',n:{protein:'0g',more:'每条约300亿CFU活菌'},advantage:'肠道微生态平衡，促进营养吸收',ni:['🦠']},
];

// ═══ 语言切换系统 ═══
let _L='zh',navStack=[],_curFn={fn:'home',args:[]};
function _T(zh,en){return _L==='en'?(en||zh):zh}
function switchLang(l){
  _L=l;
  document.querySelectorAll('#lang button').forEach((b,i)=>b.classList.toggle('active',(i===0&&l==='zh')||(i===1&&l==='en')));
  document.querySelectorAll('.nav-tabs button').forEach((b,i)=>{
    const t=[_T('首页','Home'),_T('品牌','Brand'),_T('营养学院','Academy'),_T('科学成就','Achieve'),_T('科普','Science'),_T('商城','Store'),_T('计算器','Calc')];
    b.childNodes[0].textContent=t[i];
  });
  if(_curFn)window['_'+_curFn.fn](..._curFn.args);
  window.scrollTo(0,0);
  setTimeout(setupReveal,30);
}

// ═══ 产品详情丰富信息 ═══
const D={
1:{
  taste:_T('晶莹剔透，有嚼劲Q弹，大米香自然，口感软糯不渣','Glossy, chewy & springy with natural rice aroma'),
  scenes:[_T('住院/外出吃饭难，微波2分钟即食','Hospital & travel: microwave 2 min ready'),_T('上班族带饭','Office lunch portable'),_T('学生上学午餐便当','school lunch preparation'),_T('长途旅行随身携带','Travel companion for daily needs')],
  revs:[{u:'t**9',r:_T('米香自然，口感软糯不渣，无限回购。','Natural rice aroma, soft & chewy, will buy again.'),s:5},{u:'l**5',r:_T('味道不错，客服态度好，无限回购中。','Great taste, good service, buying again.'),s:5},{u:'h**6',r:_T('是真大米，口感和普通一样。','Real rice, tastes just like regular rice.'),s:5},{u:'w**7',r:_T('回购产品，缺点价格高，建议活动时买。','Great product but pricey, buy on sale.'),s:4}],
  pn:_T('180g定量装，方便携带','180g portion pack, easy to carry'),
  sd:_T('住院、上班、外出，随时随地吃上一口安心的饭','Hospital, office, travel — safe rice anytime')
},
2:{
  taste:_T('接近普通大米，晶莹透亮，有米饭香气','Close to regular rice, glossy with natural fragrance'),
  scenes:[_T('全家营养一日三餐主食基底','Daily staple for daily needs'),_T('日常米饭制作/饭团/炒饭','daily rice cooking/onigiri/fried rice'),_T('与家人同吃一锅饭，无需单独开灶','Cook one pot for the whole family'),_T('初次尝试低蛋白主食的首选规格','Perfect starter size for first-timers')],
  revs:[{u:'📱 购**户',r:_T('煮出来和普通米一样晶莹剔透，香气扑鼻。','Cooked just like regular rice, shiny and aromatic.'),s:5},{u:'📱 用**户',r:_T('做了炒饭，孩子吃得很开心，完全没吃出来是特殊大米。','Made fried rice, the kids loved it — couldn\'t tell the difference.'),s:5}],
  pn:_T('1kg家庭装，日常煮饭','1kg family pack for daily cooking'),
  sd:_T('家庭日常三餐替换普通大米，无需改变做菜习惯','Replace regular rice, change nothing else')
},
3:{
  taste:_T('无异味，蒸煮后颗粒分明不易软烂','No off-flavor, stays firm after cooking'),
  scenes:[_T('经济实惠长期家庭主食','Budget-friendly daily staple'),_T('煮粥、炒饭均可','Porridge & fried rice both work'),_T('适合预算有限的全家营养','Ideal for budget-conscious families')],
  revs:[{u:'📱 购**户',r:_T('性价比很高，一餐确实低，做一大锅全家都能吃。','Great value, makes a big pot for the whole family.'),s:4},{u:'📱 用**户',r:_T('口感比想象中好，没有奇怪的淀粉味。','Better than expected, no weird starch taste.'),s:4}],
  pn:_T('单餐定量，方便管理','Portion-controlled, easy management'),
  sd:_T('高性价比长期主食，瑞士设备生产品质稳定','High-value daily staple, Swiss equipment')
},
4:{
  taste:_T('面粉细腻，可制作面团有筋性不断裂','Fine flour, makes elastic dough that won\'t crack'),
  scenes:[_T('家庭自制面条/饺子/馄饨','Homemade noodles/dumplings/wontons'),_T('有需要的人群想吃面食时的首选','Go-to for daily needs craving noodles'),_T('解决市面淀粉粉易断痛点','Solves the cracking problem of starch flours')],
  revs:[{u:'📱 用**户',r:_T('加开水烫面能擀饺子皮，不像以前买的容易破。','Hot water dough makes real dumpling wrappers, no cracking.'),s:4}],
  pn:_T('500g装，家庭长期使用','500g pack for long-term use'),
  sd:_T('复配无胶配方，做面条饺子不破裂','Gum-free formula, perfect for noodles & dumplings')
},
5:{
  taste:_T('成品松软，有馒头香气，操作简单新手友好','Soft and fluffy, tastes like real steamed buns'),
  scenes:[_T('自制馒头花卷','Homemade steamed buns'),_T('有特殊营养需求的人群早餐主食','Breakfast staple for families'),_T('新手第一次做也能成功','Foolproof for beginners')],
  revs:[{u:'📱 买**家',r:_T('按说明做的，蒸出来的馒头很松软。','Followed instructions — buns came out super soft!'),s:5}],
  pn:_T('500g装，配好比例新手无压力','500g, pre-mixed ratio, beginner-friendly'),
  sd:_T('专用发酵酶配方，成品松软如普通馒头','Special enzyme formula, fluffy as regular buns')
},
6:{
  taste:_T('口感顺滑，接近传统米粉，无淀粉颗粒感','Smooth, close to traditional rice noodles'),
  scenes:[_T('凉拌米粉夏日消暑','Cold noodles for summer'),_T('热汤粉冬天暖身','Hot soup noodles for winter'),_T('炒粉快手正餐','Quick stir-fry noodles')],
  revs:[{u:'📱 用**户',r:_T('冷水泡了一夜，做炒粉完全可行。','Soaked overnight, stir-fried perfectly.'),s:4}],
  pn:_T('750g家庭装 / 125g尝鲜装','750g family / 125g trial'),
  sd:_T('真米脱蛋白原料，汤粉拌粉炒粉三吃','Real deproteinized rice, 3 ways to enjoy')
},
7:{
  taste:_T('酥脆香甜，三种口味各有特色','Crispy & sweet, 3 flavors to enjoy'),
  scenes:[_T('日常下午茶加餐','Afternoon snack for daily needs'),_T('学生课间零食','school break snack'),_T('出门随身携带，精确控量','Portable 10g packs for precise control')],
  revs:[{u:'📱 购**户',r:_T('终于有可以放心吃的饼干了！钠真的低，味道也好。','Finally a safe cookie! Super low sodium, great taste.'),s:5},{u:'📱 回**客',r:_T('独立包装太方便了，每天带两包上班。','Individual packs, take 2 to work daily.'),s:5}],
  pn:_T('10g×10包/盒','10g×10 packs/box'),
  sd:_T('有需要的人群安心加餐零食，钠比普通曲奇低98%','Safe snack choice, 98% less sodium')
},
8:{
  taste:_T('酥脆可口，可可/海苔两种风味','Crunchy, cocoa & seaweed flavors'),
  scenes:[_T('有需要的人群休闲零食','Leisure snack for daily needs'),_T('搭配酸奶沙拉更美味','Pair with yogurt or salad'),_T('儿童健康零食替代','Healthy kids snack alternative')],
  revs:[{u:'📱 尝**客',r:_T('海苔味很好吃，酥酥脆脆的，钠含量很低。','Seaweed flavor is great, low sodium.'),s:4}],
  pn:_T('160g/袋','160g/bag'),
  sd:_T('非油炸低糖高纤，有需要的人群专用休闲零食','Non-fried, low sugar, high fiber')
},
9:{
  taste:_T('真米粽香，软糯适中','Real rice dumpling aroma, perfectly soft'),
  scenes:[_T('端午节日必备','Must-have for Dragon Boat Festival'),_T('有需要的人群节日加餐，单只定量','Festive treat with portion control'),_T('送礼给有需要的人群亲友','Gift for health-conscious friends')],
  revs:[{u:'📱 购**户',r:_T('真空包装方便保存，加热就能吃。赤豆味很香。','Vacuum-packed, heat & eat. Red bean flavor is great.'),s:5}],
  pn:_T('100g/只，4种口味可选','100g each, 4 flavors'),
  sd:_T('低磷低钾极低钠，有需要的人群也能吃的端午粽','Low phosphorus & potassium, health-conscious zongzi')
}
};

function fS(){document.getElementById('fabBack').classList.remove('hidden')}
function fH(){document.getElementById('fabBack').classList.add('hidden')}
function setTab(i){document.querySelectorAll('.nav-tabs button').forEach((b,j)=>b.classList.toggle('on',j===i))}
function navigate(fn,...args){
  _curFn={fn,args};navStack.push({fn,args});fS();window['_'+fn](...args);window.scrollTo(0,0);setTimeout(setupReveal,30)}
function goBack(){if(navStack.length<=1){navStack=[];fH();_home();window.scrollTo(0,0);setTimeout(setupReveal,30);return}navStack.pop();let p=navStack[navStack.length-1];if(!p){navStack=[];fH();_home()}else window['_'+p.fn](...p.args);if(navStack.length<=1)fH();window.scrollTo(0,0);setTimeout(setupReveal,30)}
function prevProduct(id){if(id>1)navigate('detail',id-1)}
function nextProduct(id){if(id<10)navigate('detail',id+1)}

function imgOrFallback(img,fb,cls,lazy=true){return `<span class="fb-wrap ${cls}"><span class="fb-icon">${fb}</span></span>`+(img?`<img src="${img}">`:'')}
function bgSection(img,dark,inner){return `<section class="sec-bg reveal ${dark?'dark':''}"><div class="bg-img ph">${imgOrFallback(img,'','bg-fb')}</div><div class="bg-overlay"></div><div class="inner">${inner}</div></section>`}

let _io;
function setupReveal(){
  const sel='.reveal,.clip-reveal';
  if(_io)_io.disconnect();
  _io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');_io.unobserve(e.target);if(e.target.dataset.count)animateCount(e.target.querySelector('b'),e.target.dataset.count)}})},{threshold:.08,rootMargin:'0px 0px -5% 0px'});
  document.querySelectorAll('#app '+sel).forEach(el=>_io.observe(el));
  document.querySelectorAll('#app .mask').forEach((m,i)=>{setTimeout(()=>m.classList.add('show'),200+i*120)});
}
function animateCount(el,target){
  if(!el)return;
  const num=parseFloat(target);
  const unit=target.replace(/[0-9.]/g,'');
  const dur=1500;let start=null;
  function step(t){if(!start)start=t;const p=Math.min((t-start)/dur,1);const ease=1-Math.pow(1-p,3);el.textContent=(num*ease).toFixed(num%1===0?0:1)+unit;if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
}

// ═══ 首页 ═══
function _home(){setTab(0);document.getElementById('csSection').classList.remove('hidden');
document.getElementById('app').innerHTML=`
<div class="hero">
  <div class="hero-bg ph"><img src="images/rc-hero-4k.png" alt="恒生制药厂区"></div>
  <div class="bg-overlay"></div>
  <div class="hero-inner">
    <div class="hero-txt">
      <span class="hero-eyebrow">${_T('森无忧营养研究院','Senwuyou Nutrition Institute')}</span>
      <h1><span class="mask"><span>${_T('自然为源，','Nature as source, ')}</span></span><br><span class="mask"><span>${_T('科学为证','proven by science')}<em>${_T('无忧生活','Carefree Living')}</em></span></span></h1>
      <p class="hero-sub">${_T('依托济民可信医药集团三十年制药积淀，以专利脱蛋白技术重新定义特殊膳食。从实验室到餐桌，让每一餐都安心无忧。','Backed by Jemincare\'s 30-year pharmaceutical expertise, we redefine specialized nutrition with patented deproteinization technology. From lab to table, peace of mind in every meal.')}</p>
      <div class="hero-cta">
        <button class="btn-solid" onclick="document.querySelector('.film').scrollIntoView({behavior:'smooth'})">${_T('探索全系产品','Explore Products')}</button>
        <span class="link-arrow" onclick="navigate('pageAcademy')">${_T('了解营养科学','Nutrition Science')} →</span>
      </div>
    </div>
    
</div>
<div class="scroll-hint"><span class="line"></span>SCROLL</div>
</div>

<div class="trust">
  <div class="trust-item reveal" data-count="0"><b>安心</b><span>科学营养配比</span></div>
  <div class="trust-item reveal" data-count="10+"><b>10+</b><span>全品类覆盖</span></div>
  <div class="trust-item reveal" data-count="全"><b>全国</b><span>健康中国全覆盖</span></div>
  <div class="trust-item reveal" data-count="30"><b>30</b><span>年制药积累</span></div>
</div>

${bgSection(BG.wheat,false,`
  <div class="sec-head reveal"><span class="eyebrow d">${_T('品牌理念','Brand Essence')}</span><h2 class="h2">${_T('森 · 无忧','Sen · Wuyou')}<span class="en">Brand Essence</span></h2></div>
  <div class="story-grid reveal">
    <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#0b5e3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg></span><h3>「森」——自然与生机</h3><p>象征着自然与生机，寓意着健康与活力，如同茂密的森林般充满生命力。森无忧以大自然为灵感，将科学营养融入每一餐，用真实的原料为每一个家庭的餐桌增添安心之选。</p></div>
    <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#c89b4c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg></span><h3>「无忧」——安心与信赖</h3><p>表达了品牌的核心愿景——希望每一位用户都能在科学的饮食调理下，减轻负担，远离担忧，享受无忧无虑的生活。</p></div>
    <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#0b5e3e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></span><h3>国民营养计划2030</h3><p>森无忧积极响应国家「国民营养计划2030」，致力于推动全民科学膳食，提升国民营养健康水平，让均衡营养成为每个家庭的日常。</p></div>
  </div>
`)}

${bgSection(BG.doctor,true,`
  <div class="sec-head reveal"><span class="eyebrow d">${_T('核心优势','Core Strengths')}</span><h2 class="h2">${_T('为什么选择森无忧','Why Choose Senwuyou')}<span class="en">Our Strengths</span></h2></div>
  <div class="tech-grid reveal">
    <div class="tech-item"><div class="tech-icon imgico"><img src="images/rd-lab3.jpg" alt="脱蛋白技术"></div><h4>真米脱蛋白技术</h4><p>采用物理酶解工艺，在保留天然米香和口感的同时，精准调控营养成分，实现科学配比。</p></div>
    <div class="tech-item"><div class="tech-icon imgico"><img src="images/rd-line3.jpg" alt="科研生产"></div><h4>高标准科研生产</h4><p>全程温控生产，X光异物检测，HPLC精准分析。每一个环节都经得起科学检验。</p></div>
    <div class="tech-item"><div class="tech-icon imgico"><img src="images/meal-grain.jpg" alt="全品类覆盖"></div><h4>全品类覆盖</h4><p>从主食到大米、面粉、面条、曲奇、粽子，覆盖三餐加餐全部场景，满足多元需求。</p></div>
  </div>
`)}

<div class="reveal" style="max-width:640px;margin:clamp(24px,3vw,40px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head" style="text-align:center;margin-bottom:14px"><span class="eyebrow d">技术演示</span><h2 class="h2" style="font-size:clamp(18px,2.2vw,26px)">生物酶解 · 实时模拟<span class="en">Live Simulation</span></h2></div>
  <div id="dpChamber" style="position:relative;background:linear-gradient(150deg,#10231e,#0a1a16);border-radius:18px;overflow:hidden;height:220px">
    <canvas id="dpCanvas" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div style="position:relative;z-index:2;display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:14px 18px;pointer-events:none">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div style="display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:700;color:#9ef0dd;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);padding:4px 10px;border-radius:100px"><span style="width:6px;height:6px;border-radius:50%;background:#38e0c0;display:inline-block"></span>实时模拟</div>
        <div style="text-align:right">
          <div style="font-size:22px;font-weight:800;color:#38e0c0"><span id="dpProtein">7.0</span><em style="font-style:normal;font-size:11px;color:rgba(158,240,221,.7)">%</em></div>
          <div style="font-size:9px;color:rgba(255,255,255,.55)">米粒残余蛋白</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <span class="dpchip" style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.07);padding:4px 10px;border-radius:100px;border:1px solid rgba(255,255,255,.1)">注入酶液</span>
        <span class="dpchip" style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.07);padding:4px 10px;border-radius:100px;border:1px solid rgba(255,255,255,.1)">定向切解蛋白</span>
        <span class="dpchip" style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.07);padding:4px 10px;border-radius:100px;border:1px solid rgba(255,255,255,.1)">冲洗排出</span>
      </div>
    </div>
  </div>
</div>

<div class="film reveal">
<div class="film-head"><span class="eyebrow d">全部产品</span><h2 class="h2">健康主食全品类<span class="en">Product Line</span></h2></div>
${(function showProducts(){return P.map((p,i)=>`<div class="film-item reveal" onclick="navigate('detail',${p.id})"><div class="fi-pic">${imgOrFallback(p.img,p.ni[0]||'🍚','pf')}</div><div class="film-tag">${(p.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div><h3>${p.name}<span class="en">${p.en}</span></h3><p>${p.advantage||p.craft}</p></div>`).join('')})()}
</div>

<div class="warning reveal" style="margin:clamp(24px,3vw,40px) auto;max-width:var(--max-w);padding:clamp(16px,2vw,24px) clamp(20px,3vw,32px);background:#fff3e0;border-left:4px solid #e65100;border-radius:var(--radius);font-size:13px;line-height:1.7;color:#8a4a00">
<strong>⚠️ 重要提示</strong><br>
请在医生或专业营养师指导下使用；不可静脉输注；不适合普通健康人群使用。
</div>

<div class="reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">企业动态</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">最新资讯<span class="en" style="font-size:clamp(13px,1.4vw,17px)">News</span></h2></div>
  <div class="news-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px">
    <div class="news-card" style="background:#fff;border-radius:var(--radius-l);overflow:hidden;border:1px solid var(--line-l);box-shadow:var(--shadow-card);transition:all .4s;cursor:pointer" onclick="navigate('pageAcademy')">
      <div style="height:160px;position:relative;overflow:hidden"><img src="images/honor-trophy.jpg" alt="品牌荣誉" style="width:100%;height:100%;object-fit:cover"></div>
      <div style="padding:16px 20px"><span style="display:inline-block;font-size:10px;padding:3px 10px;border-radius:100px;background:var(--green-soft);color:var(--green);font-weight:600;margin-bottom:8px">品牌荣誉</span><h4 style="font-size:15px;font-weight:700;line-height:1.3;margin-bottom:6px">森无忧营养研究院荣获年度健康品牌</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">以科学营养理念和优质产品获得行业认可，持续推动国民营养健康事业发展。</p></div>
    </div>
    <div class="news-card" style="background:#fff;border-radius:var(--radius-l);overflow:hidden;border:1px solid var(--line-l);box-shadow:var(--shadow-card);transition:all .4s;cursor:pointer" onclick="navigate('pageAchieve')">
      <div style="height:160px;position:relative;overflow:hidden"><img src="images/rd-lab3.jpg" alt="科研实验室" style="width:100%;height:100%;object-fit:cover"><span style="position:absolute;bottom:6px;right:8px;font-size:9px;color:rgba(255,255,255,.8);background:rgba(0,0,0,.32);padding:2px 8px;border-radius:100px">场景示意图</span></div>
      <div style="padding:16px 20px"><span style="display:inline-block;font-size:10px;padding:3px 10px;border-radius:100px;background:var(--green-soft);color:var(--green);font-weight:600;margin-bottom:8px">科研动态</span><h4 style="font-size:15px;font-weight:700;line-height:1.3;margin-bottom:6px">森同（复方α-酮酸片）通过一致性评价</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">南京恒生制药「森同」获国家药监局批准，通过仿制药质量和安全性一致性评价，配合低蛋白饮食辅助肾脏健康管理。</p></div>
    </div>
    <div class="news-card" style="background:#fff;border-radius:var(--radius-l);overflow:hidden;border:1px solid var(--line-l);box-shadow:var(--shadow-card);transition:all .4s;cursor:pointer">
      <div style="height:160px;position:relative;overflow:hidden"><img src="images/rd-sign.jpg" alt="战略合作签约" style="width:100%;height:100%;object-fit:cover"><span style="position:absolute;bottom:6px;right:8px;font-size:9px;color:rgba(255,255,255,.8);background:rgba(0,0,0,.32);padding:2px 8px;border-radius:100px">场景示意图</span></div>
      <div style="padding:16px 20px"><span style="display:inline-block;font-size:10px;padding:3px 10px;border-radius:100px;background:var(--green-soft);color:var(--green);font-weight:600;margin-bottom:8px">合作发展</span><h4 style="font-size:15px;font-weight:700;line-height:1.3;margin-bottom:6px">9个月内完成3笔自研产品对外授权</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">济民可信先后与沪亚生物、芬兰Orion、罗氏基因泰克达成授权合作，创新实力获国际认可。</p></div>
    </div>
  </div>
</div>

<div class="reveal" style="max-width:var(--max-w);margin:clamp(40px,5vw,60px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">荣誉资质</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">品牌荣誉与行业认可<span class="en">Honors</span></h2></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px">
    <div class="tech-block"><div style="font-size:32px;margin-bottom:10px">🏆</div><h4 style="font-weight:700;color:var(--green);margin-bottom:6px">国家实用新型专利</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">2020年获得国家实用新型专利认证，真米脱蛋白技术受知识产权保护</p></div>
    <div class="tech-block"><div style="font-size:32px;margin-bottom:10px">🔬</div><h4 style="font-weight:700;color:var(--green);margin-bottom:6px">国家级科研课题</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">参与国家级营养研究课题，与多所高校建立产学研合作</p></div>
    <div class="tech-block"><div style="font-size:32px;margin-bottom:10px">✅</div><h4 style="font-weight:700;color:var(--green);margin-bottom:6px">一致性评价通过</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">森同复方a-酮酸片获国家药监局一致性评价批准</p></div>
    <div class="tech-block"><div style="font-size:32px;margin-bottom:10px">🤝</div><h4 style="font-weight:700;color:var(--green);margin-bottom:6px">国际授权合作</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">先后与沪亚生物、芬兰Orion、罗氏基因泰克达成授权合作</p></div>
    <div class="tech-block"><div style="font-size:32px;margin-bottom:10px">📋</div><h4 style="font-weight:700;color:var(--green);margin-bottom:6px">SC食品许可证</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">食品生产许可证SC10732012400833，药企质量管理体系保障</p></div>
  </div>
</div>

${bgSection(BG.wheat,false,`
  <div class="sec-head reveal"><span class="eyebrow d">服务保障</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">从研发到餐桌的全流程品质保障<span class="en">Service</span></h2></div>
  <div class="tech-grid reveal">
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">🧪</div><h4>源头甄选</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">优选黑龙江优质稻米原料产地，建立专属种植基地，从源头把控品质与安全，确保每一粒米的纯净和营养</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">⚙️</div><h4>制药级生产</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">依托济民可信恒生制药生产基地，执行GMP标准生产规范，10万级洁净车间，全程智能化温控管理</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">🔍</div><h4>质量检测</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">X光异物检测+HPLC精密分析+微生物指标全项检测，三检体系确保每批次产品均通过严格质检标准</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">🚚</div><h4>全国配送</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">全国范围的顺丰冷链配送网络，确保产品从出厂到消费者手中始终保持最佳品质状态</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">🏥</div><h4>专业服务</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">全国热线400-009-2535，专业营养师团队提供在线咨询服务，持续输出科学膳食知识</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">💚</div><h4>国民营养计划</h4><p style="font-size:13px;color:var(--muted);line-height:1.7">积极响应国家《国民营养计划2030》，以科学膳食推动全民营养健康，让均衡营养成为每个家庭的日常</p></div>
  </div>
`)}`;
}

// ═══ 详情 ═══
function _detail(id){setTab(0);document.getElementById('csSection').classList.add('hidden');const p=P.find(x=>x.id===id);if(!p){goBack();return}
const prev=P.find(x=>x.id===id-1),next=P.find(x=>x.id===id+1);
document.getElementById('app').innerHTML=`
<div class="page-bg">${imgOrFallback(BG.riceField,'','pb-fb')}</div>
<div class="detail">
  <div class="detail-hero">
    <div class="detail-img ph reveal" onclick="openLightbox('${p.img}','${p.name}',${p.id-1})">${imgOrFallback(p.img,IC[p.id-1],'df')}</div>
    <div class="detail-info reveal">
      <div class="detail-card">
        <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        <h1>${p.name}<span class="en">${p.en}</span></h1>
        <div class="fields">
          <div class="field"><span class="fl">净含量</span><span class="fv">${p.w}</span></div>
          <div class="field"><span class="fl">保质期</span><span class="fv">${p.shelf}</span></div>
          <div class="field"><span class="fl">贮存</span><span class="fv">${p.store}</span></div>
          <div class="field"><span class="fl">配料</span><span class="fv">${p.ings}</span></div>
        </div>
        <div class="section-t">食用方法</div>
        <div class="section-c"><ol>${p.method.map(m=>`<li>${m}</li>`).join('')}</ol></div>
        <div class="section-t">工艺与优势</div>
        <div class="section-c">${p.craft}</div>
        ${p.tech?`<div class="note"><p><strong>核心技术：</strong>${p.tech}</p></div>`:''}
        ${p.advantage?`<div class="note gold"><p><strong>核心优势：</strong>${p.advantage}</p></div>`:''}
        <button class="nutri-cta" onclick="navigate('nutrition',${p.id})">查看详细营养数据<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        <button class="nutri-cta" style="background:var(--paper-card);color:var(--green);box-shadow:none;border:1px solid var(--green-pale);margin-top:12px" onclick="navigate('calculator',${p.id})">用此产品试算一餐<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
  </div>
  ${D[p.id]?`
  <div class="detail-extra">
    <div class="extra-section reveal">
      <div class="extra-label">口感评价</div>
      <div class="extra-taste">"${D[p.id].taste}"</div>
    </div>
    <div class="extra-section reveal">
      <div class="extra-label">适用场景</div>
      <div class="extra-scenes">${D[p.id].scenes.map(s=>'<span class="scene-tag">'+s+'</span>').join('')}</div>
    </div>
    <div class="extra-section reveal">
      <div class="extra-label">用户评价</div>
      <div class="extra-revs">${D[p.id].revs.map(r=>'<div class="rev-card"><div class="rev-head"><span class="rev-user">'+r.u+'</span><span class="rev-stars">'+'★'.repeat(r.s)+'☆'.repeat(5-r.s)+'</span></div><div class="rev-text">"'+r.r+'"</div></div>').join('')}</div>
    </div>
    <div class="extra-section reveal">
      <div class="extra-label">参考价格</div>
      <div class="extra-price">${D[p.id].pn}</div>
    </div>
  </div>
  `:''}
  <div class="extra-section reveal" style="margin-top:0">
    <div class="extra-label">创意吃法</div>
    <div class="cook-grid">
      ${p.id<=3?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-onigiri.jpg" alt="饭团"></span><h5>饭团</h5><p>米饭晾凉捏团裹海苔</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-friedrice.jpg" alt="炒饭"></span><h5>炒饭</h5><p>热锅快炒加蛋液蔬菜</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-porridge.jpg" alt="煮粥"></span><h5>煮粥</h5><p>加水小火慢炖20分钟</p></div>`:''}
      ${p.id===4?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-dumpling.jpg" alt="饺子"></span><h5>饺子</h5><p>开水烫面擀皮包馅</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-noodle.jpg" alt="面条汤粉"></span><h5>面条</h5><p>揉团擀面切条煮食</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-dumpling.jpg" alt="馄饨"></span><h5>馄饨</h5><p>薄皮包肉馅煮汤</p></div>`:''}
      ${p.id===5?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/food-bun.jpg" alt="馒头"></span><h5>馒头</h5><p>两次醒发蒸10分钟</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-bun.jpg" alt="花卷"></span><h5>花卷</h5><p>擀面卷层扭花</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-bun.jpg" alt="包子"></span><h5>包子</h5><p>包馅蒸制</p></div>`:''}
      ${p.id===6?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-noodle.jpg" alt="面条汤粉"></span><h5>汤粉</h5><p>温水泡发煮汤</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-salad.jpg" alt="凉拌沙拉"></span><h5>凉拌</h5><p>煮熟冲凉拌酱</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-friedrice.jpg" alt="炒粉"></span><h5>炒粉</h5><p>热锅快炒加蔬菜</p></div>`:''}
      ${p.id===7?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/meal-cookie.jpg" alt="即食曲奇"></span><h5>即食</h5><p>开袋即食控量</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-drink.jpg" alt="配茶"></span><h5>配茶</h5><p>下午茶搭配</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-drink.jpg" alt="配奶"></span><h5>配奶</h5><p>蘸牛奶更香</p></div>`:''}
      ${p.id===8?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/meal-cookie.jpg" alt="即食零食"></span><h5>即食</h5><p>开袋即食</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-salad.jpg" alt="凉拌沙拉"></span><h5>配沙拉</h5><p>撒在沙拉上</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/food-drink.jpg" alt="配奶"></span><h5>配酸奶</h5><p>搭配酸奶更美味</p></div>`:''}
      ${p.id===9?`<div class="cook-card"><span class="ck-icon imgico"><img src="images/meal-rice.jpg" alt="加热即食"></span><h5>加热即食</h5><p>撕口微波2分钟</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/recipe-porridge.jpg" alt="水煮"></span><h5>水煮</h5><p>带包装沸水煮10分钟</p></div><div class="cook-card"><span class="ck-icon imgico"><img src="images/9-zongzi.jpg" alt="切片"></span><h5>切片</h5><p>切薄片配低蛋白酱</p></div>`:''}
    </div>
  </div>
  <div class="detail-nav reveal">
    <button class="prev" onclick="prevProduct(${p.id})" ${prev?'':'disabled'}><div><div class="dn-label">← 上一款</div><div class="dn-name">${prev?prev.name:_T('已是第一款','First Product')}</div></div></button>
    <button class="next" onclick="nextProduct(${p.id})" ${next?'':'disabled'}><div><div class="dn-label">下一款 →</div><div class="dn-name">${next?next.name:_T('已是最后一款','Last Product')}</div></div></button>
  </div>
</div>`;
}

// ═══ 营养 ═══
function _nutrition(id){setTab(0);document.getElementById('csSection').classList.add('hidden');const p=P.find(x=>x.id===id);if(!p){goBack();return}const n=p.n;const ni=p.ni||['🥩','🧂','🍌','🦴'];
const cells=[
  {z:n.protein==='0g',i:ni[0]||'🥩',l:'蛋白质',en:'Protein',v:n.protein},
  {z:n.na==='0mg',i:ni[1]||'🧂',l:'钠',en:'Sodium',v:n.na},
  {z:n.k==='0mg',i:ni[2]||'🍌',l:'钾',en:'Potassium',v:n.k},
  {z:false,i:ni[3]||'🦴',l:'磷',en:'Phosphorus',v:n.p},
  ...(n.energy?[{z:false,i:ni[4]||'⚡',l:'能量',en:'Energy',v:n.energy}]:[]),
  ...(n.more?[{z:false,i:'📋',l:'其他',en:'Other',v:n.more}]:[])
];
document.getElementById('app').innerHTML=`
<div class="page-bg">${imgOrFallback(BG.kitchen,'','pb-fb')}</div>
<div class="nutri">
  <div class="nutri-banner reveal"><h2>${p.name}<span class="en">${p.en}</span></h2><p>每 100g 核心营养数据</p></div>
  <div class="nutri-card-wrap reveal">
    <div class="nutri-row">${cells.map(x=>`<div class="nutri-cell${x.z?' zero':''}"><div class="ni">${x.i}</div><div class="nl">${_T(x.l,x.en)}</div><div class="nv">${x.v}</div><div class="nu">/100g</div></div>`).join('')}</div>
  </div>
  <div class="sec-head reveal" style="margin-top:30px"><span class="eyebrow d">完整参数</span><h2 class="h2" style="font-size:clamp(22px,2.6vw,32px)">完整参数表<span class="en">Full Specification</span></h2></div>
  <div class="table-scroll reveal"><div class="table-wrap"><table><thead><tr><th>项目</th><th>数据</th></tr></thead><tbody>
  <tr><td>产品名称</td><td>${p.name}</td></tr><tr><td>配料</td><td>${p.ings}</td></tr>
  <tr><td>净含量</td><td>${p.w}</td></tr><tr><td>保质期</td><td>${p.shelf}</td></tr>
  <tr><td>蛋白质</td><td style="color:var(--green);font-weight:800">${n.protein}</td></tr>
  <tr><td>钠</td><td>${n.na}</td></tr><tr><td>钾</td><td>${n.k}</td></tr><tr><td>磷</td><td>${n.p}</td></tr>
  ${n.energy?`<tr><td>能量</td><td>${n.energy}</td></tr>`:''}
  ${n.more?`<tr><td>其他</td><td>${n.more}</td></tr>`:''}
  <tr><td>贮存</td><td>${p.store}</td></tr></tbody></table></div></div></div>`;
}

// ═══ 一日三餐营养计算器 ═══
const FOOD_DB={
  米饭:{protein:2.6,fiber:0.3,energy:116,carb:25.9,fat:0.3,na:2,k:35,p:62},
  森无忧米饭:{protein:0,fiber:0.5,energy:160,carb:38,fat:0.5,na:0,k:0,p:18},
  森无忧大米:{protein:0,fiber:1.2,energy:350,carb:82,fat:0.8,na:19,k:1.4,p:34.8},
  面条:{protein:8.3,fiber:0.8,energy:284,carb:60,fat:0.7,na:15,k:107,p:92},
  馒头:{protein:7,fiber:1.3,energy:223,carb:44,fat:1.1,na:165,k:129,p:107},
  全麦面包:{protein:9,fiber:6,energy:246,carb:43,fat:3.4,na:350,k:250,p:230},
  燕麦:{protein:13.5,fiber:10.6,energy:367,carb:61,fat:7,na:2,k:429,p:521},
  小米粥:{protein:1.4,fiber:0.7,energy:46,carb:8.4,fat:0.7,na:4,k:30,p:30},
  红薯:{protein:1.1,fiber:1.6,energy:86,carb:20,fat:0.1,na:28,k:337,p:46},
  玉米:{protein:4,fiber:2.9,energy:112,carb:22.8,fat:1.2,na:1,k:238,p:117},
  鸡蛋:{protein:13,fiber:0,energy:144,carb:2.8,fat:8.8,na:131,k:126,p:198},
  鸡胸肉:{protein:24.6,fiber:0,energy:133,carb:0,fat:5,na:63,k:256,p:214},
  猪瘦肉:{protein:20.3,fiber:0,energy:143,carb:1.5,fat:6.2,na:57,k:305,p:189},
  牛肉:{protein:20,fiber:0,energy:125,carb:2,fat:4.2,na:53,k:270,p:198},
  鱼肉:{protein:17,fiber:0,energy:110,carb:0,fat:4,na:70,k:300,p:200},
  虾仁:{protein:18.6,fiber:0,energy:93,carb:2.8,fat:0.8,na:119,k:244,p:215},
  豆腐:{protein:8.1,fiber:0.4,energy:81,carb:3.8,fat:3.7,na:7,k:121,p:121},
  豆浆:{protein:1.8,fiber:0.5,energy:30,carb:1.1,fat:0.7,na:3,k:154,p:49},
  牛奶:{protein:3,fiber:0,energy:54,carb:3.4,fat:3.2,na:37,k:109,p:93},
  酸奶:{protein:2.5,fiber:0,energy:72,carb:9.3,fat:2.7,na:39,k:155,p:85},
  西兰花:{protein:4.1,fiber:1.6,energy:36,carb:4.3,fat:0.6,na:33,k:316,p:66},
  番茄:{protein:0.9,fiber:0.5,energy:15,carb:3.3,fat:0.2,na:5,k:237,p:24},
  黄瓜:{protein:0.8,fiber:0.5,energy:15,carb:2.5,fat:0.2,na:2,k:147,p:24},
  青菜:{protein:1.5,fiber:1.1,energy:18,carb:2,fat:0.3,na:73,k:185,p:40},
  菠菜:{protein:2.6,fiber:1.7,energy:28,carb:4.5,fat:0.3,na:79,k:311,p:47},
  胡萝卜:{protein:1,fiber:1.1,energy:37,carb:8.8,fat:0.2,na:69,k:320,p:35},
  土豆:{protein:2,fiber:0.7,energy:81,carb:17.2,fat:0.2,na:6,k:421,p:57},
  香菇:{protein:2.2,fiber:3.3,energy:26,carb:5,fat:0.3,na:9,k:464,p:112},
  南瓜:{protein:0.7,fiber:0.8,energy:23,carb:5,fat:0.1,na:1,k:340,p:24},
  苹果:{protein:0.2,fiber:1.2,energy:53,carb:13.5,fat:0.2,na:1,k:119,p:12},
  香蕉:{protein:1.4,fiber:1.2,energy:93,carb:22,fat:0.2,na:1,k:358,p:22},
  橙子:{protein:0.8,fiber:0.6,energy:48,carb:11,fat:0.2,na:0,k:181,p:20},
  猕猴桃:{protein:1,fiber:2.6,energy:61,carb:14,fat:0.5,na:3,k:312,p:34},
  蓝莓:{protein:0.7,fiber:2.4,energy:57,carb:14,fat:0.3,na:1,k:77,p:12},
  坚果:{protein:15,fiber:9,energy:560,carb:20,fat:45,na:2,k:600,p:490},
};

function _calculator(id){setTab(6);
  const p=id?P.find(x=>x.id===id):null;
  const prefill=p?(p.name+'180g'):'';
document.getElementById('app').innerHTML=`
<div class="page-bg">${imgOrFallback(BG.lab,'','pb-fb')}</div>
<div class="detail" style="max-width:820px">
  <div class="sec-head reveal" style="margin-bottom:28px"><span class="eyebrow d">Calculator · 营养计算器</span><h2 class="h2">${_T('一日三餐营养计算器','Daily Nutrition Calculator')}<span class="en">${_T('控蛋白 · 控钠钾磷','Track Protein · Na · K · P')}</span></h2><p class="sec-sub">${_T('输入今天三餐吃了什么，自动核算蛋白质、钠、钾、磷是否超出每日限额——专为需要控制蛋白与矿物质摄入的人群设计。','Enter your three meals to auto-check protein, sodium, potassium and phosphorus against your daily limits.')}</p></div>
  <div class="calc-box reveal" style="padding:28px">
    <div class="calc-goals">
      <div class="cg-title">🎯 ${_T('每日营养限额','Daily Limits')}<span class="cg-hint">${_T('示例值，请遵医嘱调整','example — adjust per advice')}</span></div>
      <div class="cg-grid">
        <div class="cg-item"><label>${_T('蛋白质','Protein')}</label><div class="cg-input"><input id="goalProtein" type="number" value="40" min="0" oninput="updateCalc()"><i>g</i></div></div>
        <div class="cg-item"><label>${_T('钠','Sodium')}</label><div class="cg-input"><input id="goalNa" type="number" value="2000" min="0" oninput="updateCalc()"><i>mg</i></div></div>
        <div class="cg-item"><label>${_T('钾','Potassium')}</label><div class="cg-input"><input id="goalK" type="number" value="2000" min="0" oninput="updateCalc()"><i>mg</i></div></div>
        <div class="cg-item"><label>${_T('磷','Phosphorus')}</label><div class="cg-input"><input id="goalPhos" type="number" value="800" min="0" oninput="updateCalc()"><i>mg</i></div></div>
      </div>
    </div>
    <div style="display:grid;gap:16px;margin-top:22px">
      <div class="calc-field" style="background:var(--paper-card);padding:16px;border-radius:var(--radius)">
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:14px;font-weight:700">🌅 ${_T('早餐','Breakfast')}</label>
        <input type="text" id="bkfst" placeholder="${_T('如：米饭200g+鸡蛋1个+牛奶250ml','e.g. rice200g+egg1+milk250ml')}" oninput="updateCalc()" style="width:100%;padding:12px;border:1px solid var(--line);border-radius:8px;font-size:14px;font-family:var(--font-sans)">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
          <span class="qadd" onclick="addFood('bkfst','米饭200g')">🍚 ${_T('米饭','Rice')}</span>
          <span class="qadd" onclick="addFood('bkfst','鸡蛋1个')">🥚 ${_T('鸡蛋','Egg')}</span>
          <span class="qadd" onclick="addFood('bkfst','牛奶250ml')">🥛 ${_T('牛奶','Milk')}</span>
          <span class="qadd" onclick="addFood('bkfst','全麦面包50g')">🍞 ${_T('面包','Bread')}</span>
          <span class="qadd" onclick="addFood('bkfst','森无忧米饭180g')">🍚 ${_T('森无忧','Senwuyou')}</span>
        </div>
      </div>
      <div class="calc-field" style="background:var(--paper-card);padding:16px;border-radius:var(--radius)">
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:14px;font-weight:700">☀️ ${_T('午餐','Lunch')}</label>
        <input type="text" id="lunch" placeholder="${_T('如：米饭300g+鸡胸肉100g+西兰花150g','e.g. rice300g+chicken100g+broccoli150g')}" oninput="updateCalc()" style="width:100%;padding:12px;border:1px solid var(--line);border-radius:8px;font-size:14px;font-family:var(--font-sans)">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
          <span class="qadd" onclick="addFood('lunch','米饭300g')">🍚 ${_T('米饭','Rice')}</span>
          <span class="qadd" onclick="addFood('lunch','鸡胸肉100g')">🍗 ${_T('鸡肉','Chicken')}</span>
          <span class="qadd" onclick="addFood('lunch','西兰花150g')">🥦 ${_T('西兰花','Broccoli')}</span>
          <span class="qadd" onclick="addFood('lunch','鱼肉100g')">🐟 ${_T('鱼肉','Fish')}</span>
          <span class="qadd" onclick="addFood('lunch','森无忧米饭300g')">🍚 ${_T('森无忧','Senwuyou')}</span>
        </div>
      </div>
      <div class="calc-field" style="background:var(--paper-card);padding:16px;border-radius:var(--radius)">
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:14px;font-weight:700">🌙 ${_T('晚餐','Dinner')}</label>
        <input type="text" id="dinner" placeholder="${_T('如：米饭200g+鱼肉120g+菠菜150g','e.g. rice200g+fish120g+spinach150g')}" oninput="updateCalc()" style="width:100%;padding:12px;border:1px solid var(--line);border-radius:8px;font-size:14px;font-family:var(--font-sans)">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
          <span class="qadd" onclick="addFood('dinner','米饭200g')">🍚 ${_T('米饭','Rice')}</span>
          <span class="qadd" onclick="addFood('dinner','鱼肉120g')">🐟 ${_T('鱼肉','Fish')}</span>
          <span class="qadd" onclick="addFood('dinner','菠菜150g')">🥬 ${_T('菠菜','Spinach')}</span>
          <span class="qadd" onclick="addFood('dinner','豆腐100g')">🧈 ${_T('豆腐','Tofu')}</span>
          <span class="qadd" onclick="addFood('dinner','森无忧米饭200g')">🍚 ${_T('森无忧','Senwuyou')}</span>
        </div>
      </div>
    </div>
    <div class="calc-result" id="calcResult" style="margin-top:24px">
      <div class="cr-title">📊 ${_T('今日摄入 vs 限额','Intake vs Limit')}</div>
      <div class="calc-bars" id="calcBars"></div>
      <div class="cr-mini" id="calcExtra"></div>
    </div>
    <div id="calcDetail" style="margin-top:16px;font-size:12px;color:var(--muted);line-height:1.8"></div>
    <div class="calc-suggest" id="calcSuggest" style="margin-top:16px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px"></div>
  </div>
  <div class="note reveal" style="margin-top:24px;max-width:680px;margin-left:auto;margin-right:auto"><p><strong>${_T('温馨提示：','Tip: ')}</strong>${_T('本工具基于常见食物营养数据库估算，普通食物数据来自公共营养资料，森无忧产品以包装标签为准。结果仅供参考，不构成医疗建议，具体营养方案请遵医嘱。格式：食物名+数量，多个用加号分隔。','Estimates only. Common-food data from public nutrition references; Senwuyou products per package label. Not medical advice. Format: food+amount, separate with +.')}</p></div>
</div>`;
  if(prefill){const le=document.getElementById('lunch');if(le)le.value=prefill;}
  setTimeout(()=>{setupReveal();updateCalc();},30);
}

function addFood(mealId, foodStr){
  const el=document.getElementById(mealId);
  const cur=el.value.trim();
  el.value=cur+(cur?'+':'')+foodStr;
  updateCalc();
}

function parseMeal(text){
  if(!text||!text.trim()) return [];
  const items=[];
  const parts=text.split(/[+＋、，,]/);
  for(let p of parts){
    p=p.trim();
    if(!p) continue;
    // Try to match "foodName amountWithUnit" or "amount foodName"
    // Common patterns: "米饭200g", "鸡蛋1个", "牛奶250ml", "苹果1个"
    let foodName='', amount=0;
    // Try "foodName number+unit" pattern
    const m1=p.match(/^(.+?)([0-9]+\.?[0-9]*)\s*(g|克|ml|毫升|个|只|条|碗|杯|斤|两|kg|L|盒)$/);
    if(m1){
      foodName=m1[1].trim();
      const num=parseFloat(m1[2]);
      const unit=m1[3];
      amount=estimateWeight(foodName,num,unit);
    } else {
      // Try just "foodName number" 
      const m2=p.match(/^(.+?)([0-9]+\.?[0-9]*)$/);
      if(m2){
        foodName=m2[1].trim();
        amount=parseFloat(m2[2]);
      }
    }
    if(foodName && amount>0){
      // Find matching food in DB
      const match=findFood(foodName);
      if(match) items.push({name:match.key,amount:amount});
    }
  }
  return items;
}

function estimateWeight(foodName,num,unit){
  const name=foodName.toLowerCase();
  // Approximate weights for common units
  if(unit==='g'||unit==='克'||unit==='ml'||unit==='毫升') return num;
  if(unit==='kg') return num*1000;
  if(unit==='L'||unit==='l') return num*1000;
  if(unit==='斤') return num*500;
  if(unit==='两') return num*50;
  if(unit==='个'||unit==='只'||unit==='条'){
    if(name.includes('蛋')) return num*50;
    if(name.includes('苹果')||name.includes('橙')) return num*200;
    if(name.includes('香蕉')) return num*100;
    if(name.includes('猕猴桃')) return num*80;
    if(name.includes('番茄')||name.includes('西红柿')) return num*150;
    if(name.includes('土豆')) return num*150;
    if(name.includes('粽子')) return num*100;
    return num*100; // default
  }
  if(unit==='碗'){
    if(name.includes('饭')||name.includes('米')) return num*200;
    if(name.includes('粥')||name.includes('面')) return num*300;
    return num*200;
  }
  if(unit==='杯') return num*250;
  if(unit==='盒'){
    if(name.includes('森无忧')) return num*180;
    return num*200;
  }
  return num*100;
}

function findFood(input){
  const inp=input.toLowerCase().trim();
  const keys=Object.keys(FOOD_DB);
  // Exact match
  for(let k of keys) if(inp===k) return {key:k};
  // Contains match
  let best=null;
  for(let k of keys){
    if(k.includes(inp)||inp.includes(k)){
      if(!best||k.length>best.length) best=k;
    }
  }
  if(best) return {key:best};
  // Partial keyword matching
  const kwMap={'饭':'米饭','米':'米饭','饭团':'米饭','炒饭':'米饭',
    '鸡':'鸡胸肉','猪':'猪瘦肉','牛':'牛肉','鱼':'鱼肉','虾':'虾仁',
    '蛋':'鸡蛋','面':'面条','包':'全麦面包',
    '奶':'牛奶','豆':'豆腐','浆':'豆浆',
    '菜':'青菜','菠':'菠菜','西':'西兰花','花':'西兰花',
    '果':'苹果','蕉':'香蕉','莓':'蓝莓','果':'苹果',
    '薯':'红薯','瓜':'南瓜','菇':'香菇',
    '坚果':'坚果','核桃':'坚果','杏仁':'坚果',
    '森':'森无忧米饭'};
  for(let [kw,food] of Object.entries(kwMap)){
    if(inp.includes(kw)) return {key:food};
  }
  // Check if it's a common food word in any key
  for(let k of keys){
    if(k.length>=2 && inp.startsWith(k.substring(0,2))) return {key:k};
  }
  return null;
}

function updateCalc(){
  const gP=parseFloat(document.getElementById('goalProtein')?.value)||0;
  const gNa=parseFloat(document.getElementById('goalNa')?.value)||0;
  const gK=parseFloat(document.getElementById('goalK')?.value)||0;
  const gPh=parseFloat(document.getElementById('goalPhos')?.value)||0;
  const bkfst=document.getElementById('bkfst')?.value||'';
  const lunch=document.getElementById('lunch')?.value||'';
  const dinner=document.getElementById('dinner')?.value||'';

  const allItems=[...parseMeal(bkfst),...parseMeal(lunch),...parseMeal(dinner)];
  const bars=document.getElementById('calcBars');
  const extra=document.getElementById('calcExtra');
  const detail=document.getElementById('calcDetail');
  const suggest=document.getElementById('calcSuggest');
  if(allItems.length===0||!bars){
    if(bars)bars.innerHTML='';
    if(extra)extra.innerHTML='';
    if(detail)detail.innerHTML='';
    if(suggest)suggest.innerHTML='';
    return;
  }

  let tP=0,tNa=0,tK=0,tPh=0,tE=0,tF=0,tC=0,tFat=0;
  const detailLines=[];
  let usedSenwu=false;
  for(let item of allItems){
    const f=FOOD_DB[item.name];
    if(!f) continue;
    const r=item.amount/100;
    const p=(f.protein||0)*r,na=(f.na||0)*r,k=(f.k||0)*r,ph=(f.p||0)*r;
    tP+=p;tNa+=na;tK+=k;tPh+=ph;tE+=f.energy*r;tF+=f.fiber*r;tC+=f.carb*r;tFat+=f.fat*r;
    if(/森无忧/.test(item.name)) usedSenwu=true;
    detailLines.push(item.name+' '+item.amount+'g → '+_T('蛋白','Protein')+' '+p.toFixed(1)+'g · '+_T('钠','Na')+' '+Math.round(na)+'mg · '+_T('钾','K')+' '+Math.round(k)+'mg · '+_T('磷','P')+' '+Math.round(ph)+'mg');
  }

  const fmt=v=>{const x=Math.round(v*10)/10;return (x%1===0)?String(x):x.toFixed(1);};
  const rows=[
    {l:_T('蛋白质','Protein'),u:'g',v:tP,goal:gP},
    {l:_T('钠','Sodium'),u:'mg',v:tNa,goal:gNa},
    {l:_T('钾','Potassium'),u:'mg',v:tK,goal:gK},
    {l:_T('磷','Phosphorus'),u:'mg',v:tPh,goal:gPh}
  ];
  bars.innerHTML=rows.map(b=>{
    const pct=b.goal>0?Math.min(100,b.v/b.goal*100):0;
    const over=b.goal>0&&b.v>b.goal;
    return `<div class="cb-row${over?' over':''}">
      <div class="cb-head"><span class="cb-l">${b.l}</span><span class="cb-v">${fmt(b.v)}${b.u} / ${b.goal||'—'}${b.u}</span></div>
      <div class="cb-track"><div class="cb-fill" style="width:${pct}%"></div></div>
      ${over?`<div class="cb-warn">⚠️ ${_T('已超出限额','over limit by')} ${fmt(b.v-b.goal)}${b.u}</div>`:`<div class="cb-sub">${pct.toFixed(0)}% ${_T('已用','used')}</div>`}
    </div>`;
  }).join('');

  extra.innerHTML=`<span>🔥 ${_T('能量','Energy')} ${Math.round(tE)} kcal</span><span>🍚 ${_T('碳水','Carb')} ${tC.toFixed(0)}g</span><span>🥑 ${_T('脂肪','Fat')} ${tFat.toFixed(1)}g</span><span>🌿 ${_T('纤维','Fiber')} ${tF.toFixed(1)}g</span>`;

  detail.innerHTML=`<div style="background:var(--paper-card);border-radius:8px;padding:12px 16px"><strong>${_T('按每种食物分解','Per Food Breakdown')}：</strong><br>${detailLines.join('<br>')}</div>`;

  let sugg='';
  if(usedSenwu) sugg+=`<div class="cs-item"><span class="cs-icon">🍚</span><span class="cs-name">${_T('已选用森无忧','Using Senwuyou')}</span><span class="cs-data">${_T('低蛋白主食，按0g蛋白计入','low-protein staple counted as 0g')}</span></div>`;
  rows.forEach(b=>{if(b.goal>0&&b.v>b.goal) sugg+=`<div class="cs-item"><span class="cs-icon">⚠️</span><span class="cs-name">${b.l}${_T('偏高','high')}</span><span class="cs-data">${_T('建议减少相关食物','consider reducing')}</span></div>`;});
  if(!rows.some(b=>b.goal>0&&b.v>b.goal)) sugg+=`<div class="cs-item"><span class="cs-icon">✅</span><span class="cs-name">${_T('四项均在限额内','All within limits')}</span><span class="cs-data">${_T('保持当前搭配','Keep it up')}</span></div>`;
  if(tF<20) sugg+=`<div class="cs-item"><span class="cs-icon">🥬</span><span class="cs-name">${_T('纤维偏少','Low fiber')}</span><span class="cs-data">${_T('目标25-30g/天','target 25-30g/day')}</span></div>`;
  else sugg+=`<div class="cs-item"><span class="cs-icon">✅</span><span class="cs-name">${_T('纤维充足','Fiber OK')}</span><span class="cs-data">${_T('继续保持','Keep it up')}</span></div>`;
  suggest.innerHTML=sugg;
}

window.addFood=addFood;

// ═══ 联系我们 / 营养咨询 ═══
function _contact(){setTab(0);
document.getElementById('app').innerHTML=`
<div class="page-bg">${imgOrFallback(BG.family,'','pb-fb')}</div>
<div class="detail" style="max-width:880px">
  <div class="sec-head reveal" style="margin-bottom:32px"><span class="eyebrow d">Contact · 联系</span><h2 class="h2">联系我们 / 营养咨询<span class="en">Contact & Nutrition Consultation</span></h2><p class="sec-sub">有任何疑问？填写下方表单或直接联系我们。</p></div>
  <div class="contact-grid">
    <div class="reveal">
      <form class="contact-form" onsubmit="submitContact(event)">
        <input type="text" placeholder="您的称呼" required>
        <input type="tel" placeholder="联系电话" required>
        <select required>
          <option value="">请选择人群类型</option>
          <option>CKD 特殊营养需求</option> 营养关注</option>
          <option>其他</option>
        </select>
        <textarea placeholder="请描述您的问题或需求..." required></textarea>
        <button type="submit" class="nutri-cta" style="width:100%">提交咨询</button>
      </form>
    </div>
    <div class="contact-info-card reveal">
      <h4>联系方式</h4>
      <div class="ci-row"><span class="ci-icon">📞</span><div><div class="ci-label">全国热线</div><div class="ci-val">400-009-2535</div></div></div>
      <div class="ci-row"><span class="ci-icon">🏢</span><div><div class="ci-label">厂区电话</div><div class="ci-val">025-57212809</div></div></div>
      <div class="ci-row"><span class="ci-icon">📍</span><div><div class="ci-label">地址</div><div class="ci-val">南京市溧水经济开发区机场路18号</div></div></div>
      <div class="ci-row"><span class="ci-icon">🕐</span><div><div class="ci-label">服务时间</div><div class="ci-val">周一至周五 9:00-17:00</div></div></div>
      <div class="ci-row"><span class="ci-icon">🏥</span><div><div class="ci-label">营养咨询</div><div class="ci-val">专业营养师团队在线答疑</div></div></div>
      <div class="ci-row"><span class="ci-icon">🚚</span><div><div class="ci-label">配送</div><div class="ci-val">全国配送 · 顺丰冷链</div></div></div>
    </div>
  </div>
</div>`;
setTimeout(setupReveal,30)}

function submitContact(e){e.preventDefault();alert(_T('感谢您的咨询！我们将在1个工作日内与您联系。','Thank you! We will contact you within 1 business day.'));e.target.reset()}

// ═══ 产品对比工具 ═══
// ═══ 品牌 ═══
function _pageBrand(){setTab(1);document.getElementById('csSection').classList.add('hidden');
document.getElementById('app').innerHTML=`
${bgSection(BG.riceField,true,`
  <div class="sec-head reveal"><span class="eyebrow d">品牌故事</span><h2 class="h2">以顶尖科研铸专业壁垒，以专利技术护全民无忧<span class="en">Our Story</span></h2><p class="sec-sub">「森」象征自然与蓬勃生机，代表健康本源与生命活力，一如繁茂林海生生不息；「无忧」承载品牌核心愿景——愿每一位用户依托科学营养管理，卸下身心负担，消解饮食焦虑，尽享从容无忧的生活。</p></div>
`)}

<div class="story-grid reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#6b5b9a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg></span><h3>医药基因</h3><p>森无忧背靠济民可信医药集团强大产业平台——济民可信连续多年跻身中国医药工业百强前十，在肾脏健康、心脑血管等慢病领域拥有深厚科研积淀、完善质控体系与全球化产业布局，雄厚医药基因奠定森无忧高标准发展根基。</p></div>
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1f6f78" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M9 2v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V2"/><path d="M7 2h10M8 15h8"/></svg></span><h3>循证式科研</h3><p>跨学科复合型研发团队汇聚专业营养学、食品科学、生物工程、食品工艺研发等多领域专业人才，长期深度关注特殊人群真实膳食困境，以实际营养需求为研发原点，大量开展试验比对与工艺迭代，拒绝粗放式配方开发。</p></div>
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#a24d6b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></span><h3>爱无界 · 公益担当</h3><p>2022年上海疫情期间，森无忧背后的济民可信恒生制药向上海百余名肾脏健康与氨基酸代谢需求人群，无偿捐赠低蛋白米饭、大米、曲奇各100箱，价值10.7万元，保障特殊需求人士一个月口粮。（据新华财经报道）</p></div>
</div>

<div class="story-grid reveal" style="max-width:var(--max-w);margin:clamp(20px,3vw,40px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#1f6f78" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2"/><path d="M8.5 2h7M7 16h10"/></svg></span><h3>研发中心</h3><p>南京生命能科技有限公司——高新技术企业，配备符合GLP规范的现代化实验室，拥有硕士占比突出的复合型科研团队，持续承担特殊膳食配方研发、工艺迭代、技术验证等核心工作。</p></div>
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#6b5b9a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg></span><h3>制造中心</h3><p>南京恒生制药有限公司——创立于1995年，国家专精特新"小巨人"、高新技术制药企业，具备成熟GMP标准化生产线，森无忧产品参照药品生产管理规范实施严苛管控。</p></div>
  <div class="story-card"><span class="story-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#a24d6b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span><h3>运营中心</h3><p>森无忧（南京）食品科技有限公司——负责品牌市场运营、渠道拓展与专业营养服务落地，已与全国数十家医疗机构建立稳定供应合作关系，推动科学特殊膳食方案走进实践应用。</p></div>
</div>

${bgSection(BG.doctor,true,`
  <div class="sec-head reveal"><span class="eyebrow d">发展历程</span><h2 class="h2">依托三十年制药经验<span class="en">Timeline</span></h2></div>
  <div class="award-timeline reveal" style="max-width:var(--max-w);margin:0 auto;padding:0 clamp(20px,4vw,48px)">
    <div class="tl-step"><div class="tl-dot">1995</div><div class="tl-card"><h4>制造根基：恒生制药创立</h4><p>南京恒生制药有限公司创立，深耕肾科领域，后成为国家专精特新"小巨人"、高新技术制药企业，为森无忧奠定制药级生产根基。</p></div></div>
    <div class="tl-step"><div class="tl-dot">2016</div><div class="tl-card"><h4>真米脱蛋白技术产业化</h4><p>森无忧率先实现真米脱蛋白技术产业化落地，推出低蛋白系列产品，跻身国内最早将该技术规模化运用于低蛋白食品生产的科研机构，打破控蛋白人群膳食选择稀缺、口感不佳的行业瓶颈。</p></div></div>
    <div class="tl-step"><div class="tl-dot">2020</div><div class="tl-card"><h4>斩获国家实用新型专利</h4><p>特殊膳食加工工艺创新成功获得国家实用新型专利认证——这份国家级认证是研发团队无数次实验调试、工艺优化换来的硬核成果，为森无忧构筑起难以复制的技术护城河。</p></div></div>
    <div class="tl-step"><div class="tl-dot">今天</div><div class="tl-card"><h4>三中心创新转化体系</h4><p>构建"专业研究院+独立研发中心+制药级生产基地+运营中心"完整体系，已与全国数十家医疗机构建立稳定供应合作，持续推动科学特殊膳食方案走进实践应用。</p></div></div>
    <div class="tl-step"><div class="tl-dot">持续</div><div class="tl-card"><h4>多赛道精准营养布局</h4><p>针对肾脏健康、特殊营养需求、控糖人群、肠道养护群体等不同人群生理特征，持续输出科学、多元、适配性更强的个性化膳食解决方案。</p></div></div>
  </div>
`)}

<div class="flow-steps reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="flow-step"><div class="flow-num">01</div><h4>原料甄选</h4><p>精选优质稻米，产地溯源，确保原料品质。</p></div>
  <div class="flow-step"><div class="flow-num">02</div><h4>物理酶解</h4><p>真米物理酶解技术，精准调控营养成分。</p></div>
  <div class="flow-step"><div class="flow-num">03</div><h4>蒸制熟化</h4><p>智能温控蒸制，锁住天然米香与营养。</p></div>
  <div class="flow-step"><div class="flow-num">04</div><h4>X光检测</h4><p>全覆盖X光异物检测，确保每一份产品的安全。</p></div>
  <div class="flow-step"><div class="flow-num">05</div><h4>HPLC分析</h4><p>高效液相色谱精准分析，品质数据化管控。</p></div>
  <div class="flow-step"><div class="flow-num">06</div><h4>无菌封装</h4><p>全程无菌环境封装，确保产品从出厂到餐桌的品质。</p></div>
</div>

<div class="reveal" style="max-width:var(--max-w);margin:clamp(40px,5vw,60px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">企业荣誉</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">科研实力与行业影响力<span class="en">Credentials</span></h2></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">🏆</div><h4 style="font-weight:700;margin-bottom:6px">国家实用新型专利</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">2020年获国家实用新型专利认证，真米脱蛋白技术获知识产权保护，技术水平行业领先</p></div>
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">🔬</div><h4 style="font-weight:700;margin-bottom:6px">产学研合作</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">与多所高校及科研机构建立长期产学研合作关系，参与国家级营养研究课题</p></div>
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">📋</div><h4 style="font-weight:700;margin-bottom:6px">药品一致性评价</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">森同复方a-酮酸片通过仿制药质量和安全性一致性评价，药品质控能力业内标杆</p></div>
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">🌍</div><h4 style="font-weight:700;margin-bottom:6px">国际化战略</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">先后与沪亚生物、芬兰Orion、罗氏基因泰克等国际医药巨头达成授权合作，创新获全球认可</p></div>
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">🤝</div><h4 style="font-weight:700;margin-bottom:6px">行业认可</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">森无忧营养研究院获评年度健康品牌，以科学营养理念和优质产品获行业与消费者双重认可</p></div>
    <div class="tech-block"><div style="font-size:36px;margin-bottom:10px">📚</div><h4 style="font-weight:700;margin-bottom:6px">全国合作网络</h4><p style="font-size:12px;color:var(--muted);line-height:1.6">与数十家医疗机构建立稳定的供应合作关系，持续推动科学特殊膳食方案走进实践应用</p></div>
  </div>
</div>

<div class="reveal" style="max-width:var(--max-w);margin:clamp(40px,5vw,60px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">社会责任</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">公益行动与社会担当<span class="en">CSR</span></h2></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">💝</div><h4 style="font-weight:700;margin-bottom:8px">上海疫情公益捐赠</h4><p style="font-size:12px;color:var(--muted);line-height:1.7">2022年上海疫情期间，森无忧背后的济民可信恒生制药向上海百余名肾脏健康与氨基酸代谢需求人群，无偿捐赠低蛋白米饭、大米、曲奇各100箱，价值10.7万元，保障特殊需求人士一个月口粮。（据新华财经报道）</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">📖</div><h4 style="font-weight:700;margin-bottom:8px">全民营养科普行动</h4><p style="font-size:12px;color:var(--muted);line-height:1.7">2023年启动全民营养科普行动，联合多家机构推广科学膳食理念，覆盖线上知识传播与线下社区讲座，年触达人群超百万人次</p></div>
    <div class="tech-block"><div style="font-size:28px;margin-bottom:8px">🎓</div><h4 style="font-weight:700;margin-bottom:8px">校园营养教育</h4><p style="font-size:12px;color:var(--muted);line-height:1.7">与高校和中小学合作开展营养科普课堂，培养青少年科学膳食意识，从娃娃抓起推动国民营养健康</p></div>
  </div>
</div>`;
}

// ═══ 科普 ═══
function _pageScience(){setTab(4);document.getElementById('csSection').classList.add('hidden');
document.getElementById('app').innerHTML=`
${bgSection(BG.wheat,false,`
  <div class="sec-head reveal"><span class="eyebrow d">营养科普</span><h2 class="h2">科学膳食 健康之道<span class="en">Science</span></h2><p class="sec-sub">了解不同健康状态下的营养需求，掌握科学饮食方法。知识是健康的第一道防线。</p></div>
`)}

<div class="story-grid reveal" style="max-width:var(--max-w);margin:20px auto;padding:0 clamp(20px,4vw,48px)">
  <div class="story-card" onclick="navigate('scienceTopic','kidney')"><div class="story-icon spic"><img src="images/sci-kidney.jpg" alt="肾脏健康"></div><h3>肾脏健康与营养</h3><p>了解肾功能不同阶段的营养需求，掌握科学饮食搭配，均衡膳食管理。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','pku')"><div class="story-icon spic"><img src="images/sci-pku.jpg" alt="氨基酸代谢"></div><h3>氨基酸代谢与饮食</h3><p>了解特殊氨基酸代谢需求，学习低苯丙氨酸饮食的科学原则。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','diabetes')"><div class="story-icon spic"><img src="images/sci-diabetes.jpg" alt="血糖管理"></div><h3>血糖管理与膳食</h3><p>科学选择低GI主食，合理搭配膳食纤维，平稳控制血糖。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','gout')"><div class="story-icon spic"><img src="images/sci-gout.jpg" alt="尿酸控制"></div><h3>尿酸控制与饮食</h3><p>了解嘌呤代谢，选择低嘌呤主食，科学搭配蔬菜与蛋白质。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','hypertension')"><div class="story-icon spic"><img src="images/sci-bp.jpg" alt="血压与钠"></div><h3>血压与钠摄入</h3><p>控制膳食钠摄入，了解低钠主食的选择，配合钾镁补充辅助血压管理。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','general')"><div class="story-icon spic"><img src="images/sci-balance.jpg" alt="均衡膳食"></div><h3>日常均衡膳食指南</h3><p>中国居民膳食指南核心要点，食物多样化、吃动平衡，健康体重管理。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','fattyLiver')"><div class="story-icon spic"><img src="images/sci-kidney.jpg" alt="脂肪肝"></div><h3>脂肪肝与膳食管理</h3><p>了解非酒精性脂肪肝的成因和科学的饮食调整策略。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','weight')"><div class="story-icon spic"><img src="images/sci-diabetes.jpg" alt="体重管理"></div><h3>健康体重科学管理</h3><p>了解BMI体成分和能量平衡原理制定可持续方案。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','lipids')"><div class="story-icon spic"><img src="images/sci-gout.jpg" alt="血脂"></div><h3>血脂异常的膳食调理</h3><p>了解血脂指标通过膳食调整改善血脂水平。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','bone')"><div class="story-icon spic"><img src="images/sci-bp.jpg" alt="骨骼健康"></div><h3>骨骼健康与骨质疏松</h3><p>了解骨骼代谢关键营养素及骨质疏松预防。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','anemia')"><div class="story-icon spic"><img src="images/sci-balance.jpg" alt="贫血"></div><h3>营养性贫血的防治</h3><p>缺铁性贫血的膳食对策和补铁技巧。</p></div>
  <div class="story-card" onclick="navigate('scienceTopic','allergy')"><div class="story-icon spic"><img src="images/sci-pku.jpg" alt="过敏"></div><h3>食物过敏与不耐受</h3><p>了解常见过敏原与安全饮食策略。</p></div>
</div>

${bgSection(BG.doctor,true,`
  <div class="sec-head reveal"><span class="eyebrow d">饮食误区</span><h2 class="h2">走出误区 科学饮食<span class="en">Myths</span></h2></div>
  <div class="myth-grid reveal" style="max-width:var(--max-w);margin:0 auto;padding:0 clamp(20px,4vw,48px)">
    <div class="myth-card"><h4>吃得越少越健康？</h4><p>过度节食会导致营养不良、免疫力下降。科学饮食的核心是均衡，而非一味减少摄入量。</p></div>
    <div class="myth-card"><h4>完全不吃主食能减肥？</h4><p>主食提供大脑必需能量。健康减重应选择低GI全谷物，控制分量而非完全戒断。</p></div>
    <div class="myth-card"><h4>所有脂肪都不好？</h4><p>${_T('不饱和脂肪酸（橄榄油、坚果、鱼油）有益心血管健康。关键在于是选择优质脂肪。','Unsaturated fats (olive oil, nuts, fish) benefit cardiovascular health. The key is choosing quality fats.')}</p></div>
    <div class="myth-card"><h4>吃素就一定健康？</h4><p>纯素食者需注意B12、铁、优质蛋白的补充。合理搭配的素食可以健康，但不等于自动健康。</p></div>
    <div class="myth-card"><h4>保健品可以代替吃饭？</h4><p>食物中的营养素相互协同作用，是保健品无法替代的。膳食优先，补充为辅。</p></div>
    <div class="myth-card"><h4>健康食品一定不好吃？</h4><p>科学烹饪同样能做出美味。森无忧产品保留天然米香，口感不输普通米饭。</p></div>
  </div>
`)}`;
}

// ═══ 科普话题详情 ═══
const SCIENCE_TOPICS={
  kidney:{title:'肾脏健康与营养',sections:[{h:'肾脏的营养代谢功能',p:'肾脏在人体中承担着过滤代谢废物、调节水电解质平衡、分泌激素等重要功能。当肾功能下降时，某些营养素的代谢会受到影响，需要调整膳食结构以均衡膳食管理。'},{h:'不同阶段的营养策略',p:'在肾功能不同阶段，蛋白质、钠、钾、磷的摄入量需要个性化调整。早期以均衡膳食为主，中晚期需根据医生/营养师建议逐步控制某些营养素的摄入量。'},{h:'主食选择的科学性',p:'主食是每日营养摄入的基础。在肾功能下降阶段，选择科学配比的主食尤为重要。森无忧低蛋白米饭可在保证能量供应的基础上，帮助控制蛋白质和磷的摄入量。'},{h:'饮食管理小贴士',p:'选择新鲜食材，减少加工食品；控制食盐用量，善用天然香料调味；注意食物中的隐形钠和磷来源；定期进行营养评估，在专业人士指导下调整饮食方案。'}]},
  pku:{title:'氨基酸代谢与饮食管理',sections:[{h:'了解氨基酸代谢',p:'人体需要20种氨基酸来合成蛋白质。某些氨基酸代谢需要特定酶的参与。当相关酶活性不足时，未代谢的氨基酸可能蓄积，需要通过膳食管理来控制摄入。'},{h:'饮食管理原则',p:'核心原则是限制特定氨基酸的摄入，同时确保其他必需氨基酸和营养素的充足供应。这需要特殊的膳食方案和科学的营养配比。'},{h:'低蛋白主食的价值',p:'森无忧低蛋白系列主食几乎不含苯丙氨酸，可帮助特殊氨基酸代谢需求的人群在享受正常主食的同时，有效控制特定氨基酸摄入。'},{h:'长期管理建议',p:'饮食管理是长期的过程，需要家庭、学校和医疗团队的多方配合。定期监测相关指标，根据生长发育阶段调整饮食方案。'}]},
  diabetes:{title:'血糖管理的膳食策略',sections:[{h:'碳水化合物的选择',p:'选择低GI（血糖生成指数）主食是血糖管理的关键。全谷物、杂豆类GI较低，森无忧系列产品经过科学配比，有助于平稳血糖。'},{h:'膳食纤维的作用',p:'可溶性膳食纤维可延缓糖分吸收，帮助平稳餐后血糖。每日推荐摄入25-30克膳食纤维，来源包括全谷物、蔬菜、豆类和水果。'},{h:'三餐分配建议',p:'建议少食多餐，将主食均匀分配至各餐和加餐中。避免集中大量进食碳水化合物，搭配适量蛋白质和蔬菜可进一步平稳血糖。'},{h:'运动与血糖管理',p:'规律运动可提高胰岛素敏感性，辅助血糖管理。运动前后注意监测血糖，适当调整碳水化合物摄入，防止低血糖。'}]},
  gout:{title:'尿酸管理与饮食控制',sections:[{h:'嘌呤代谢与尿酸',p:'尿酸是嘌呤代谢的终产物。当尿酸生成过多或排泄减少时，血尿酸水平升高，可能在关节沉积形成结晶，引起不适。饮食控制是基础管理手段。'},{h:'饮食原则',p:'减少高嘌呤食物（动物内脏、浓汤、部分海鲜），选择低嘌呤主食和蔬菜。森无忧系列产品嘌呤含量极低，是科学选择。每日饮水2000毫升以上有助于尿酸排泄。'},{h:'主食与蔬菜选择',p:'精制谷物和大多数蔬菜嘌呤含量低，可放心食用。豆制品曾被认为不宜，但近年研究表明植物性嘌呤对尿酸影响远小于动物性嘌呤。'},{h:'生活方式建议',p:'保持健康体重、限制酒精摄入、避免果糖饮料、规律运动。这些生活方式调整与合理膳食相辅相成，共同维护健康。'}]},
  hypertension:{title:'血压管理的膳食策略',sections:[{h:'钠与血压的关系',p:'高钠摄入是血压升高的重要风险因素。中国居民平均食盐摄入量远超推荐值。减少钠摄入是血压管理的基础措施。每日食盐建议控制在5克以内。'},{h:'低钠饮食实践',p:'选择天然低钠食材，用葱姜蒜、醋、香料代替盐调味。注意加工食品中的"隐形钠"。森无忧系列产品钠含量经科学控制，符合低钠饮食需求。'},{h:'钾与镁的补充',p:'适量增加钾和镁的摄入有助于血压管理。富含钾的食物包括香蕉、土豆、菠菜、豆类。富含镁的食物包括坚果、全谷物、绿叶蔬菜。'},{h:'DASH饮食模式',p:'DASH饮食是目前公认的降压膳食模式，强调多蔬果、全谷物、低脂奶、适量坚果，限盐限酒。结合规律运动可获得更好的效果。'}]},
  general:{title:'中国居民膳食指南要点',sections:[{h:'食物多样、谷类为主',p:'每天摄入12种以上食物，每周25种以上。谷薯类食物提供碳水化合物的同时也提供膳食纤维和B族维生素。建议每日摄入谷薯类250-400克。'},{h:'吃动平衡、健康体重',p:'保持能量摄入与消耗的平衡，维持健康体重。每周至少进行5天中等强度身体活动，累计150分钟以上。减少久坐时间，每小时起来动一动。'},{h:'多吃蔬果、奶类、大豆',p:'保证每天摄入300-500克蔬菜，深色蔬菜占一半。每天200-350克新鲜水果。每天摄入相当于300克液态奶的奶制品。经常食用豆制品。'},{h:'适量吃鱼、禽、蛋、瘦肉',p:'每周摄入鱼类280-525克、畜禽肉280-525克、蛋类280-350克。优先选择鱼和禽，少吃肥肉和加工肉制品。'}]},
  fattyLiver:{title:'脂肪肝与膳食管理',sections:[{h:'认识',p:'脂肪肝是肝脏内脂肪含量超过肝重5%的状态。'},{h:'饮食原则',p:'控制总热量减少精制碳水增加膳食纤维。'},{h:'有益食物',p:'十字花科蔬菜深色绿叶菜浆果坚果鱼类绿茶。'},{h:'生活习惯',p:'规律运动保持体重限制酒精避免加工食品。'}]},
  weight:{title:'健康体重管理',sections:[{h:'科学原则',p:'体重管理基础是能量平衡。'},{h:'BMI分析',p:'BMI=体重/身高的平方正常18.5-23.9。'},{h:'减重策略',p:'每周减0.5-1kg均衡膳食增加蔬果全谷物。'},{h:'长期维持',p:'规律饮食充足睡眠可持续运动习惯。'}]},
  lipids:{title:'血脂异常',sections:[{h:'了解血脂',p:'总胆固醇甘油三酯LDL-C和HDL-C。'},{h:'膳食调整',p:'减少饱和反式脂肪增加不饱和脂肪酸。'},{h:'有益食物',p:'燕麦豆类深海鱼坚果橄榄油全谷物。'},{h:'综合管理',p:'有氧运动戒烟限酒健康体重定期体检。'}]},
  bone:{title:'骨骼健康',sections:[{h:'骨骼生理',p:'骨骼是动态活组织持续骨重建。'},{h:'关键营养素',p:'钙每日800-1000mg维生素D促进吸收。'},{h:'风险因素',p:'绝经后年龄增长家族史吸烟饮酒久坐。'},{h:'预防建议',p:'终身关注钙摄入负重运动晒太阳戒烟限酒。'}]},
  anemia:{title:'营养性贫血',sections:[{h:'分类',p:'最常见缺铁性贫血约占50%。'},{h:'补铁方法',p:'血红素铁吸收率高搭配VC提高3-6倍。'},{h:'富铁食物',p:'动物肝脏红肉动物血蛤蜊牡蛎蛋黄。'},{h:'预防',p:'均衡膳食月经多女性补铁素食者关注B12。'}]},
  allergy:{title:'食物过敏',sections:[{h:'区别',p:'过敏是免疫反应不耐受是代谢障碍。'},{h:'8大过敏原',p:'牛奶鸡蛋花生坚果大豆小麦鱼类贝类。'},{h:'管理策略',p:'回避已知过敏原注意交叉污染告知过敏史。'},{h:'产品安全',p:'森无忧大米为主不使用常见过敏原。'}]},

};
function _scienceTopic(topic){setTab(4);document.getElementById('csSection').classList.add('hidden');const d=SCIENCE_TOPICS[topic];if(!d){navigate('pageScience');return}
document.getElementById('app').innerHTML=`<div class="page-bg">${imgOrFallback(BG.doctor,'','pb-fb')}</div><div class="detail" style="max-width:800px"><div class="detail-card" style="border-radius:var(--radius-xl);box-shadow:var(--shadow-l)"><div class='dtl-hero reveal' style='background:linear-gradient(135deg,#0b5e3e,#073b27);border-radius:var(--radius-xl);padding:clamp(28px,3.5vw,42px);margin-bottom:24px;color:#fff'><div class='hero-deco'>🔬</div><div class='tags' style='margin-bottom:10px'><span style='background:rgba(255,255,255,.15);color:#fff'>科学科普</span></div><h2 style='font-size:clamp(24px,3vw,36px);font-weight:700;line-height:1.2'>${d.title}</h2></div>${d.sections.map((s,i)=>`<div class='dtl-card reveal' style='background:#fff;border-radius:var(--radius-l);padding:28px;box-shadow:var(--shadow-card);border:1px solid var(--line-l)'><div style='display:flex;align-items:center;gap:14px;margin-bottom:14px'><div class='card-num'><span>${String(i+1).padStart(2,'0')}</span></div><h3 style='font-size:16px;font-weight:700;color:var(--ink);line-height:1.3'>${s.h}</h3></div><p style='font-size:14px;color:var(--muted);line-height:1.85'>${s.p}</p></div>`).join('')}<button class="nutri-cta" onclick="navigate('pageScience')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> 返回科普</button></div></div>`;
setTimeout(setupReveal,30)}

// ═══ 营养学院 ═══
function _pageAcademy(){setTab(2);document.getElementById('csSection').classList.add('hidden');
document.getElementById('app').innerHTML=`
${bgSection(BG.wheat,false,`
  <div class="sec-head reveal"><span class="eyebrow d">营养学院</span><h2 class="h2">科学营养 无忧生活<span class="en">Academy</span></h2><p class="sec-sub">森无忧营养研究院——普及科学膳食知识，推动全民营养健康。</p></div>
`)}

<div class="story-grid reveal" style="max-width:var(--max-w);margin:20px auto;padding:0 clamp(20px,4vw,48px)">
  <div class="story-card" onclick="navigate('academyTopic','protein')"><div class="story-icon spic"><img src="images/aca-protein.jpg" alt="蛋白质"></div><h3>蛋白质与健康</h3><p>了解蛋白质在人体中的作用，掌握科学摄入方法，平衡膳食营养。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','fiber')"><div class="story-icon spic"><img src="images/aca-fiber.jpg" alt="膳食纤维"></div><h3>膳食纤维指南</h3><p>膳食纤维的分类、推荐摄入量及富含纤维的食物选择。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','carbs')"><div class="story-icon spic"><img src="images/aca-carbs.jpg" alt="碳水化合物"></div><h3>碳水化合物解析</h3><p>碳水化合物的分类、GI值与血糖关系，以及科学选择主食的方法。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','minerals')"><div class="story-icon spic"><img src="images/aca-minerals.jpg" alt="矿物质"></div><h3>矿物质与微量元素</h3><p>钙、铁、锌、磷、钾等矿物质的营养学意义及日常摄入建议。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','vitamin')"><div class="story-icon spic"><img src="images/aca-vitamin.jpg" alt="维生素"></div><h3>维生素全攻略</h3><p>脂溶性与水溶性维生素的功能、食物来源及科学补充原则。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','diet2030')"><div class="story-icon spic"><img src="images/aca-plan.jpg" alt="营养计划"></div><h3>国民营养计划2030</h3><p>解读国家营养政策，了解全民营养目标及健康膳食指南。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','gut')"><div class="story-icon spic"><img src="images/aca-gut.jpg" alt="肠道健康"></div><h3>肠道微生态与健康</h3><p>探索肠道菌群的奥秘，了解益生菌、益生元对消化和免疫的影响。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','water')"><div class="story-icon spic"><img src="images/aca-water.jpg" alt="科学饮水"></div><h3>科学饮水指南</h3><p>不同年龄段和活动量下的饮水建议，电解质平衡与健康饮水习惯。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','antioxidant')"><div class="story-icon spic"><img src="images/aca-antiox.jpg" alt="抗氧化"></div><h3>抗氧化与抗衰老营养</h3><p>了解自由基与衰老的关系，认识天然抗氧化食物及其科学食用方法。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','macros')"><div class="story-icon spic"><img src="images/aca-protein.jpg" alt="宏量营养素"></div><h3>三大宏量营养素解析</h3><p>深入了解蛋白质脂肪碳水化合物的功能和科学比例。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','energy')"><div class="story-icon spic"><img src="images/aca-carbs.jpg" alt="能量"></div><h3>能量代谢与热量平衡</h3><p>学习基础代谢率和健康的热量管理策略。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','lifecycle')"><div class="story-icon spic"><img src="images/aca-water.jpg" alt="生命周期"></div><h3>全生命周期营养需求</h3><p>从婴幼儿到老年不同年龄段的营养重点。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','sports')"><div class="story-icon spic"><img src="images/aca-fiber.jpg" alt="运动营养"></div><h3>运动营养学基础</h3><p>运动前后的科学营养策略及不同运动类型的膳食方案。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','safety')"><div class="story-icon spic"><img src="images/aca-plan.jpg" alt="食品安全"></div><h3>食品安全与标签解读</h3><p>学习读懂营养标签和科学选购安全食品。</p></div>
  <div class="story-card" onclick="navigate('academyTopic','sleep')"><div class="story-icon spic"><img src="images/aca-gut.jpg" alt="睡眠"></div><h3>睡眠与营养的关系</h3><p>探索睡眠质量对营养代谢的影响及助眠营养素。</p></div>
</div>

<div class="meal-grid reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">健康主食</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">森无忧主食科学搭配<span class="en">Staple Foods Guide</span></h2></div>
  <div class="meal-card"><div class="meal-img"><img src="images/meal-rice.jpg" alt="低蛋白米饭"></div><div class="meal-info"><h4>低蛋白米饭</h4><p>开袋即食，180g定量包装。每100g含0g蛋白质，适合作为主食基底。可搭配蔬菜、肉类一起食用，也可直接炒饭。</p></div></div>
  <div class="meal-card"><div class="meal-img"><img src="images/meal-grain.jpg" alt="低蛋白大米"></div><div class="meal-info"><h4>低蛋白大米</h4><p>无需淘洗，米水比例1:1.1~1:1.3。保温焖15-20分钟口感最佳。可做饭团、寿司、炒饭，家庭煮饭一锅搞定。</p></div></div>
  <div class="meal-card"><div class="meal-img"><img src="images/meal-noodle.jpg" alt="低蛋白面粉米粉"></div><div class="meal-info"><h4>低蛋白面粉/米粉</h4><p>面粉可做饺子、面条、馄饨皮，开水烫面揉团。米粉冷水泡发后汤粉、拌粉、炒粉皆可。</p></div></div>
  <div class="meal-card"><div class="meal-img"><img src="images/meal-cookie.jpg" alt="低蛋白曲奇零食"></div><div class="meal-info"><h4>低蛋白曲奇&零食</h4><p>${_T('曲奇三种口味（原味/蔓越莓/奇亚籽），独立10g小包装。谷纤趣零食可可与海苔风味，非油炸高膳食纤维。','Cookies in 3 flavors (original/cranberry/chia), 10g packs. Snack crisps in cocoa & seaweed, non-fried, high fiber.')}</p></div></div>
</div>

${bgSection(BG.doctor,true,`
  <div class="sec-head reveal"><span class="eyebrow d">营养知识库</span><h2 class="h2">每日营养小课堂<span class="en">Tips</span></h2></div>
  <div class="myth-grid reveal" style="max-width:var(--max-w);margin:0 auto;padding:0 clamp(20px,4vw,48px)">
    <div class="myth-card"><h4>早餐真的是一天中最重要的一餐吗？</h4><p>早餐为身体补充夜间消耗的能量。更重要的是全天营养均衡分配，找到适合自己的节奏。</p></div>
    <div class="myth-card"><h4>低脂食品一定更健康吗？</h4><p>许多低脂食品为弥补口感添加了更多糖。脂肪是必需营养素，关键在于选择优质脂肪和控制适量。</p></div>
    <div class="myth-card"><h4>每天必须喝8杯水吗？</h4><p>8杯水是参考值。实际需水量因人而异，取决于体重、活动量和气候。食物中的水分也计入摄入量。</p></div>
    <div class="myth-card"><h4>晚餐吃得越少越好？</h4><p>晚餐过少可能导致夜间饥饿、影响睡眠。关键在于清淡适量，睡前2-3小时完成进食。</p></div>
    <div class="myth-card"><h4>有机食品营养价值更高？</h4><p>有机食品与常规食品在核心营养素上差异不大。更重要的是食物多样化和均衡搭配。</p></div>
    <div class="myth-card"><h4>运动后必须立刻补充蛋白质？</h4><p>运动后1-2小时内补充蛋白质即可，不必争分夺秒。全天蛋白质总摄入量比补充时机更重要。</p></div>
  </div>
`)}

<div class="recipe-grid reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">营养食谱</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">森无忧创意料理<span class="en">Recipes</span></h2></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-onigiri.jpg" alt="海苔蔬菜饭团"></div><div class="recipe-info"><h4>海苔蔬菜饭团</h4><p>森无忧米饭晾至温热，拌入胡萝卜碎、黄瓜丁，捏成三角形，裹上海苔。营养均衡，便当首选。</p><span class="recipe-tag">准备5分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-friedrice.jpg" alt="蔬菜蛋炒饭"></div><div class="recipe-info"><h4>蔬菜蛋炒饭</h4><p>森无忧米饭入热锅，加蛋液快速翻炒，加入青豆、玉米粒、胡萝卜丁。色香味俱全的快手午餐。</p><span class="recipe-tag">10分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-dumpling.jpg" alt="水晶蔬菜饺"></div><div class="recipe-info"><h4>水晶蔬菜饺</h4><p>森无忧面粉开水烫面揉团，擀薄皮包入香菇青菜馅，上锅蒸8分钟。皮薄馅大，晶莹剔透。</p><span class="recipe-tag">20分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-porridge.jpg" alt="南瓜小米糊"></div><div class="recipe-info"><h4>南瓜小米糊</h4><p>森无忧低蛋白大米加南瓜块、小米一同熬煮至软烂。温暖养胃，秋冬早餐佳品。</p><span class="recipe-tag">30分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-noodle.jpg" alt="番茄菌菇汤粉"></div><div class="recipe-info"><h4>番茄菌菇汤粉</h4><p>森无忧米粉温水泡发，番茄炒出汁加水煮汤，放入泡发好的米粉和菌菇煮2分钟。鲜美暖身。</p><span class="recipe-tag">15分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-cake.jpg" alt="紫薯米糕"></div><div class="recipe-info"><h4>紫薯米糕</h4><p>森无忧馒头粉加紫薯泥、酵母发酵，模具蒸制15分钟。天然紫色，松软香甜，全家都爱。</p><span class="recipe-tag">40分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-dumpling.jpg" alt="蔬菜煎饼"></div><div class="recipe-info"><h4>蔬菜煎饼</h4><p>森无忧馒头粉加水调成面糊，加入胡萝卜丝、西葫芦丝，平底锅煎至两面金黄。外酥里嫩，早餐良品。</p><span class="recipe-tag">10分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-onigiri.jpg" alt="三色饭团"></div><div class="recipe-info"><h4>三色厚蛋饭团</h4><p>森无忧米饭搭配厚蛋烧、菠菜碎和美乃滋，捏成厚实饭团。蛋香浓郁，口感丰富，露营便当首选。</p><span class="recipe-tag">15分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-cake.jpg" alt="香蕉松饼"></div><div class="recipe-info"><h4>香蕉松饼</h4><p>森无忧馒头粉加熟透香蕉泥、少量油和少许水调糊，平底锅小火煎。无糖也香甜，孩子最爱。</p><span class="recipe-tag">12分钟</span></div></div>
  <div class="recipe-card"><div class="recipe-img"><img src="images/recipe-porridge.jpg" alt="麻薯"></div><div class="recipe-info"><h4>手作麻薯</h4><p>森无忧面粉加糯米粉调成糊状，上锅蒸熟后揉团裹入黄豆粉和芝麻。Q弹软糯，低蛋白也能享受甜食。</p><span class="recipe-tag">25分钟</span></div></div>
</div>

<div class="faq-section reveal" style="max-width:var(--max-w);margin:clamp(40px,5vw,60px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="sec-head"><span class="eyebrow d">常见问题</span><h2 class="h2" style="font-size:clamp(22px,2.5vw,32px)">FAQ · 森无忧热门问答<span class="en">Frequently Asked Questions</span></h2></div>
  <div class="faq-list">${(function(){
    var qs=['什么是低蛋白饮食？哪些人群需要它？','森无忧产品属于哪类食品？','森无忧米饭和普通米饭有什么区别？','低蛋白大米怎样烹饪口感最好？','森无忧产品可以长期食用吗？','儿童和孕妇可以食用吗？','产品如何储存和保鲜？','哪里可以购买到正品？'];
    var as=['低蛋白饮食是针对需要控制蛋白质摄入的特殊膳食人群制定的科学膳食方案。主要适用于需要控制蛋白摄入的特殊膳食人群，以及特定氨基酸代谢需求人群。低蛋白不等于无蛋白，具体摄入量需在医生或专业营养师指导下确定。','森无忧产品为特殊膳食用食品，专为需要控制蛋白摄入的人群设计。以大米、面粉等天然食材为原料，通过真米脱蛋白技术实现0g蛋白/100g的精准控制，同时保留了食物原有的口感和风味。','森无忧米饭以优质大米为原料，采用物理酶解脱蛋白工艺去除蛋白质，每100g米饭含0g蛋白质（普通米饭约2.6g）。同时精准控制钠、磷、钾含量，口感接近普通米饭，自然清香。','米饭：开袋即食，微波加热2分钟即可。大米：无需淘洗，米水比例1:1.1~1:1.3，保温焖15-20分钟口感最佳。也可用于炒饭、饭团等多种吃法。','森无忧产品以天然食材制成，无人工色素和防腐剂，适合需要长期进行低蛋白饮食管理的人群日常食用。具体食用方案和用量建议咨询专业营养师。','森无忧产品适用年龄段较广，但儿童和孕妇属于特殊生理阶段，营养需求与成年人群不同，建议在医生或专业营养师指导下使用，确保全面营养均衡。','常温阴凉干燥处保存。米饭为即食产品，开袋后请尽快食用。大米包装开封后请保持干燥密封。具体保质期以包装标注为准，一般为6-12个月。','建议通过京东、淘宝、拼多多官方旗舰店购买正品。森无忧所有产品包装均印有防伪标识和生产批号，购买时请认准南京恒生制药有限公司出品。'];
    var h='';
    for(var i=0;i<qs.length;i++){
      h+='<div class="faq-item" onclick="toggleFaq(this)"><div class="faq-q">'+qs[i]+'<span class="faq-arrow">▾</span></div><div class="faq-a">'+as[i]+'</div></div>';
    }
    return h;
  })()}</div>
</div>`;
}

// ═══ 营养学院话题详情 ═══
const ACADEMY_TOPICS={
  protein:{title:'蛋白质与健康',sections:[{h:'蛋白质的基础知识',p:'蛋白质是生命的物质基础，由20种氨基酸组成，其中9种为必需氨基酸，需通过食物摄取。蛋白质参与构建和修复组织、合成酶和激素、维持免疫功能。'},{h:'蛋白质的推荐摄入量',p:'中国营养学会推荐成人每日蛋白质摄入量为每公斤体重0.8-1.0克。孕妇、哺乳期女性、青少年和老年人等特定人群需求更高。'},{h:'优质蛋白质来源',p:'动物性蛋白（蛋、奶、肉、鱼）含全部必需氨基酸。植物性蛋白（豆类、坚果、谷物）可通过搭配互补提高营养价值。'},{h:'蛋白质与体重管理',p:'适量增加蛋白质摄入有助于增加饱腹感、维持肌肉量。但需注意总体热量平衡，不建议极端高蛋白饮食。'}]},
  fiber:{title:'膳食纤维全解析',sections:[{h:'膳食纤维的定义与分类',p:'膳食纤维是植物中不能被人体消化酶分解的碳水化合物类物质，分为可溶性纤维（果胶、树胶）和不可溶性纤维（纤维素、木质素）。'},{h:'膳食纤维的健康益处',p:'促进肠道蠕动、增加饱腹感、延缓糖分吸收稳定血糖、降低胆固醇。每日推荐摄入量为25-30克。'},{h:'富含膳食纤维的食物',p:'全谷物（糙米、燕麦）、豆类（红豆、绿豆）、蔬菜（西兰花、芹菜）、水果（苹果带皮、梨）、坚果种子。'},{h:'如何逐步增加纤维摄入',p:'从精制主食过渡到全谷物、每天增加一份蔬菜、选择完整水果代替果汁。同时确保充足饮水，避免肠道不适。'}]},
  carbs:{title:'碳水化合物解读',sections:[{h:'碳水化合物的分类',p:'分为简单碳水（单糖/双糖）和复合碳水（淀粉、膳食纤维）。复合碳水消化缓慢，对血糖影响更平稳。'},{h:'血糖生成指数（GI）',p:'GI反映食物升高血糖的速度。低GI（≤55）如全谷物、豆类；中GI（56-69）如全麦面包；高GI（≥70）如白面包。选择低GI食物有助于稳定血糖。'},{h:'主食的科学选择',p:'优先选择全谷物和杂豆类，如糙米、燕麦、荞麦。精制主食可适量，建议与全谷物搭配。每天主食量应根据活动量调整。'},{h:'碳水化合物与运动营养',p:'运动前摄入复合碳水提供持久能量；运动中可补充简单碳水；运动后搭配蛋白质和碳水促进恢复。'}]},
  minerals:{title:'矿物质与微量元素的营养学意义',sections:[{h:'常量元素——钙',p:'钙是骨骼和牙齿的主要成分，参与神经传导和肌肉收缩。成人每日推荐800-1000mg。奶制品、豆制品、深绿色蔬菜是优质来源。'},{h:'常量元素——磷与钾',p:'磷与钙共同构建骨骼，参与能量代谢。钾维持细胞内渗透压。均衡膳食通常能满足需求，特殊健康状态需遵医嘱控制。'},{h:'微量元素——铁与锌',p:'铁是血红蛋白核心成分，缺铁可导致贫血。红肉、动物肝脏、菠菜含铁丰富。锌参与免疫功能，贝壳类海产、瘦肉是优质来源。'},{h:'微量元素——硒与碘',p:'硒是抗氧化酶重要成分。碘是甲状腺激素必需元素。海产品、坚果、加碘盐是主要来源。均衡膳食一般可满足需要。'}]},
  vitamin:{title:'维生素全攻略',sections:[{h:'脂溶性维生素（A、D、E、K）',p:'维生素A维护视力与免疫；D促进钙吸收，可通过日晒合成；E是抗氧化剂；K参与凝血。脂溶性维生素可在体内储存，过量可能蓄积。'},{h:'水溶性维生素（B族、C）',p:'B族维生素参与能量代谢；维生素C是抗氧化剂，促进铁吸收和胶原蛋白合成。不易在体内储存，需每日补充。新鲜蔬果是主要来源。'},{h:'维生素缺乏与补充',p:'长期不均衡饮食可能导致缺乏。优先从食物获取，补充剂应在医生指导下使用，不建议盲目大剂量补充。'},{h:'烹饪对维生素的影响',p:'水溶性维生素易在清洗和煮制中流失。建议急火快炒、蒸制。蔬菜现切现做，减少营养素损失。'}]},
  diet2030:{title:'国民营养计划2030解读',sections:[{h:'计划背景与目标',p:'国务院办公厅2017年印发《国民营养计划（2017-2030年）》，旨在提高国民营养健康水平，到2030年居民营养状况显著改善。'},{h:'七大实施策略',p:'完善营养政策标准体系、加强营养能力建设、强化营养监测、发展营养健康产业、普及营养知识、推动数据共享、开展生命早期1000天行动等。'},{h:'与日常饮食相关的目标',p:'人均每日食盐摄入量降低20%、膳食脂肪供能比控制在30%以内、5岁以下儿童生长迟缓率降至5%以下。'},{h:'我们能做什么',p:'学习膳食指南、优化家庭餐桌、关注食品营养标签、传播科学营养理念。森无忧以实际行动助力国民营养计划。'}]},
  gut:{title:'肠道微生态与健康',sections:[{h:'肠道菌群概览',p:'人体肠道内栖息着约100万亿个微生物，包括细菌、真菌、病毒等，总重量约1-2公斤。它们参与食物消化、维生素合成、免疫调节等关键生理过程。'},{h:'益生菌的作用',p:'益生菌是活的微生物，适量摄入可改善肠道菌群平衡。主要作用包括促进消化吸收、抑制有害菌、增强肠道屏障功能、调节免疫。森无忧复合益生菌含多联菌株，每条约300亿CFU。'},{h:'益生元与后生元',p:'益生元是益生菌的"食物"，如低聚果糖、菊粉等，促进有益菌生长。后生元是益生菌代谢产物，也具有健康益处。膳食纤维是最天然的益生元。'},{h:'维护肠道健康的日常建议',p:'多吃富含膳食纤维的食物、适量补充益生菌、减少精制糖和加工食品、规律作息、适度运动、避免滥用抗生素。肠道健康是全身健康的基础。'}]},
  water:{title:'科学饮水指南',sections:[{h:'人体水分平衡',p:'成年人体内水分约占体重的60%。每天通过呼吸、排汗、排尿等途径流失约2-2.5升水分，需要及时补充以维持正常生理功能。'},{h:'每日饮水建议',p:'中国营养学会建议成人每日饮水1500-1700毫升（约7-8杯）。运动量大、高温环境或出汗多时应适当增加。食物中的水分（汤、蔬果）也计入总量。'},{h:'饮水时机与方式',p:'少量多次优于一次性大量饮用。晨起一杯温水有助于唤醒身体。餐前适量饮水有助于消化。运动前后注意补水，避免脱水和水中毒。'},{h:'不同人群的饮水注意事项',p:'老年人渴觉减退，应定时饮水。儿童活泼好动，需频繁补充。孕期和哺乳期女性需水量增加。某些健康状况需遵医嘱控制饮水。'}]},
  antioxidant:{title:'抗氧化与抗衰老营养',sections:[{h:'自由基与氧化应激',p:'自由基是细胞代谢的副产物，过量会攻击细胞膜、DNA和蛋白质，加速衰老。环境污染、紫外线、吸烟、压力等会加剧自由基产生。'},{h:'天然抗氧化营养素',p:'维生素C（柑橘、猕猴桃）、维生素E（坚果、植物油）、β-胡萝卜素（胡萝卜、南瓜）、花青素（蓝莓、紫薯）、番茄红素（番茄、西瓜）是主要抗氧化物质。'},{h:'抗氧化食物的科学选择',p:'颜色越深的蔬果通常抗氧化能力越强。建议每天摄入多种颜色的蔬果（彩虹饮食法），如红色番茄、橙色胡萝卜、绿色菠菜、紫色蓝莓。'},{h:'生活方式与抗衰老',p:'均衡膳食是基础，配合规律运动、充足睡眠、防晒、戒烟限酒。营养素补充剂不能替代健康饮食。森无忧全谷物主食是均衡膳食的重要组成。'}]},
  macros:{title:'宏量营养素',sections:[{h:'蛋白质',p:'构成肌肉骨骼皮肤酶和抗体成人每日0.8-1.0g/kg。'},{h:'脂肪',p:'提供能量构成细胞膜合成激素供能占20-30%。'},{h:'碳水化合物',p:'复合碳水消化缓慢简单糖应限制供能占50-65%。'},{h:'平衡搭配',p:'每餐主食+蛋白+蔬菜森无忧全品类便捷选择。'}]},
  energy:{title:'能量代谢',sections:[{h:'来源',p:'蛋白质4脂肪9碳水4kcal/g。'},{h:'BMR',p:'基础代谢率受年龄性别体成分影响。'},{h:'需求',p:'轻度活动成人约25-30kcal/kg/天。'},{h:'管理',p:'减少高热量食物增加低热量高容积食物提高活动量。'}]},
  lifecycle:{title:'生命周期营养',sections:[{h:'婴幼儿',p:'0-6月母乳6月后辅食需要蛋白质铁锌DHA。'},{h:'学龄',p:'生长发育高峰钙铁需求增加均衡三餐。'},{h:'成年',p:'维持健康体重预防慢病老人蛋白不降反升。'},{h:'孕期',p:'补充叶酸铁钙碘哺乳期增加500kcal。'}]},
  sports:{title:'运动营养',sections:[{h:'运动前',p:'运动前1-2小时复合碳水加少量蛋白质。'},{h:'运动中',p:'少于60分钟无需额外补充超过补水150-300ml。'},{h:'运动后',p:'30-60分钟黄金窗口碳水蛋白3:1。'},{h:'不同类型',p:'耐力重碳水力量重蛋白柔韧重水分抗炎。'}]},
  safety:{title:'食品安全',sections:[{h:'标签',p:'强制标示能量蛋白脂肪碳水钠。'},{h:'添加剂',p:'合法使用安全不等于有害。'},{h:'储存',p:'区分生产日期保质期注意储存条件。'},{h:'选购',p:'正规渠道检查包装核对日期森无忧药企质管。'}]},
  sleep:{title:'睡眠营养',sections:[{h:'代谢',p:'睡眠不足扰乱食欲激素与肥胖风险相关。'},{h:'助眠',p:'色氨酸牛奶香蕉坚果是血清素前体镁放松肌肉。'},{h:'睡前',p:'睡前一小时避免大量进食避免咖啡因酒精。'},{h:'习惯',p:'固定作息减少屏幕保持卧室凉爽安静适度运动。'}]},

};
function _academyTopic(topic){setTab(2);document.getElementById('csSection').classList.add('hidden');const d=ACADEMY_TOPICS[topic];if(!d){navigate('pageAcademy');return}
document.getElementById('app').innerHTML=`<div class="page-bg">${imgOrFallback(BG.wheat,'','pb-fb')}</div><div class="detail" style="max-width:800px"><div class="detail-card" style="border-radius:var(--radius-xl);box-shadow:var(--shadow-l)"><div class='dtl-hero reveal' style='background:linear-gradient(135deg,#0b5e3e,#073b27);border-radius:var(--radius-xl);padding:clamp(28px,3.5vw,42px);margin-bottom:24px;color:#fff'><div class='hero-deco'>📚</div><div class='tags' style='margin-bottom:10px'><span style='background:rgba(255,255,255,.15);color:#fff'>营养学院</span></div><h2 style='font-size:clamp(24px,3vw,36px);font-weight:700;line-height:1.2'>${d.title}</h2></div>${d.sections.map((s,i)=>`<div class='dtl-card reveal' style='background:#fff;border-radius:var(--radius-l);padding:28px;box-shadow:var(--shadow-card);border:1px solid var(--line-l)'><div style='display:flex;align-items:center;gap:14px;margin-bottom:14px'><div class='card-num'><span>${String(i+1).padStart(2,'0')}</span></div><h3 style='font-size:16px;font-weight:700;color:var(--ink);line-height:1.3'>${s.h}</h3></div><p style='font-size:14px;color:var(--muted);line-height:1.85'>${s.p}</p></div>`).join('')}<button class="nutri-cta" onclick="navigate('pageAcademy')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> 返回营养学院</button></div></div>`;
setTimeout(setupReveal,30)}

// ═══ 科学成就 ═══
function _pageAchieve(){setTab(3);document.getElementById('csSection').classList.add('hidden');
document.getElementById('app').innerHTML=`
${bgSection(BG.doctor,true,`
  <div class="sec-head reveal"><span class="eyebrow d">科学成就</span><h2 class="h2">科研驱动 品质为本<span class="en">Achievements</span></h2><p class="sec-sub">森无忧营养研究院以科研创新为核心，持续深耕营养科学领域，取得多项技术突破与行业认可。</p></div>
`)}

<div class="award-timeline reveal" style="max-width:var(--max-w);margin:clamp(30px,4vw,50px) auto;padding:0 clamp(20px,4vw,48px)">
  <div class="tl-step"><div class="tl-dot">2015</div><div class="tl-card"><h4>营养研究院成立</h4><p>整合营养研究资源，正式成立森无忧营养研究院，致力于科学膳食研究与产品创新。</p></div></div>
  <div class="tl-step"><div class="tl-dot">2017</div><div class="tl-card"><h4>真米脱蛋白技术突破</h4><p>成功研发物理酶解真米脱蛋白技术，在保留天然米香的同时实现科学配比，获国家发明专利。</p></div></div>
  <div class="tl-step"><div class="tl-dot">2019</div><div class="tl-card"><h4>全品类产线建成</h4><p>建成覆盖米饭、大米、面粉、面条、曲奇、粽子的全品类生产线，实现从主食到加餐的完整覆盖。</p></div></div>
  <div class="tl-step"><div class="tl-dot">2021</div><div class="tl-card"><h4>国家级营养研究项目</h4><p>参与国家级营养研究课题，与多所高校及科研机构建立产学研合作关系。</p></div></div>
  <div class="tl-step"><div class="tl-dot">2023</div><div class="tl-card"><h4>国民营养计划2030响应</h4><p>积极响应国家战略，推出全民营养健康科普行动，助力提升国民营养素养。</p></div></div>
</div>

<div class="tech-grid reveal" style="max-width:var(--max-w);margin:20px auto;padding:0 clamp(20px,4vw,48px)">
  <div class="tech-item"><div class="tech-icon imgico"><img src="images/rd-lab3.jpg" alt="科学配比"></div><h4>科学配比技术</h4><p>依托营养数据库和精密分析设备，实现每一款产品的精准营养配比，确保品质稳定。</p></div>
  <div class="tech-item"><div class="tech-icon imgico"><img src="images/rd-line3.jpg" alt="品质管控"></div><h4>全链路品质管控</h4><p>从原料溯源到成品出厂，每一批次均经过X光检测和HPLC分析，全程可追溯。</p></div>
  <div class="tech-item"><div class="tech-icon imgico"><img src="images/meal-rice.jpg" alt="智能温控"></div><h4>智能温控生产工艺</h4><p>全自动温控生产线，精确控制加工温度，最大程度保留天然营养成分与口感。</p></div>
</div>`;
}

// ═══ 商城 ═══
function _pageStore(){setTab(5);document.getElementById('csSection').classList.add('hidden');
document.getElementById('app').innerHTML=`
${bgSection(BG.wheat,false,`
  <div class="sec-head reveal"><span class="eyebrow d">官方商城</span><h2 class="h2">正品保障 放心选购<span class="en">Store</span></h2><p class="sec-sub">森无忧官方授权渠道，正品保障。请认准品牌官方旗舰店，谨防假冒。</p></div>
`)}

<div class="channel-grid reveal" style="max-width:var(--max-w);margin:20px auto;padding:0 clamp(20px,4vw,48px)">
  <a class="channel-card" href="https://mall.jd.com/index-森无忧.html" target="_blank" rel="noopener"><div class="ch-icon"><span class="brand-badge jd">京东</span></div><h3>京东旗舰店</h3><p>森无忧京东官方旗舰店，正品直营，快速配送。点击进入选购全品类产品。</p><span class="ch-link">进入店铺 →</span></a>
  <a class="channel-card" href="https://森无忧.taobao.com" target="_blank" rel="noopener"><div class="ch-icon"><span class="brand-badge tb">淘宝</span></div><h3>淘宝旗舰店</h3><p>森无忧淘宝官方旗舰店，优惠活动丰富，购物更便捷。</p><span class="ch-link">进入店铺 →</span></a>
  <a class="channel-card" href="https://mobile.yangkeduo.com/mall_page.html?mall_id=森无忧" target="_blank" rel="noopener"><div class="ch-icon"><span class="brand-badge pdd">拼多多</span></div><h3>拼多多旗舰店</h3><p>森无忧拼多多官方旗舰店，人人买得起的好产品。</p><span class="ch-link">进入店铺 →</span></div>

<div class="reveal" style="max-width:var(--max-w);margin:clamp(24px,3vw,40px) auto;padding:0 clamp(20px,4vw,48px)">
  <div style="background:#fff;border-radius:var(--radius-l);border:1px solid var(--line-l);box-shadow:var(--shadow-card);padding:clamp(24px,3vw,40px);display:flex;gap:clamp(20px,3vw,40px);align-items:center;flex-wrap:wrap;justify-content:center">
    <div style="flex:1;min-width:260px">
      <div style="font-size:12px;font-weight:700;letter-spacing:.1em;color:var(--green);margin-bottom:8px">联系客服 · SERVICE</div>
      <h3 style="font-size:clamp(18px,2.2vw,24px);font-weight:800;margin-bottom:10px">购买咨询与售后服务</h3>
      <p style="font-size:13px;color:var(--muted);line-height:1.8">工作日 9:00–18:00 在线，产品咨询、订单售后、营养师答疑，欢迎联系。</p>
      <div style="margin-top:14px;font-size:15px;font-weight:800;color:var(--green)">全国热线：400-009-2535</div>
    </div>
    <div style="text-align:center">
      <div id="csQrBox" style="width:132px;height:132px;background:var(--paper-card);border:1px dashed var(--line);border-radius:var(--radius);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--muted);line-height:1.6">客服二维码<br>即将上线</div>
      <div style="font-size:11px;color:var(--muted);margin-top:8px">扫码添加专属客服</div>
    </div>
  </div>
</div>/div>

<div class="warning reveal" style="margin:clamp(24px,3vw,40px) auto;max-width:var(--max-w);padding:clamp(16px,2vw,24px) clamp(20px,3vw,32px);background:#e8f5e9;border-left:4px solid #2e7d32;border-radius:var(--radius);font-size:13px;line-height:1.7;color:#1b5e20">
<strong>✅ 正品保障</strong><br>
以上为森无忧官方授权线上销售渠道。为保障您的权益，请认准品牌官方旗舰店。如发现非授权渠道以低价销售假冒产品，欢迎拨打全国热线 400-009-2535 举报。
</div>`;
}


function loadGHComments(){
  fetch('https://api.github.com/repos/majiahao-hue/senwuyou/issues/1/comments?per_page=50').then(function(r){return r.json()}).then(function(data){
    var el=document.getElementById('comList');
    if(!data||data.length===0){
      el.innerHTML='<div style="text-align:center;padding:40px;color:var(--muted);font-size:14px">还没有人发言，快来发表第一条吧！</div>';
      return;
    }
    data.sort(function(a,b){return new Date(b.created_at)-new Date(a.created_at)});
    el.innerHTML=data.map(function(c){
      var t=new Date(c.created_at).toLocaleString('zh-CN');
      var body=c.body||'';
      if(body.length>500)body=body.substring(0,500)+'...';
      return '<div class="com-item" style="display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--line-l)"><div style="width:40px;height:40px;border-radius:50%;background:var(--green-soft);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;overflow:hidden">'+(c.user?c.user.login.charAt(0).toUpperCase():'匿')+'</div><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><strong style="font-size:14px">'+escGH(c.user?c.user.login:'匿名')+'</strong><span style="font-size:11px;color:var(--muted)">'+t+'</span></div><div style="font-size:14px;color:var(--ink);line-height:1.6;white-space:pre-wrap">'+escGH(body)+'</div></div></div>';
    }).join('');
  }).catch(function(){
    document.getElementById('comList').innerHTML='<div style="text-align:center;padding:40px;color:var(--muted);font-size:13px">加载失败，请确保网络正常</div>';
  });
}
function postCommentGH(){
  var nick=document.getElementById('comNick').value.trim()||'匿名';
  var text=document.getElementById('comText').value.trim();
  if(!text){alert('请输入内容');return;}
  document.getElementById('comText').value='';
  window.open('https://github.com/majiahao-hue/senwuyou/issues/1','_blank');
}
function escGH(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML;}
window.postCommentGH=postCommentGH;

// ═══ 图片灯箱 ═══
let lbOpen=false,lbIdx=0,lbProducts=[];
function openLightbox(src,title,idx){
  lbProducts=P.map(p=>({src:p.img,alt:p.name,fallback:IC[P.indexOf(p)]}));
  lbIdx=idx||0;lbOpen=true;
  document.getElementById('lbImg').src=src;
  document.getElementById('lbTitle').textContent=title||'';
  document.getElementById('lbCounter').textContent=(lbIdx+1)+' / '+lbProducts.length;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  lbOpen=false;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}
function navigateLightbox(dir){
  lbIdx=(lbIdx+dir+lbProducts.length)%lbProducts.length;
  var p=lbProducts[lbIdx];
  document.getElementById('lbImg').src=p.src;
  document.getElementById('lbTitle').textContent=p.alt;
  document.getElementById('lbCounter').textContent=(lbIdx+1)+' / '+lbProducts.length;
}
document.addEventListener('keydown',function(e){
  if(!lbOpen)return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowLeft')navigateLightbox(-1);
  if(e.key==='ArrowRight')navigateLightbox(1);
});
window.openLightbox=openLightbox;window.closeLightbox=closeLightbox;window.navigateLightbox=navigateLightbox;

// ═══ 页面公共 ═══
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const st=h.scrollTop;
  const p=st/(h.scrollHeight-h.clientHeight);
  document.getElementById('prog').style.width=(p*100)+'%';
  document.getElementById('nav').classList.toggle('scrolled',st>20);
  const heroBg=document.querySelector('.hero-bg');
  if(heroBg) heroBg.style.transform=`translateY(${st*0.35}px)`;
});







window.navigate=navigate;window.goBack=goBack;window.prevProduct=prevProduct;window.nextProduct=nextProduct;window.updateCalc=updateCalc;window.submitContact=submitContact;window.addFood=addFood;window._academyTopic=_academyTopic;window._scienceTopic=_scienceTopic;window.switchLang=switchLang;window.toggleTheme=toggleTheme;
window.toggleFaq=function(el){el.classList.toggle('open')};
navigate('home');

function initTheme(){
  const t=localStorage.getItem('sw-theme');
  const dark=t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  updateThemeIcon(dark);
}
function updateThemeIcon(dark){
  const btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=dark?'☀️':'🌙';
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme');
  const isDarkNow=cur==='dark'||(!cur&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  const next=isDarkNow?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  try{localStorage.setItem('sw-theme',next);}catch(e){}
  updateThemeIcon(next==='dark');
}
initTheme();

(function(){
  var inited=null;
  setInterval(function(){
    var wrap=document.getElementById("dpChamber");
    if(!wrap||wrap===inited)return;
    inited=wrap;
    var cv=document.getElementById("dpCanvas");
    var ctx=cv.getContext("2d"),W,H,DPR=Math.min(window.devicePixelRatio||1,2);
    var grain,enzymes=[],proteins=[],debris=[],t0=0,progress=0,elapsed=0;
    var elP=document.getElementById("dpProtein");
    function resize(){var r=wrap.getBoundingClientRect();W=r.width||600;H=r.height||220;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);}
    function rand(a,b){return a+Math.random()*(b-a);}
    function geo(){grain={cx:W*0.5,cy:H*0.52,rx:Math.min(W,H)*0.13,ry:Math.min(W,H)*0.36,angle:-0.28};}
    function rice(rx,ry){ctx.beginPath();ctx.moveTo(0,-ry);ctx.bezierCurveTo(rx*0.65,-ry*0.9,rx,-ry*0.2,rx*0.92,ry*0.3);ctx.bezierCurveTo(rx*0.84,ry*0.82,rx*0.45,ry,0,ry);ctx.bezierCurveTo(-rx*0.45,ry,-rx*0.84,ry*0.82,-rx*0.92,ry*0.3);ctx.bezierCurveTo(-rx,-ry*0.2,-rx*0.65,-ry*0.9,0,-ry);ctx.closePath();}
    function inG(){var a=rand(0,6.28),rr=Math.sqrt(Math.random());var lx=Math.cos(a)*grain.rx*rr*0.62,ly=Math.sin(a)*grain.ry*rr*0.7+grain.ry*0.05;var ca=Math.cos(grain.angle),sa=Math.sin(grain.angle);return{x:grain.cx+lx*ca-ly*sa,y:grain.cy+lx*sa+ly*ca};}
    function seed(){proteins=[];enzymes=[];debris=[];progress=0;elapsed=0;for(var i=0;i<16;i++){var pt=inG();proteins.push({x:pt.x,y:pt.y,r:rand(1.5,3),vx:rand(-0.2,0.2),vy:rand(-0.2,0),alpha:0.9});}}
    function draw(ts){
      if(inited!==wrap||!wrap.isConnected){inited=null;return;}
      if(!t0)t0=ts;var dt=Math.min((ts-t0)/1000,0.04);t0=ts;
      ctx.fillStyle="#0a1a16";ctx.fillRect(0,0,W,H);
      ctx.save();ctx.translate(grain.cx,grain.cy);ctx.rotate(grain.angle);
      rice(grain.rx,grain.ry);
      var bg=ctx.createLinearGradient(0,-grain.ry,0,grain.ry);bg.addColorStop(0,"#fafaf7");bg.addColorStop(0.5,"#f2eee6");bg.addColorStop(1,"#e6dfd2");
      ctx.fillStyle=bg;ctx.fill();ctx.strokeStyle="rgba(0,0,0,0.06)";ctx.lineWidth=0.6;ctx.stroke();ctx.restore();
      for(var i=0;i<enzymes.length;i++){var e=enzymes[i];e.x+=e.vx*dt*80;e.y+=e.vy*dt*80;ctx.beginPath();ctx.arc(e.x,e.y,e.r,0,6.28);ctx.fillStyle="rgba(56,224,192,0.7)";ctx.fill();}
      for(var i=0;i<proteins.length;i++){var p=proteins[i];p.x+=p.vx*dt*50;p.y+=p.vy*dt*50;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.28);ctx.fillStyle="rgba(232,136,160,"+p.alpha+")";ctx.fill();}
      for(var i=0;i<debris.length;i++){var dd=debris[i];dd.x+=dd.vx*dt*40;dd.y+=dd.vy*dt*40;dd.alpha=Math.max(0,dd.alpha-0.008);ctx.beginPath();ctx.arc(dd.x,dd.y,dd.r,0,6.28);ctx.fillStyle="rgba(160,240,220,"+(0.5*dd.alpha)+")";ctx.fill();}
      debris=debris.filter(function(dd){return dd.alpha>0.05;});
      enzymes=enzymes.filter(function(e){return e.y<H+20;});
      elapsed+=dt;
      var phase=elapsed<3?0:(elapsed<9.5?1:2);
      if(phase<=1&&Math.random()<0.3)enzymes.push({x:rand(grain.cx-grain.rx,grain.cx+grain.rx),y:grain.cy-grain.ry-12,r:rand(1.2,2.5),vx:rand(-0.3,0.3),vy:rand(0.4,0.7)});
      if(phase===1&&proteins.length>0){
        var target=16-Math.floor((elapsed-3)/6.5*16);
        while(proteins.length>Math.max(0,target)){var idx=Math.floor(Math.random()*proteins.length);var pt=proteins[idx];debris.push({x:pt.x,y:pt.y,r:pt.r*0.7,vx:rand(-0.6,0.6),vy:rand(-0.9,-0.3),alpha:0.8});proteins.splice(idx,1);}
      }
      progress=Math.min(100,elapsed/13*100);
      if(elP)elP.textContent=Math.max(0.5,7.0-elapsed/13*6.5).toFixed(1);
      var chips=wrap.querySelectorAll(".dpchip");
      chips.forEach(function(c,ci){var on=ci===phase;c.style.color=on?"#0d2f26":"rgba(255,255,255,.55)";c.style.background=on?"#38e0c0":"rgba(255,255,255,.07)";});
      if(elapsed>13){seed();}
      requestAnimationFrame(draw);
    }
    resize();geo();seed();
    window.addEventListener("resize",function(){resize();geo();});
    requestAnimationFrame(draw);
  },800);
})();
