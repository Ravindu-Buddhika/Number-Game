let num=(Math.floor(Math.random()*5)+1);
console.log(num);



function clickAction1(){

    let lblH1 = document.getElementById("h1Lbl");
    let inputText = document.getElementById("txtInput");
    let img11=document.getElementById("img1");
    let roundup=document.getElementById("p1Lbl");
    let lblH2=document.getElementById("h2Lbl");
    h2Lbl
    //lblH1.innerText = inputText.value;    


    let r=3;
    for (let i = 3; i > 0; i--) {
        if(num>inputText.value){
             console.log("Too Low");
            //roundup.innerText="1ත් 5ත් අතර අංකයක් අනුමාන කරන්න , තව try "+(i-1)+" තියෙනවා";
            //alert("හේයි මීට වැඩිය හොදා..යී, මීට වඩා අඩු එකක් දැම්ම නම් ");
            // document.getElementById("myImage").src = "img/yes.jpeg";
            lblH2.innerText = "හේ...............යි මීට වැඩිය හොදා..යී, මීට වඩා වැඩි එකක් දැම්ම නම් උත්තරය "+num;
            // img11.innerHTML=img/images.jpg;
        }else if(num<inputText.value){
            console.log("Too High");
            //roundup.innerText="1ත් 5ත් අතර අංකයක් අනුමාන කරන්න , තව try "+(i-1)+" තියෙනවා";
            //alert("හේයි මීට වැඩිය හොදා..යී, මීට වඩා වැඩි එකක් දැම්ම නම් ");
            lblH2.innerText = "හේ...............යි මීට වැඩිය හොදා..යී, මීට වඩා අඩු එකක් දැම්ම නම්, උත්තරය "+num;
            // img11.innerHTML=img/images.jpg;
        }else{
            console.log("‍යෙස් whotto යෙස්..! හාමුදුරුවෝ සතුටින්");
            //alert("යෙස් whotto යෙස්");
            //roundup.innerText="1ත් 5ත් අතර අංකයක් අනුමාන කරන්න , තව try "+(i-1)+" තියෙනවා";
            lblH2.innerText = "යෙස් who@*# යෙස්";
            // img11.innerHTML=img/yes.jpeg;
        }
    }
}