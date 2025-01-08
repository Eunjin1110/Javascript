alert('안녕!') 



let myButton = document.querySelector("#alert-button"); //버튼 선택
myButton.addEventListener("click", () => {alert("클릭되었습니다.")} ) //이벤트 리스너

let deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", () => {alert("삭제되었습니다.")} )

let homebutton = document.querySelector("#home-button");
homebutton.addEventListener("click", () => {alert("홈으로 이동합니다.")})

let postbutton = document.querySelector("#post-button");
postbutton.addEventListener("click", () => {alert("게시되었습니다.")})

let catbutton = document.querySelector("#cat-button");
catbutton.addEventListener("click", () => {alert("야옹")})



const colorButton = document.querySelector("#color-button"); //배경색 버튼 선택
colorButton.addEventListener("click", () => {
document.body.style.backgroundColor = "#FAF6E3";}); //배경색 변경하기



const textbutton = document.querySelector("#change-textbutton"); //타이틀 버튼 선택
//const title = document.querySelector("#text"); //타이틀 선택 > 타이틀에 id 꼭 만들어주기!! > 아래 똑같은 타이틀이 있어서 지워주었음 
textbutton.addEventListener("click", () => {
    title.textContent = "오늘은 Javascript 배우는 날";
    title.style.backgroundColor = "#D8DBBD"
    title.style.color = "#2A3663"  //새로운 타이틀 요소
}); 



const title = document.querySelector("#title"); //타이틀 선택
const titleInput = document.querySelector("#title-input") //타이틀 작성하기, input
const titleInputBtn = document.querySelector("#title-input-btn") //작성하기 버튼 선택

titleInputBtn.addEventListener("click", () => {
    title.textContent = titleInput.value //타이틀 바꾸기 
    console.log('타이틀이 입력되었습니다') //콘솔 알림
    console.log(titleInput.value) //쓴 내용 콘솔에 남기기
})



const commentList = document.querySelector("#comment-list"); //댓글연습
const commentInput = document.querySelector("#comment-input") //댓글연습, input
const commentInputBtn = document.querySelector("#comment-input-btn") //작성하기 버튼 선택

commentInputBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = commentInput.value;
    commentList.append(li);  //댓글 게시하기
})  