const IMGS={"images/img-04.jpg":"images/img-04.jpg","images/img-06.jpg":"images/img-06.jpg","images/img-08.jpg":"images/img-08.jpg","images/img-10.jpg":"images/img-10.jpg","images/img-11.jpg":"images/img-11.jpg","images/img-12.jpg":"images/img-12.jpg","images/img-13.jpg":"images/img-13.jpg","images/img-14.jpg":"images/img-14.jpg","images/img-15.jpg":"images/img-15.jpg","images/img-16.jpg":"images/img-16.jpg","images/img-17.jpg":"images/img-17.jpg","images/img-18.jpg":"images/img-18.jpg","images/img-19.jpg":"images/img-19.jpg","images/img-20.jpg":"images/img-20.jpg","images/img-21.jpg":"images/img-21.jpg","images/img-22.jpg":"images/img-22.jpg","images/img-23.jpg":"images/img-23.jpg","images/img-24.jpg":"images/img-24.jpg","images/img-25.jpg":"images/img-25.jpg","images/img-26.jpg":"images/img-26.jpg","images/img-27.jpg":"images/img-27.jpg","images/img-28.jpg":"images/img-28.jpg","images/img-29.jpg":"images/img-29.jpg","images/img-30.jpg":"images/img-30.jpg","images/img-31.jpg":"images/img-31.jpg","images/img-32.jpg":"images/img-32.jpg","images/img-33.jpg":"images/img-33.jpg","images/img-34.jpg":"images/img-34.jpg","images/img-35.jpg":"images/img-35.jpg","images/img-36.jpg":"images/img-36.jpg","images/img-37.jpg":"images/img-37.jpg","images/img-38.jpg":"images/img-38.jpg","images/img-39.jpg":"images/img-39.jpg","images/img-40.jpg":"images/img-40.jpg","images/img-41.jpg":"images/img-41.jpg","images/img-42.jpg":"images/img-42.jpg","images/img-43.jpg":"images/img-43.jpg","images/img-44.jpg":"images/img-44.jpg","images/img-45.jpg":"images/img-45.jpg","images/img-46.jpg":"images/img-46.jpg","images/img-47.jpg":"images/img-47.jpg"};
const FX=26000;
const I={vi:{
tag:"Handmade · Vải hoa · Cói",n1:"Túi cói",n2:"Menu",n3:"Album",n4:"Booklet cói",n5:"Feedback",
h1:"Những chiếc túi xinh cho ngày <em>nắng.</em>",
hp:"Túi vải hoa nhí, pouch bèo nhún và túi cói đan tay. Mỗi món được may cho những buổi picnic bên hồ của các cô gái nhà Limdim.",
hint:"Chạm vào một thẻ để xem bộ sưu tập ⊕",c1a:"Túi cói",c1b:"3 mẫu",c2a:"Túi vải",c2b:"3 mẫu",c3b:"9 mẫu",c3c:"Pouch bèo nhún",
coiH:"Túi cói, <em>đan tay.</em>",coiP:"Quai da nâu, thân cói trắng ngà, lót bèo vải hoa. Nhắn shop để biết giá và hàng sẵn.",
r1:"Bèo nhún",r2:"Sọc hồng chấm hoa",r3:"Hoa nhí xanh và vàng",r4:"Hoa dây leo hồng nhí",dtH:"Cận cảnh chi tiết",
mL:"Menu · mở cửa mỗi ngày nắng",mP:"Chọn món bạn thích rồi nhắn shop nhé. Chạm vào từng món để xem ảnh lớn.",
sL:"Món đặc biệt hôm nay",sP:"Cói Mơ & Cói San, đan tay",sB:"Xem túi cói",note:"Giá tính theo nghìn đồng (k) · M · L là hai size",
alP:"Vài khoảnh khắc nắng, cỏ và những chiếc túi nhỏ trên bàn picnic.",
bkH:"Booklet bảo quản <em>Cói.</em>",bkP:"Cách chăm túi cói luôn xinh và bền. Bấm vào sách, kéo một trang hoặc dùng nút bên dưới để lật.",
bkA:"Booklet bảo quản cói. Bấm, kéo hoặc dùng phím mũi tên để lật trang.",prev:"Trang trước",next:"Trang sau",
foot:"",fbH:"Feedback từ <em>các nàng.</em>",fbP:"Ảnh khách gửi về shop. Chạm vào ảnh để xem lớn.",fbS:"Kéo ngang mỗi dây để xem thêm",close:"Đóng",title:"limdim.softie — túi vải hoa & cói handmade"},
en:{
tag:"Handmade · Floral fabric · Straw",n1:"Straw bags",n2:"Menu",n3:"Album",n4:"Straw care",n5:"Reviews",
h1:"Pretty bags for <em>sunny days.</em>",
hp:"Little-floral fabric bags, ruffled pouches and hand-woven straw bags. Every piece is made for lakeside picnics with the girls of Limdim.",
hint:"Tap a card to explore the collection ⊕",c1a:"Straw bags",c1b:"3 styles",c2a:"Fabric bags",c2b:"3 styles",c3b:"9 styles",c3c:"Ruffle pouches",
coiH:"Straw bags, <em>hand-woven.</em>",coiP:"Brown leather handles, an ivory straw body and a floral ruffle lining. Message the shop for prices and availability.",
r1:"Ruffled",r2:"Pink stripes & dots",r3:"Blue & yellow florals",r4:"Pink trellis florals",dtH:"Up close",
mL:"Menu · open every sunny day",mP:"Pick your favourite, then message the shop to order. Tap any item for a closer look.",
sL:"Today's special",sP:"Cói Mơ & Cói San, hand-woven",sB:"See straw bags",note:"Prices in USD, converted from VND at about 26,000 ₫ per $ · M and L are two sizes",
alP:"A few moments of sunshine, grass and little bags on the picnic table.",
bkH:"Straw care <em>booklet.</em>",bkP:"How to keep your straw bag pretty and long-lasting. Tap the book, drag a page or use the buttons to turn pages.",
bkA:"Straw care booklet. Tap, drag or use the arrow keys to turn pages.",prev:"Previous page",next:"Next page",
foot:"",fbH:"Feedback from <em>our girls.</em>",fbP:"Photos our customers sent to the shop. Tap a photo to see it larger.",fbS:"Scroll each line sideways for more",close:"Close",title:"limdim.softie — handmade floral & straw bags"}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="vi";try{L=localStorage.getItem("lang")==="en"?"en":"vi"}catch(e){}
const SHOP={ig:"limdim.softie",zalo:"",email:""};
Object.assign(I.vi,{n1:"Túi cói",n2:"Cửa hàng",n3:"Triển lãm",n4:"Booklet cói",n5:"Feedback",cta1:"Mua ngay",cta2:"Xem túi cói",
shL:"Cửa hàng",shH:"Limdim's <em>store.</em>",shP:"Chạm vào ảnh để xem chi tiết, chọn size và số lượng. Sau khi gửi đơn, shop sẽ nhắn xác nhận lại với bạn.",
quote:"Nhắn shop báo giá",choose:"Chọn mua",pmSize:"Size",pmQty:"Số lượng",add:"Thêm vào giỏ",buy:"Mua ngay",added:"Đã thêm vào giỏ",
pmNoteQ:"Túi cói chưa niêm yết giá, shop sẽ báo giá khi xác nhận đơn.",pmCare:"Xem cách bảo quản túi cói ↓",
cart:"Giỏ hàng",empty:"Giỏ hàng đang trống. Chọn một món bạn thích nhé.",sub:"Tạm tính",quoteLine:"Shop báo giá thêm: ",shipNote:"Chưa gồm phí ship. Shop sẽ báo khi xác nhận đơn.",
toCheck:"Điền thông tin nhận hàng",back:"‹ Quay lại giỏ",remove:"Xóa",checkH:"Thông tin nhận hàng",
fN:"Họ và tên",fP:"Số điện thoại / Zalo",fA:"Địa chỉ nhận hàng",fNote:"Ghi chú (không bắt buộc)",fPay:"Thanh toán",payCod:"Thanh toán khi nhận hàng (COD)",payBank:"Chuyển khoản (shop gửi thông tin khi xác nhận)",
errName:"Bạn nhập giúp shop họ tên nhé.",errPhone:"Số điện thoại chưa đúng, bạn kiểm tra lại giúp shop.",errAddr:"Bạn nhập địa chỉ đầy đủ hơn nhé.",
place:"Tạo đơn hàng",doneH:"Đơn của bạn đã sẵn sàng",doneP:"Còn một bước: gửi nội dung đơn cho shop. Đơn chỉ đến tay shop khi bạn gửi tin nhắn.",codeL:"Mã đơn",
sendIg:"Gửi đơn qua Instagram",sendZalo:"Gửi qua Zalo",sendMail:"Gửi qua email",copy:"Chép nội dung đơn",copied:"Đã chép! Dán vào tin nhắn rồi bấm gửi.",copyFail:"Chưa chép tự động được, bạn bôi đen nội dung ở trên rồi chép nhé.",
igHint:"Bấm nút Instagram: nội dung đơn được chép sẵn, bạn chỉ cần dán và gửi.",clear:"Tôi đã gửi, xóa giỏ hàng",shopLook:"Mua sản phẩm trong ảnh →",
rm1h:"Sunny <em>Garden.</em>",rm1p:"Phòng đầu tiên: những buổi picnic bên hồ cùng túi cói.",rm2h:"The Picnic <em>Table.</em>",rm2p:"Phòng thứ hai: pouch bèo nhún trên khăn kẻ sọc.",rm3h:"Fairy <em>House.</em>",rm3p:"Phòng cuối: ngôi nhà cổ tích, đôi thiên nga và những chiếc tote chần bông.",
ftOrder:"Đặt hàng qua Instagram @limdim.softie",spec:"Chất liệu và kích thước"});
Object.assign(I.en,{n1:"Straw bags",n2:"Shop",n3:"Gallery",n4:"Straw care",n5:"Reviews",cta1:"Shop now",cta2:"See straw bags",
shL:"Shop",shH:"Limdim's <em>store.</em>",shP:"Tap a photo for details, then choose size and quantity. After you send your order, the shop will message you to confirm.",
quote:"Message shop for price",choose:"Choose",pmSize:"Size",pmQty:"Quantity",add:"Add to cart",buy:"Buy now",added:"Added to cart",
pmNoteQ:"Straw bags have no listed price yet. The shop will quote you when confirming the order.",pmCare:"How to care for straw bags ↓",
cart:"Cart",empty:"Your cart is empty. Pick something you love.",sub:"Subtotal",quoteLine:"Quoted by the shop: ",shipNote:"Shipping not included. The shop will quote it when confirming.",
toCheck:"Enter delivery details",back:"‹ Back to cart",remove:"Remove",checkH:"Delivery details",
fN:"Full name",fP:"Phone / Zalo",fA:"Delivery address",fNote:"Note (optional)",fPay:"Payment",payCod:"Cash on delivery (COD)",payBank:"Bank transfer (the shop sends details when confirming)",
errName:"Please enter your name.",errPhone:"That phone number looks wrong, please check it.",errAddr:"Please enter a fuller address.",
place:"Create order",doneH:"Your order is ready",doneP:"One more step: send the order to the shop. The shop only receives it once you send the message.",codeL:"Order code",
sendIg:"Send order via Instagram",sendZalo:"Send via Zalo",sendMail:"Send via email",copy:"Copy order text",copied:"Copied! Paste it into the message and press send.",copyFail:"Could not copy automatically. Please select the text above and copy it.",
igHint:"Tap the Instagram button: the order text is copied for you, just paste and send.",clear:"I've sent it, clear my cart",shopLook:"Shop the look →",
rm1h:"Sunny <em>Garden.</em>",rm1p:"Room one: lakeside picnics with straw bags.",rm2h:"The Picnic <em>Table.</em>",rm2p:"Room two: ruffled pouches on a striped cloth.",rm3h:"Fairy <em>House.</em>",rm3p:"The last room: a fairy-tale house, two swans and quilted totes.",
ftOrder:"Order via Instagram @limdim.softie",spec:"Material and size"});
const t=k=>I[L][k]??I.vi[k]??k;
const usd=k=>{const v=Math.round(k*1000/FX*2)/2+15;return "$"+(Number.isInteger(v)?v:v.toFixed(2))};
const vn=k=>k+".000";
const m=k=>L==="vi"?vn(k)+"đ":usd(k);
const DIM={M:"15×8×8cm",L:"19×10×10cm"};
const SPV="Đan tay · quai da nâu · lót bèo vải hoa",SPE="Hand-woven · brown leather handles · floral ruffle lining";
const P=[
["Cói Mơ",[350],SPV,SPE,IMGS["images/img-04.jpg"],"C","Bèo nhún sọc hồng chấm hoa","Ruffle in pink stripes and tiny dots"],
["Cói San",[350],SPV,SPE,IMGS["images/img-06.jpg"],"C","Bèo nhún hoa nhí xanh và vàng","Ruffle in blue and yellow ditsy florals"],
["Cói Thảo",[350],SPV,SPE,IMGS["images/img-08.jpg"],"C","Bèo nhún hoa dây leo hồng nhí, lót kem","Ruffle in pink trellis florals, cream underlayer"],
["Bow Bag",[280],"Đáy 35cm · Cao đáy–miệng 20cm · Cao đáy–vai 35cm","Base 35cm · Height base–opening 20cm · Height base–shoulder 35cm",IMGS["images/img-10.jpg"],"T","Nơ buộc vai · đáy 35 · cao 20 cm","Shoulder bow · base 35 · height 20 cm"],
["Tote Bag (white)",[280],"Đáy 30cm · Cao 25cm · Miệng 37cm","Base 30cm · Height 25cm · Opening 37cm",IMGS["images/img-11.jpg"],"T","Chần bông trắng, nơ hồng · 30×25 cm","White quilted, pink bow · 30×25 cm"],
["Tote Bag (dreamy pink)",[280],"Đáy 30cm · Cao 25cm · Miệng 37cm","Base 30cm · Height 25cm · Opening 37cm",IMGS["images/img-12.jpg"],"T","Chần bông lót hồng, nơ nâu · 30×25 cm","Quilted, pink lining, brown bow · 30×25 cm"],
["Blueberry Pouch",[105,130],"","",IMGS["images/img-13.jpg"],"B","Hoa nhí xanh nhạt, lót xanh","Pale blue florals, blue lining"],
["Rosy Ruffle",[105,130],"","",IMGS["images/img-14.jpg"],"B","Bèo nhún hoa hồng","Rose-print ruffle"],
["Creamy Ruffle",[105,130],"","",IMGS["images/img-15.jpg"],"B","Bèo nhún tông kem","Cream ruffle"],
["Grape Ruffle",[105,130],"","",IMGS["images/img-16.jpg"],"B","Bèo nhún hoa nhí tím","Lilac floral ruffle"],
["Flora Ruffle",[105,130],"","",IMGS["images/img-17.jpg"],"B","Bèo nhún hoa, lót hồng","Floral ruffle, pink lining"],
["Strawberry Matcha",[105,130],"","",IMGS["images/img-18.jpg"],"B","Xanh matcha, viền hồng dâu","Matcha green, strawberry-pink trim"],
["Dreamy Rabbit (pink)",[120,140],"","",IMGS["images/img-19.jpg"],"S","Chần bông, tông hồng","Quilted, pink tone"],
["Dreamy Rabbit (white)",[120,140],"","",IMGS["images/img-20.jpg"],"S","Chần bông, tông trắng","Quilted, white tone"],
["Rapunzel Pouch",[120,140],"","",IMGS["images/img-21.jpg"],"S","Hoa nhí, lót kem","Little florals, cream lining"]];
const G={vi:{C:["Túi cói hoa nhí","Signature","Đan tay, quai da nâu, lót bèo vải hoa"],T:["Túi chần bông","Mains","Mang theo cả một ngày picnic"],B:["Basic Pouch","Sweet pouch","Pouch bèo nhún, size M hoặc L"],S:["Special Pouch","","Phiên bản đặc biệt, size M hoặc L"]},
en:{C:["Ditsy straw bags","Signature","Hand-woven, brown leather handles, floral ruffle lining"],T:["Quilted bags","Mains","Carry a whole day of picnic"],B:["Basic Pouch","Sweet pouch","Ruffle pouches, size M or L"],S:["Special Pouch","","Special editions, size M or L"]}};
const hasSizes=p=>p[1].length>1;
const unit=(p,s)=>!p[1].length?null:p[1].length>1?p[1][s==="L"?1:0]:p[1][0];
const range=p=>!p[1].length?t("quote"):p[1].length>1?m(p[1][0])+" – "+m(p[1][1]):m(p[1][0]);
const dims=p=>hasSizes(p)?"M "+DIM.M+" · L "+DIM.L:(L==="vi"?p[2]:p[3]);
const desc=p=>L==="vi"?p[6]:p[7];
/* shop render */
const sec=k=>{const g=G[L][k];return `<div class="msec" id="ms-${k}"><div class="mh"><h3 class="serif">${g[0]}</h3><span class="rule"></span>${g[1]?`<span class="lbl">${g[1]}</span>`:""}</div><div class="mgrid">${P.map((p,i)=>p[5]===k?`<article class="pc"><button class="pimg" data-open="${i}" aria-label="${p[0]}"><div class="ph"><img src="${p[4]}" alt="${p[0]}" loading="lazy"></div></button><h3 class="serif">${p[0]}</h3><div class="prow"><b>${range(p)}</b></div></article>`:"").join("")}</div></div>`};
function renderAll(){$("#mbody1a").innerHTML=sec("C");$("#mbody1b").innerHTML=sec("T");$("#mbody2").innerHTML=sec("B")+sec("S");
$("#mnav").innerHTML=["C","T","B","S"].map(k=>`<button data-go="${k}">${G[L][k][0]}</button>`).join("");
$$("[data-pi]").forEach(im=>im.src=P[im.dataset.pi][4]);renderFb();if($("#pm").open)drawProduct()}
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){e.preventDefault();const el=document.getElementById(g.dataset.go==="shop"?"shop":"ms-"+g.dataset.go);if(el)el.scrollIntoView({behavior:"smooth"});return}
const o=e.target.closest("[data-open]");if(o)openProduct(+o.dataset.open)});
/* product modal */
let cur={i:0,s:"M",q:1,g:0};
function openProduct(i){cur={i,s:"M",q:1,g:0};$("#pm").showModal();drawProduct()}
function drawProduct(){const p=P[cur.i],imgs=[p[4],...(p[8]||[])],u=unit(p,cur.s);
$("#pmc").textContent=G[L][p[5]][0];$("#pmn").textContent=p[0];$("#pmd").textContent=desc(p);$("#pmp").textContent=u==null?t("quote"):m(u);
$("#pmi").src=imgs[cur.g]||imgs[0];$("#pmi").alt=p[0];
$("#pmt").innerHTML=imgs.length>1?imgs.map((s,k)=>`<button data-g="${k}" aria-pressed="${k===cur.g}" aria-label="${p[0]} ${k+1}"><img src="${s}" alt=""></button>`).join(""):"";
$("#pms").innerHTML=hasSizes(p)?`<span class="lbl">${t("pmSize")}</span><div class="sizes">${["M","L"].map((s,k)=>`<button class="sz" data-s="${s}" aria-pressed="${cur.s===s}">${s} · ${m(p[1][k])}<small>${DIM[s]}</small></button>`).join("")}</div>`:`<span class="lbl">${t("spec")}</span><p class="md" style="margin:4px 0 0">${dims(p)}</p>`;
$("#addbtn").textContent=t("o_add");$("#buynow").textContent=t("o_buy");renderQty();
$("#pmn2").textContent=u==null?t("pmNoteQ"):"";$("#pmcare").textContent=t("pmCare");$("#pmcare").hidden=p[5]!=="C";$("#pmx").setAttribute("aria-label",t("close"))}
$("#pm").addEventListener("click",e=>{const el=e.target;
if(el===$("#pm")||el.closest("#pmx")){$("#pm").close();return}
const s=el.closest("[data-s]");if(s){cur.s=s.dataset.s;drawProduct();return}
const g=el.closest("[data-g]");if(g){cur.g=+g.dataset.g;drawProduct();return}
const qd=el.closest("[data-qd]");if(qd){cur.q=Math.max(1,Math.min(20,cur.q+ +qd.dataset.qd));renderQty();return}
if(el.closest("#addbtn")){addToCart();$("#pm").close();return}
if(el.closest("#buynow")){addToCart(true);return}
if(el.closest("#pmcare")){$("#pm").close();$("#cam-nang").scrollIntoView({behavior:"smooth"})}});
function copyText(s){let ok=false;try{const H=document.querySelector("dialog[open]")||document.body,ta=document.createElement("textarea");ta.value=s;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;top:0;left:0;opacity:0";H.appendChild(ta);ta.select();ok=document.execCommand("copy");ta.remove()}catch(e){}
if(ok)return Promise.resolve();try{return navigator.clipboard.writeText(s)}catch(e){return Promise.reject(e)}}
const sizeOf=()=>hasSizes(P[cur.i])?cur.s:"-";
let tt;function toast(s){const x=$("#toast");x.textContent=s;x.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>x.classList.remove("on"),1800)}
const BK=[[IMGS["images/img-22.jpg"],"Bìa: Booklet bảo quản cói. Chúng mình dành vài phút hiểu cách chăm sóc tụi cói nha!","Cover: straw care booklet. Take a few minutes to learn how to look after your straw bag."],
[IMGS["images/img-23.jpg"],"Chất liệu: cói lá buông, trắng ngà, đan thủ công từ vùng nguyên liệu An Giang.","Material: buông palm-leaf straw, ivory white, hand-woven from An Giang."],
[IMGS["images/img-24.jpg"],"100% cói tự nhiên: giữ nơi khô ráo, thông thoáng; xử lý ngay khi bị dính nước, phơi thật khô, hạn chế cho cói vào nước.","100% natural straw: keep it dry and ventilated; dry it fully if wet."],
[IMGS["images/img-25.jpg"],"Xử lý vải dính bẩn và xử lý cói mốc: giặt vải bình thường, phơi thật khô; với cói mốc dùng bàn chải, không dùng khăn ẩm, bảo quản cẩn thận vào mùa nồm, mùa ẩm.","Stained fabric and mouldy straw: wash fabric normally, brush mould off straw, dry fully."],
[IMGS["images/img-26.jpg"],"Hết rùi. Cảm ơn nàng đã kiên nhẫn với tụi cói và đồ thủ công.","The end. Thank you for being patient with our straw and handmade pieces."]];
const GL=[["Cover","Straw care booklet. Take a few minutes to learn how to look after your straw bag."],
["Material","Buông palm-leaf straw (\"cói lá buông\"), stripped from mature palm leaves. Ivory white, hand-woven from raw materials grown in An Giang."],
["100% natural straw","Keep it somewhere dry and well ventilated, away from damp walls. If it gets wet, dry it completely right away and keep straw away from water as much as you can."],
["Stains and mould","Stained fabric: wash as normal, dry completely, and don't put it in a closed cabinet while it still feels cool. Mouldy straw: brush it off (no damp cloth), dry completely, and take extra care in humid seasons."],
["The end","Thank you for being patient with our straw and handmade pieces."]];
/* booklet */
const book=$("#book"),mq=matchMedia("(max-width:820px)");let leaves=[],fl=0,single=false,zt=null;
const im=p=>`<img src="${p[0]}" alt="${L==="vi"?p[1]:p[2]}" draggable="false">`;
function build(keep){single=mq.matches;book.classList.toggle("single",single);
const U=single?BK.map(p=>[p,null]):[[BK[0],BK[1]],[BK[2],BK[3]],[BK[4],null]];
book.innerHTML=U.map(([f,b])=>`<div class="leaf"><div class="fr">${im(f)}</div>${b?`<div class="bk">${im(b)}</div>`:""}</div>`).join("");
leaves=[...book.children];fl=0;turn(keep?Math.min(keep,leaves.length-1):0,null,true)}
function setZ(){leaves.forEach((l,i)=>l.style.zIndex=i<fl?i+1:leaves.length-i)}
function info(){const n=single?BK.length:3;$("#pg").textContent=single?(fl+1)+" / "+n:(L==="vi"?["Bìa","Trang 2 – 3","Trang 4 – 5"]:["Cover","Pages 2–3","Pages 4–5"])[fl];
const idx=single?[fl]:[[0],[1,2],[3,4]][fl];const g=$("#gloss");g.classList.toggle("on",L==="en");
g.innerHTML=`<span class="lbl">In English · quick notes</span>`+idx.map(i=>`<p><b>${GL[i][0]}.</b> ${GL[i][1]}</p>`).join("")}
function turn(k,over,instant){const from=fl;fl=Math.max(0,Math.min(leaves.length-1,k));
const tl=over||(fl>from?leaves[from]:fl<from?leaves[fl]:null);
leaves.forEach((l,i)=>l.classList.toggle("f",i<fl));setZ();
if(tl&&!instant){tl.style.zIndex=100;tl.classList.add("turning");clearTimeout(zt);zt=setTimeout(()=>{tl.classList.remove("turning");setZ()},950)}
book.classList.toggle("open",!single&&fl>0);$("#prev").disabled=fl===0;$("#next").disabled=fl===leaves.length-1;info()}
$("#prev").onclick=()=>turn(fl-1);$("#next").onclick=()=>turn(fl+1);
let drag=null,moved=false;
book.addEventListener("pointerdown",e=>{drag={x:e.clientX,id:e.pointerId,leaf:null,dir:0,p:0};moved=false});
book.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-drag.x;
if(!drag.leaf){if(Math.abs(dx)<8)return;const dir=dx<0?1:-1;if((dir>0&&fl>=leaves.length-1)||(dir<0&&fl<=0)){drag=null;return}
drag.leaf=dir>0?leaves[fl]:leaves[fl-1];drag.dir=dir;drag.leaf.classList.add("drag");drag.leaf.style.zIndex=100;moved=true;try{book.setPointerCapture(drag.id)}catch(_){}}
const w=book.getBoundingClientRect().width;const q=Math.min(1,Math.max(0,drag.dir>0?-dx:dx)/w);drag.p=q;
const prog=drag.dir>0?q:1-q;drag.leaf.style.setProperty("--r",(-180*prog)+"deg");drag.leaf.style.setProperty("--sh",Math.sin(prog*Math.PI))});
function endDrag(){if(!drag)return;const d=drag;drag=null;if(!d.leaf)return;d.leaf.classList.remove("drag");d.leaf.style.removeProperty("--r");d.leaf.style.removeProperty("--sh");setTimeout(()=>moved=false,60);turn(d.p>.25?fl+d.dir:fl,d.leaf)}
book.addEventListener("pointerup",endDrag);book.addEventListener("pointercancel",endDrag);
book.onclick=e=>{if(moved)return;const r=book.getBoundingClientRect();(e.clientX<r.left+r.width*.3&&fl>0)?turn(fl-1):turn(fl+1)};
book.onkeydown=e=>{if(e.key==="ArrowRight")turn(fl+1);if(e.key==="ArrowLeft")turn(fl-1)};
mq.addEventListener("change",()=>build(0));
/* feedback */
const FB=[IMGS["images/img-27.jpg"],IMGS["images/img-28.jpg"],IMGS["images/img-29.jpg"],IMGS["images/img-30.jpg"],IMGS["images/img-31.jpg"],IMGS["images/img-32.jpg"],IMGS["images/img-33.jpg"],IMGS["images/img-34.jpg"],IMGS["images/img-35.jpg"],IMGS["images/img-36.jpg"],IMGS["images/img-37.jpg"],IMGS["images/img-38.jpg"],IMGS["images/img-39.jpg"],IMGS["images/img-40.jpg"],IMGS["images/img-41.jpg"],IMGS["images/img-42.jpg"],IMGS["images/img-43.jpg"],IMGS["images/img-44.jpg"],IMGS["images/img-45.jpg"],IMGS["images/img-46.jpg"],IMGS["images/img-47.jpg"]];
const ROWS=[[0,1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]];
const ROT=[-3,2.2,-1.6,3,-2.4,1.4,-2.8];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.25});
function renderFb(){$("#lines").innerHTML=ROWS.map(r=>`<div class="line">${r.map((x,k)=>`<div class="hang"><i class="pin"></i><button class="pol" style="--r:${ROT[k%7]}deg;--k:${k}" data-f="${x}"><img src="${FB[x]}" alt="${L==="vi"?"Feedback của khách":"Customer feedback"}" loading="lazy"></button></div>`).join("")}</div>`).join("");
document.querySelectorAll(".line").forEach(l=>io.observe(l))}
$("#lines").onclick=e=>{const b=e.target.closest(".pol");if(!b)return;$("#lbi").src=FB[b.dataset.f];$("#lb").showModal()};
$("#lb").onclick=()=>$("#lb").close();
/* language */
function setLang(l,first){L=l;try{localStorage.setItem("lang",l)}catch(e){}
document.documentElement.lang=l;document.title=I[l].title;
document.querySelectorAll("[data-t]").forEach(e=>e.innerHTML=I[l][e.dataset.t]);
document.querySelectorAll("[data-al]").forEach(e=>e.setAttribute("aria-label",I[l][e.dataset.al]));
document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
renderAll();
document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=I[l][e.dataset.ph]||"");
if(typeof drawOrder==="function")drawOrder();
if(!first)build(fl)}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));

/* v10 */
Object.assign(I.vi,{h1:"Softly made a <em>dream</em>",cta1:"Đặt đơn qua Instagram",buy:"Đặt đơn qua Instagram",copiedMsg:"Đã chép tên món. Dán vào tin nhắn Instagram nhé.",miniH:"Product <em>Catalog</em>",shP:""});
Object.assign(I.en,{h1:"Softly made a <em>dream</em>",cta1:"Order via Instagram",buy:"Order via Instagram",copiedMsg:"Item name copied. Paste it into your Instagram message.",miniH:"Product <em>Catalog</em>",shP:""});
const SHOP9={bank:""}; /* điền thông tin chuyển khoản, ví dụ "Vietcombank · 0123456789 · NGUYEN THI A" */
Object.assign(I.vi,{coiP:"Quai da nâu, thân cói trắng ngà, lót bèo vải hoa nhí.",fIG:"Tên Instagram",errIG:"Bạn nhập tên Instagram để shop nhắn xác nhận đơn nhé.",
payCod:"COD · cọc trước 50.000đ",payCodD:"Chuyển khoản cọc 50.000đ trước, phần còn lại thanh toán khi nhận hàng.",payBank:"Chuyển khoản toàn bộ",payBankD:"Chuyển khoản đủ giá trị đơn hàng, shop xác nhận và lên đơn cho bạn.",
depNow:"Cọc chuyển khoản trước",restCod:"Thanh toán khi nhận hàng",payAll:"Cần chuyển khoản",depNote:"Shop sẽ gửi thông tin chuyển khoản khi nhắn xác nhận. Đơn được lên sau khi shop nhận cọc. Chưa gồm phí ship.",bankNote:"Shop sẽ gửi thông tin chuyển khoản khi nhắn xác nhận. Chưa gồm phí ship.",
miniL:"Booklet mini",miniH:"Product <em>Catalog</em>",miniP:"Một tờ hai trang: catalog và kích thước túi cói."});
Object.assign(I.en,{coiP:"Brown leather handles, an ivory straw body and a ditsy floral ruffle lining.",fIG:"Instagram username",errIG:"Please enter your Instagram username so the shop can message you.",
payCod:"COD · 50,000₫ deposit first",payCodD:"Transfer a 50,000₫ deposit first, pay the rest on delivery.",payBank:"Full bank transfer",payBankD:"Transfer the full order value; the shop confirms and processes your order.",
depNow:"Deposit to transfer now",restCod:"Pay on delivery",payAll:"Amount to transfer",depNote:"The shop sends transfer details when confirming. Your order is processed once the deposit is received. Shipping not included.",bankNote:"The shop sends transfer details when confirming. Shipping not included.",
miniL:"Mini booklet",miniH:"Product <em>Catalog</em>",miniP:"One sheet, two pages: the catalog and the bag sizes."});
Object.assign(I.vi,{doneH:"Đơn đã sẵn sàng, qua Instagram nhé",doneP:"Mình đã mở Instagram của shop và tự chép nội dung đơn. Bạn dán vào tin nhắn rồi bấm gửi nhé. Đơn chỉ đến tay shop khi bạn gửi tin nhắn. Nếu Instagram không tự mở, bấm nút bên dưới."});
Object.assign(I.en,{doneH:"Your order is ready, head to Instagram",doneP:"We opened the shop's Instagram and tried to copy your order. Paste it into the message and send. The shop only receives your order once you send the message. If Instagram did not open, use the button below."});
const _tt=toast;toast=function(s){const H=document.querySelector("dialog[open]")||document.body,x=$("#toast");if(x.parentNode!==H)H.appendChild(x);_tt(s)};
/* sparkle wand */
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
function sparkle(x,y){if(RM)return;const H=document.querySelector("dialog[open]")||document.body,C=["#f7d56a","#fff","#f4a9ba","#ffe9a8"];for(let i=0;i<16;i++){const s=document.createElement("i"),z=6+Math.random()*10,a=Math.random()*6.28,d=24+Math.random()*60;
s.style.cssText=`position:fixed;left:${x-z/2}px;top:${y-z/2}px;width:${z}px;height:${z}px;background:${C[i%4]};clip-path:polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%);z-index:200;pointer-events:none`;H.appendChild(s);
s.animate([{transform:"translate(0,0) scale(.3) rotate(0)",opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(1) rotate(120deg)`,opacity:1,offset:.45},{transform:`translate(${Math.cos(a)*d*1.3}px,${Math.sin(a)*d*1.3+30}px) scale(0) rotate(240deg)`,opacity:0}],{duration:700+Math.random()*400,easing:"ease-out"}).onfinish=()=>s.remove()}}
addEventListener("click",e=>sparkle(e.clientX,e.clientY),true);

/* ambient leaves & petals: drift in random wind, react to scroll and mouse */
if(!RM){const cv=document.createElement("canvas");cv.id="petals";document.body.appendChild(cv);const pc=cv.getContext("2d"),PCOL=["#f7c9d3","#f2a7b8","#fbe3a0","#cfdcf5","#fff4e6","#f4b5a4"],LC=["#b5c99a","#9db884","#c8d8ae","#8fa974"];
let PD=1,pp=[],py0=scrollY,mx=-999,my=-999,mvx=0,mvy=0,wind=0,gust=0,wt=0,wnext=0,last=performance.now();const R=a=>a[Math.random()*a.length|0];
const mk=init=>{const k=Math.random(),t=k<.45?"l":k<.75?"f":"p";return{t,x:Math.random()*innerWidth,y:init?Math.random()*innerHeight:-30,s:t==="l"?10+Math.random()*9:7+Math.random()*8,c:t==="l"?R(LC):R(PCOL),vy:.35+Math.random()*.6,am:.4+Math.random()*.8,fr:.5+Math.random(),ph:Math.random()*6.28,r:Math.random()*6.28,vr:(Math.random()-.5)*.025,fl:.8+Math.random()*1.4,o:.6+Math.random()*.3,ix:0,iy:0,w:.5+Math.random()}};
const rs=()=>{PD=Math.min(devicePixelRatio||1,2);cv.width=innerWidth*PD;cv.height=innerHeight*PD;const n=Math.max(14,Math.min(34,innerWidth/45|0));while(pp.length<n)pp.push(mk(true));pp.length=n};rs();addEventListener("resize",rs);
addEventListener("scroll",()=>{const d=scrollY-py0;py0=scrollY;for(const p of pp){p.iy-=d*.12*p.s/12;p.ix+=(Math.random()-.5)*Math.min(Math.abs(d),60)*.05}wind=Math.max(-4,Math.min(4,wind+d*.02))},{passive:true});
addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;if(mx===-999){mx=e.clientX;my=e.clientY}mvx=e.clientX-mx;mvy=e.clientY-my;mx=e.clientX;my=e.clientY},{passive:true});
function draw(p,now){const s=p.s;pc.save();pc.translate(p.x*PD,p.y*PD);pc.rotate(p.r);pc.scale(PD*(Math.abs(Math.cos(now/1000*p.fl+p.ph))*.75+.25),PD);pc.globalAlpha=p.o;pc.fillStyle=p.c;
if(p.t==="f"){for(let k=0;k<5;k++){pc.rotate(1.2566);pc.beginPath();pc.ellipse(0,-s*.55,s*.42,s*.55,0,0,6.283);pc.fill()}pc.fillStyle="#f3c969";pc.beginPath();pc.arc(0,0,s*.28,0,6.283);pc.fill()}
else{pc.beginPath();pc.moveTo(0,-s);pc.bezierCurveTo(s*.8,-s*.4,s*.8,s*.5,0,s);pc.bezierCurveTo(-s*.8,s*.5,-s*.8,-s*.4,0,-s);pc.fill();
if(p.t==="l"){pc.strokeStyle="rgba(255,255,255,.45)";pc.lineWidth=1;pc.beginPath();pc.moveTo(0,-s*.9);pc.lineTo(0,s*.9);pc.stroke()}}pc.restore()}
function tick(now){const dt=Math.min((now-last)/16.7,3);last=now;if(now>wnext){wt=(Math.random()-.5)*2.4;wnext=now+3000+Math.random()*4000}
gust+=(wt-gust)*.01*dt;wind*=Math.pow(.95,dt);mvx*=Math.pow(.8,dt);mvy*=Math.pow(.8,dt);const W=gust+wind*.5,dec=Math.pow(.94,dt);pc.clearRect(0,0,cv.width,cv.height);
for(const p of pp){const dx=p.x-mx,dy=p.y-my,d2=dx*dx+dy*dy;if(d2<14400){const d=Math.sqrt(d2)||1,f=1-d/120;p.ix+=(dx/d*f*1.4+mvx*.08*f)*dt;p.iy+=(dy/d*f*1.4+mvy*.08*f)*dt}
p.ix*=dec;p.iy*=dec;p.x+=(Math.sin(now/1000*p.fr+p.ph)*p.am+W*p.w+p.ix)*dt;p.y+=(p.vy+Math.abs(W)*.1+p.iy)*dt;p.r+=(p.vr+p.ix*.01)*dt;
if(p.y>innerHeight+30||p.y<-80){Object.assign(p,mk(false))}else if(p.x<-50)p.x=innerWidth+40;else if(p.x>innerWidth+50)p.x=-40;draw(p,now)}requestAnimationFrame(tick)}
requestAnimationFrame(tick)}
/* v11: how-to-order, menu board, copy fallback */
Object.assign(I.vi,{howL:"Cách đặt hàng",howH:"Đặt đơn chỉ với <em>4 bước.</em>",
s1t:"Chọn sản phẩm",s1p:"Bấm vào ảnh món bạn thích trong menu.",
s2t:"Chọn phân loại",s2p:"Chọn size (nếu có) rồi bấm <b>Đặt đơn qua Instagram</b>.",
autoB:"Tự động",s3t:"Tự chép đơn + mở chat",s3p:"Tên đơn hàng được <b>tự động sao chép</b>, và bạn được <b>tự động chuyển</b> sang khung chat Instagram của shop.",
s4t:"Dán và chờ shop rep",s4p:"Chỉ cần dán (paste) vào tin nhắn, gửi đi và chờ shop phản hồi nhé.",
autoNote:"✨ Các nàng bấm nút này: nội dung đơn tự copy và người đẹp được direct sang chat Instagram của shop. Nàng nhớ paste rùi send nha, đợi shop xíu shop confirm đơn liền ạa",
copyFail:"Chưa chép tự động được, bạn gõ tên món vào tin nhắn nhé.",
m1:"Túi Cói",m2:"Túi Tote",m3:"Túi Nơ",m4:"Pouch"});
Object.assign(I.en,{howL:"How to order",howH:"Order in just <em>4 steps.</em>",
s1t:"Pick a piece",s1p:"Tap the photo of the item you like in the menu.",
s2t:"Choose a variant",s2p:"Pick a size (if any), then tap <b>Order via Instagram</b>.",
autoB:"Automatic",s3t:"Auto-copy + open chat",s3p:"Your order name is <b>copied automatically</b>, and you are <b>taken straight</b> to the shop's Instagram chat.",
s4t:"Paste and wait",s4p:"Just paste it into the message, send it, and wait for the shop to reply.",
autoNote:"✨ Tap this button: your order details are copied automatically and you land straight in the shop's Instagram chat. Just paste and send, then give the shop a moment and your order will be confirmed right away!",
copyFail:"Could not copy automatically, please type the item name in your message.",
m1:"Straw bag",m2:"Tote bag",m3:"Bow bag",m4:"Pouch"});
/* ===== Order form (Netlify Forms) ===== */
const SHIP=20000,DEPOSIT=50000;
const BANK_INFO=""; /* điền thông tin chuyển khoản nếu muốn hiện sau khi đặt, ví dụ "Vietcombank · 0123456789 · NGUYEN THI A" */
const fmt=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+"đ";
let CART=[];
const cName=c=>{const p=P[c.i];return p[0]+(hasSizes(p)?" (size "+c.s+")":"")};
const cUnit=c=>unit(P[c.i],c.s)*1000;
const cTotal=c=>cUnit(c)*c.q;
const subTotal=()=>CART.reduce((a,c)=>a+cTotal(c),0);
const itemCount=()=>CART.reduce((a,c)=>a+c.q,0);
const payVal=()=>{const r=document.querySelector('#orderForm input[name="payment"]:checked');return r?r.value:""};
function calc(){const sub=subTotal(),ship=CART.length?SHIP:0,total=sub+ship,pay=payVal(),cod=pay.indexOf("COD")===0;
return{sub,ship,total,pay,cod,now:cod?Math.min(DEPOSIT,total):total,rest:cod?Math.max(0,total-DEPOSIT):0}}
function renderQty(){const q=$("#pmq");if(!q)return;q.innerHTML=`<span class="lbl">${t("pmQty")}</span><div class="stp"><button type="button" data-qd="-1" aria-label="-">−</button><span>${cur.q}</span><button type="button" data-qd="1" aria-label="+">+</button></div>`}
function addToCart(openNow){const p=P[cur.i],s=hasSizes(p)?cur.s:"-";
if(unit(p,cur.s)==null){toast(t("quote"));return}
const f=CART.find(c=>c.i===cur.i&&c.s===s);if(f)f.q=Math.min(50,f.q+cur.q);else CART.push({i:cur.i,s,q:cur.q});
if($("#pm").open)$("#pm").close();
drawOrder();if(openNow)openOrder();else toast(t("o_added"))}
function drawOrder(){
const ul=$("#ordItems"),tot=$("#ordTot"),fab=$("#ordfab");if(!ul)return;
ul.innerHTML=CART.length?CART.map((c,k)=>`<li><div class="oi-n"><b>${cName(c)}</b><small>${fmt(cUnit(c))}</small></div><div class="stp"><button type="button" data-oq="${k}" data-d="-1" aria-label="-">−</button><span>${c.q}</span><button type="button" data-oq="${k}" data-d="1" aria-label="+">+</button></div><b class="oi-t">${fmt(cTotal(c))}</b><button type="button" class="oi-x" data-orm="${k}" aria-label="${t("remove")}">×</button></li>`).join("")
:`<li class="oi-empty"><span>${t("o_empty")}</span><button type="button" class="btn3" data-go="shop">${t("o_pick")}</button></li>`;
const c=calc();
tot.innerHTML=`<div><span>${t("o_sub")}</span><b>${fmt(c.sub)}</b></div><div><span>${t("o_ship")}</span><b>${fmt(c.ship)}</b></div><div class="g"><span>${t("o_total")}</span><b>${fmt(c.total)}</b></div>`
+(c.pay?(c.cod?`<div class="s"><span>${t("o_dep")}</span><b>${fmt(c.now)}</b></div><div class="s"><span>${t("o_rest")}</span><b>${fmt(c.rest)}</b></div>`:`<div class="s"><span>${t("o_due")}</span><b>${fmt(c.total)}</b></div>`):"");
const f=$("#orderForm");
f.elements.products.value=CART.map(x=>`${cName(x)} x${x.q} = ${fmt(cTotal(x))}`).join("\n");
f.elements.subtotal.value=fmt(c.sub);f.elements.shipping.value=fmt(c.ship);f.elements.total.value=fmt(c.total);
f.elements.pay_now.value=c.pay?(c.cod?"Cọc "+fmt(c.now)+" · còn lại "+fmt(c.rest)+" khi nhận hàng":"Chuyển khoản "+fmt(c.total)):"";
const n=itemCount();document.querySelectorAll("[data-cnt]").forEach(b=>{b.textContent=n;b.classList.toggle("on",n>0)});document.querySelectorAll(".ordfab,.cartbtn").forEach(b=>b.setAttribute("aria-label",t("o_fab")+" ("+n+")"));
$("#ordBtn").textContent=t("o_btn")}
function openOrder(){if($("#pm").open)$("#pm").close();$("#ordv1").hidden=false;$("#ordv2").hidden=true;$("#ordErr").hidden=true;drawOrder();if(!$("#order").open)$("#order").showModal()}
document.addEventListener("click",e=>{if(e.target.closest("[data-order]")){e.preventDefault();openOrder()}});
$("#ordfab").onclick=openOrder;
$("#order").addEventListener("click",e=>{const el=e.target;
if(el===$("#order")||el.closest("#ordx")){$("#order").close();return}
const q=el.closest("[data-oq]");if(q){const c=CART[+q.dataset.oq];if(c){c.q=Math.max(1,Math.min(50,c.q+ +q.dataset.d));drawOrder()}return}
const r=el.closest("[data-orm]");if(r){CART.splice(+r.dataset.orm,1);drawOrder();return}
if(el.closest("[data-go]"))$("#order").close();
if(el.closest("#ordDone")){$("#order").close()}});
$("#orderForm").addEventListener("change",e=>{if(e.target.name==="payment")drawOrder()});
$("#orderForm").addEventListener("submit",async e=>{e.preventDefault();
const f=e.target,err=$("#ordErr"),btn=$("#ordBtn");err.hidden=true;
if(!CART.length){err.textContent=t("o_needItems");err.hidden=false;return}
drawOrder();f.elements.order_code.value="LD"+Date.now().toString(36).toUpperCase().slice(-6);
const c=calc(),code=f.elements.order_code.value,list=CART.map(x=>`<li><span>${cName(x)} × ${x.q}</span><b>${fmt(cTotal(x))}</b></li>`).join("");
btn.disabled=true;btn.textContent=t("o_sending");
try{const body=new URLSearchParams(new FormData(f)).toString();
const r=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body});
if(!r.ok)throw new Error(r.status);
const pay=c.cod?t("o_okCod").replace("{dep}",fmt(c.now)).replace("{rest}",fmt(c.rest)):t("o_okFull").replace("{amt}",fmt(c.total));
$("#ordv2").innerHTML=`<div class="okmark" aria-hidden="true">✓</div><h3 class="serif">${t("o_okH")}</h3><p class="lead">${t("o_okP")}</p><div class="okbox"><div class="lbl">${t("o_code")}: <b>${code}</b></div><ul class="oklist">${list}</ul><div class="oktot"><span>${t("o_total")} (${t("o_inclShip")})</span><b>${fmt(c.total)}</b></div></div><p class="okpay">${pay}${BANK_INFO?"<br><b>"+BANK_INFO+"</b>":""}</p><button type="button" class="igbtn" id="ordDone">${t("o_close")}</button>`;
$("#ordv1").hidden=true;$("#ordv2").hidden=false;$("#order .ordw").scrollTop=0;
CART=[];f.reset();drawOrder();
}catch(x){err.textContent=t("o_err");err.hidden=false}
btn.disabled=false;btn.textContent=t("o_btn")});

/* order form strings */
Object.assign(I.vi,{cta1:"Đặt hàng",ftOrder:"Đặt hàng",
o_lbl:"Đơn hàng",o_h:"Thông tin <em>đặt hàng</em>",o_items:"Sản phẩm chọn mua & số lượng",o_name:"Họ và tên",o_phone:"Số điện thoại",o_phoneP:"VD: 0901 234 567",o_addr:"Địa chỉ giao hàng",o_pay:"Phương thức thanh toán",
o_payFull:"Chuyển khoản Full",o_payFullD:"Chuyển khoản toàn bộ giá trị đơn hàng.",o_payCod:"COD (Cọc 50k)",o_payCodD:"Cọc 50.000đ trước, phần còn lại thanh toán khi nhận hàng.",o_note:"Ghi chú (không bắt buộc)",
o_sub:"Tạm tính",o_ship:"Phí ship",o_total:"Tổng cộng",o_dep:"Cọc chuyển khoản trước",o_rest:"Thanh toán khi nhận hàng",o_due:"Cần chuyển khoản",
o_btn:"Đặt hàng",o_sending:"Đang gửi đơn…",o_add:"Thêm vào đơn",o_buy:"Đặt hàng ngay",o_added:"Đã thêm vào đơn hàng",o_fab:"Đơn hàng",o_empty:"Chưa có sản phẩm nào. Chọn một món bạn thích nhé.",o_pick:"Xem sản phẩm",
o_needItems:"Bạn chọn ít nhất một sản phẩm trước khi đặt hàng nhé.",o_err:"Chưa gửi được đơn, bạn thử lại giúp mình nhé.",
o_okH:"Đặt hàng thành công!",o_okP:"Shop đã nhận được đơn của bạn và sẽ liên hệ qua số điện thoại để xác nhận.",o_code:"Mã đơn",o_inclShip:"đã gồm ship",
o_okCod:"Bạn vui lòng chuyển khoản cọc <b>{dep}</b> trước; phần còn lại <b>{rest}</b> thanh toán khi nhận hàng. Đơn được lên sau khi shop nhận cọc.",
o_okFull:"Bạn vui lòng chuyển khoản <b>{amt}</b>. Shop sẽ gửi thông tin chuyển khoản khi xác nhận đơn.",o_close:"Đóng",
autoNote:"Phí ship 20.000đ mỗi đơn. Thanh toán bằng chuyển khoản Full hoặc COD (cọc 50.000đ trước).",
howH:"Đặt đơn chỉ với <em>4 bước.</em>",s1t:"Chọn sản phẩm",s1p:"Bấm vào ảnh món bạn thích trong menu.",s2t:"Chọn phân loại",s2p:"Chọn size (nếu có), số lượng rồi bấm <b>Thêm vào đơn</b>.",s3t:"Điền thông tin",s3p:"Nhập tên, số điện thoại, địa chỉ và chọn cách thanh toán.",s4t:"Gửi đơn",s4p:"Bấm <b>Đặt hàng</b>, shop sẽ nhận đơn và liên hệ xác nhận."});
Object.assign(I.en,{cta1:"Place order",ftOrder:"Place order",
o_lbl:"Order",o_h:"Order <em>details</em>",o_items:"Items & quantity",o_name:"Full name",o_phone:"Phone number",o_phoneP:"e.g. 0901 234 567",o_addr:"Delivery address",o_pay:"Payment method",
o_payFull:"Full bank transfer",o_payFullD:"Transfer the full order value.",o_payCod:"COD (50k deposit)",o_payCodD:"Transfer a 50,000₫ deposit first, pay the rest on delivery.",o_note:"Note (optional)",
o_sub:"Subtotal",o_ship:"Shipping",o_total:"Total",o_dep:"Deposit to transfer now",o_rest:"Pay on delivery",o_due:"Amount to transfer",
o_btn:"Place order",o_sending:"Sending…",o_add:"Add to order",o_buy:"Order now",o_added:"Added to your order",o_fab:"Order",o_empty:"Nothing here yet. Pick something you love.",o_pick:"Browse products",
o_needItems:"Please choose at least one item before ordering.",o_err:"We couldn't send your order, please try again.",
o_okH:"Order placed!",o_okP:"The shop has received your order and will contact you by phone to confirm.",o_code:"Order code",o_inclShip:"shipping included",
o_okCod:"Please transfer a deposit of <b>{dep}</b> first; the remaining <b>{rest}</b> is paid on delivery. Your order is processed once the deposit is received.",
o_okFull:"Please transfer <b>{amt}</b>. The shop will send the transfer details when confirming.",o_close:"Close",
autoNote:"Shipping is 20,000₫ per order. Pay by full bank transfer or COD (50,000₫ deposit first).",
howH:"Order in just <em>4 steps.</em>",s1t:"Pick a piece",s1p:"Tap the photo of the item you like in the menu.",s2t:"Choose a variant",s2p:"Pick a size (if any) and quantity, then tap <b>Add to order</b>.",s3t:"Fill in your details",s3p:"Enter your name, phone, address and choose how to pay.",s4t:"Send your order",s4p:"Tap <b>Place order</b>. The shop receives it and contacts you to confirm."});
setLang(L,true);build(0);
