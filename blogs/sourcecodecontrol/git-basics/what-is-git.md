# Git คืออะไร?

จากบทความเรื่อง [Version Control คืออะไร?](./what-is-version-control) ที่ผ่านมา เราได้เรียนรู้ว่า Version Control คือ ระบบที่บันทึกการเปลี่ยนแปลงของไฟล์ตามช่วงเวลาต่าง ๆ ที่ช่วยให้เราสามารถย้อนกลับไปดูข้อมูลก่อนหน้าและเปรียบเทียบการเปลี่ยนแปลงระหว่างเวอร์ชันต่าง ๆ ของไฟล์ได้

ในบทความนี้ เราจะมาเรียนรู้เกี่ยวกับ Git ซึ่งเป็น Distributed Version Control System ที่เป็นที่นิยมในวงการ Software Development มากที่สุดในปัจจุบัน และลองเริ่มต้นใช้งาน Git กันดู

## ประวัติของ Git

Git ถูกสร้างขึ้นมาตั้งแต่ปี 2005 โดยมีจุดเริ่มต้นมาจากการที่ [BitKeeper](https://www.bitkeeper.org/) ซึ่งเป็น VCS ที่ใช้ในการพัฒนา [Linux Kernel](https://kernel.org/) ได้ยกเลิกการใช้งานฟรี ทำให้ผู้สร้าง Linux Kernel อย่าง Linus Torvalds ต้องพัฒนา VCS ขึ้นมาใหม่ เพื่อใช้ใน Linux Kernel ต่อไป จึงได้มี Git เกิดขึ้นมาให้เราใช้งานกันจนถึงทุกวันนี้นั่นเองครับ

ปัจจุบัน Linux Kernel ยังคงใช้ Git เป็น VCS อยู่ และมีการ Commit ไปยัง Git Repository ของ Linux Kernel มากกว่า 1 ล้านครั้งแล้ว

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/SxPtc52EG2A?si=9XqAwcErpZ3nsNAa&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> Linux Kernel Development History | Gource on [YouTube](https://youtu.be/SxPtc52EG2A?si=LZVZP-BYdwSQmX9L)

## มาเริ่มต้นใช้งาน Git กัน!

1. เราต้องติดตั้ง Git ลงในเครื่องของเราก่อน โดยเข้าไปดาวน์โหลดได้ที่ [https://git-scm.com/downloads](https://git-scm.com/downloads)

   หลังจากติดตั้ง Git เรียบร้อยแล้ว เรามาลองตรวจสอบเวอร์ชันของ Git ในเครื่องของเรากัน

   ```bash
   git --version
   ```

   ผลลัพธ์ที่ได้จะเป็นเวอร์ชันของ Git ที่เราติดตั้งไว้ในเครื่อง อย่างของผมเป็นเวอร์ชัน 2.39.3

   ```
   git version 2.39.3 (Apple Git-146)
   ```

2. มาถึงตรงนี้ เราสามารถเริ่มต้นใช้งาน Git ได้แล้ว!

   โดยเราลองสร้างโฟลเดอร์ใหม่ขึ้นมาชื่อ `hello-git` และเข้าไปในโฟลเดอร์นั้น

   ::: code-group

   ```bash [bash]
   # สร้างโฟลเดอร์ใหม่
   mkdir hello-git

   # เข้าไปในโฟลเดอร์ที่สร้างไว้
   cd hello-git
   ```

   ```shell [Command Prompt]
   # สร้างโฟลเดอร์ใหม่
   mkdir hello-git

   # เข้าไปในโฟลเดอร์ที่สร้างไว้
   cd hello-git
   ```

   ```PowerShell [PowerShell]
   # สร้างโฟลเดอร์ใหม่
   New-Item -Name "hello-git" -Type Directory

   # เข้าไปในโฟลเดอร์ที่สร้างไว้
   Set-Location -Path "hello-git"
   ```

   :::

3. ใช้คำสั่ง `git init` ที่โฟลเดอร์ `hello-git` เพื่อสร้าง Git Repository ใหม่ในโฟลเดอร์นี้

   ```bash
   # สร้าง repository ใหม่
   git init
   ```

   ถ้าสำเร็จ จะได้ผลลัพธ์คล้าย ๆ แบบนี้

   ```
   Initialized empty Git repository in <directory ของคุณ>/hello-git/.git/
   ```

4. จากนั้นเราลองสร้างไฟล์ใหม่ขึ้นมาในโฟลเดอร์ ชื่อ `readme.txt` และเขียนข้อความอะไรก็ได้ลงไปในไฟล์นั้น

   ```
   📁 hello-git
     ├─ 📄 readme.txt
   ```

   ::: code-group

   ```plaintext [readme.txt]
   สวัสดี Git

   ```

   :::

5. เมื่อสร้างไฟล์สำเร็จแล้ว เราสามารถเพิ่มไฟล์เข้า staging area ได้ด้วยคำสั่ง `git add`

   ```bash
   # เพิ่มไฟล์เข้า staging area
   git add .
   ```

   > [!NOTE]
   > คำสั่ง `git add .` จะเป็นการเพิ่มไฟล์ทั้งหมดในโฟลเดอร์เข้า staging area หากคุณต้องการเพิ่มไฟล์แค่เฉพาะบางไฟล์ สามารถใช้คำสั่ง `git add <ชื่อไฟล์>` แทนได้

6. ต่อมาเราจะทำการตรวจสอบสถานะของไฟล์ที่อยู่ใน staging area ด้วยคำสั่ง `git status`

   ```bash
   git status
   ```

   ผลลัพธ์ที่ได้จะเป็นดังนี้ จะสังเกตเห็นว่าไฟล์ readme.txt ถูกเพิ่มเข้า staging area แล้ว

   ```
   On branch main

   No commits yet

   Changes to be committed:
     (use "git rm --cached <file>..." to unstage)
     new file:   readme.txt
   ```

7. เมื่อไฟล์อยู่ใน staging area แล้ว เราสามารถทำการ commit ไฟล์ไปยัง Git Repository ของเราได้ด้วยคำสั่ง `git commit`

   > [!WARNING]
   > แต่ว่าก่อนที่จะ commit ถ้าคุณยังไม่เคยตั้งชื่อและอีเมลของคุณมาก่อน คุณจะต้องใช้คำสั่ง
   >
   > `git config --global user.name "Your Name"` เพื่อตั้งชื่อ git ของคุณ
   >
   > และ `git config --global user.email "you@example.com"` เพื่อตั้งอีเมล git ของคุณก่อนนะ
   >
   > (การ config นี้ทำแค่เพียงครั้งเดียวก็พอ เพื่อให้ git จดจำว่าคุณคือใคร)

   ```bash
   # Commit ไฟล์ที่อยู่ใน staging area
   git commit -m "create readme.txt"
   ```

   เมื่อ commit สำเร็จ จะได้ผลลัพธ์ดังนี้

   ```
   [main (root-commit) f8d4d4f] create readme.txt
   1 file changed, 1 insertion(+)
   create mode 100644 readme.txt
   ```

8. มาถึงตอนนี้เราได้ทำการ commit ไฟล์ readme.txt ไปยัง Git Repository ของเราแล้ว!

   โดยเราจะลองดูประวัติการ commit ของเราด้วยคำสั่ง `git log`

   ```bash
   git log
   ```

   ผลลัพธ์ที่ได้จะเป็นดังนี้

   ```
   commit f8d4d4fa20089b6482d4b45eacc3b56d89ec1d93 (HEAD -> main)
   Author: euro-at-ttss <wachirawitch@tt-ss.net>
   Date:   Sun Mar 24 00:39:50 2024 +0700

       create readme.txt
   ```

## สรุป

ในบทความนี้ เราได้เรียนรู้การใช้งาน Git ในเบื้องต้น จากการสร้าง Git Repository ใหม่ขึ้นมา และได้ลองทำการ commit ไฟล์ `readme.txt` ไปยัง Repository ของเราแล้ว ในบทความถัดไปเราจะมาอธิบายเกี่ยวกับ [Git common terms](./git-common-terms) ที่คุณควรรู้ เช่น คำว่า commit คืออะไร, staging area คืออะไร และอื่น ๆ อีกมากมาย

## Credit
ขอบคุณเนื้อหาดีๆจากต้นทางครับ [TTSS Learning Portal - Learn together, succeed together.](https://learning-ttss.vercel.app/portal.html)
