console.log("ARJAV SANKADASARIYA")
function tot(){
    for(var i=1; i<=3; i++){
        var temp=0;
        for(var j=1;j<=5;j++){
            temp = temp +  parseInt(document.getElementById('a'+j+i).value);
            document.getElementById('s'+i).value = temp;
        }
    }
}
//SET SAMPLE EXAMPLE 
function sample(){
    curr = [[0,1,0],
            [2,0,0],
            [3,0,2],
            [2,1,1],
            [0,0,2]];
    max = [[7,5,3],
            [3,2,2],
            [9,0,2],
            [2,2,2],
            [4,3,3]];
    for(var i=1; i<=5; i++){
        for(var j=1; j<=3; j++){
            document.getElementById('a'+i+j).value = curr[i-1][j-1];
            document.getElementById('m'+i+j).value = max[i-1][j-1];
        }
    }
    document.getElementById('reso-a').value = 10;
    document.getElementById('reso-b').value = 5;
    document.getElementById('reso-c').value = 7;
    tot();
  }

function need(){
    // find_avai();
    for(var i=1; i<=5; i++){
        for(var j=1; j<=3; j++){
            var ne =  parseInt(document.getElementById('m'+i+j).value);
            var al = parseInt(document.getElementById('a'+i+j).value);
            document.getElementById('n'+i+j).value = ne - al;
        }
    }
    //document.getElementById('need').style.backgroundColor='black';
    //document.getElementsByTagName('th').style.backgroundColor='black';
    //document.getElementById('need').style.backgroundColor='#4285F4';
  }
  
// RESET ALL INPUT VALUES 
function reset(){
    var inputs = document.getElementsByTagName('input') ;
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].value =" ";
    }
    document.getElementById("ch").innerHTML="Dialogue Box";

}

function avail(){
    var a = document.getElementById('reso-a').value;
    var b = document.getElementById('reso-b').value;
    var c = document.getElementById('reso-c').value;
    var x = 0;
    var y = 0;
    var z = 0;
    tot()
    var x = parseInt(document.getElementById('s1').value);
    var y = parseInt(document.getElementById('s2').value);
    var z = parseInt(document.getElementById('s3').value);
    document.getElementById('av1').value = a-x;
    document.getElementById('av2').value = b-y;
    document.getElementById('av3').value = c-z;
  }

function sequence(){
    var seqIndex=1
    var check=0;
    var t=0;
    var  i= 1;
    while(t<=15){
        //console.log(check);
        check = check + 1;
        let nav1 = parseInt(document.getElementById('av1').value);
        let nav2 = parseInt(document.getElementById('av2').value);
        let nav3 = parseInt(document.getElementById('av3').value);
        var na1 = parseInt(document.getElementById('a'+i+1).value);
        var na2 = parseInt(document.getElementById('a'+i+2).value);
        var na3 = parseInt(document.getElementById('a'+i+3).value);
        if(na1!=0 || na2!=0 || na3 !=0){
            //console.log('AaAaAaA');
            n1 = parseInt(document.getElementById('n'+i+'1').value)
            n2 = parseInt(document.getElementById('n'+i+'2').value)
            n3 = parseInt(document.getElementById('n'+i+'3').value)
            //console.log(nav1,n1,nav2,n2,nav3,n3);
            if(nav1>=n1 && nav2>=n2 && nav3>=n3){
                //console.log('BBBBBBB');

                document.getElementById('p'+seqIndex).value='P'+i;
                document.getElementById('c'+seqIndex).innerHTML='P'+i;

                document.getElementById('c'+seqIndex+1).value=nav1;
                document.getElementById('c'+seqIndex+2).value=nav2;
                document.getElementById('c'+seqIndex+3).value=nav3;

                document.getElementById('av1').value=parseInt(document.getElementById('av1').value) + parseInt(document.getElementById('a'+i+'1').value);
                document.getElementById('av2').value=parseInt(document.getElementById('av2').value) + parseInt(document.getElementById('a'+i+'2').value);
                document.getElementById('av3').value=parseInt(document.getElementById('av3').value) + parseInt(document.getElementById('a'+i+'3').value);

                document.getElementById('a'+i+'1').value=0;
                document.getElementById('a'+i+'2').value=0;
                document.getElementById('a'+i+'3').value=0;

                seqIndex +=1;
            }
        }
        i=(i%5)+1;
        t=t+1;

        document.getElementById('cf1').value=nav1;
        document.getElementById('cf2').value=nav2;
        document.getElementById('cf3').value=nav3;

    }
    for(var i=1;i<=5; i++)
    {
        var na1 = parseInt(document.getElementById('a'+i+'1').value);
        var na2 = parseInt(document.getElementById('a'+i+'2').value);
        var na3 = parseInt(document.getElementById('a'+i+'3').value);
        if(na1!=0 || na2!=0 || na3 !=0)
        {
            document.getElementById("ch").innerHTML="---> Deadlock <----";
            return 0;
        }
    } 
    document.getElementById("ch").innerHTML="Safe Sequence Found";

    return 1;
}

var t;
function selectprocess(a){
    t = a;
    document.getElementById('pro').innerHTML="P"+a;
}

function check_request(){
    var a = parseInt(document.getElementById('req-a').value);
    var b = parseInt(document.getElementById('req-b').value);
    var c = parseInt(document.getElementById('req-c').value);
    avail();
    let nav1 = parseInt(document.getElementById('av1').value);
    let nav2 = parseInt(document.getElementById('av2').value);
    let nav3 = parseInt(document.getElementById('av3').value);
    //console.log('BBBBBBB');
    console.log(nav1,a,nav2,b,nav3,c);
    if(nav1>=a && nav2>=b && nav3>=c)
    {
        //console.log('fdg');
        document.getElementById('a'+t+1).value = parseInt(document.getElementById('a'+t+1).value)+a;
        document.getElementById('a'+t+2).value = parseInt(document.getElementById('a'+t+2).value)+b;
        document.getElementById('a'+t+3).value = parseInt(document.getElementById('a'+t+3).value)+c;
        avail();
        need();
        temp = sequence();
        console.log(temp)
        if(temp){
            document.getElementById("ch").innerHTML="Safe Sequence Found, Resource allocation possible.";
        }
        //console.log(document.getElementById('a'+t+1).value);
        //console.log(document.getElementById('a'+t+2).value );
        //console.log(document.getElementById('a'+t+3).value );
    }
    else{
        document.getElementById("ch").innerHTML="Requested resourses not available";
    }
}