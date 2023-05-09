

  ////////////////////////////////////////////////////////////////////////

  const introObject = {
    name: "상준",
    nickname: "ray",
    getIntro: function() {
      innerFunc = () => `${this.name}님의 닉네임은 ${this.nickname}입니다.`;
      console.log(innerFunc());
    }
  };
  introObject.getIntro(); //상준님의 닉네임은 ray입니다.
