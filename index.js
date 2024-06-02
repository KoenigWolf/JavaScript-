//変数
let unko = 'こんにちは！';

//定数
const bigUnko = 'ようこそ元気ですか？';

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];

//ループ文
let index = 0;
while(index < inoki.length){ //=4
  // 繰り返したい命令
  console.log(inoki[index]);
  index++; //index = 5
}

//if / else
if(inoki.length > 5){
  console.log('５に達していません！');
} else {
  console.log('多すぎる...！');
}

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

//オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  //命令を書く
  window.alert('Hello World!');
});

document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
  //命令を書く
  window.alert('当たり！');
});

document.getElementsByTagName('button')[2].addEventListener('click', ()=> {
    //命令を書く
    window.alert('Hello！！！');
  });

document.getElementsByTagName('button')[3].addEventListener('click', ()=> {
  //命令を書く
  window.alert('ハズレ！');
});
