var tipuesearch = {"pages": [{'title': 'About', 'text': '利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要: \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號. \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下 所謂網站均指靜態網站 , 而用來編輯網站內容的 動態網站, 則統稱為網際內容編輯器 , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段). \n git 為分散式版次管理系統工具. \n git add \n git commit \n git push \n \n 利用 Github Classroom 給每一位學員一個倉儲, a.k. (also known as) 網站 (靜態與動態) \n 每四位學員一組建立一個協同倉儲, a.k. 協同網站 (靜態與動態) \n 靜態網站: Github Pages, Nginx (under public_html) 或 Fossil SCM (under documentation) \n 動態網站: localhost, replit or Ubuntu server \n repo:  https://github.com/mdecycu/cp2023 \n site:  https://mde.tw/cp2023 \n', 'tags': '', 'url': 'About.html'}, {'title': 'github', 'text': '何謂 github? \n GitHub 是一個基於 Git 版本控制系統的網站和平台，它提供了存儲、管理和共享程式碼的功能。以下是一個簡單的解釋，可用於向初學者解釋 GitHub： GitHub 是一個網站，讓開發人員能夠儲存和共享他們的程式碼。程式碼是開發軟體的重要組成部分，它是一系列指令和指示，告訴電腦要執行什麼操作。在開發軟體時，通常會有多個人一起工作，每個人都會寫不同的程式碼，並且有時候需要整合彼此的工作。 GitHub 的用途就是讓開發人員能夠輕鬆地共享他們的程式碼並協同工作。當您在 GitHub 上創建一個倉儲（Repository），您可以將您的程式碼上傳到該倉儲中。其他人可以訪問並查看您的程式碼，也可以為您的項目做出貢獻，提出問題或提供改進意見。 GitHub 提供了許多功能，例如問題追蹤、合併請求（Pull Requests）、版本控制和分支管理。這些功能使得多人協同開發變得更加容易和有組織。您可以在倉儲中追蹤問題和錯誤，查看和審核其他人提交的更改，並在不影響主要程式碼的情況下進行分支開發和測試。 總結來說，GitHub 是一個在網路上存儲和共享程式碼的平台，使得開發人員能夠協同工作、追蹤問題和進行版本控制。它是一個廣泛使用的工具，用於開源項目、商業軟體開發和各種其他程式碼相關的任務。 \n', 'tags': '', 'url': 'github.html'}, {'title': 'Github Pages', 'text': 'GitHub Pages 是 GitHub 提供的一項功能，它可以讓您輕鬆地建立和發佈自己的網站。以下是一個簡單的說明，可用於向初學者解釋 GitHub Pages： GitHub Pages 是一個功能，讓您能夠將您的網站部署到網路上，並透過 GitHub 托管它。如果您正在學習建立網站，或者希望在網路上展示您的專案、筆記、部落格或其他靜態內容，GitHub Pages 是一個很好的選擇。 使用 GitHub Pages 的好處在於它的簡單性和免費性。您可以將您的網站原始碼（例如 HTML、CSS 和 JavaScript 文件）上傳到 GitHub 上的特定倉儲（Repository）。然後，GitHub Pages 會自動處理網站的構建和發佈，並將您的網站託管在 GitHub 的伺服器上。 透過 GitHub Pages，您可以輕鬆地分享您的網站給他人查看。只需在特定的倉儲中創建一個名為 "username.github.io" 的倉儲（其中 "username" 是您的 GitHub 用戶名），然後將您的網站內容放在該倉儲中。您的網站將會在 "https://username.github.io" 的網址上可供訪問。 您可以使用 GitHub Pages 來展示您的專案、個人網站、筆記或其他靜態內容。只需將網站文件推送到您的 GitHub 倉儲，然後在網路上即可訪問。此外，您可以根據需要自定義網站的佈局、風格和內容。 總結來說，GitHub Pages 是一個方便且免費的方式，讓您能夠輕鬆地建立和發佈自己的網站。只需將網站文件上傳到 GitHub 上的特定倉儲，GitHub Pages 將會處理網站的構建和發佈，並提供一個網址供他人訪問您的網站。無論您是學習網站開發還是展示您的專案，GitHub Pages 都是一個非常實用的工具。', 'tags': '', 'url': 'Github Pages.html'}, {'title': 'git commands', 'text': 'SourceTree.7z \n 以下資訊為與 ChatGPT 對話的內容: \n 使用 git 的常見情境與對應指令有哪些? \n 在使用 Git 的過程中，有一些常見的情境和對應的指令。以下是一些常見情境以及相應的 Git 指令： 1. 初始化一個新的儲存庫： \xa0\xa0 - "git init"：在當前目錄中初始化一個新的 Git 儲存庫。 2. 複製（Clone）一個遠端儲存庫： \xa0\xa0 - "git clone <儲存庫URL>"：複製一個遠端儲存庫到本地。 3. 提交（Commit）更改： \xa0\xa0 - "git add <文件>"：將文件添加到暫存區。 \xa0\xa0 - "git commit -m "提交訊息""：將暫存區的更改提交到本地儲存庫。 4. 推送（Push）更改到遠端儲存庫： \xa0\xa0 - "git push <遠端名稱> <本地分支名稱>"：將本地分支的更改推送到遠端儲存庫。 5. 拉取（Pull）遠端儲存庫的最新更改： \xa0\xa0 - "git pull <遠端名稱> <遠端分支名稱>"：從遠端儲存庫拉取最新的更改並合併到當前分支。 6. 創建和切換分支： \xa0\xa0 - "git branch"：列出本地分支。 \xa0\xa0 - "git branch <分支名稱>"：創建一個新的分支。 \xa0\xa0 - "git checkout <分支名稱>"：切換到指定分支。 7. 合併（Merge）分支： \xa0\xa0 - "git merge <分支名稱>"：將指定分支的更改合併到當前分支。 8. 查看歷史記錄和狀態： \xa0\xa0 - "git log"：顯示提交歷史記錄。 \xa0\xa0 - "git status"：顯示儲存庫的狀態，包括未提交的更改。 9. 撤銷更改： \xa0\xa0 - "git checkout -- <文件>"：撤銷對文件的修改，恢復到最後一次提交的狀態。 \xa0\xa0 - "git reset HEAD <文件>"：從暫存區中移除文件，但保留本地的修改。 \n 請再舉一些例子: \n 以下是更多的 Git 使用情境和相應的指令： 1. 查看和比較更改： \xa0\xa0 - "git diff"：顯示工作目錄中未暫存的更改。 \xa0\xa0 - "git diff --staged"：顯示暫存區中的更改。 2. 切換分支並創建新分支： \xa0\xa0 - "git checkout -b <新分支名稱>"：創建一個新的分支並切換到該分支。 3. 刪除分支： \xa0\xa0 - "git branch -d <分支名稱>"：刪除本地分支。 \xa0\xa0 - "git push <遠端名稱> --delete <分支名稱>"：刪除遠端分支。 4. 重新命名分支： \xa0\xa0 - "git branch -m <舊分支名稱> <新分支名稱>"：將本地分支重新命名。 5. 儲存和應用工作目錄上的暫時更改： \xa0\xa0 - "git stash"：將未提交的更改儲存為一個臨時存儲，並還原工作目錄到最後一次提交的狀態。 \xa0\xa0 - "git stash apply"：應用最新的臨時存儲並還原更改。 6. 查看遠端儲存庫信息： \xa0\xa0 - "git remote -v"：顯示遠端儲存庫的詳細資訊，包括 URL。 7. 回溯到特定的提交： \xa0\xa0 - "git checkout <提交哈希值>"：切換到指定的提交。 \xa0\xa0 - "git revert <提交哈希值>"：創建一個新的提交，撤銷指定的提交所引入的更改。 8. 標記和版本標籤： \xa0\xa0 - "git tag"：列出所有的標記。 \xa0\xa0 - "git tag <標籤名稱>"：創建一個新的輕量級標籤。 \xa0\xa0 - "git tag -a <標籤名稱> -m "標籤訊息""：創建一個包含訊息的帶注解的標籤。 9. 忽略文件： \xa0\xa0 - 在儲存庫的根目錄下創建一個名為 ".gitignore" 的文件，並列出要忽略的文件和目錄的模式。 \n 在多人協同的情況下, 與 git 有關的常見情境及指令有哪些? \n \n 克隆遠端儲存庫： \xa0\xa0 - "git clone <儲存庫URL>"：複製遠端儲存庫到本地，以便多人協同開發。 2. 查看遠端儲存庫信息： \xa0\xa0 - "git remote -v"：查看遠端儲存庫的詳細資訊，包括 URL。 3. 拉取（Pull）最新更改： \xa0\xa0 - "git pull <遠端名稱> <遠端分支名稱>"：從遠端儲存庫拉取最新的更改並合併到當前分支。 4. 推送（Push）本地更改： \xa0\xa0 - "git push <遠端名稱> <本地分支名稱>"：將本地分支的更改推送到遠端儲存庫。 5. 分支操作： \xa0\xa0 - "git branch"：列出本地分支。 \xa0\xa0 - "git branch -a"：列出所有分支，包括遠端分支。 \xa0\xa0 - "git checkout <分支名稱>"：切換到指定分支。 \xa0\xa0 - "git checkout -b <新分支名稱>"：創建一個新的分支並切換到該分支。 \xa0\xa0 - "git branch -d <分支名稱>"：刪除本地分支。 \xa0\xa0 - "git push <遠端名稱> --delete <分支名稱>"：刪除遠端分支。 6. 合併（Merge）分支： \xa0\xa0 - "git merge <分支名稱>"：將指定分支的更改合併到當前分支。 7. 解決衝突（Conflict）： \xa0\xa0 - 在合併分支時，如果遇到衝突，需要手動解決衝突。可以使用文本編輯器打開有衝突的文件，解決衝突後再執行 "git add" 和 "git commit" 來完成合併。 8. 查看歷史記錄和狀態： \xa0\xa0 - "git log"：顯示提交歷史記錄。 \xa0\xa0 - "git status"：顯示儲存庫的狀態，包括未提交的更改。 9. 追蹤遠端分支： \xa0\xa0 - "git checkout --track <遠端名稱>/<遠端分支名稱>"：創建一個本地分支並追蹤遠端分支。 10. 拉取特定的遠端分支到本地： \xa0\xa0\xa0 - "git fetch <遠端名稱> <遠端分支名稱>:<本地分支名稱>"：從遠端儲存庫拉取特定分 \n', 'tags': '', 'url': 'git commands.html'}, {'title': 'git add', 'text': 'git add, git commit 與 git push 相關議題. \n 詢問  ChatGPT : \n 如何向初學者說明 Git 指令中的 git add? \n 當向初學者解釋 Git 指令中的 "git add" 時，可以使用以下方式進行說明： "git add" 是 Git 版本控制系統中的一個指令，它的主要功能是將文件的更改加入到 Git 的暫存區（或稱為索引）中。在 Git 中，暫存區是一個重要的概念，它允許你將要提交的文件更改分開處理。 以下是一個對 "git add" 的解釋： 1. "git add" 是一個用於指示 Git 追蹤和紀錄文件更改的指令。 2. 當你對文件做出修改後，Git 並不會自動將這些更改紀錄下來。相反，你需要使用 "git add" 將更改添加到暫存區。 3. 暫存區是一個中間階段，它允許你選擇性地將特定文件或特定文件的更改紀錄下來，而不是將所有更改都直接提交到 Git 儲存庫。 4. 使用 "git add" 指定要加入暫存區的文件或文件夾，例如 "git add filename" 或 "git add foldername"。 5. 一旦你使用 "git add" 將文件更改添加到暫存區，Git 就會開始跟蹤這些更改，並準備將它們包含在下一次的提交中。 簡而言之，"git add" 是一個將文件更改紀錄下來並加入到 Git 暫存區的指令。這樣可以讓你選擇性地將特定的更改提交到版本控制系統中，而不是一次性提交所有更改。這樣可以提供更大的靈活性和精細的控制，並使版本控制更具效率。 \n 再問: \n 何謂 Git 暫存區（或稱為索引）? \n Git 暫存區（或稱為索引）是 Git 版本控制系統中的一個重要概念，它在版本控制的過程中扮演了關鍵的角色。以下是對 Git 暫存區的解釋： 1. 暫存區是一個位於 Git 儲存庫中的中間區域。它用於暫時存放文件的更改，這些更改將在下一次提交（commit）時納入版本控制。 2. 當你對文件進行修改時，Git 不會自動將這些更改紀錄下來。相反，你需要使用 "git add" 將更改添加到暫存區。 3. 暫存區可以理解為一個緩衝區，它允許你選擇性地將特定文件或特定文件的更改分開處理，而不是將所有更改都直接提交到儲存庫。 4. 在進行 "git commit" 提交操作時，Git 會將暫存區中的文件快照（snapshot）記錄為一個新的提交。這樣的好處是你可以按照需要對更改進行分組，而不必一次性提交所有更改。 5. 使用暫存區可以提供更大的靈活性和精細的控制，因為你可以檢查即將提交的更改，並在提交之前對其進行調整或分離。 簡而言之，暫存區是 Git 版本控制系統中用於存放即將提交的文件更改的區域。它允許你選擇性地將特定文件或特定文件的更改紀錄下來，並在進行提交之前對其進行調整。這樣的機制提供了更大的彈性和細粒度的控制，幫助你更有效地管理和追蹤文件的變更。 \n 再問: \n Git 暫存區是在倉儲的哪個地方, 資料會一直存在還只是暫存? \n Git 暫存區（或稱為索引）是存放在 Git 儲存庫中的一個特殊文件，而不是存放在特定的目錄中。它是儲存庫的一部分，位於 ".git" 目錄中。暫存區本身並不是一個單獨的物理位置，而是儲存庫中的一個特定狀態。 資料在暫存區中只是暫時存在，並不會永久保存。當你對文件進行 "git add" 操作，Git 會將相應的更改紀錄到暫存區中。這些更改在提交之前只存在於暫存區，並且可以隨時進行修改或取消。 一旦你執行 "git commit" 命令提交更改，Git 將會根據暫存區中的內容創建一個新的提交（commit），並將該提交保存到儲存庫的歷史記錄中。這樣的提交會持久保存，成為了儲存庫的一部分。暫存區在每次提交後都會被清空，準備接收下一次更改。 因此，暫存區是一個用於暫時保存更改的區域，當你準備好提交這些更改時，它們將被永久記錄到儲存庫中。資料在暫存區中並不是永久存在的，而是在提交前的過程中的一個臨時階段。 \n 再問: \n 何謂提交? \n 在版本控制系統（如Git）中，"提交"（commit）是指將文件或代碼更改保存到儲存庫的歷史記錄中的操作。提交創建了一個新的快照（snapshot），記錄了儲存庫在某個時間點上的狀態。以下是對提交的解釋： 1. 提交是版本控制系統中的重要概念，它表示你希望將文件或代碼更改永久地保存到儲存庫中。 2. 當你對文件進行修改並滿意結果後，可以使用 "git add" 命令將更改添加到 Git 的暫存區（或索引）中。 3. 一旦你將所有需要提交的更改都添加到暫存區中，可以使用 "git commit" 命令來創建一個新的提交。 4. 提交是一個具有唯一標識（commit hash）的快照，它記錄了儲存庫在提交時的狀態，包括被更改的文件和它們的內容。 5. 每個提交都可以包含一個相關的提交消息（commit message），用於描述這個提交所做的更改、修復的問題或任何相關信息。 6. 提交的歷史記錄是順序的，每次提交都建立在前一個提交的基礎之上，形成一個有向無環圖（DAG）結構。 7. 提交的歷史記錄使你能夠追蹤和恢復過去的更改，合作和協調工作，以及進行分支和合併操作等。 提交在版本控制中扮演著關鍵的角色，它確保了文件更改的持久性和可追蹤性。通過進行提交，你可以記錄並保留儲存庫在不同時間點上的狀態，並隨時查看、比較和回溯到過去的版本。 \n 再問: \n 當使用者執行 git add . 之後,\xa0 git.exe 具體做了甚麼動作? \n 當使用者執行 "git add ." 命令後，"git.exe" 會執行以下動作來處理這個指令： 1. "git.exe" 會分析目前工作目錄中的所有更改，包括修改的文件和新建的文件。 2. 它會將這些更改的文件路徑和內容紀錄到 Git 儲存庫的暫存區中。暫存區實際上是一個特殊的 Git 檔案，位於 ".git" 目錄中，用於記錄即將提交的更改。 3. 如果有新的文件被添加到工作目錄中，它們將被添加到暫存區。對於已經存在的文件，它會比對工作目錄中的版本和暫存區中的版本之間的差異，並將這些差異紀錄到暫存區中。 4. "git.exe" 會為每個被添加到暫存區的文件生成一個 SHA-1 雜湊值，用於唯一識別文件的內容。 5. 在將文件的內容和元資料紀錄到暫存區後，"git.exe" 完成了 "git add ." 的操作。 總結來說，"git add ." 命令告訴 "git.exe" 將所有更改的文件路徑和內容紀錄到 Git 的暫存區中，準備進行提交。這樣可以將更改分開處理，提供了更大的彈性和控制，讓你能夠選擇性地提交特定的更改，而不是一次性提交所有更改。 \n 再問: \n 甚麼是文件的 SHA-1 雜湊值? \n SHA-1（Secure Hash Algorithm 1）雜湊值是一種密碼學演算法，用於將數據（例如文件或消息）轉換為固定長度的唯一字串。在 Git 中，文件的 SHA-1 雜湊值是使用 SHA-1 算法計算出的 40 個字符的字串，用於唯一識別文件的內容。 以下是文件的 SHA-1 雜湊值的一些特點和作用： 1. 唯一性：SHA-1 算法通過將文件的內容轉換為唯一的雜湊值，確保不同文件具有不同的雜湊值。即使文件的內容只有微小的差異，其雜湊值也會完全不同。 2. 固定長度：SHA-1 雜湊值始終為 40 個字符，無論文件的大小。這使得雜湊值的長度在不同大小的文件中保持一致。 3. 安全性：SHA-1 是一個具有強大加密性能的雜湊算法。它對於碰撞（collision）攻擊的抵抗力相對較強，碰撞攻擊是指找到兩個不同的文件，它們的雜湊值相同。然而，由於 SHA-1 已經被認為不再足夠安全，因此在某些安全敏感的應用中已經被更強的雜湊算法（如 SHA-256）所取代。 在 Git 中，每個文件的內容都會被計算出一個唯一的 SHA-1 雜湊值。這個雜湊值用於識別文件，確保文件的完整性和不易被篡改。在儲存庫中，Git 使用這些雜湊值來追蹤文件的歷史、比較文件的更改，以及進行版本控制操作。 \n 再問: \n 如何說明密碼學演算法? \n 密碼學演算法是用於處理數據的數學算法，旨在保護數據的安全性、完整性和機密性。它們使用各種數學和計算方法，以加密（加上密碼）和解密（解開密碼）的方式處理數據，使得只有擁有正確密鑰的人能夠解讀和存取數據。以下是對密碼學演算法的解釋： 1. 加密：密碼學演算法使用一個密鑰（通常是一個秘密的數字、字串或文件）來對數據進行加密。加密是將原始數據轉換成看似隨機的、不可讀的格式的過程。只有使用正確的密鑰進行解密操作，才能將加密後的數據還原為原始形式。 2. 解密：解密是使用相應的密鑰對加密數據進行反向操作，以還原出原始的、可讀的數據。只有擁有正確的密鑰的人才能夠成功解密並取得原始數據。 3. 對稱加密：在對稱加密中，同一個密鑰用於加密和解密數據。發送者和接收者必須共享同一個密鑰，並且將其保密。常見的對稱加密演算法有 AES（Advanced Encryption Standard）和 DES（Data Encryption Standard）。 4. 非對稱加密：在非對稱加密中，使用一對密鑰，包括公鑰和私鑰。公鑰用於加密數據，而相應的私鑰用於解密數據。公鑰可以公開分享，而私鑰必須保持秘密。常見的非對稱加密演算法有 RSA 和 ECC（Elliptic Curve Cryptography）。 5. 雜湊函數：雜湊函數將任意大小的數據轉換成固定長度的數字串，稱為雜湊值或摘要。這個過程是單向的，無法將雜湊值還原為原始數據。雜湊函數常用於校驗數據的完整性和識別數據的唯一性，並在密碼學中用於確保 \n', 'tags': '', 'url': 'git add.html'}, {'title': 'Replit', 'text': '登入 Replit 後, 設法建立一個倉儲與遠端 Github 上的空倉儲同步. \n 為確保使用 "main" 作為主分支名稱，可以在 "git init" 之後加上 "git branch -m main" 指令。這將會將預設的分支名稱從 "master" 改為 "main"。操作流程如下： 1. 在 Replit 的終端機（Terminal）中，確定您目前所在的目錄是您想要作為 Git 倉儲的目錄。如果不是，您可以使用 "cd" 指令切換到正確的目錄。 2. 初始化 Git 倉儲： \xa0\xa0 - 執行指令 "git init"：這會在目前的目錄下初始化一個新的 Git 倉儲。 3. 將預設分支名稱改為 "main"： \xa0\xa0 - 執行指令 "git branch -m main"：這將把預設分支從 "master" 改為 "main"。 4. 連結到 GitHub 倉儲： \xa0\xa0 - 在 GitHub 上創建一個空的倉儲（Repository），並取得該倉儲的 URL。 \xa0\xa0 - 在終端機中，執行指令 "git remote add origin <GitHub倉儲URL>"：這會將您的本地倉儲與 GitHub 倉儲連結起來。 5. 設定提交身分： \xa0\xa0 - 在 Replit 的右側窗格中，點擊「Secrets」選項卡。 \xa0\xa0 - 在「Environment variables」區域，設定一個名為 "GIT_COMMITTER_NAME" 的變數，並設定您的名字。 \xa0\xa0 - 設定一個名為 "GIT_COMMITTER_EMAIL" 的變數，並設定您的郵件地址。 6. 將本地的更改提交到 GitHub： \xa0\xa0 - 執行指令 "git add ."：將所有更改添加到暫存區。 \xa0\xa0 - 執行指令 "git commit -m "Initial commit""：將更改提交到本地儲存庫。 \xa0\xa0 - 執行指令 "git push -u origin main"：將本地的更改推送到 GitHub 倉儲。 現在，您的本地 Git 倉儲和 GitHub 上的倉儲已經連結起來，並且已設定提交身分，同時使用 "main" 作為主分支名稱。您可以在 Replit 上進行更改、提交和推送，並保持與 GitHub 上的倉儲同步。', 'tags': '', 'url': 'Replit.html'}, {'title': 'Computer', 'text': "Physical and Virtual PC ( Virtualbox ) \n Operating Systems: \n Windows \n Ubuntu \n Network: \n Internet \n The internet represents a global network of interconnected computer systems that facilitates the exchange of information and data across physical borders. This technology has emerged as one of the most significant inventions of modern times, transforming the way we communicate, conduct commerce, and access information. At its core, the internet comprises millions of connected computing systems and servers, linked together through a sophisticated architecture of routers, switches, and other networking components. It enables users to access a diverse range of digital resources, including email, social media platforms, online shopping, and entertainment services. The internet operates on a standardized set of protocols, such as Transmission Control Protocol/Internet Protocol (TCP/IP), which regulates the flow of data across the network. This allows computing devices, regardless of their location or operating system, to communicate and exchange information seamlessly. The internet has brought about a significant transformation in many aspects of modern life, facilitating unprecedented access to information and services. Its global reach has expanded commercial opportunities for businesses, enabling them to extend their reach beyond geographical borders. Furthermore, the internet has fostered new opportunities for collaboration and communication between people separated by distance. Nevertheless, the internet's ubiquitous nature and prevalence pose new challenges, including security threats and concerns over privacy. Consequently, significant research and development efforts continue towards developing new technologies and standards to bolster the security and resilience of the internet, while safeguarding its openness and accessibility for all users. \n WWW \n The World Wide Web (WWW) is an interconnected network of digital resources, which operates as a subset of the internet, providing users with an unprecedented ability to access and share information. The WWW has emerged as one of the most transformative technological advancements of the late 20th century, revolutionizing the way individuals obtain knowledge, conduct commerce, and collaborate with others. At its core, the WWW relies on standardized protocols, such as the Hypertext Transfer Protocol (HTTP), which regulate the transmission and retrieval of web resources across the internet. Web servers host these resources, which clients typically access through a web browser. The WWW has significantly impacted modern society, enabling individuals and businesses to share information and connect with others on a global scale. Through the WWW, users have access to an extensive range of digital resources, including web pages, multimedia content, and online services. The WWW has facilitated the globalization of commerce and expanded educational opportunities for learners around the world. However, the WWW also presents new challenges, including concerns regarding privacy, security, and the spread of misinformation. As such, significant research and development efforts continue to focus on enhancing the security and reliability of the web, while preserving its openness and accessibility for all users. \n Git distributed version control system: \n git_essential_document.7z  (password protected for cp2023) \n Git is a distributed version control system (VCS) designed for software development, providing a reliable and efficient means for managing source code and enabling collaborative development workflows. Developed by Linus Torvalds in 2005, it has since emerged as a widely adopted VCS, with a rich set of features and powerful tools for managing complex codebases. Git allows developers to track changes to their codebase over time, by creating and maintaining a history of all modifications made to files and directories. It provides a decentralized architecture, where each developer has their own local copy of the repository, which can be synced with remote repositories, such as those hosted on GitHub or GitLab. Git's robust set of features includes branching and merging, which enable developers to create isolated copies of the codebase, work on new features or bug fixes, and then merge those changes back into the main codebase when ready. This allows developers to experiment with new ideas and features, without disrupting the overall stability of the codebase. Additionally, Git provides tools for resolving conflicts that may arise when multiple developers are working on the same codebase. It supports a wide range of workflows, including peer code review, continuous integration, and deployment, which enhance collaboration and productivity. In conclusion, Git represents a key technology in modern software development, offering a flexible, scalable, and reliable means for managing codebases and enabling collaborative workflows. Its widespread adoption across the industry attests to its robustness and effectiveness in handling complex software development tasks. \n \n", 'tags': '', 'url': 'Computer.html'}, {'title': 'Javascript', 'text': '瀏覽器就是你的電腦程式環境 \n http://jsforcats.com/  (貓咪學 JavaScript) \n https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide \n https://eloquentjavascript.net/ \n \n \n', 'tags': '', 'url': 'Javascript.html'}, {'title': 'Brython', 'text': 'Brython 是一個讓您可以使用 Python 程式語言在瀏覽器中執行的工具。以下是一個簡單的說明，可用於向初學者解釋 Brython： Brython 是 "Browser Python" 的縮寫，它是一個專為瀏覽器設計的 Python 執行環境。Python 是一個簡潔易讀且強大的程式語言，而 Brython 讓您能夠直接在瀏覽器中運行 Python 程式碼，而不需要任何額外的安裝或設定。 使用 Brython，您可以在網頁上編寫 Python 程式碼，並在瀏覽器中執行。這對於學習 Python 或在網頁上進行簡單的動態互動非常有用。您可以編寫各種功能，例如計算器、遊戲、表單驗證等等，並在瀏覽器中立即查看結果。 Brython 的優勢之一是它提供了與標準 Python 類似的語法和功能。這意味著您可以使用您已經熟悉的 Python 語法來編寫瀏覽器腳本，而不需要學習其他語言或概念。它支援大部分的 Python 3 語法和標準庫，這讓您可以使用許多內建函式、資料結構和模組。 使用 Brython，您可以將 Python 程式碼直接放在網頁的 "<script type=\'text/python\'>" 標籤中，或者使用外部腳本檔案引入。Brython 會解析並執行您的 Python 程式碼，並將結果顯示在網頁上。 總結來說，Brython 是一個讓您在瀏覽器中運行 Python 程式碼的工具。它使得在網頁上使用 Python 變得容易，並提供了與標準 Python 相似的語法和功能。如果您想要在網頁上進行簡單的動態互動或學習 Python，Brython 是一個很好的選擇。 \n https://stackabuse.com/an-introductory-guide-to-brython/ \n https://www.geeksforgeeks.org/introduction-to-brython/ \n https://realpython.com/brython-python-in-browser/ \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}, {'title': 'Python', 'text': 'https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf \n https://python.swaroopch.com/ \n https://github.com/wenbindu/ThinkPython2-CN \n https://automatetheboringstuff.com/2e/chapter0/ \n Flask based: \n https://github.com/mdecycu/cmsimde \n PyQt based: \n https://github.com/leo-editor/leo-editor \n https://github.com/KmolYuan/Pyslvs-UI \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Mojo', 'text': 'https://www.modular.com/mojo   \n https://github.com/modularml/mojo   \n https://docs.modular.com/   \n', 'tags': '', 'url': 'Mojo.html'}, {'title': 'ANSI C', 'text': 'https://www.learn-c.org/ \n https://www.programiz.com/c-programming \n Arduino: \n https://docs.arduino.cc/ \n https://www.tinkercad.com/circuits \n https://github.com/lcgamboa/picsimlab \n https://wokwi.com/ \n https://all3dp.com/2/best-arduino-simulators-online-offline/ \n Tiny C Compiler: \n https://bellard.org/tcc/ \n', 'tags': '', 'url': 'ANSI C.html'}, {'title': 'PICSimLab', 'text': 'https://www.youtube.com/watch?v=be96Ds8umig \n Arduino \n https://github.com/lcgamboa/picsimlab  Programmable IC Simulator Laboratory \n https://www.arduino.cc/en/software  Arduino IDE \n https://com0com.sourceforge.net/  Null-modem Emulator \n PICSimLab 模擬 Arduino Uno (COM6) 與 Stepper Motor: \n \n \n 透過 PICSimLab Pin Viewer, 將 PB0/8, PB1/~9, PB2/~10 與 PB3/~11 與 Stepper Motor 接線. \n \n 透過 com0com 模擬 COM6 <-> COM4 連線. \n \n Arduino IDE 將 Stepper Motor 控制程式編譯後透過 COM4 經由 com0com 將程式經由 COM6 上傳到 Virtual Arduino Uno board. \n \n 接著希望可以利用 CoppeliaSim zmqRemoteAPI Python 讀取 PICSimLab 控制 Stepper Motor 的資料, 用來同步控制位於 CoppeliaSim 場景中的 Virtual Stepper Motor. \n Reference: \n HoRoSim, a Holistic Robot Simulator: Arduino Code, Electronic Circuits and Physics  ( pdf ) \n scrum-1/horosim (github.com)', 'tags': '', 'url': 'PICSimLab.html'}]};