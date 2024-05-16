var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"41123205-W12","text":"各學員利用 NX 1872 繪製鋼球平衡台所需的零組件, 將各分組倉儲設為評分倉儲的子模組, 跨網路操控模擬場景裝置. 鋼球平衡台自動控制系統模擬 NXOpen Python 程式 TO GOOGLE 心得:我一開始認為NX是一個非常不直覺得程式，因為每一次當我要在自己所畫的模型之中穿出一個孔時，就常常會要重新選擇挖孔還是增長，所以來終於習慣NX的擠出功能了，繪畫的速度就較為快速了。","tags":"w12","url":"./41123205-W12-blog.html"},{"title":"41123205-W11","text":"各學員利用 NX 1872 繪製鋼球平衡台所需的零組件. 鋼球平衡台自動控制系統模擬 利用 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中.","tags":"w11","url":"./41123205-W11-blog.html"},{"title":"41123205-W10","text":"請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 鋼球平衡台 PID 控制與模擬 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中.","tags":"w10","url":"./41123205-W10-blog.html"},{"title":"41123205-W9","text":"期中考週 期中考週 對 Gemini 1.5 Pro 提問: 以下為利用 PID 控制 CoppeliaSim 鋼球平衡台場景的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. \"這裡附上原本的 PID 控制程式碼\" import zmq import time import matplotlib.pyplot as plt import numpy as np #ZMQ 連接設定 context = zmq . Context () socket = context . socket ( zmq . REQ ) socket . connect ( \"tcp://127.0.0.1:5555\" ) #PID 控制參數 Kp = 0.5 Ki = 0.1 Kd = 0.01 #參考資料 reference_x = 0.0 reference_y = 0.0 #實際狀態 x = 0.0 y = 0.0 #誤差 error_x = 0.0 error_y = 0.0 #累積誤差 integral_error_x = 0.0 integral_error_y = 0.0 #導數誤差 derivative_error_x = 0.0 derivative_error_y = 0.0 #控制訊號 control_signal_x = 0.0 control_signal_y = 0.0 #時間軸 time_axis = [] #x 方向座標 x_axis = [] #y 方向座標 y_axis = [] #模擬時間 simulation_time = 10.0 #模擬步長 simulation_step = 0.01 #開始模擬 start_time = time . time () while time . time () < start_time + simulation_time : # 讀取實際狀態 request = \"get state\" socket . send_string ( request ) response = socket . recv_string () state = eval ( response ) x = state [ \"x\" ] y = state [ \"y\" ] # 計算誤差 error_x = reference_x - x error_y = reference_y - y # 累積誤差 integral_error_x += error_x * simulation_step integral_error_y += error_y * simulation_step # 導數誤差 derivative_error_x = ( x - previous_x ) / simulation_step derivative_error_y = ( y - previous_y ) / simulation_step # 更新控制訊號 control_signal_x = Kp * error_x + Ki * integral_error_x + Kd * derivative_error_x control_signal_y = Kp * error_y + Ki * integral_error_y + Kd * derivative_error_y # 限制控制訊號 control_signal_x = max ( - 10.0 , min ( 10.0 , control_signal_x )) control_signal_y = max ( - 10.0 , min ( 10.0 , control_signal_y )) # 送出控制訊號 request = \"set force\" data = { \"force_x\" : control_signal_x , \"force_y\" : control_signal_y } socket . send_string ( request ) socket . send_string ( str ( data )) # 記錄數據 time_axis . append ( time . time () - start_time ) x_axis . append ( x ) y_axis . append ( y ) # 更新狀態 previous_x = x previous_y = y # 延遲模擬步長 time . sleep ( simulation_step ) #關閉 ZMQ 連接 socket . close () #繪製圖表 plt . figure ( figsize = ( 10 , 6 )) plt . subplot ( 2 , 1 , 1 ) plt . plot ( time_axis , x_axis , label = \"x\" ) plt . plot ( time_axis , reference_x * np . ones_like ( time_axis ), label = \"reference_x\" ) plt . xlabel ( \"Time (s)\" ) plt . ylabel ( \"Position (m)\" ) plt . legend () plt . subplot ( 2 , 1 , 2 ) plt . plot ( time_axis , y_axis , label = \"y\" ) plt . plot ( time_axis , reference_y * np . ones_like ( time_axis ), label = \"reference_y\" ) plt . xlabel ( \"Time (s)\" ) plt . ylabel ( \"Position (m)\" ) plt . legend () plt . tight_layout () plt . show ()","tags":"w9","url":"./41123205-W9-blog.html"},{"title":"41123205-W8","text":"錄開學至現在所做的進度 期中報告影片 錄開學至現在所做的進度 1.在about標題下新增各成員學號及倉儲和靜態網站鏈結。 2.錄製個人期中影片","tags":"w8","url":"./41123205-W8-blog.html"},{"title":"41123205-W7","text":"本週清明連假停課一次 本週清明連假 放假休息一週","tags":"w7","url":"./41123205-W7-blog.html"},{"title":"41123205-W6","text":"協同產品設計實習的第六週, 說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式. 教學影片上字幕 依照小組組長分配，各組員將自己所分配到之影片加上字幕和逐字稿，並上傳到個人與小組動態","tags":"w6","url":"./41123205-W6-blog.html"},{"title":"41123205-W5","text":"協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整與 NX 零組件繪圖. 新增P65-P75頁翻譯翻譯 被組長分配到翻譯P65-P75頁並翻譯完成，再將整組成員的檔案統整後上傳","tags":"w5","url":"./41123205-W5-blog.html"},{"title":"41123205-W4","text":"協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. 在小組動態新增翻譯作業 在小組動態創建翻譯作業並上傳","tags":"w4","url":"./41123205-W4-blog.html"},{"title":"41123205-W3","text":"2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 建立子模組 將自己的倉儲設為小組倉儲的子模組","tags":"w3","url":"./41123205-W3-blog.html"},{"title":"41123205-W2","text":"2024 Spring 協同產品設計實習的第二週, 主要利用 Github Classroom 進行分組, 並且說明如何利用 Github Codespaces 維護個人與分組網站. 創立小組 自行找好組員並將組員整合到統一倉儲內","tags":"w2","url":"./41123205-W2-blog.html"},{"title":"41123205-W1","text":"2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. 創立倉儲 建立個人倉儲 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123205-W1-blog.html"}]};