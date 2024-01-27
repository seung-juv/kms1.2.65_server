/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc>
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * NPCID : 2020002
 * ScriptName : make_elnath
 * NPCNameFunc : 고든 - 신발 제작자
 * Location : 211000100 (엘나스 - 엘나스시장)
 *
 * @author T-Sun
 *
 */

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	cm.dispose();
    if (status == 0 && mode == 1) {
	var selStr = "엘나스의 겨울은 무척 춥다네. 이 엘나스의 겨울에서도 따뜻할 수 있도록 신발을 만들어 주고 있다네. 원하는 것이 있는가?#b"
	var options = new Array(" 전사 신발 제작"," 궁수 신발 제작"," 마법사 신발 제작"," 도적 신발 제작");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}

	cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
	selectedType = selection;
	var selStr;
	var shoes;
	if (selectedType == 0){ //warrior shoes
	    selStr = "전사의 신발이라.. 문제 없다네. 무얼 원하는가?#b";
		//1072147,1072148,1072149,1072154,1072155,1072156,1072210,1072211,1072212
	    var shoes = new Array ("#z1072147##k - 전사 레벨. 60#b","#z1072148##k - 전사 레벨. 60#b","#z1072149##k - 전사 레벨. 60#b",
		"#z1072154##k - 전사 레벨. 70#b","#z1072155##k - 전사 레벨. 70#b","#z1072156##k - 전사 레벨. 70#b",
		"#z1072210##k - 전사 레벨. 80#b","#z1072211##k - 전사 레벨. 80#b","#z1072212##k - 전사 레벨. 80#b");
	}
	else if (selectedType == 1){ //bowman shoes
	    selStr = "궁수의 신발이라.. 문제 없다네. 무얼 원하는가?#b";
		//1072144,1072145,1072146,1072164,1072165,1072166,1072167,1072182,1072183,1072184,1072185
	    var shoes = new Array ("#z1072144##k - 궁수 레벨. 60#b","#z1072145##k - 궁수 레벨. 60#b","#z1072146##k - 궁수 레벨. 60#b",
		"#z1072164##k - 궁수 레벨. 70#b","#z1072165##k - 궁수 레벨. 70#b","#z1072166##k - 궁수 레벨. 70#b","#z1072167##k - 궁수 레벨. 70#b",
		"#z1072182##k - 궁수 레벨. 80#b","#z1072183##k - 궁수 레벨. 80#b","#z1072184##k - 궁수 레벨. 80#b","#z1072185##k - 궁수 레벨. 80#b");
	}
	else if (selectedType == 2){ //mage shoes
		//1072136,1072137,1072138,1072139,1072157,1072158,1072159,1072160,1072177,1072178,1072179
	    selStr = "마법사의 신발이라.. 문제 없다네. 무얼 원하는가?#b";
	    var shoes = new Array ("#z1072136##k - 마법사 레벨. 60#b","#z1072137##k - 마법사 레벨. 60#b","#z1072138##k - 마법사 레벨. 60#b","#z1072139##k - 마법사 레벨. 60#b",
		"#z1072157##k - 마법사 레벨. 70#b","#z1072158##k - 마법사 레벨. 70#b","#z1072159##k - 마법사 레벨. 70#b","#z1072160##k - 마법사 레벨. 70#b",
		"#z1072177##k - 마법사 레벨. 80#b","#z1072178##k - 마법사 레벨. 80#b","#z1072179##k - 마법사 레벨. 80#b");
	}
	else if (selectedType == 3){ //thief shoes
		//1072150,1072151,1072152,1072161,1072162,1072163,1072172,1072173,1072174
	    selStr = "도적의 신발이라.. 문제 없다네. 무얼 원하는가?#b";
	    var shoes = new Array ("#z1072150##k - 도적 레벨. 60#b","#z1072151##k - 도적 레벨. 60#b","#z1072152##k - 도적 레벨. 60#b",
		"#z1072161##k - 도적 레벨. 70#b","#z1072162##k - 도적 레벨. 70#b","#z1072163##k - 도적 레벨. 70#b",
		"#z1072172##k - 도적 레벨. 80#b","#z1072173##k - 도적 레벨. 80#b","#z1072174##k - 도적 레벨. 80#b");
	}
	for (var i = 0; i < shoes.length; i++){
	    selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
	}
	cm.sendSimple(selStr);
    }
    else if (status == 2 && mode == 1) {
	selectedItem = selection;

	if (selectedType == 0){ //warrior shoes
	    var itemSet = new Array(1072147,1072148,1072149,1072154,1072155,1072156,1072210,1072211,1072212);
	    var matSet = new Array(new Array(4021008,4011007,4021005,4000030,4003000),new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000),
		new Array(4005000,4005002,4011002,4000048,4003000),new Array(4005000,4005002,4011005,4000048,4003000),new Array(4005000,4005002,4021008,4000048,4003000),
		new Array(4005000,4005002,4021000,4000030,4003000),new Array(4005000,4005002,4021002,4000030,4003000),new Array(4005000,4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
		new Array(2,3,7,90,65),new Array(3,2,7,90,65),new Array(4,1,2,90,65));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 1){ //bowman shoes
	    var itemSet = new Array(1072144,1072145,1072146,1072164,1072165,1072166,1072167,1072182,1072183,1072184,1072185);
	    var matSet = new Array(new Array(4011006,4021000,4021007,4000030,4003000),new Array(4011006,4021005,4021007,4000030,4003000),new Array(4011006,4021003,4021007,4000030,4003000),
		new Array(4005002,4005000,4021005,4000055,4003000),new Array(4005002,4005000,4021004,4000055,4003000),new Array(4005002,4005000,4021003,4000055,4003000),new Array(4005002,4005000,4021008,4000055,4003000),
		new Array(4005002,4005000,4021002,4000030,4003000),new Array(4005002,4005000,4021000,4000030,4003000),new Array(4005002,4005000,4021003,4000030,4003000),new Array(4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
		new Array(2,3,7,90,60),new Array(3,2,7,90,60),new Array(4,1,7,90,60),new Array(5,2,90,60));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,70000,80000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //mage shoes
	    var itemSet = new Array(1072136,1072137,1072138,1072139,1072157,1072158,1072159,1072160,1072177,1072178,1072179);
	    var matSet = new Array(new Array(4021009,4011006,4011005,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),new Array(4021009,4011006,4011003,4000030,4003000),new Array(4021009,4011006,4021002,4000030,4003000),
		new Array(4005001,4005003,4021002,4000051,4003000),new Array(4005001,4005003,4021000,4000051,4003000),new Array(4005001,4005003,4011003,4000051,4003000),new Array(4005001,4005003,4011006,4000051,4003000),
		new Array(4005001,4005003,4021003,4000030,4003000),new Array(4005001,4005003,4021001,4000030,4003000),new Array(4005001,4005003,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),
		new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,3,100,55),
		new Array(2,3,7,85,60),new Array(3,2,7,85,60),new Array(4,1,2,85,60));
	    var costSet = new Array(60000,60000,60000,60000,70000,70000,70000,70000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //thief shoes
	    var itemSet = new Array (1072150,1072151,1072152,1072161,1072162,1072163,1072172,1072173,1072174);
	    var matSet = new Array(new Array(4021007,4011007,4021000,4000030,4003000),new Array(4021007,4011007,4011006,4000030,4003000),new Array(4021007,4011007,4021008,4000030,4003000),
		new Array(4005003,4005000,4021001,4000051,4003000),new Array(4005003,4005002,4021005,4000051,4003000),new Array(4005002,4005003,4021000,4000051,4003000),
		new Array(4005000,4005003,4021003,4000030,4003000),new Array(4005002,4005003,4021000,4000030,4003000),new Array(4005003,4005002,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(1,1,8,75,50),new Array(1,1,5,75,50),new Array(1,1,1,75,50),
		new Array(1,3,5,100,55),new Array(1,3,5,100,55),new Array(1,3,5,100,55),
		new Array(3,2,7,90,60),new Array(3,2,7,90,60),new Array(3,2,7,90,60));
	    var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}

	var prompt = "#t" + item + "# 아이템을 원하는 것인가? 그렇다면 자네를 위해 그 물건을 만들어 주도록 하지. 단지 약간의 수수료가 필요하겠지만 말이야.. 재료는 다음과 같다네. 그리고 인벤토리 공간이 충분한지 확인해 주게.\r\n#b";

	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# #t" + mats[i] + "# " + matQty[i] + "개";
	    }
	}
	else {
	    prompt += "\r\n#i"+mats+"# #t" + mats + "# " + matQty + "개";
	}

	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost + " 메소";

	cm.sendYesNo(prompt);
    }
    else if (status == 3 && mode == 1) {
	var complete = false;

	if (cm.getMeso() < cost) {
	    cm.sendOk("흐음.. 메소는 충분히 갖고 있는건가?")
	    cm.dispose();
	    return;
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    complete = cm.haveItem(mats[i], matQty[i]);
		    if (!complete) {
			break;
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty);
	    }
        }

        if (!cm.canHold(item)) {
            complete = false;
        }
	if (!complete)
	    cm.sendOk("재료가 부족한건 아닌지, 인벤토리 공간이 충분한지 다시 한번 확인하게나.");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty [i]);
		}
	    }
	    else
		cm.gainItem(mats, -matQty );

	    cm.gainMeso(-cost );

	    cm.gainItem(item, 1);
	    cm.sendOk("자, 다 됐다네.");
	}
	cm.dispose();
    }
}
