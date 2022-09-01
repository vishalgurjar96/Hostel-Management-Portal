function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function login(){
    
    var name=document.getElementById('Entry Number').value;
    var entryNum=document.getElementById('Password').value;
    
    var url = "https://script.google.com/macros/s/AKfycbxoB4z2eBBzpOh2mKs2tF9NyHZ79FFGsZ48GCi3gNAzWHV9OjGpxUD1b9cGWogUekcshA/exec";

    // adding the query parameters 
    url = `${url}?email=${name}&password=${entryNum}`;
    var response = JSON.parse(httpGet(url));
    console.log(typeof response);
    if (response.status == "SUCCESS"  && response.authorised == true)
    {
        location.href = "home.html"
    }
    else {
        alert(response.message);
    }
}

function getDetail(){
    var entryNum = document.getElementById('EntryId').value;

    var url = "https://script.google.com/macros/s/AKfycbxaKNWvcqwLBznxSFxgn7Q--31w2quU8VpJ8ptAIt3H4UjTXc2IWWAvw4ciwtFjhunF/exec?email=";

    url = `${url}${entryNum}`;
    var response = JSON.parse(httpGet(url));
    console.log(response);

    var detailEl = document.getElementById("detail");

    detailEl.style.display = "block";
    document.getElementById("name").innerHTML = response.name ;
    document.getElementById("RollNumber").innerHTML = response.rollno ;
    document.getElementById("Hostel").innerHTML = response.hostelName ;
    document.getElementById("RoomNo").innerHTML = response.RoomNumber ;
    document.getElementById("PhoneNo").innerHTML = response.phoneNumber ;
}


function postProblem() {
    var issueTitle = document.getElementById('Issues Faced').value;
    var remark = document.getElementById('remarks').value;
    var url = "https://script.google.com/macros/s/AKfycbw2ruViBAdcaJwGq1QYkokZRrEIM-qFWFspUKW18DpXnKUT8t5xv-PcmOCc3jpwCLnB/exec?reason=";
    url = url + issueTitle +  "&remark=" + remark ;
    console.log(url);
    var response = JSON.parse(httpGet(url));   
    document.getElementById('Issues Faced').value = "";
    document.getElementById('remarks').value = "";
    alert("request Posted");
}

function submitLoss(){
    var entrynum = document.getElementById("Entry Numbers").value;
    var objectName = document.getElementById("Entry Number").value;
    var type = document.getElementById("Issues Faced").value;
    var description = document.getElementById("Password").value;

    var url = "https://script.google.com/macros/s/AKfycbyEcJSCrxeH3DczHFGKRQzTAEjJ43-FsBpsltIiYBU5HL6yx80EgZkWEZs9g-hkcLuxDg/exec?";
    url = url + "name=" + objectName +"&category=" + type + "&description=" + description + "&email=" + entrynum;
    console.log(url);
    var response = JSON.parse(httpGet(url));
    console.log(typeof response);
    alert("Response Recorded");
    document.getElementById("Entry Numbers").value = "";
    objectName = document.getElementById("Entry Number").value = "";
    type = document.getElementById("Issues Faced").value = "";
    description = document.getElementById("Password").value = "";
}