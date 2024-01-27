var status = 0;

function action(mode, type, selection){
if(status == 0){
cm.sendYesNo("#e#r<파티 퀘스트 : 암벽너머의 괴음>#k#n\r\n세자르씨의 추천을 받고 온 모험가 인가? 그래 방금 보았듯이 페리온의 수호신 암벽거인이 눈을 떴지 그런데 수호신인 암벽거인이 뭐가 그리 한탄한 것인지 자꾸 괴음을 포효한다구 원한다면 네가 가서 한번 조사해주겠어?");
status++;
} else if (status == 1) {
if (mode != 1) {
cm.warp(102000000);
cm.sendOk("그래 너에겐 버거운일일지도몰라 페리온으로 돌아가보도록해.");
cm.dispose();
} else {
cm.warp(240090800);
cm.dispose();
}
}
}