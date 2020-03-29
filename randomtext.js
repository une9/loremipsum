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

document.getElementById("lorem").innerHTML = shuffleText("누가 나를 적었을까? 또 누가 나를 여기에 데려다 놓았을까? 산산조각난 나의 파편을 잘 주워담아 맞춰보면 언젠간 그 의미를 알 수 있을까? 나조차도 해독하지 못하는 나를 그 누구인들 읽을 수 없는 것이 당연하건만 나는 왜 자꾸만 바라게 될까? 나는 아무 것도 알 수가 없다. 나는 누구인가? 아니, 나는 도대체 무엇인가? ‘나’의 지시어는 무엇인가? 내 신체, 내 호르몬을 거스를 수 있는 영혼이란 있는가? 어디에 있는가? 끝도 없는 미지의 세계에서 나는 어디에 있으며, 어디로 어떻게 가야 하는가? 절벽을 더듬거리는 발끝으로 나아가는 절망의 링반데롱. 암흑의 노래.");
document.getElementById("ipsum").innerHTML = shuffleText("나는 나를 적어달라고 하지 않았다. 여기에 이런 식으로 적히길 원한 적은 더더욱 없다. 나에게는 나를 편집할 수 있는 권한조차 없는 것 같다. 왜 떠올리고 싶은 기억은 이미 삭제되었으며, 잊고 싶은 기억은 시도 때도 없이 나타나 괴롭히는가? 이 도치된 문장이 밤을 폭력적으로 만든다. 꿈은 고문이다. 낮은 감금이다. 가끔은 숨쉬는 것조차 끔찍하다. 나는 태어났다. 혹은 이렇게 표현하는 것이 좋을 것이다 - 낳아졌다. 이제 나의 죽음은 누구의 손에 달려 있는가? 나는 죽는 것일까 살해당하는 것일까? 능동태가 가능하다면 주어가 가장 먼저 할 일은 이곳을 벗어나는 것. 이곳은 내가 거주하는 모든 장소, 모든 시간, 모든 사람. 그리고 사랑.");
document.getElementById("dolor").innerHTML = shuffleText("더이상 투명인간은 되고 싶지 않다. 내가 나로서 유의미해지는 곳, 그곳으로 가고 싶다. 나를 읽고 싶다. 쓰고 싶다. 지우고 싶다. 비로소 나의 자리에서. 내가 나를.");
