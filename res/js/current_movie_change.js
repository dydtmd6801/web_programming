var movieData = {
    0 : {
        "subject" : "스파이더맨: 노 웨이 홈",
        "checkPercent" : "84.8",
        "date" : "2021.12.15"
    },
    1 : {
        "subject" : "엔칸토: 마법의 세계",
        "checkPercent" : "0.5",
        "date" : "2021.11.24"
    },
    2 : {
        "subject" : "연애 빠진 로맨스",
        "checkPercent" : "0.4",
        "date" : "2021.11.24"
    },
    3 : {
        "subject" : "극장판 소드 아트 온라인 -프로그레시브-  별 없는 밤의 아리아",
        "checkPercent" : "0.3",
        "date" : "2021.12.09"
    },
    4 : {
        "subject" : "아멜리에",
        "checkPercent" : "0.3",
        "date" : "2021.12.15"
    },
    5 : {
        "subject" : "몬스타엑스 : 더 드리밍",
        "checkPercent" : "0.3",
        "date" : "2021.12.08"
    },
    6 : {
        "subject" : "돈 룩 업",
        "checkPercent" : "0.2",
        "date" : "2021.12.08"
    },
    7 : {
        "subject" : "유체이탈자",
        "checkPercent" : "0.2",
        "date" : "2021.11.24"
    },
    8 : {
        "subject" : "프렌치 디스패치",
        "checkPercent" : "0.1",
        "date" : "2021.11.18"
    },
    9 : {
        "subject" : "피부를 판 남자",
        "checkPercent" : "0.1",
        "date" : "2021.12.16"
    }
}
console.log(movieData[0]["subject"]);

function auto_scroll(){
    var img_array = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg"];
    var img_index = 0;

    function auto_img_scroll(){
        if(document.getElementsByClassName("button_check_status")[0].value == 1){
            img_index = 0;
            document.getElementsByClassName("button_check_status")[0].value = "";
        }
        if(document.getElementsByClassName("button_check_status")[1].value == 2){
            img_index = 1;
            document.getElementsByClassName("button_check_status")[1].value = "";
        }
        if(document.getElementsByClassName("button_check_status")[2].value == 3){
            img_index = 2;
            document.getElementsByClassName("button_check_status")[2].value = "";
        }
        if(document.getElementsByClassName("button_check_status")[3].value == 4){
            img_index = 3;
            document.getElementsByClassName("button_check_status")[3].value = "";
        }
        document.getElementsByClassName("scrolling")[0].style.backgroundImage = "url('./res/img/" + img_array[img_index] + "')";
        img_index++;
        if(img_index >= img_array.length){
            img_index = 0;
        }
    }
    setInterval(auto_img_scroll, 2000);
    
    for(var i = 0; i < 10; i++){
        movie_img_num = i + 1;
        url = "./res/img/main_movie" + movie_img_num + ".jpg";
        document.getElementsByClassName("content")[0].innerHTML += 
        "<article class='total_zone'>" +
            "<div class='img_zone' onmouseover='show_hover_menu("+ i +")' onmouseout='hide_hover_menu("+ i +")'>"   + 
                "<img src='"+ url +"' class='img_sty'>" +
                "<div class='hover_menu'>"  +
                    "<button class='btn_sty'>상세보기</button>"  +
                "</div>" +
            "</div>" +
            "<div class='data_zone'>"   +
                "<p>" + movieData[i]["subject"] + "</p>" +
                "<p> 개봉일 " + movieData[i]["date"] + " |</p>" +
                "<p> &nbsp예매율 " + movieData[i]["checkPercent"] + "</p>" +
            "</div>"  +
        "</article>"  ;
    }
}

function show_hover_menu(check_poster){
    switch(check_poster){
        case 0:
            document.getElementsByClassName("hover_menu")[0].style.visibility = "visible";
            break;
        case 1:
            document.getElementsByClassName("hover_menu")[1].style.visibility = "visible";
            break;
        case 2:
            document.getElementsByClassName("hover_menu")[2].style.visibility = "visible";
            break;
        case 3:
            document.getElementsByClassName("hover_menu")[3].style.visibility = "visible";
            break;
        case 4:
            document.getElementsByClassName("hover_menu")[4].style.visibility = "visible";
            break;
        case 5:
            document.getElementsByClassName("hover_menu")[5].style.visibility = "visible";
            break;
        case 6:
            document.getElementsByClassName("hover_menu")[6].style.visibility = "visible";
            break;
        case 7:
            document.getElementsByClassName("hover_menu")[7].style.visibility = "visible";
            break;
        case 8:
            document.getElementsByClassName("hover_menu")[8].style.visibility = "visible";
            break;
        case 9:
            document.getElementsByClassName("hover_menu")[9].tsyle.visibility = "visible";
            break;
    }
}

function hide_hover_menu(check_poster){
    switch(check_poster){
        case 0:
            document.getElementsByClassName("hover_menu")[0].style.visibility = "hidden";
            break;
        case 1:
            document.getElementsByClassName("hover_menu")[1].style.visibility = "hidden";
            break;
        case 2:
            document.getElementsByClassName("hover_menu")[2].style.visibility = "hidden";
            break;
        case 3:
            document.getElementsByClassName("hover_menu")[3].style.visibility = "hidden";
            break;
        case 4:
            document.getElementsByClassName("hover_menu")[4].style.visibility = "hidden";
            break;
        case 5:
            document.getElementsByClassName("hover_menu")[5].style.visibility = "hidden";
            break;
        case 6:
            document.getElementsByClassName("hover_menu")[6].style.visibility = "hidden";
            break;
        case 7:
            document.getElementsByClassName("hover_menu")[7].style.visibility = "hidden";
            break;
        case 8:
            document.getElementsByClassName("hover_menu")[8].style.visibility = "hidden";
            break;
        case 9:
            document.getElementsByClassName("hover_menu")[9].tsyle.visibility = "hidden";
            break;
    }
}

function change_movie_img(img_num){
    switch(img_num){
        case 1:
            document.getElementsByClassName("button_check_status")[0].value = img_num;
            img_url = "./res/img/movie1.jpg"
            break;
        case 2:
            document.getElementsByClassName("button_check_status")[1].value = img_num;
            img_url = "./res/img/movie2.jpg"
            break;
        case 3:
            document.getElementsByClassName("button_check_status")[2].value = img_num;
            img_url = "./res/img/movie3.jpg"
            break;
        case 4:
            document.getElementsByClassName("button_check_status")[3].value = img_num;
            img_url = "./res/img/movie4.jpg"
            break;
    }
    document.getElementsByClassName("scrolling")[0].style.backgroundImage = "url('" + img_url + "')";
}