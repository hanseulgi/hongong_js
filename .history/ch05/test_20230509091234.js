const introObject1 = {
    name: "상준",
    nickname: "ray",
    getIntro: function() {
        introFunction = function() {
        `${this.username}님의 닉네임은 ${this.nickname}입니다.`;
    };
    console.log(introFunction());
    }
};
introObject1.getIntro(); //undefined님의 닉네임은 undefined입니다.

////////////////////////////////////////////////////////////////////////

const introObject2 = {
    name: "상준",
    nickname: "ray",
    getIntro: function() {
        innerFunc = () => `${this.name}님의 닉네임은 ${this.nickname}입니다.`;
        console.log(innerFunc());
    }
};
introObject2.getIntro(); //상준님의 닉네임은 ray입니다.
