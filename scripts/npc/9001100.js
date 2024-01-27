
/*
 * NPCID : 9001100
 * ScriptName : moonFlower
 * NPCNameFunc : 가가 - 토끼 알바생
 * Location : 922230000 (히든스트리트 - 달나라)
 *
 * @author T-Sun
 *
 */



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            chat = "카산드라 덕분에 달나라에 여행을 왔어요~ 그런데 점프가 잘못되는 바람에 가지고 있던 물건을 전부 잃어버렸어요. 하는 수 없이 돌아갈 여비를 벌기 위해 지금은 알바 중이에요.... 아. 그래도 좋은 일도 있엇답니다! 예쁜 꽃들이 가뜩 피어 있는 달꽃정원을 발견했거든요. 당신도 한번 가보시겠어요?\r\n\r\n";
            chat += "#b#L0#달꽃정원에 가고 싶어요.#k#l\r\n";
            chat += "#b#L1#달꽃을 잔뜩 가져왔어요.#k#l\r\n";
            chat += "#b#L2#달꽃 머리핀을 받고 싶어요.#k#l\r\n";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
                cm.warp(922230200); {
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(4032041, 25)) {
                    cm.sendOk("#b달꽃 머리핀#k은 잘 받으셨나요? 잘 사용해주세요~");
                    cm.gainItem(4032041, -25);
                    cm.gainItem(1002812, 1);
                    cm.dispose();
                } else {
                    cm.sendOk("#b달꽃 25개#k가 있는지 다시 확인해주세요.");
                    cm.dispose();
                }
            }
        }
    }
}
