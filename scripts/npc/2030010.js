var status = 0;

function action(mode, type, selection) {
    if (status == 0) {
        cm.sendSimple("포기는 이르다구 조금만더 버텨보게 죽거나 팅겨버린 원정대 맴버는 내가 다시 불러줄수있다네.\r\n#b#L0#안전한곳으로 돌아가고 싶습니다.#l\r\n#L1#원정대 맴버를 재입장 시키겠습니다.#l");
        status++;
    } else if (status == 1) {
        if (selection == 0) {
            cm.warp(280090000);
            cm.dispose();
        } else if (selection == 1) {
            cm.sendGetText("원정대 인원이 팅기셨거나 죽어서 못돌아오신다면\r\n아래에 해당하는 원정대 맴버에 닉네임을입력해주세요.");
            status++;
        }
    } else if (status == 2) {
        if (cm.getPlayerByName(cm.getText()).getMapId() == 211042400 || cm.getPlayerByName(cm.getText()).getMapId() == 211042300) {
            cm.getPlayer().warpHere(cm.getText());
            cm.dispose();
        } else {
            cm.sendOk("원정대 맴버가 자쿰으로 통하는 문에 있어야 재입장이 가능합니다.");
            cm.dispose();
        }
    }
}
