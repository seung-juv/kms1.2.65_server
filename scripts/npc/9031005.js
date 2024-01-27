var status = 0;
var random;

function action(mode, type, selection){
if(status == 0){
	if (cm.haveItem(4021037,1)) {
	cm.sendSimple("안녕하세요 쥬얼이라는 보석은 고고하고 순결하며 강력한 힘을 발휘하는 보석이지요 그런 쥬얼을 반지로 제작한다면 어떨가요 정말 귀한 아이템이 되겠지요?\r\n#r현재 큐브결정의 효과로 모든 확률이 20% 자동으로 상승후 결정은 파기됩니다.#k#b\r\n#L0#쥬얼을 반지와 합성하겠습니다.#l\r\n#L1#쥬얼로 반지를 강화하고 싶습니다.#l\r\n#L2#쥬얼 크래프트 링을 구매하겠습니다. (1,380,000원)#l\r\n");
	random = Math.floor(Math.random() * 8);	
	status++;
	} else {
	cm.sendSimple("안녕하세요 쥬얼이라는 보석은 고고하고 순결하며 강력한 힘을 발휘하는 보석이지요 그런 쥬얼을 반지로 제작한다면 어떨가요 정말 귀한 아이템이 되겠지요?#b\r\n#L0#쥬얼을 반지와 합성하겠습니다.#l\r\n#L1#쥬얼로 반지를 강화하고 싶습니다.#l\r\n#L2#쥬얼 크래프트 링을 구매하겠습니다. (1,380,000원)#l\r\n#L50#쥬얼크래프트 설명을 듣고싶습니다.#l\r\n");
	random = Math.floor(Math.random() * 10);
	status++;
	}
} else if(status == 1){
if (selection == 2) {
            if (!cm.canHold(1112762)) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
if (cm.getMeso() >= 1380000) {
cm.gainItem(1112762,1);
cm.gainMeso(-1380000);
cm.sendOk("#i1112762# #b#t1112762##k을 1,380,000메소에 구매했어요.");
cm.dispose();
} else {
cm.sendOk("쥬얼크래프트링을 구매하시기에는 메소가 부족하신것 같은데요?");
cm.dispose();
}
} else if (selection == 1) {
cm.sendSimple("안녕하세요 쥬얼이라는 보석은 고고하고 순결하며 강력한 힘을 발휘하는 보석이지요 그런 쥬얼을 반지로 제작한다면 어떨가요 정말 귀한 아이템이 되겠지요?.#b\r\n#L100#S급 강화를 하고싶습니다.#l\r\n#L110#A급 강화를 하고싶습니다.#l\r\n#L120#B급 강화를 하고싶습니다.#l\r\n#L130#C급 강화를 하고싶습니다.#l");
status++;
} else if (selection == 50) {
cm.sendOk("쥬얼크래프트란 반지를 쥬얼과 합성하여 강화시키는 시스템 입니다. S급과 A급은 강화에 실패하여도 파괴되지 않으며 옵션이 하향됩니다.");
cm.dispose();
} else if (selection == 0) {
if (!cm.haveItem(1112762,1)) {
cm.sendOk("#i1112762# #b#t1112762##k을 구매후 이용해주세요.");
cm.dispose();
} else {
cm.sendSimple("쥬얼도 쥬얼별로 급수가 정해져있지요 어떤 급의 쥬얼을 사용하시겠습니까?#b\r\n#L0#S급 쥬얼로 합성하겠습니다.#l\r\n#L1#A급 쥬얼로 합성하겠습니다.#l\r\n#L2#B급 쥬얼로 합성하겠습니다.#l\r\n#L3#C급 쥬얼로 합성하겠습니다.#l");
status++;
}
}
} else if(status == 2){
// 합성
if (selection == 0) {
cm.sendSimple("자신의 직업을 고려하여 어떤 속성의 쥬얼을 합성에 사용하실 것 인지 결정해주세요.\r\n#b#L0#S급 힘의 쥬얼을 사용하겠습니다.#l\r\n#L1#S급 민첩의 쥬얼을 사용하겠습니다.#l\r\n#L2#S급 지혜의 쥬얼을 사용하겠습니다.#l\r\n#L3#S급 행운의 쥬얼을 사용하겠습니다.#l");
status++
} else if (selection == 1) {
cm.sendSimple("자신의 직업을 고려하여 어떤 속성의 쥬얼을 합성에 사용하실 것 인지 결정해주세요.\r\n#b#L10#A급 힘의 쥬얼을 사용하겠습니다.#l\r\n#L11#A급 민첩의 쥬얼을 사용하겠습니다.#l\r\n#L12#A급 지혜의 쥬얼을 사용하겠습니다.#l\r\n#L13#A급 행운의 쥬얼을 사용하겠습니다.#l");
status++
} else if (selection == 2) {
cm.sendSimple("자신의 직업을 고려하여 어떤 속성의 쥬얼을 합성에 사용하실 것 인지 결정해주세요.\r\n#b#L20#B급 힘의 쥬얼을 사용하겠습니다.#l\r\n#L21#B급 민첩의 쥬얼을 사용하겠습니다.#l\r\n#L22#B급 지혜의 쥬얼을 사용하겠습니다.#l\r\n#L23#B급 행운의 쥬얼을 사용하겠습니다.#l");
status++
} else if (selection == 3) {
cm.sendSimple("자신의 직업을 고려하여 어떤 속성의 쥬얼을 합성에 사용하실 것 인지 결정해주세요.\r\n#b#L30#C급 힘의 쥬얼을 사용하겠습니다.#l\r\n#L31#C급 민첩의 쥬얼을 사용하겠습니다.#l\r\n#L32#C급 지혜의 쥬얼을 사용하겠습니다.#l\r\n#L33#C급 행운의 쥬얼을 사용하겠습니다.#l");
status++

// 강화
} else if (selection == 100) {
cm.sendSimple("자신의 링에 사용할 적합한 쥬얼을 선택해주세요.\r\n#b#L100#S급 힘의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L110#S급 민첩의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L120#S급 지혜의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L130#S급 행운의 쥬얼로 반지를 강화하겠습니다.#l");
status++
} else if (selection == 110) {
cm.sendSimple("자신의 링에 사용할 적합한 쥬얼을 선택해주세요.\r\n#b#L200#A급 힘의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L210#A급 민첩의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L220#A급 지혜의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L230#A급 행운의 쥬얼로 반지를 강화하겠습니다.#l");
status++
} else if (selection == 120) {
cm.sendSimple("자신의 링에 사용할 적합한 쥬얼을 선택해주세요.\r\n#b#L300#B급 힘의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L310#B급 민첩의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L320#B급 지혜의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L330#B급 행운의 쥬얼로 반지를 강화하겠습니다.#l");
status++
} else if (selection == 130) {
cm.sendSimple("자신의 링에 사용할 적합한 쥬얼을 선택해주세요.\r\n#b#L400#C급 힘의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L410#C급 민첩의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L420#C급 지혜의 쥬얼로 반지를 강화하겠습니다.#l\r\n#L430#C급 행운의 쥬얼로 반지를 강화하겠습니다.#l");
status++
}
} else if(status == 3){

// S급 힘 합성

if (selection == 0) {
if (cm.haveItem(4440001,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112763,1);
cm.gainItem(4440001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112763# #b#t1112763#");
cm.dispose();
} else {
cm.gainItem(4440001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// S급 민첩 합성
} else if (selection == 1) {
if (cm.haveItem(4443001,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112775,1);
cm.gainItem(4443001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112775# #b#t1112775#");
cm.dispose();
} else {
cm.gainItem(4443001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// S급 지혜 합성

} else if (selection == 2) {
if (cm.haveItem(4442001,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112771,1);
cm.gainItem(4442001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112771# #b#t1112771#");
cm.dispose();
} else {
cm.gainItem(4442001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// S급 행운 합성

} else if (selection == 3) {
if (cm.haveItem(4441001,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112767,1);
cm.gainItem(4441001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112767# #b#t1112767#");
cm.dispose();
} else {
cm.gainItem(4441001,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
// A급 힘 합성

} else if (selection == 10) {
if (cm.haveItem(4440101,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112764,1);
cm.gainItem(4440101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112764# #b#t1112764#");
cm.dispose();
} else {
cm.gainItem(4440101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// A급 민첩 합성
} else if (selection == 11) {
if (cm.haveItem(4443101,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112776,1);
cm.gainItem(4443101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112776# #b#t1112776#");
cm.dispose();
} else {
cm.gainItem(4443101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// A급 지혜 합성

} else if (selection == 12) {
if (cm.haveItem(4442101,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112772,1);
cm.gainItem(4442101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112772# #b#t1112772#");
cm.dispose();
} else {
cm.gainItem(4442101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// A급 행운 합성

} else if (selection == 13) {
if (cm.haveItem(4441101,1)) {
if (random == 0 || random <= 3) {
cm.gainItem(1112768,1);
cm.gainItem(4441101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112768# #b#t1112768#");
cm.dispose();
} else {
cm.gainItem(4441101,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// B급 힘 합성

} else if (selection == 20) {
if (cm.haveItem(4440200,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(1112765,1);
cm.gainItem(4440200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112765# #b#t1112765#");
cm.dispose();
} else {
cm.gainItem(4440200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// B급 민첩 합성

} else if (selection == 21) {
if (cm.haveItem(4443200,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(1112777,1);
cm.gainItem(4443200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112777# #b#t1112777#");
cm.dispose();
} else {
cm.gainItem(4443200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// B급 지혜 합성

} else if (selection == 22) {
if (cm.haveItem(4442200,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(1112773,1);
cm.gainItem(4442200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112773# #b#t1112773#");
cm.dispose();
} else {
cm.gainItem(4442200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// B급 행운 합성

} else if (selection == 23) {
if (cm.haveItem(4441200,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(1112769,1);
cm.gainItem(4441200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112769# #b#t1112769#");
cm.dispose();
} else {
cm.gainItem(4441200,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// C급 힘 합성

} else if (selection == 30) {
if (cm.haveItem(4440300,1)) {
if (random == 0 || random <= 9) {
cm.gainItem(1112766,1);
cm.gainItem(4440300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112766# #b#t1112766#");
cm.dispose();
} else {
cm.gainItem(4440300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// C급 민첩 합성

} else if (selection == 31) {
if (cm.haveItem(4443300,1)) {
if (random == 0 || random <= 9) {
cm.gainItem(1112778,1);
cm.gainItem(4443300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112778# #b#t1112778#");
cm.dispose();
} else {
cm.gainItem(4443300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// C급 지혜 합성

} else if (selection == 32) {
if (cm.haveItem(4442300,1)) {
if (random == 0 || random <= 9) {
cm.gainItem(1112774,1);
cm.gainItem(4442300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112774# #b#t1112774#");
cm.dispose();
} else {
cm.gainItem(4442300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// C급 행운 합성

} else if (selection == 33) {
if (cm.haveItem(4441300,1)) {
if (random == 0 || random <= 9) {
cm.gainItem(1112770,1);
cm.gainItem(4441300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("축하드립니다 쥬얼링 합성에 성공하였습니다 합성된 쥬얼링을 확인하세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1112769# #b#t1112770#");
cm.dispose();
} else {
cm.gainItem(4441300,-1);
cm.gainItem(1112762,-1);
cm.gainItem(4021037,-1); cm.sendOk("죄송합니다 합성에 실패하였습니다. 다음에 다시이용해주세요.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// 여기부터 강화@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

} else if (selection == 100) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112763,cm.getPlayer().getClient()));
status = 100;
} else if (selection == 200) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112764,cm.getPlayer().getClient()));
status = 200;
} else if (selection == 300) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112765,cm.getPlayer().getClient()));
status = 300;
} else if (selection == 400) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112766,cm.getPlayer().getClient()));
status = 400;
} else if (selection == 110) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112775,cm.getPlayer().getClient()));
status = 110;
} else if (selection == 210) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112776,cm.getPlayer().getClient()));
status = 210;
} else if (selection == 310) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112777,cm.getPlayer().getClient()));
status = 310;
} else if (selection == 410) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112778,cm.getPlayer().getClient()));
status = 410;
} else if (selection == 120) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112771,cm.getPlayer().getClient()));
status = 120;
} else if (selection == 220) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112772,cm.getPlayer().getClient()));
status = 220;
} else if (selection == 320) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112773,cm.getPlayer().getClient()));
status = 320;
} else if (selection == 420) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112774,cm.getPlayer().getClient()));
status = 420;
} else if (selection == 130) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112767,cm.getPlayer().getClient()));
status = 130;
} else if (selection == 230) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112768,cm.getPlayer().getClient()));
status = 230;
} else if (selection == 330) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112769,cm.getPlayer().getClient()));
status = 330;
} else if (selection == 430) {
cm.sendSimple("강화하실 쥬얼크래프트링을 선택해주세요.\r\n#b"+cm.ChoiceEquipList(1112770,cm.getPlayer().getClient()));
status = 430;
}

// 강화시작

// 힘
} else if (status == 100) {
if (cm.haveItem(4440001,1) && cm.haveItem(1112763,1)) {
if (random == 0 || random <= 4) {
cm.gainItem(4440001,-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)+2);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4440001,-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)-2);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 200) {
if (cm.haveItem(4440101,1) && cm.haveItem(1112764,1)) {
if (random == 0 || random <= 5) {
cm.gainItem(4440101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4440101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 300) {
if (cm.haveItem(4440200,1) && cm.haveItem(1112765,1)) {
if (random == 0 || random <= 7) {
cm.gainItem(4440200,-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4440200,-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 400) {
if (cm.haveItem(4440300,1) && cm.haveItem(1112766,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(4440300,-1);
cm.changeStat2(selection,0,cm.getItemStat(selection,0)+1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4440300,-1);
cm.gainItem(1112766,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// 민첩

} else if (status == 110) {
if (cm.haveItem(4443001,1) && cm.haveItem(1112775,1)) {
if (random == 0 || random <= 4) {
cm.gainItem(4443001,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+2);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4443001,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-2);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 210) {
if (cm.haveItem(4443101,1) && cm.haveItem(1112776,1)) {
if (random == 0 || random <= 5) {
cm.gainItem(4443101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+2);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)+1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4443101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-2);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)-1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 310) {
if (cm.haveItem(4443200,1) && cm.haveItem(1112777,1)) {
if (random == 0 || random <= 7) {
cm.gainItem(4443200,-1);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4443200,-1);
cm.gainItem(1112777,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 410) {
if (cm.haveItem(4443300,1) && cm.haveItem(1112778,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(4443300,-1);
cm.changeStat2(selection,1,cm.getItemStat(selection,1)+1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4443300,-1);
cm.gainItem(1112778,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// 지력

} else if (status == 120) {
if (cm.haveItem(4442001,1) && cm.haveItem(1112771,1)) {
if (random == 0 || random <= 4) {
cm.gainItem(4442001,-1);
cm.changeStat2(selection,7,cm.getItemStat(selection,7)+2);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4442001,-1);
cm.changeStat2(selection,7,cm.getItemStat(selection,7)-2);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 220) {
if (cm.haveItem(4442101,1) && cm.haveItem(1112772,1)) {
if (random == 0 || random <= 5) {
cm.gainItem(4442101,-1);
cm.changeStat2(selection,7,cm.getItemStat(selection,7)+1);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4442101,-1);
cm.changeStat2(selection,7,cm.getItemStat(selection,7)-1);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 320) {
if (cm.haveItem(4442200,1) && cm.haveItem(1112773,1)) {
if (random == 0 || random <= 7) {
cm.gainItem(4442200,-1);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4442200,-1);
cm.gainItem(1112773,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 420) {
if (cm.haveItem(4442300,1) && cm.haveItem(1112774,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(4442300,-1);
cm.changeStat2(selection,2,cm.getItemStat(selection,2)+1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4442300,-1);
cm.gainItem(1112774,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}

// 행운


} else if (status == 130) {
if (cm.haveItem(4441001,1) && cm.haveItem(1112767,1)) {
if (random == 0 || random <= 4) {
cm.gainItem(4441001,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+2);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4441001,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-2);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 230) {
if (cm.haveItem(4441101,1) && cm.haveItem(1112768,1)) {
if (random == 0 || random <= 5) {
cm.gainItem(4441101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)+1);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4441101,-1);
cm.changeStat2(selection,6,cm.getItemStat(selection,6)-1);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)-2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링의 옵션이 내려갔습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 330) {
if (cm.haveItem(4441200,1) && cm.haveItem(1112769,1)) {
if (random == 0 || random <= 7) {
cm.gainItem(4441200,-1);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)+2);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4441200,-1);
cm.gainItem(1112769,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
} else if (status == 430) {
if (cm.haveItem(4441300,1) && cm.haveItem(1112770,1)) {
if (random == 0 || random <= 8) {
cm.gainItem(4441300,-1);
cm.changeStat2(selection,3,cm.getItemStat(selection,3)+1);
cm.gainItem(4021037,-1); cm.getPlayer().reloadChar(); cm.sendOk("강화에 성공하였습니다. #r(채널을 이동하시면 적용됩니다.)");
cm.dispose();
} else {
cm.gainItem(4441300,-1);
cm.gainItem(1112770,-1);
cm.sendOk("죄송합니다 강화에 실패하여 쥬얼링이 파괴되었습니다.");
cm.dispose();
}
} else {
cm.sendOk("선택하신 쥬얼또는 링을 확실히 가지고 있으신가요? 다시한번 확인해주세요.");
cm.dispose();
}
}
}