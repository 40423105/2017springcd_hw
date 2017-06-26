#include <Servo.h>
int d ; //定義變數d

Servo myservo; // 建立Servo物件，控制第一顆伺服馬達
Servo myservo1; // 建立Servo物件，控制第二顆伺服馬達
  
void setup() 
{ 
  
  myservo.attach(10); //連接數位腳位9，伺服馬達的接腳
  myservo1.attach(9); //連接數位腳位10，伺服馬達的接腳
} 

void loop() 
{ 
   if(0 <= d && d <= 360){
      myservo1.write(d); 
    }
   for(int i = 360; i >= 0; i-=1){
    myservo.write(i); //傳入角度，從360度轉到0度
    delay(50);
    i=360; 
  }
 }
