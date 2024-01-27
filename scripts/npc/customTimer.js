var status = 0;
var wantt = 1;

function action(mode, type, selection){
	var customData = cm.getQuestRecord(123456);
	if(customData.getCustomData() == null){
		customData.setCustomData("0");
	}
	var time = java.lang.Long.parseLong(customData.getCustomData());
	if(status == 0){
		if(time + wantt * 1000 * 3600 < java.lang.System.currentTimeMillis()){
			customData.setCustomData(java.lang.System.currentTimeMillis()+"");
			cm.sendNext("시간 업데이트 성공!")
		}else{
			cm.sendNext(""+wantt+"시간에 한번씩 할수있어요!!")
		}
		cm.dispose();
	}
}
