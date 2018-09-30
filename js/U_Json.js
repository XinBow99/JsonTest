// JavaScript Document
var S_S = [];
$(function () {
	"use strict";
	var KAOAPI = "https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery";
	$.getJSON(KAOAPI, function (item) {
		S_S = item;
		var M_str = [];
		$("#AR_BTN").append('<button type="button" id="BALL" onclick="AREA_BTN(this.id)" class="btn btn-info">全　部</button>');
		for (var i = 0, len = item.length; i < len; i++) {
			M_str[i] = item[i].ZipName_;
			$("#R_space").append('<div class="card col-md-4"> <div class="card-body"> <h5 class="card-title">' + item[i].ZipName_ + '</h5><p class="card-text">' + item[i].Save_Date_ + '</p> <p class="card-text">' + item[i].BeforeDesc_ + '</p> <p class="card-text">' + item[i].address_ + '</p> <a href="#" class="btn btn-primary">' + item[i].UnitName_ + '</a> </div> </div>');
		}
		M_str = M_str.filter(function (element, index, arr) {
			return arr.indexOf(element) === index;
		});
		M_str.forEach(function (s) {
			$("#AR_BTN").append('<button type="button" id="' + s + '" onclick="AREA_BTN(this.id)" class="btn btn-info">' + s + '</button>');
		});
	});
});

function AREA_BTN(BID) {
	"use strict";
	$(".col-md-4").remove();
	var item = S_S;
	for (var i = 0, len = item.length; i < len; i++) {
		if (item[i].ZipName_ === BID || BID === "BALL") {
			if (item[i].FileNo_.match($('#search').val()) !== null || 
				item[i].Status_.match($('#search').val()) !== null || 
				item[i].Cre_Date_.match($('#search').val()) !== null || 
				item[i].ReplyUnit_.match($('#search').val()) !== null || 
				item[i].zipcode_.match($('#search').val()) !== null || 
				item[i].ZipName_.match($('#search').val()) !== null || 
				item[i].address_.match($('#search').val()) !== null || 
				item[i].UnitName_.match($('#search').val()) !== null || 
				item[i].StatusName_.match($('#search').val()) !== null ||
				item[i].InformDesc_.match($('#search').val()) !== null || 
				item[i].BeforeDesc_.match($('#search').val()) !== null || 
				item[i].AfterDesc_.match($('#search').val()) !== null || 
				item[i].Memo_.match($('#search').val()) !== null || 
				item[i].Save_Date_.match($('#search').val()) !== null || 
				item[i].Close_Date_.match($('#search').val()) !== null || 
				item[i].Lat_.match($('#search').val()) !== null || 
				item[i].Lng_.match($('#search').val()) !== null){
			$("#R_space").append('<div class="card col-md-4"> <div class="card-body"> <h5 class="card-title">' + item[i].ZipName_ + '</h5> <p class="card-text">' + item[i].BeforeDesc_ + '</p> <p class="card-text">' + item[i].address_ + '</p> <a href="#" class="btn btn-primary">' + item[i].UnitName_ + '</a> </div> </div>');
			}
		}
	}
}
function SEA_BTN(BID) {
	"use strict";
	var item = S_S;
	for (var i = 0, len = item.length; i < len; i++) {
		if (item[i].FileNo_.match(BID) !== null || item[i].Status_.match(BID) !== null || item[i].Cre_Date_.match(BID) !== null || item[i].ReplyUnit_.match(BID) !== null || item[i].zipcode_.match(BID) !== null || item[i].ZipName_.match(BID) !== null || item[i].address_.match(BID) !== null || item[i].UnitName_.match(BID) !== null || item[i].StatusName_.match(BID) !== null || item[i].InformDesc_.match(BID) !== null || item[i].BeforeDesc_.match(BID) !== null || item[i].AfterDesc_.match(BID) !== null || item[i].Memo_.match(BID) !== null || item[i].Save_Date_.match(BID) !== null || item[i].Close_Date_.match(BID) !== null || item[i].Lat_.match(BID) !== null || item[i].Lng_.match(BID) !== null) {
			$("#R_space").append('<div class="card col-md-4"> <div class="card-body"> <h5 class="card-title">' + item[i].ZipName_ + '</h5> <p class="card-text">' + item[i].BeforeDesc_ + '</p> <p class="card-text">' + item[i].address_ + '</p> <a href="#" class="btn btn-primary">' + item[i].UnitName_ + '</a> </div> </div>');
		}
	}
}

$(document).ready(function(){
	"use strict";
    $("#s_bt").click(function(){
        SEA_BTN($('#search').val());
    });
		$(".col-md-4").remove();
});
