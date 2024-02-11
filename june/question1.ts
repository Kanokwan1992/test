function getHandScore(input:string):number {
    let score:Record<string,number> = {H:0,C:0,D:0,S:0}
    let ans = 0
    // แยกไผ่
    let si = input.split(' ')
    // ตรวจสอบไพ่ตอง
    let tong = true
    // เลขแรก
    let num1 = si[0].slice(1)
    // ไล่แต่ละใบ
    for(let i=0;i<si.length;i++){
       // ดอกไพ่
       let dok = si[i].slice(0,1)
       // เลขไผ่
       let numbers = si[i].slice(1)
       // เลขตัวที่2ไม่ตรงกับเลขตัวแรกไม่ตอง
       if(numbers!=num1)tong=false
       // A = 11
       if(numbers =='A'){
           score[dok]+=11
       }
       //J Q K = 10
       else if(numbers =='J'||numbers =='Q'||numbers =='K'){
           score[dok]+=10
       }
       // ที่เหลือตามเลข
       else{
           score[dok]+= Number(numbers)
       }
       if( score[dok] > ans ) ans =  score[dok]
    }
    // ตอง A = 35 นอกนั้น 32.5
    if(tong){
       if(num1 == 'A') ans = 35
       else ans = 32.5
    }
    return ans
   }