var a = new Array(4000995,1002758,1012071,1012059,1012060,1032013,1032012,4001782,1002026,2040901,2040804,2040501,2040504,2040513,2040532,2049100,2040807,2040704,2040707);
var ar = Math.floor(Math.random()*a.length);
var b = new Array(1092046,1092047,1002509,1002510,10025111012072,1012058,4020009,1102057,1032018,1082002,1050018,1051017,1072375,1072376,4033247,1102319,1402003,4001782);
var br = Math.floor(Math.random()*b.length);
var c = new Array(1092045,1082254,1102166,1102167,1102168,1012073,1012061,1032006,1032011,4000995,4170012,4032264,4032265,4032266,4005000,4005001,4005002,4005003,4005004);
var cr = Math.floor(Math.random()*c.length);

                function clear() {
                    cm.showEffect(true, "quest/party/clear");
                    cm.playSound(true, "Party1/Clear");
                }

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
            var em = cm.getEventManager("LudiPQ");
            var eim = cm.getPlayer().getEventInstance();
            if (em == null || eim == null) {
                cm.sendOk("오류가 발생했어요.");
                cm.dispose();
                return;
            }
            if (status == 0) {
                if (eim.getProperty("stage") == null) {
                    eim.setProperty("stage", "1");
                }
                var stage = parseInt(eim.getProperty("stage"));
                if (stage > (cm.getPlayer().getMapId() % 922010000 / 100)) {
                    cm.warpParty_Instanced(922011000);
                    cm.dispose();
                    return;
                }

                var s = eim.getProperty("guideRead");
                if (s == null || !s.equals("s") || !cm.isLeader()) {
                    if (cm.isLeader()) {
                        eim.setProperty("guideRead", "s");
                    }
                    cm.sendNext("안녕하세요. 드디어 여기까지 오셨군요... 이제 이 모든 소동을 일으킨 장본인을 쓰러뜨릴 시간입니다. 오른쪽으로 가보면 몬스터가 한 마리 있는데 쓰러뜨리면 엄청난 몸집의 #b알리샤르#k가 나타날 겁니다. 녀석은 여러분들 때문에 지금 몹시 화가 나 있는 상태이니 조심하세요.\r\n파티원이 모두 함께 녀석을 쓰러뜨리고 녀석이 지니고 있던 #b차원의 열쇠#k를 저에게 가져와 주시면 됩니다. 그 열쇠만 녀석에게서 빼앗는다면 다시 차원의 문이 열리는 일은 없겠지요. 그럼 여러분들만 믿겠습니다. 힘내 주세요!");
                    cm.dispose();
                    return;
                }

                if (cm.haveItem(4001023, 1)) {
                    clear();
                    cm.removeAll(4001023);
                    eim.setProperty("stage", (stage + 1));
                    eim.setProperty("guideRead", "0");
                    cm.gainPartyExpPQ(10000, "ludipq", 70);
                    var it = cm.getPlayer().getParty().getMembers().iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer != null) {
                            ccPlayer.endPartyQuest(1202);
                        }
                    }
                    cm.sendOk("차원의 열쇠를 가져 오셨군요! 여러분들은 모든 스테이지를 훌륭히 클리어 하셨습니다. 저에게 다시 말을 걸어주시면 파티원 전원이 보너스 맵으로 이동됩니다.");
                    cm.dispose();
                } else {
                    cm.sendOk("아직 #b차원의 열쇠#k를 획득하지 못하신 모양이군요. 차원의 열쇠는 #b알리샤르#k를 쓰러뜨리면 얻으실 수 있습니다. 그럼 힘내 주세요!");
                    cm.dispose();
                }
            }
        }