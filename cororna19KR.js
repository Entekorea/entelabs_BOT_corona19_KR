function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if(msg === '!!국내코로나') {//국내코로나 라고 하면
      var u = Utils.getWebText("http://ncov.mohw.go.kr");//질병관리본부에서 파싱
      var a=u.split("<div class=\"co_cur\">");//여기서부터 소스 시작
     var b=a[1].split("<div class=\"dia_ho\">");//여기서 소스 끝
     b = b[0].replace(/(<([^>]+)>)/g, "").trim().replace(/^ +/gm,"").replace(/-/g,"").replace(/ /g,"").replace(/\n/g,"").replace(/확진환자수/g, "\n확진환자: ").replace(/확진환자격리해제수/g, "\n격리해제: ").replace(/사망자수/g, "\n사망자수: ").replace(/&nbsp;/g, "");//방금 소스 시작과 끝 사이에있는것들을 replace로 뺄거 다뺌
    replier.reply("[국내 코로나 현황]" + "\n" + b);//출력
    }
}
//제작자 엔테클로
//문의는 언제나 환영 entekorea@naver.com
//복붙해도 상관은 없는데 팔다가 걸리면 손모가지
