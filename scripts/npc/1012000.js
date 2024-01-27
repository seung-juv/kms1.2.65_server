﻿var status = 0;
var maps = Array(104000000, 102000000, 101000000, 103000000, 120000000);
var rCost = Array(800, 1000, 1000, 1200, 800);
var costBeginner = Array(80, 100, 100, 120, 80);
var cost = ["800", "1,000", "1,000", "1,200", "800"];
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 2 && mode == 0) {
        cm.sendNext("이 마을에도 볼거리가 가득하답니다. 다른 마을로 이동하고 싶어지면 언제든지 저희 택시를 이용해 주세요~");
        cm.dispose();
        return;
    }
    if (mode == 1) status++; else status--;
    if (status == 0) {

        cm.sendNext("안녕하세요~! 헤네시스 중형택시입니다. 다른 마을로 안전하고 빠르게 이동하고 싶으신가요? 그렇다면 저희 택시를 이용해 보세요. 싼 가격으로 원하시는 곳까지 친절하게 모셔다 드리고 있습니다.");
    } else if (status == 1) {
        var job = cm.getJob();
        if (job == 0 || job == 1000 || job == 2000) {
            var selStr = "저희 택시는 초보자 분들은 90% 할인을 해드립니다, 목적지를 선택해주세요. 마을마다 요금이 다릅니다.#b";
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 메소)#l";
            }
        } else {
            var selStr = "목적지를 선택해 주세요. 마을마다 요금이 다릅니다.#b";
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 메소)#l";
            }
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        var job = cm.getJob();
        if (job == 0 || job == 1000 || job == 2000) {
            sCost = costBeginner[selection];
            show = costBeginner[selection];
        } else {
            sCost = rCost[selection];
            show = cost[selection];
        }
        cm.sendYesNo("이곳에서 더 이상 볼일이 없으신 모양이로군요. 정말로 #b#m" + maps[selection] + "##k 마을로 이동하시겠습니까? 가격은 #b" + show + " 메소#k입니다.");
        selectedMap = selection;
    } else if (status == 3) {
        if (cm.getMeso() < sCost) {
            cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 택시를 이용하실 수 없습니다.");
        } else {
            cm.gainMeso(-sCost);
            cm.warp(maps[selectedMap]);
        }
        cm.dispose();
    }
}
