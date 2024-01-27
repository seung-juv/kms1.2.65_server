var status = 0;

function action(mode, type, selection){
	if(status == 0){
		if (cm.getPlayer().getSkillLevel(1007) == 0) {
		cm.sendSimple("오늘도 사람들이 북적이는구만 나는 마법사이자 연금술사이지 피그미는 나의 애완동물이야 우리 피그미에게 친절하게 대해주라구 그러면 내가 무엇을해줄지 어떻게아나~?\r\n#r(!) 플점은 SP20, 소울런은 SP10을 소모합니다.\r\n#b#L0#피그미와 대화를 하고 싶습니다.#l\r\n#L100#요정의 책갈피를 사용하고 싶습니다.#l\r\n#L1#메이커스킬(Lv.1)을 배우고 싶습니다.#l\r\n#L999#이동기를 배우고 싶습니다.#l\r\n");
		status++;
		} else if (cm.getPlayer().getSkillLevel(1007) == 1) {
		cm.sendSimple("오늘도 사람들이 북적이는구만 나는 마법사이자 연금술사이지 피그미는 나의 애완동물이야 우리 피그미에게 친절하게 대해주라구 그러면 내가 무엇을해줄지 어떻게아나~?\r\n#r(!) 플점은 SP20, 소울런은 SP10을 소모합니다.\r\n#b#L0#피그미와 대화를 하고 싶습니다.#l\r\n#L100#요정의 책갈피를 사용하고 싶습니다.#l\r\n#L2#메이커스킬(Lv.2)을 배우고 싶습니다.#l\r\n#L999#이동기를 배우고 싶습니다.#l\r\n");
		status++;
		} else if (cm.getPlayer().getSkillLevel(1007) == 2) {
		cm.sendSimple("오늘도 사람들이 북적이는구만 나는 마법사이자 연금술사이지 피그미는 나의 애완동물이야 우리 피그미에게 친절하게 대해주라구 그러면 내가 무엇을해줄지 어떻게아나~?\r\n#r(!) 플점은 SP20, 소울런은 SP10을 소모합니다.\r\n#b#L0#피그미와 대화를 하고 싶습니다.#l\r\n#L100#요정의 책갈피를 사용하고 싶습니다.#l\r\n#L3#메이커스킬(Lv.3)을 배우고 싶습니다.#l\r\n#L999#이동기를 배우고 싶습니다.#l\r\n");
		status++;
		} else {
		cm.sendSimple("오늘도 사람들이 북적이는구만 나는 마법사이자 연금술사이지 피그미는 나의 애완동물이야 우리 피그미에게 친절하게 대해주라구 그러면 내가 무엇을해줄지 어떻게아나~?\r\n#r(!) 플점은 SP20, 소울런은 SP10을 소모합니다.\r\n#b#L0#피그미와 대화를 하고 싶습니다.#l\r\n#L100#요정의 책갈피를 사용하고 싶습니다.#l\r\n#L999#이동기를 배우고 싶습니다.#l\r\n");
		status++;
		}
		} else if (status == 1) {
		if (selection == 0) {
		cm.dispose();
		cm.openNpc(9050000);
		} else if (selection == 999) {
if (cm.getJob() == 111 || cm.getJob() == 112 || cm.getJob() == 121 || cm.getJob() == 122 || cm.getJob() == 131 || cm.getJob() == 132 || cm.getJob() == 311 || cm.getJob() == 312 || cm.getJob() == 321 || cm.getJob() == 322 || cm.getJob() == 511 || cm.getJob() == 512) {
	cm.teachSkill(11101005,10,10);
        cm.getPlayer().changeKeybinding(42,1,11101005);
	cm.sendOk("채널을 이동하시면 #bSHIFT#k키에 소울러너가 장착됩니다.");
	cm.dispose();
		} else if (cm.getJob() == 421 || cm.getJob() == 422) {
	cm.teachSkill(4111006,20,20);
        cm.getPlayer().changeKeybinding(42,1,4111006);
	cm.sendOk("채널을 이동하시면 #bSHIFT#k키에 플래시점프가 장착됩니다.");
	cm.dispose();
		} else {
		cm.sendOk("3차이상의 전사,궁수,인파이터 또는 시프마스터만 배울수 있습니다.");
                cm.dispose();
		}
		} else if (selection == 1) {
		if (cm.haveItem(4006000,5) && cm.haveItem(4006001,5)) {
		cm.gainItem(4006000,-5);
		cm.gainItem(4006001,-5);
		cm.teachSkill(1007,1,1);
		cm.sendOk("좋아, #b메이커스킬(Lv.1)#k을 가르쳐주지 스킬인벤토리를 확인해봐!");
		cm.dispose();
		} else {
		cm.sendOk("소환의 돌 5개와 마법의 돌 5개를 가져다준다면 스킬을전수하지.");
		cm.dispose();
		}
		} else if (selection == 2) {
		if (cm.haveItem(4006000,15) && cm.haveItem(4006001,15)) {
		cm.gainItem(4006000,-15);
		cm.gainItem(4006001,-15);
		cm.teachSkill(1007,2,2);
		cm.sendOk("좋아, #b메이커스킬(Lv.2)#k을 가르쳐주지 스킬인벤토리를 확인해봐!");
		cm.dispose();
		} else {
		cm.sendOk("소환의 돌 15개와 마법의 돌 15개를 가져다준다면 스킬을 향상시켜주지.");
		cm.dispose();
		}
		} else if (selection == 3) {
		if (cm.haveItem(4006000,30) && cm.haveItem(4006001,30)) {
		cm.gainItem(4006000,-30);
		cm.gainItem(4006001,-30);
		cm.teachSkill(1007,3,3);
		cm.teachSkill(1003,1,1);
		cm.sendOk("좋아, #b메이커스킬(Lv.3)#k을 마스터했구만 이제 최고의 아이템을 직접 손수 제작할수있겠어 그리구 특별히 장인의 혼 스킬도 습득시켜줄테니 유용하게 쓰라구 하하!");
		cm.dispose();
		} else {
		cm.sendOk("소환의 돌 30개와 마법의 돌 30개를 가져다준다면 스킬을 향상시켜주지.");
		cm.dispose();
		}
		} else if (selection == 100) {
		cm.sendYesNo("#i4000995# #b#t4000995##k를 사용하면 자신의 4차전직 스킬중 무작위로 한가지가 10~15 레벨 까지 배워지지, 하지만 이미 10레벨 이상의 스킬일경우 완벽하게 마스터 되지 정말 사용할건가? 아참 가끔 실패로 아무효과가 안일어날때도 있다구.");
		status++;
		} else if (selection == 105) {
		cm.dispose();
		cm.openNpc(9050009);
		}
		} else if (status == 2) {
		if(mode != 1){
			cm.dispose();
			return;
		}
		if (cm.haveItem(4000995,1)) {
if (cm.getJob() == 112) {
        skills = new Array(1120003,1120004,1120005,1121000,1121001,1121002,1121006,1121008,1121010,1121011);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
        cm.dispose();
    } else if (cm.getJob() == 122) {
        skills = new Array(1220005,1220006,1220010,1221000,1221001,1221002,1221003,1221004,1221007,1221009,1221011,1221012);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();
    } else if (cm.getJob() == 132) {
        skills = new Array(1320005,1320006,1320008,1320009,1321000,1321001,1321002,1321003,1321007,1321010);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 212) {
        skills = new Array(2121000,2121001,2121002,2121003,2121004,2121005,2121006,2121007,2121008);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 222) {
        skills = new Array(2221000,2221001,2221002,2221003,2221004,2221005,2221006,2221007,2221008);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 232) {
        skills = new Array(2321000,2321001,2321002,2321003,2321004,2321005,2321006,2321007,2321008,2321009);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 312) {
        skills = new Array(3120005,3121000,3121002,3121003,3121004,3121006,3121007,3121008,3121009);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 322) {
        skills = new Array(3220004,3221000,3221001,3221002,3221003,3221005,3221006,3221007,3221008);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 412) {
        skills = new Array(4120002,4120005,4121000,4121003,4121004,4121006,4121007,4121008,4121009);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 422) {
        skills = new Array(4220002,4220005,4221000,4221001,4221003,4221004,4221006,4221007,4221008);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 512) {
        skills = new Array(5121000,5121001,5121002,5121003,5121004,5121005,5121007,5121008,5121009,5121010);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
    } else if (cm.getJob() == 522) {
        skills = new Array(5220001,5220002,5220011,5221000,5221003,5221004,5221006,5221007,5221008,5221009,5221010);
        giveskills = skills[parseInt(Math.random() * skills.length)];
        newskle = cm.getMaxLevel(giveskills);
	if (cm.getPlayer().getSkillLevel(giveskills) >= 10) {
        cm.teachSkill(giveskills, newskle, newskle);
	} else {
	cm.teachSkill(giveskills, newskle/2, newskle/2);
	}
	cm.gainItem(4000995,-1);
	cm.dispose();   
		} else {
		cm.sendOk("4차전직이 아니면 사용할수 없는 아이템이지.");
		cm.dispose();
		}
		} else {
		cm.sendOk("요정의 책갈피가 있는게 확실한거야?");
		cm.dispose();
		}
		}
	}
