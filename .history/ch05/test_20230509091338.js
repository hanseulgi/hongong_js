const introObject1 = {
    name: "슬기",
    nickname: "s",
    getIntro: function() {
        introFunction = function() {
        return `${this.username}님의 닉네임은 ${this.nickname}입니다.`;
    };
    console.log(introFunction());
    }
};
introObject1.getIntro(); //undefined님의 닉네임은 undefined입니다.

////////////////////////////////////////////////////////////////////////

const introObject2 = {
    name: "슬기",
    nickname: "s",
    getIntro: function() {
        innerFunc = () => `${this.name}님의 닉네임은 ${this.nickname}입니다.`;
        console.log(innerFunc());
    }
};
introObject2.getIntro(); //슬기님의 닉네임은 s입니다.
