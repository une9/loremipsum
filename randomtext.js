Array.prototype.shuffle = function() {
  let length = this.length;
  while (length) {
    const index = Math.floor((length--) * Math.random());
    let temp = this[length];
    this[length] = this[index];
    this[index] = temp;
  };
  return this;
};

Array.prototype.checkend = function() {
  const lastword = this[this.length - 1]; //마지막 단어 추출
  const end = lastword[lastword.length - 1]; //마지막 단어 끝글자 추출
  return (end !== '.' && end !== '?');
}

const shuffleText = function(text) {
  let textArr = text.split(" ");

  textArr.shuffle();

  while (textArr.checkend()) {
    textArr.shuffle();
  }

  return "&ensp;" + textArr.join(' ');
}

document.getElementById("lorem").innerHTML = shuffleText("절망의 또 바라게 적었을까? 내 있으며, 의미를 없는 무엇인가? 나는 나를 수가 누구인들 지시어는 여기에 노래. 하는가? 그 어디에 누가 나아가는 맞춰보면 자꾸만 영혼이란 될까? 나의 수 더듬거리는 것도 언젠간 호르몬을 발끝으로 아니, 알 거스를 도대체 미지의 어디에 주워담아 왜 있을까? 수 ‘나’의 당연하건만 파편을 나는 놓았을까? 잘 누구인가? 것이 데려다 암흑의 어디로 그 아무 가야 없는 읽을 수 끝도 나는 알 해독하지 산산조각난 못하는 없다. 무엇인가? 나를 세계에서 나조차도 있는가? 절벽을 나를 신체, 나는 내 있는 어떻게 나는 있는가? 누가 링반데롱.");
document.getElementById("ipsum").innerHTML = shuffleText("식으로 죽음은 나에게는 표현하는 모든 문장이 삭제되었으며, 혹은 권한조차 싶은 있는가? 것 것이다 내가 적히길 기억은 왜 괴롭히는가? 나의 태어났다. 나는 폭력적으로 능동태가 도치된 달려 적어달라고 살해당하는 낮은 나는 싶은 가능하다면 숨쉬는 이곳은 나타나 밤을 일은 가끔은 모든 벗어나는 않았다. 주어가 잊고 더더욱 사람. 이렇게 것일까? 없이 누구의 죽는 이 이미 없는 적은 기억은 있는 것. 원한 이제 없다. 거주하는 여기에 장소, 모든 나를 시도 것이 나는 나를 - 이곳을 꿈은 낳아졌다. 떠올리고 하지 먼저 그리고 시간, 것조차 가장 같다. 수 때도 끔찍하다. 만든다. 이런 것일까 손에 감금이다. 할 편집할 고문이다. 좋을 사랑.");
document.getElementById("dolor").innerHTML = shuffleText("그곳으로 곳, 지우고 쓰고 읽고 내가 나로서 나를. 나의 않다. 비로소 싶다. 싶지 투명인간은 유의미해지는 되고 싶다. 더이상 나를 가고 싶다. 싶다. 내가 자리에서.");
