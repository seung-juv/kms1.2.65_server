var status = 0;

function action(mode, type, selection) {

    if (status == 0) {
        cm.sendSimple("나는 아이템을 보관해주는 스크루지라고하지 빨리빨리 안찾아가면 내가 가져버릴거라구 내이름만 들어도 욕심쟁이같지않아? (쫌생쫌생...)\r\n#b#L0#창고를 이용하고 싶어요.\r\n");
        status++;
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.TimeCheck(17, 20)) {
                cm.sendStorage();
                cm.dispose();
            } else {
                cm.sendOk("창고는 오후 5시부터 8시사이에만 이용하실수 있습니다.");
                cm.dispose();
            }
        }
    }
}
