$(function(){
	$(".close-down").click(function(){
		$(".down-bar").hide();
	})
	$(document).ready(function () {
		 var mySwiper = new Swiper('.swiper-container', {
	      spaceBetween: 30,
	      centeredSlides: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    });
	})
	// $.ajax({
	// 	url:"https://m.chunyuyisheng.com/?is_json=1",
	// 	type: ,
	// 	dataType:"json",
	// 	data:{

	// 	},
	// 	success: function(){

	// 	},
	// 	error: function(){

	// 	},
	// })
	
	var result = {
    "clinic_info":{
        "first_tag_info":{
            "id":"267707",
            "name":"青春痘"
        },
        "clinic_no":"4"
    },
    "free_problem_count":68,
    "vendor":"chunyu",
    "service_list":[

    ],
    "show_download_bar":true,
    "app":"0",
    "popular_diseases":[
        {
            "id":237446,
            "name":"感冒"
        },
        {
            "id":264890,
            "name":"过敏"
        },
        {
            "id":243779,
            "name":"湿疹"
        },
        {
            "id":246581,
            "name":"痤疮"
        },
        {
            "id":273362,
            "name":"阴道炎"
        },
        {
            "id":273218,
            "name":"痔疮"
        },
        {
            "id":222110,
            "name":"包皮"
        },
        {
            "id":273242,
            "name":"糖尿病"
        },
        {
            "id":229808,
            "name":"宫颈糜烂"
        },
        {
            "id":273383,
            "name":"高血压"
        },
        {
            "id":273296,
            "name":"肺炎"
        },
        {
            "id":271667,
            "name":"鼻炎"
        },
        {
            "id":229727,
            "name":"宫外孕"
        },
        {
            "id":216869,
            "name":"乙肝"
        },
        {
            "id":273341,
            "name":"艾滋病"
        },
        {
            "id":268796,
            "name":"颈椎病"
        },
        {
            "id":273236,
            "name":"盆腔炎"
        },
        {
            "id":233339,
            "name":"尖锐湿疣"
        }
    ],
    "banner_list":[
        {
            "url":"https://www.chunyuyisheng.com//api/activity/doctor_plan.html/",
            "start":"2017-11-23 00:00:00",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/45cc/0fe775c0c277_w1242_h350_.jpg",
            "end":"2017-11-30 00:00:00"
        },
        {
            "url":"https://www.chunyuyisheng.com/pc/article/94471/",
            "start":"2017-11-23 00:00:00",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/809f/ec8de449c0f1_w1242_h350_.jpg",
            "end":"2017-11-27 12:00:00"
        },
        {
            "url":"https://www.chunyuyisheng.com/pc/article/94557/",
            "start":"2017-11-23 00:00:00",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/6a40/52fb93aaa065_w1242_h350_.jpg",
            "end":"2017-11-27 12:00:00"
        },
        {
            "url":"https://www.chunyuyisheng.com/pc/article/113829/",
            "start":"2017-11-23 00:00:00",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/215f/be64e8295423_w1242_h350_.jpg",
            "end":"2017-11-27 12:00:00"
        },
        {
            "url":"https://engine.lvehaisen.com/index/activity?appKey=2DdTGjZgCcyRTvUuZogkWB1nLUBv&adslotId=5192",
            "start":"2017-11-18 00:00:00",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/17/0b6a/7e7e3fe7335a_w1242_h350_.jpg",
            "end":"2017-11-26 00:00:00"
        }
    ],
    "health_news":[
        {
            "favor_num":2,
            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/0665/98166e4491e0_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "title":"不涂口红没法出门，那需要担心口红中的铅吗？",
            "date_str":"4小时前",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/0665/98166e4491e0_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "news_id":114223,
            "channel_id":9,
            "view_times":3403,
            "type":"news",
            "id":114223,
            "digest":"人体的铅摄入量确实可能因为使用口红而增加，但摄入量比起其他来源微不足道。能不能接受，就看你自己的选择了。不买三无产品，跟着FDA的检测买口红，是一个避免碰到铅超标产品的好法子。",
            "channel_name":"女性"
        },
        {
            "favor_num":0,
            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/42ea/c603c58b4141_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "title":"站着说话不腰疼？不，告诉你怎么才不腰疼",
            "date_str":"4小时前",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/42ea/c603c58b4141_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "news_id":114219,
            "channel_id":21,
            "view_times":2401,
            "type":"news",
            "id":114219,
            "digest":"站着比坐着或坐着弯腰说话出现腰痛的几率更小。不过，站着说话，腰椎还是受力的，长时间站立，仍然会造成腰部肌肉疲劳，所以还是可能产生腰痛的！",
            "channel_name":"生活"
        },
        {
            "description":"",
            "title":"市面上缓解眼疲劳的蒸汽眼罩有用吗？",
            "url":"https://media2.chunyuyisheng.com/@/media/video/99ce33d1vodtransgzp1252638726/93aa6ca64564972818489796916/v.f20.mp4",
            "type":"video_segment",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/38ff/48ee12e0aa19_w855_h676_.png",
            "lecture_status":"已结束",
            "play_count":0,
            "seconds":"01:10",
            "room_id":440,
            "duration":"01:10",
            "lecture_id":479,
            "date_str":"21小时前",
            "id":3020,
            "subject":"有请大医生"
        }
    ],
    "show_logo":true,
    
    "hot_problems":[
        {
            "ask":"腰肌劳损怎么办，吃什么药（男，25岁）",
            "answer":"您好，一般建议局部热敷，按摩治疗，口服舒筋活血的药物，我们常用活血止痛胶囊，效果不错",
            "title":"腰肌劳损怎么办，吃什么药？",
            "id":"C_Y1BWkIahZRwCP33fR2hA",
            "doctor":{
                "hospital":"辽宁中医药大学附属第四医院",
                "name":"李圣"
            }
        },
        {
            "ask":"肚子胀气如何快速消除（女，35岁）",
            "answer":"适量走动，然后买点多酶片来助消化，还有莫沙必利来促进胃肠蠕动",
            "title":"肚子胀气如何快速消除？",
            "id":"ffZ-VU5zQUrsnw13dE3r3w",
            "doctor":{
                "hospital":"龙泉医院",
                "name":"冯耀"
            }
        },
        {
            "ask":"女性安全期是什么时候？（女，16岁）",
            "answer":"你好，很高兴为你解答！！！！",
            "title":"女性安全期是什么时候？",
            "id":"-Q86rV8fHUl7W79G_mvZ6g",
            "doctor":{
                "hospital":"成都市金牛区中医医院",
                "name":"刘青"
            }
        }
    ],
    "is_login":false
}

	var strSymptom= "";
	for( var i = 0; i<result.popular_diseases.length; i++){
		strSymptom +='<li class="block-list"><a href="javascript:void(0)">'+result.popular_diseases[i].name+'</a>';
	}
	$(".block-list-wrap").html(strSymptom);
	var atrSymptom ="";
	for( var j = 0;j<result.hot_problems.length; j++){
		atrSymptom +='<a href="javascript:void(0)" class="question-list"><h6 class="question-title"><span class="question-title-tag">问</span>'+result.hot_problems[j].title+'</h6><p class="question-description">'+result.hot_problems[j].ask+'</p></a>';
	}
	$(".hot-q-a-warp").html(atrSymptom);
	var strHealthNews ="";
	for( var k = 0; k<result.health_news.length; k++){
		strHealthNews +='<a href="javascript:void(0)" class="health-infor-list"><img src="'+result.health_news[k].img+'" class="health-pic"><div class="health-infor-detail"><h6 class="h-i-d-title">'+result.health_news[k].title+'</h6><div class="h-info-footer"><span class="topic-type">'+result.health_news[k].channel_name+'</span><span class="create-time">'+result.health_news[k].date_str+'</span></div></div></a>';
	}
	$(".health-infor").html(strHealthNews);
     var strPic="";
     for(var l = 0; l<result.banner_list.length; l++){
     	strPic += '<div class="swiper-slide"><img src="'+result.banner_list[l].image+'"></div>';
     }
     $(".swiper-wrapper").html(strPic);
 

})