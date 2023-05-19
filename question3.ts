function getQuestionPart(phrases:string[]):string[] {
    let max = 0
    
    let share = ''
    // ลบช่องว่าง
    let word1 = phrases[0].replace(' ', '')
    let word2 = phrases[1].replace(' ', '')
    let word3 = phrases[2].replace(' ', '')
    // ไล่ตัวอักษรที่ละตัว
    for(let i=0;i<word1.length;i++){
      let t = 0
      for(let j=0;j<word2.length;j++){
        //ถ้าไม่ตรงก็ไม่ต้องเช็คตัวที่ 3 
        if(word1[i] != word2[j])continue
        for(let k=0;k<word1.length;k++){
          // ถ้าตรงก็ไล่วนๆเป็นพายุหมุนจนกว่าจะไม่ตรง
          if(word1[i] == word2[j] && word3[k] == word2[j]){
            while(word1[i+t] == word2[j+t] && word3[k+t] == word2[j+t]){
              t++
            }
            //ถ้ามีคำใหม่ที่ยาวกว่าก็แทนที่
            if(t>max){
              max = t
              // ตัดคำที่ต้องการใช้มาเก็บไว้
              share = word1.slice(i,i+t)
            }
            t=0
          }
        }
      }
    }
    // แทนที่คำด้วยช่อง empty string
    return [word1.replace(share,''),word2.replace(share,''),word3.replace(share,'')]
  }
  console.log(getQuestionPart(['BATHROOM','BATHSALTS','BLOODBATH']))