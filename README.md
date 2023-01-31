# shortURL
database : MongoDB

back-end : Node JS

front-end : React JS

deployment : Heroku (เพราะ ใช้งานได้ฟรี และเหมาะสำหรับโปรเจคเล็กๆ ที่ใช้ในการทดสอบ)

หน้าตาเว็บ 

มีช่องกรอก URL ที่ต้องการย่อ เมื่อกรอกแล้ว กดปุ่ม submit รอจนกระทั่งมีแจ้งเตือนว่าสำเร็จก็สามารถ กดปุ่ม coppy ไปใช้งานได้

![image](https://user-images.githubusercontent.com/47472561/215530464-9f5f25f7-fab2-4aba-aedb-6da0eee0e912.png)

ข้อมูล database

เก็บค่า input URL , output ที่ได้ , timestamp 
ตัวอย่างข้อมูลใน database

{
  "_id": {
    "$oid": "63d73e1115e878bd40022ae2"
  },
  "input": "https://www.youtube.com/watch?v=6OC92oxs4gA&list=RDGMEMhCgTQvcskbGUxqI4Sn2QYwVMAfsPqkP0kAE&index=6",
  "output": "https://cdpt.in/MjUzOTcyNg==",
  "date": "30 January 2023 , 10 : 48 : 33"
  }

ซึ่งสามารถ query ดูค่าในหนึ่งวันมีการใช้งานไปกี่ครั้ง,ดูค่าการใช้งานรายสัปดาห์,ดูค่าการใช้งานรายเดือน,ดูค่าการใช้งานรายปี,การใช้งานทั้งหมดกี่ครั้ง

การทำงาน

