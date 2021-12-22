var movie = {
    CGV : {
        0 : {
            0 : "CGV대구수성",
            1 : "CGV대구스타디움",
            2 : "CGV대구아카데미",
            3 : "CGV대구연경"
        },
        1 : {
            0 : "CGV대구월성",
            1 : "CGV대구이시아",
            2 : "CGV대구칠곡",
            3 : "CGV대구한일"
        },
        2 : {
            0 : "CGV대구현대"
        }
    },
    LOTTE : {
        0 : {
            0 : "대구광장",
            1 : "대구율하",
            2 : "동성로",
            3 : "상인"
        },
        1 : {
            0 : "성서",
            1 : "프리미엄만경",
            2 : "프리미엄칠곡"
        }
    }
}

var address = {
    CGV : {
        0 : {
            0 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.1366122193076!2d128.63827581521977!3d35.821123780161976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e28f18140d69%3A0x23a71942d0a8f4cf!2zQ0dWIOuMgOq1rOyImOyEsQ!5e0!3m2!1sko!2skr!4v1640140013814!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>",
            1 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.6881580174595!2d128.6843764152202!3d35.83212608015945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566096d0f7aaddb%3A0xaa4ccd63b3717d06!2zQ0dWIOuMgOq1rOyKpO2DgOuUlOybgA!5e0!3m2!1sko!2skr!4v1640140089775!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            2 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.1449732937363!2d128.59209031522133!3d35.86996398015076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c39e7bd327%3A0x7c29cda2dd3e21b2!2zQ0dWIOuMgOq1rOyVhOy5tOuNsOuvuA!5e0!3m2!1sko!2skr!4v1640140138478!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            3 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.232642888634!2d128.62054211522323!3d35.941278480134564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e14d0444f15b%3A0x213409672bcc6eca!2zQ0dWIOuMgOq1rOyXsOqyvQ!5e0!3m2!1sko!2skr!4v1640140178419!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>"
        },
        1 : {
            0 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.996337130489!2d128.5245533152199!3d35.824565580161156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e52a7ce9db55%3A0xfdb875d4476f8e40!2zQ0dWIOuMgOq1rOyblOyEsQ!5e0!3m2!1sko!2skr!4v1640140216310!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            1 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.028677398366!2d128.63455731522262!3d35.92179808013888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e016077f5517%3A0x34d88cfc8025296f!2zQ0dWIOuMgOq1rOydtOyLnOyVhA!5e0!3m2!1sko!2skr!4v1640140251496!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            2 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.1174385976346!2d128.55815731522327!3d35.94409698013385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e730ed9c4967%3A0xae9a0924c961e890!2zQ0dWIOuMgOq1rOy5oOqzoQ!5e0!3m2!1sko!2skr!4v1640140284827!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            3 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.126583400408!2d128.59315521522134!3d35.870414680150645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c3627fbbc1%3A0xf7868fccee21ec53!2zQ0dWIOuMgOq1rO2VnOydvA!5e0!3m2!1sko!2skr!4v1640140310808!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>"
        },
        2 : {
            0 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.261199972749!2d128.5886155152212!3d35.86711538015127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3ea82c31a0f%3A0xe26836b816d92794!2zQ0dWIOuMgOq1rO2YhOuMgA!5e0!3m2!1sko!2skr!4v1640140347156!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>"
        }
    },
    LOTTE : {
        0 : {
            0 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.726283734188!2d128.54850911522084!3d35.85571468015402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e48c882b61c9%3A0x3226a06d36544973!2z66Gv642w7Iuc64Sk66eIIOuMgOq1rOq0keyepQ!5e0!3m2!1sko!2skr!4v1640140381129!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            1 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.2321705726476!2d128.69188621522113!3d35.867826880151206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35660a4cbbb17f73%3A0x31c4a1e81fd18a1!2z66Gv642w7Iuc64Sk66eIIOuMgOq1rOycqO2VmA!5e0!3m2!1sko!2skr!4v1640140416023!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            2 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.1336504964625!2d128.59481191522127!3d35.87024148015067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c4c05eddaf%3A0x229944303a7ded0!2z66Gv642w7Iuc64Sk66eIIOuPmeyEseuhnA!5e0!3m2!1sko!2skr!4v1640140442107!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            3 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.3200917576173!2d128.53714591521967!3d35.816621480163015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565fb3ae2e95e9b%3A0x4a77ff93fc369727!2z66Gv642w7Iuc64Sk66eIIOyDgeyduA!5e0!3m2!1sko!2skr!4v1640140480801!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>"
        },
        1 : {
            0 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.7772035814223!2d128.50564251522084!3d35.85446628015428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e53f30619dfb%3A0x5d1d21d69bfc593!2z66Gv642w7Iuc64Sk66eIIOyEseyEnA!5e0!3m2!1sko!2skr!4v1640140606960!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            1 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.106034793925!2d128.58824011522128!3d35.87091828015054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c270bc990d%3A0x80d94a0e3241cbcb!2z66Gv642w7Iuc64Sk66eIIO2UhOumrOuvuOyXhOunjOqyvQ!5e0!3m2!1sko!2skr!4v1640140564331!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>",
            2 : "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.1949535319113!2d128.56172621522322!3d35.942200580134354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e733d5a0bbf1%3A0x834eaa22cc705ceb!2z66Gv642w7Iuc64Sk66eIIO2UhOumrOuvuOyXhOy5oOqzoQ!5e0!3m2!1sko!2skr!4v1640140638197!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen=' loading='lazy'></iframe>"
        }
    }
}

var cgv_length = Object.keys(movie["CGV"]).length;
var lotte_length = Object.keys(movie["LOTTE"]).length;
var cgv_length_num = Object.keys(movie["CGV"][cgv_length - 1]).length;
var lotte_length_num = Object.keys(movie["LOTTE"][lotte_length - 1]).length;
var cgv_google_map = "";
var lotte_google_map = "";

function load_table(){
    var i, j;
    var cgv_table_data = "", lotte_table_data = "";
    for(i = 0; i < cgv_length; i++){
        cgv_table_data += "<tr>";
        if(Object.keys(movie["CGV"][i]).length == 4){
            for(j = 0; j < 4; j++){
                cgv_table_data += "<td><a href='#google_map_zone' onclick='show_google_map(\"" + movie["CGV"][i][j] + "\","+ i +","+ j +")'; return false;>" + movie["CGV"][i][j] + "</a></td>";
            }
        } else {
            for(j = 0; j < cgv_length_num; j++){
                cgv_table_data += "<td><a href='#google_map_zone' onclick='show_google_map(\"" + movie["CGV"][i][j] + "\","+ i +","+ j +")'; return false;>" + movie["CGV"][i][j] + "</a></td>";
            }
        }
        cgv_table_data += "</tr>";
    }
    document.getElementById("table_cgv").innerHTML = cgv_table_data;
    for(i = 0; i < lotte_length; i++){
        lotte_table_data += "<tr>";
        if(Object.keys(movie["LOTTE"][i]).length == 4){
            for(j = 0; j < 4; j++){
                lotte_table_data += "<td><a href='#google_map_zone' onclick='show_google_map(\"" + movie["LOTTE"][i][j] + "\","+ i +","+ j +")'>" + movie["LOTTE"][i][j] + "</a></td>";
            }
        } else {
            for(j = 0; j < lotte_length_num; j++){
                lotte_table_data += "<td><a href='#google_map_zone' onclick='show_google_map(\"" + movie["LOTTE"][i][j] + "\","+ i +","+ j +")'>" + movie["LOTTE"][i][j] + "</a></td>";
            }
        }
        lotte_table_data += "</tr>";
    }
    document.getElementById("table_lotte").innerHTML = lotte_table_data;
}

function show_table(check_btn){
    if(check_btn == "cgv"){
        document.getElementById("table_cgv").style.visibility = "visible";
        document.getElementById("table_lotte").style.visibility = "hidden";
        if(document.getElementById("table_cgv").style.visibility == "visible"){
            document.getElementById("cgv_btn").style.background = "#ddd";
            document.getElementById("lotte_btn").style.background = "white";
        }
    }
    if(check_btn == "lotte"){
        document.getElementById("table_cgv").style.visibility = "hidden";
        document.getElementById("table_lotte").style.visibility = "visible";
        if(document.getElementById("table_lotte").style.visibility == "visible"){
            document.getElementById("lotte_btn").style.background = "#ddd";
            document.getElementById("cgv_btn").style.background = "white";
        }
    }
}

function show_google_map(theater_location, x, y){
    document.getElementById("google_map_subject").innerHTML = theater_location;
    if(document.getElementById("table_cgv").style.visibility == "visible"){
        document.getElementById("google_map_content").innerHTML = address["CGV"][x][y];
        document.location.href = "#google_map_zone";
    }
    if(document.getElementById("table_lotte").style.visibility == "visible"){
        document.getElementById("google_map_content").innerHTML = address["LOTTE"][x][y];
    }
}