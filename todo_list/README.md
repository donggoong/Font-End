# To-Do List
개인프로젝트

## 🖥️ 프로젝트 소개
React와 firebase를 연동하여 구축한 To-Do List SPA 사이트입니다.
<br>

## 🕰️ 개발 기간
* 2023.06.04 - 2023.06.15

### 🖼️ 미리 보기(이미지 클릭시 프로젝트 사이트로 이동합니다.)
[![todolist](https://file.notion.so/f/s/f5b1c8e6-b9c8-49d5-b8fa-d282d1af09a8/todolist.gif?id=b074281b-99e6-4631-9338-13f4d2d39966&table=block&spaceId=c27fd0d8-39d6-4196-a8f4-dab934ac5eab&expirationTimestamp=1687322853551&signature=GjPkD97o0Ie8nGp9JWtjcd2oRO4u_PIvtCw8ZXe6RO0)](https://todo-app-926dd.firebaseapp.com)

### ⚙️ 개발 환경
- <img valign="middle" src="https://img.shields.io/badge/NodeJs-339933?style=for-the-badge&logo=Node.Js&logoColor=white">
- **Framework** : <img valign="middle" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
- **Database** : <img valign="middle" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">


## 📌 주요 기능 - <a href="https://github.com/donggoong/Front-End/wiki/To-Do-List" >상세보기 - WIKI 이동</a>
#### 로그인
- Firebase Authentication을 이용하여 사용자 로그인 기능 구현
- 회원정보 업데이트
- 기억하기 체크 시 인증 상태 localStorage 저장
- 비밀번호 재설정 기능
#### 회원 가입
- 사용자 등록
- 사용자 정보 업데이트
- 이메일 인증
#### 회원 탈퇴
- Cloud Firestore안에 있는 모든 문서 삭제
- Storage안에 있는 모든 파일 삭제

#### 일정 추가
- 날짜 지정
- 시간 선택
- 일정명, 일정내용 입력
- 이미지 업로드
- 일정 등록
#### 일정 수정
- Cloud Firestore 컬렉션내 문서 값 수정
#### 일정 삭제
- Cloud Firestore 컬렉션내 해당 문서 삭제
#### 일정 검색
- 일정 검색
#### 일정 완료 처리
- 일정 완료

#### Firebase Hosting & Deploy 
- Hosting
- Deploy
