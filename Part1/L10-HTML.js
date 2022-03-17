(function () {
    //  tsconfig.json에서 "strictNullChecks": true로 설정하기
    // querySelectory로 불러온 값은 element지만 null 값도 될 수 있음 -> narrowing 해줘야함
    var 제목 = document.querySelector("#title");
    if (제목 != null) {
        제목.innerHTML = "반가워요";
    }
    // narrowing 방법2 - 가장 많이 사용됨
    if (제목 instanceof Element) {
        제목.innerHTML = "반가워요";
    }
    // NARROWING 방법3
    var 제목2 = document.querySelector("#titile");
    제목2.innerHTML = "반가워요";
    // optional chaining - 제목에 innerHTML 있으면 출력, 없으면 undefined
    if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
        제목.innerHTML = "반가워요";
    }
    // 링크는 instanceof Element로 하면 안되고 아래처럼 해야됨
    var 링크 = document.querySelector(".link");
    if (링크 instanceof HTMLAnchorElement) {
        링크.href = "https://kakao.com";
    }
    // 태그마다 정해진 세부 element 잘 사용해야함.
    // h1: HTMLHeadingElement
    // button: HTMLButtonElement
    var 버튼 = document.querySelector("#button");
    버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
        alert("button is clicked");
    });
    function Homework1() {
        var image = document.querySelector("#image");
        if (image instanceof HTMLImageElement) {
            image.src = "new.jpg";
        }
    }
    function Homework2() {
        var navers = document.querySelectorAll(".naver");
        navers.forEach(function (element) {
            if (element instanceof HTMLAnchorElement) {
                element.href = "kakao.com";
            }
        });
    }
});
