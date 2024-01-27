﻿
        var status = -1;
function action(mode, type, selection) {
    if (mode == 1 && type != 1) {
        status++;
    } else {
        if (type == 1 && mode == 1) {
            status++;
            selection = 1;
        } else if (type == 1 && mode == 0) {
            status++;
            selection = 0;
        } else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (cm.getParty() == null) {
            cm.sendOk("파티원들과 함께 힘을 모아 퀘스트에 해결해 보시고 싶지 않으세요? 이 안에는 서로 힘을 합치지 않으면 해결할 수 없는 장애물들이 많이 있답니다. 언제든지 도전해 보고 싶으시면 #b파티장#k에게 제게 말을 걸어 달라고 해주세요.");
            cm.dispose();
            return;
        }
        if (!cm.isLeader())
        {
            cm.sendOk("퀘스트를 시작하고 싶으세요? 그렇다면 당신의 파티장에게 말을 걸어달라고 해주세요.");
            cm.dispose();
            return;
        }
        var party = cm.getParty().getMembers();
        var mapId = cm.getMapId();
        var next = true;
        var levelValid = 0;
        var inMap = 0;
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            if ((cPlayer.getLevel() >= 20 && cPlayer.getLevel() <= 41) || cPlayer.getJobId() == 900) {
                levelValid += 1;
            } else {
                next = false;
            }
            if (cPlayer.getMapid() == mapId && cPlayer.getChannel() == cm.getClient().getChannel() && cPlayer.isOnline()) {
                inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
            }
        }
        if (party.size() != 4 || inMap != 4) {
            next = false;
        }
        if (next) {
            var em = cm.getEventManager("KerningPQ");
            if (em == null) {
                cm.sendOk("This PQ is not currently available.");
            } else {
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 30);
                    cm.dispose();
                } else {
                    cm.sendOk("이 안에 이미 다른 파티가 들어가서 클리어에 도전하고있습니다. 잠시후에 다시 시도해 주세요");
                }
                cm.removeAll(4001008);
                cm.removeAll(4001007);
            }
        } else {
            cm.sendOk("당신이 속한 파티의 파티원이 4명이 아니거나 자신 혹은 파티원 중에서 레벨 20 ~ 35 에 해당하지 않는 캐릭터가 있습니다. 혹은 파티원 전원이 현재 맵에 모여있는지 다시 한 번 확인해 주세요.");
        }
        cm.dispose();
    }
}