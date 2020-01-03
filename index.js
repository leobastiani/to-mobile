(() => {
  var url = window.location.href;

  // se for vídeo do youtube
  var ytplayer = document.getElementById("movie_player");
  if(ytplayer) {
    var cTime = parseInt(ytplayer.getCurrentTime());
    url += '&t='+cTime;
  };

  // ve se tá na twitch
  var seek = document.getElementsByClassName('player-seek__time');
  if(seek.length) {
    seek = seek.item(0).innerText;
    // transforma 1:45:23
    // em 1h45m23s
    seek = seek.replace(':', 'h');
    seek = seek.replace(':', 'm');
    seek += 's';
    url += '?t=01h45m19s'
  };

  function copy(text) {
    var elem = document.createElement('textarea');
    document.body.append(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    elem.remove();
  };
  copy(url);

  var urlEncoded = encodeURIComponent(url);
  var imgUrl = 'http:\/\/br.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl='+urlEncoded+'&chs=180x180&choe=UTF-8&chld=L|0';

  var div = document.createElement('div');
  document.body.append(div);

  var st = div.style;
  st.position = 'fixed';
  st.left = '100px';
  st.top = '100px';
  st.width = 'auto';
  st.height = 'auto';
  st.background = 'white';
  st.padding = '50px';
  st.zIndex = 99999;

  div.innerHTML = '<img src="'+imgUrl+'">';


  div.onclick = function (e) {
    this.remove();
  }

  window.history.pushState('to-mobile', 'to-mobile', url);
})();
