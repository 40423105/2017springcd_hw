var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"個人倉儲 個人投影片 個人blog","title":"About"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-ag1qi-zhong-kao-bao-gao.html","tags":"期中考","text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 1.Fossil Server 實習查驗 ag1期中考報告 fossil 2.四連桿機構協同 Trace Point 查驗 40423105四連趕機構 Trace Point 查驗 四連趕機構製作影片 Trace Point 查驗圖片 利用Excel查驗 Trace Point 利用程式碼查驗 Trace Point 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用SolveSpace畫Fourbar Walker製作影片 利用SolveSpace畫Fourbar Walker 利用onshape畫Fourbar Walker Fourbar Walker零件1 Fourbar Walker零件2 Fourbar Walker零件3 Fourbar Walker零件4 Fourbar Walker零件5 Fourbar Walker零件組合 Fourbar Walker動作動畫 4.分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/Fourbar Walker.stl', // data path path: './../data/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","title":"協同產品設計實習 ag1期中考報告"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-liu-zhou-zuo-ye.html","tags":"HW","text":"1.利用onshape畫出四連桿以及八連桿 2.將畫好的零件利用v-rep做連桿動作模擬 1.利用onshape畫出四連桿以及八連桿 2.將畫好的零件利用v-rep做連桿動作模擬 利用onshape畫出四連桿 四連桿零件繪製 四連桿零件組合 八連桿零件繪製(1) 八連桿零件繪製(2) 八連桿零件組合 利用v-rep動作模擬 四連桿動作模擬 八連桿動作模擬 心得 在繪製八連桿及組合的時候花了非常多的時間,尤其是利用v-rep做動作模擬的時候經過很嘟的失敗才將連桿動作模擬調整好,最困難的部份我覺得是八連桿在調整各個桿件中的位置,一個調整不好可能會讓桿件整個失靈.","title":"協同產品設計實習 第六週作業"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-wu-zhou-zuo-ye.html","tags":"HW","text":"1.設定v-rep單連桿運動影片 1. 利用v-rep設定單連桿運動 v-rep設定單連桿運動影片 心得:一開始在看老師做的單連桿運動,覺得很沒有頭緒,後來自己做過以後,其實好像不會很難.","title":"協同產品設計實習 第五週作業"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-si-zhou-zuo-ye.html","tags":"HW","text":"1.利用網誌與簡報說明安裝或使用 Hyperworks 套件過程與心得 - 課程結束前, 希望能夠使用 Hyperworks 進行連桿機構零件的應力分析與機構運動模擬 2.平面四連桿機構的運動路徑方程式推導與網際 2D 繪圖, 方程式推導以 sympy 完成, 而 2D 繪圖則以 Brython 在各組網誌中完成. 先了解如何推導四連桿機構的運動方程式, 然後在各組網誌中完成靜態繪圖與動態模擬. 第四週作業 1. 利用網誌與簡報說明安裝或使用 Hyperworks 套件過程與心得 - 課程結束前, 希望能夠使用 Hyperworks 進行連桿機構零件的應力分析與機構運動模擬. 2. 平面四連桿機構的運動路徑方程式推導與網際 2D 繪圖, 方程式推導以 sympy 完成, 而 2D 繪圖則以 Brython 在各組網誌中完成. 先了解如何推導四連桿機構的運動方程式, 然後在各組網誌中完成靜態繪圖與動態模擬. 3. 為各班各組在 https://mde2a2.kmol.info 主機上建立 cdbg1(完成後可直接連結至 cdbg1 倉儲, 交由組長管理) ~ cdbg8, 以及 cdag1 ~ cdag8 等線上 Fossil SCM 倉儲, 用來管理各組協同產品設計實習過程中的純文件檔案 (例如?). HYPERWORKS安裝心得 我覺得這個軟體看起來功能非常強大,但是,下載的步驟真的是非常的繁雜,同一個帳號不但沒辦法同時下載HYPERWORK及套件,每當安裝一個新套件我都要再重新輸入資訊,光是這點,就覺得非常的繁雜. HYPERWORK安裝完成開啟影片 SOLIDTHINKING下載安裝影片 SOLIDTHINKING下載教學1 SOLIDTHINKING下載教學2 SOLIDTHINKING下載教學3 FEKO下載安裝影片 待 四連桿機構的運動路徑方程式推導 PLLP 方程式推導 已知 Point a, Length ac, Length cb 與 Point b, 求 c 點座標. PLLP from sympy import symbols, sqrt, solve, cos, sin, Abs inputs ax, ay, bx, by, ac, cb = symbols('ax ay bx by ac cb') intermediate variables ab, dab, bac, degree= symbols('ab dab bac degree') ad, bd = symbols('ad bd') outputs cx, cy = symbols('cx cy') 從 a, b 點座標求 ab ab = sqrt((ax-bx) 2+(ay-by) 2) 從三角形已知三邊長, 求解 cx, cy data = solve([ac 2-((ax-cx) 2+(ay-cy) 2), cb 2-((cx-bx) 2+(cy-by) 2)], [cx, cy]) 第1組解 print(\"cx = \", data[0][0]) print(\"cy = \", data[0][1]) 第2組解 print(\"cx = \", data[1][0]) print(\"cy = \", data[1][1]) 數值分析驗證程式碼: from math import pi, cos, sin, sqrt, acos radian = 180/pi degree = pi/180 #PLAP def plap(ax, ay, ac, bac, bx, by, pos): if pos == 0: cx= ac*cos(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax cy= ac*sin(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay else: cx= ac*cos(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax cy= ac*sin(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay return cx, cy #PLLP def pllp(ax, ay, ac, cb, bx, by, pos): if pos == 0: cx = -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 - sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) cy = (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(-ax + bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) else: cx = -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) cy = (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) return cx, cy ax = -60 ay = 0 bx = 0 by = 0 bac = 50*degree ac = 30 cd = 50 db = 60 ce = 50 ed = 50 cx, cy = plap(ax, ay, ac, bac, bx, by, 0) print(\"cx=\", cx, \"cy=\", cy) dx, dy = pllp(cx, cy, cd, db, bx, by, 0) print(\"dx=\", dx, \"dy=\", dy) ex, ey = pllp(cx, cy, ce, ed, dx, dy, 0) print(\"ex=\", ex, \"ey=\", ey) 四連桿網際 2D 繪圖 window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } from browser import window cango = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new group2d = window.Group2D.new cgo = cango(\"plotarea2\") x1, y1 = 20, 20 cx1, cy1 = 50, 70 x2, y2 = 110, 80 cx2, cy2 = 100, 80 cx3, cy3 = 120, 20 x3, y3 = 100, 60 def dragC1(mousePos): global cx1, cy1 cx1 = mousePos.x cy1 = mousePos.y drawCurve() def dragC2(mousePos): global cx2, cy2 cx2 = mousePos.x cy2 = mousePos.y drawCurve() def dragC3(mousePos): global cx3, cy3 cx3 = mousePos.x cy3 = mousePos.y drawCurve() def dragX1(mousePos): global x1, y1 x1 = mousePos.x y1 = mousePos.y drawCurve() def drawCurve(): # curve change shape so it must be re-draw each time # draw a quadratic bezier from x1,y2 to x2,y2 qbez = obj2d(['M', x1, y1, 'Q', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":'blue'}) cbez = obj2d(['M', x2, y2, 'C', cx2, cy2, cx3, cy3, x3, y3], \"PATH\", { \"strokeColor\":'green'}) # show lines to control point ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1, x2, y2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) # semi-transparent gray L2 = obj2d(['M', x2, y2, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) L3 = obj2d(['M', x3, y3, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"dashed\":[4]}) ''' L1 = obj2d(['M', x1, y1, 'L', cx1, cy1], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) # semi-transparent gray L2 = obj2d(['M', cx1, cy1, 'L', cx2, cy2], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) L3 = obj2d(['M', cx2, cy2, 'L', cx3, cy3], \"PATH\", { \"strokeColor\":\"rgba(0, 0, 0, 0.2)\", \"solided\":[10]}) #c1.transform.reset() c1.transform.translate(cx1, cy1) #c2.transform.reset() c2.transform.translate(cx2, cy2) #c3.transform.reset() c3.transform.translate(cx3, cy3) #mx1.transform.reset() mx1.transform.translate(x1, y1) #grp = group2d(qbez, cbez, L1, L2, L3, c1, c2, c3) grp = group2d(L1, L2, L3, c1, c2, c3, mx1) cgo.clearCanvas() cgo.render(grp) cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(0, 0, 200) # draggable control points c1 = obj2d(shapedefs.circle(4), \"SHAPE\", {\"fillColor\":'red'}) c1.enableDrag(None, dragC1, None) c2 = c1.dup() c2.enableDrag(None, dragC2, None) c3 = c1.dup() c3.enableDrag(None, dragC3, None) mx1 = c1.dup() mx1.enableDrag(None, dragX1, None) drawCurve(); 網際動態模擬 window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } from browser import window cango2d = window.Cango2D.new shapedefs = window.shapeDefs obj2d = window.Obj2D.new tweener = window.Tweener.new cgo = cango2d(\"robot\") # 清除畫面 cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(-50, -50, 300) # 加上基軸與第一桿 # 畫筆移到 -20, -10, 畫直線到 -10,-10 以及 -10,0 standData = ['M', -20,-10, 'L', -10,-10, -10,0, 'A', 10,10,0,0,0,10,0, 'L',10,-10, 20,-10, 20,-40, -20,-40,'z'] stand = obj2d(standData, \"SHAPE\", { \"fillColor\":'darkgray', \"border\": True, \"strokeColor\": \"#222222\" }) axle0 = obj2d(shapedefs.circle(10), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\" }) armGrp = cgo.createGroup2D(stand, axle0) segData = ['M',0,-8, 'A',8,8,0,0,0,0,8, 'L',50,8, 'A',8,8,0,0,0,50,-8, 'Z'] seg1 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) # 利用 zIndex 決定疊層的先後次序 axle1 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle1.translate(50, 0) seg1Grp = cgo.createGroup2D(seg1, axle1) armGrp.addObj(seg1Grp) # 加上第二軸 seg2 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) axle2 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle2.translate(50, 0) seg2Grp = cgo.createGroup2D(seg2, axle2) cgo.render(seg2Grp) # 請注意 seg2Grp 加上 seg1Grp 物件上 seg1Grp.addObj(seg2Grp) seg3 = obj2d(segData, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) axle3 = obj2d(shapedefs.circle(6), \"SHAPE\", { 'fillColor':'gray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': 1 }) axle3.translate(50, 0) seg3Grp = cgo.createGroup2D(seg3, axle3) seg2Grp.addObj(seg3Grp) seg4Data = ['M',0,-6, 'A',6,6,0,0,0,0,6, 'L',40,6, 40,12, 50,12, 50,-12, 40,-12, 40,-6, 'Z'] seg4 = obj2d(seg4Data, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) seg3Grp.addObj(seg4) # setup animation animData = {'s1': [0, 80, 45, 0], 's2': [0, -60, -60, 0], 's3': [0, -90, 0, 90, 0], 's4': [0, 30, -90, 0]} armTwnr = tweener(0, 3500, 'loop') def initArm(opts): seg2Grp.transform.translate(50,0) seg3Grp.transform.translate(50,0) seg4.transform.translate(50,0) def armPathFn(time, opts): seg1Rot = armTwnr.getVal(time, opts.s1) seg2Rot = armTwnr.getVal(time, opts.s2) seg3Rot = armTwnr.getVal(time, opts.s3) seg4Rot = armTwnr.getVal(time, opts.s4) seg1Grp.transform.rotate(seg1Rot) seg2Grp.transform.rotate(seg2Rot) seg2Grp.transform.translate(50,0) seg3Grp.transform.rotate(seg3Rot) seg3Grp.transform.translate(50,0) seg4.transform.rotate(seg4Rot) seg4.transform.translate(50,0) cgo.animate(armGrp, initArm, armPathFn, animData) cgo.playAnimation() 線上 Fossil SCM 倉儲 cdag1 線上倉儲可儲存三種不同格式的檔案 第一種:Fossil Wiki Fossil 是一個分散式版本控制系統、缺陷跟蹤管理系統以及在軟體開發中使用的wiki軟體伺服器，它由D.理察·希普建立 第二種:Markdown Markdown的目標是實現「易讀易寫」。 不過最需要強調的便是它的可讀性。一份使用Markdown格式撰寫的文件應該可以直接以純文字發佈，並且看起來不會像是由許多標籤或是格式指令所構成。Markdown語法受到一些既有text-to-HTML格式的影響，包括Setext、atx、Textile、reStructuredText、Grutatext 和 EtText，然而最大靈感來源其實是純文字的電子郵件格式。 第三種:plain text(純文本) 在計算中，純文本是僅表示可讀材料的字符但不表示其圖形表示的數據（例如文件內容），也不表示其他對象（圖像等） 4.單連桿製作及導入v-rep 零件1 零件2 零件3 組裝 導入v-rep 單連桿模擬","title":"協同產品設計實習 第四週作業"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-san-zhou-zuo-ye.html","tags":"HW","text":"1.翻譯影片(14-6,2) 2.利用solvespace組立及v-rep轉入 3.利用onshape組立及v-rep轉入 4.Solvespace 輸入三角形頂點運動軌跡 第三週作業 1.翻譯影片(14-6,2) 2.利用solvespace組立及v-rep轉入 3.利用onshape組立及v-rep轉入 4.Solvespace 輸入三角形頂點運動軌跡 翻譯影片(14-6) 內容: In the cfd area we we develop a lot on our own technology in Arkansas在CFD領域，我們我們開發了很多我們自己的技術在阿肯色州 Arkansas is positioned as the general-purpose navier-stokes CFD solver so with our new turbulence modeling阿肯色被定位為通用納維-斯托克斯CFD求解使我們的新湍流模型 we will be able to cover more use cases and we did in the past所以我們的新湍流模型，將能覆蓋更多過去我們在做的使用案例 we made an investment into a small company in Germany the fluid Dinah that focus on a GPU use and cfd simulation我們投資德國名叫 fluid Dinahe的小公司專門再做GPU的使用和CFD模擬 and there are two products that we are putting our energy into one is called ultra fluid X which is a lot of balls on external aerodynamics software that is being used in a virtual internal setting 我們把精力投入到一個被稱為超流體X主要是在虛擬的內部設置使用很多外部空氣動力學軟件球 another code that came with the investment is none of you would accept use of SPH technologies we are focusing here particularly on simulating of oil flow in transmission cages而另個代碼使用SPH技術重點在於對石油模擬與傳輸的記錄 record is coming out reserves is a new evolution of their their software a big focus in 14 over the finite-difference time-domain most of the solutions and pako our frequency domain solutions now軟件有了全新的進化 因為有14等分的分差時域有了解決方案，並在PAKO頻域提供一個解決方案 we will be providing a time domain solution that will make us more competitive also this solution is very well suited for GPU processing a lot of people as they talk about the physics I think about couples followers 這讓我們更有競爭力因為這種解決方案適合於GPU處理了很多運算及演算 or two lots of years to actually look at certain use cases and work with clients to develop solve a coupling lewis structure interaction is really one of並實際運用在某些使用情況與客戶一起開發解決耦合問題也是非常重要的 the coupling use cases and it's very important also here we're developing off the start so that root structure actually the direct coupling can be done the softest耦合比例非常重要 我們正在開發能使根部結構耦合可以做到最柔軟的方法 we have been developing a coupling actually of arkansas also with multi body dynamics and we did recent just recently a paper at the japanese Society of Automotive Engineers simulating a lane change of a car in a wind tunnel我們一直在阿肯色州開發耦合和多體動力學 最近也派美國汽車工程師與日本工程師交流 so let this little is a very exciting picture of course the validation is another issue here but I think we we have a great technology here and we can work with clients to improve the technology and validate the technology這是一個非常難得的經驗 找出我們的問題 利用這次經驗 拿出更厲害的技術與我們的客戶合作 翻譯影片(2) 內容: The 2017 HyperWorks release has a lot 在2017年HyperWorks發行很多版本 of enhancements to the modeling and assembly capabilities 對軟件的建模和組裝能力的增強 So we put in a new parts browser with a built-in part library 所以我們在一個新的零件瀏覽器與一個內置零件庫 The part library is a great tool for storing and loading work in progress 零件庫是用於存儲和加載正在進行工作的一個很好的工具 So you can store a catalog of all the common parts 因此，您可以存儲所有公共部分的目錄 that a workgroup needs to use,so they can download their models from their PLM system 工作組需要使用，因此他們可以從他們的PLM系統下載他們的模型 and store them locally in a parts library for a work in progress 並將它們本地存儲在正在進行的工作的零件庫中 And it keeps revision control on them, 他保持對它們的修訂控制 so they can back up to the different versions and reload. 所以他們可以備份到不同的版本並重新加載。 And they can also build different configurations now of their models. 他們也可以建立不同的配置到他們現在的的模型。 In the configuration modeler now 現在在配置建模器 they can import parts from part library and then group 他們可以從零件庫導入零件然後分組 them into what we call part sets,which are 他們變成我們所說的部分集 convenient groupings of parts. 即零件方便分組 And then they can drag those parts together into assemblies, 然後他們可以將這些部分一起拖入組件 and configure them for different load 並為不同負載配置它們的 cases or different variations of their models. 情況或他們的模型的不同變化 the other feature of haveing parts in the software 硬件部分的軟件中的另一個特點 is we do part instancing now,too. 我們現在也做實例化 So if you load in a part that has 所以如果你加載在一個部分 multiple instances through the model,we support that. 我們支持多個實例通過模型 We don't have to create multiple copies of it. 我們不必創建它的多個副本 We can actually do the instancing,which is very memory efficient. 我們可以做實際，這是非常有效的記憶。 Also in the model building assembly 也在模型建築組裝 tool set is enhanced ID management as well. 工具集也是增強的ID管理 So not only can we assign IDs based on different rules 因此，我們不僅可以根據不同的規則分配ID that you define in the software,but you can import ID systems 您可以在軟件中定義，但可以導入ID系統 form spreadsheets,XML files,databases, 形式電子表格，XML文件，數據庫， and so forth,that are then used when 等等，然後在使用 it does the renumbering or the assembly of the model. 它進行重新編號或模型的組裝 it has to resolve part collisions. 它必須解決部分碰撞。 Really important part of doing model assembly 做模型組裝重要的部分 is connecting all those parts together. 將所有這些部分連接在一起 Connectors are really vital to the overall assembly process. 連接器對整個裝配過程至關重要。 The quality of the connector that you create really 您真正創建的連接器的質量 determines the outcome of the quality 確定質量的結果 of the overall assembled model as well. 對整體組裝模型 So for us to get a good high fidelity solution, 所以為我們得到一個良好的高保真度解決方案 you have to have a really good connection generation as well. 你必須有一個非常好的連接生成 翻譯心得 經過這一次的影片翻譯,多少有加強到我的英文能力 利用solvespace組立及v-rep轉入 零件1 零件2,3 零件組立 轉入v-rep 心得 這一個組合圖已經連續畫了三次,非常熟悉 利用onshape組立及v-rep轉入 零件1 零件2 零件3 零件組立 轉入v-rep 心得 這一次有用onshape在畫過一次,可以增進畫圖能力,又可以練到組合件 Solvespace 輸入三角形頂點運動軌跡 加入三角形並顯示路徑 利用excel測試路徑是否正確 四連桿機構的運動模擬","title":"協同產品設計實習 第三週作業"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-er-zhou-zuo-ye.html","tags":"HW","text":"1.更改stunnel設定檔ip位址 2.利用solvespace組立及v-rep應用 更改stunnel設定檔ip位址 利用solvespace組立及v-rep應用 solvespace組裝影片 四連桿 零件1 零件2和3 零件組立 v-rep 作業心得 第二個禮拜增加了v-rep,將畫好的圖轉成stl格式,匯入v-rep,製作動畫,又可以學到新的東西","title":"協同產品設計實習 第二週作業"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-di-yi-zhou-zuo-ye.html","tags":"HW","text":"1.利用solvespace及onshape組裝四連桿機構 利用solvespace及onshape組裝四連桿機構 solvespace組裝影片 零件1 零件2 零件3 組裝 onshape組裝影片 零件1 零件2 零件3 組裝 作業心得 第一個禮拜的作業讓我複習了上學期的solvespace,繪圖及組裝的功能,還有建立小組使用到submodule指令","title":"協同產品設計實習 第一週作業"}]};