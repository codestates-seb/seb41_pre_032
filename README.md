## 📌 Introduction

#### 미니 프로젝트 주제 
StackOverflow 클론코딩(개발자 질의응답 커뮤니티) 

#### 프로젝트 기간  
2022.12.15(목) - 2023.01.02(월)

<br/>

## 👩‍👧‍👦 Team
### 팀원
|FE|FE|FE|BE|BE|BE|
|:---:|:---:|:---:|:---:|:---:|:---:|
|[김응열](https://github.com/Valentin1495)|[배성진](https://github.com/Menat91)|[조강열](https://github.com/CHOGANGYEOL)|[이소정](https://github.com/sojeongLee0125 )|[조혜주](https://github.com/hyejuc)|[최윤정](https://github.com/yulmuu)|

<br/>

## 🖥️ Features

### 기능 소개
#### User
- Create : 유저는 회원가입을 할 수 있다.
- Read : 가입된 유저 정보를 조회 할 수 있다.
- Update : 유저 정보를 수정 할 수 있다.
- Delete : 유저 정보를 삭제 할 수 있다.
#### Question
- Create : 유저는 질문을 생성할 수 있다.
  - 필수 값 : 제목, 내용
- Read : 질문을 조회할 수 있다.
  - 전체 질문 조회 (등록순, 좋아요 순), 특정 질문 조회
- Update : 작성자는 질문을 수정할 수 있다.
  - 수정 가능한 항목 : 제목, 내용, 질문 관련 시도한 내용
- Delete : 작성자는 질문을 삭제할 수 있다.
- 좋아요 / 싫어요 : 유저는 질문에 대해 좋아요, 싫어요를 누를 수 있다. 
#### Answer
- Create : 질문에 답을 생성할 수 있다.
- Read : 답변을 조회할 수 있다.
- Update : 작성자는 답변을 수정할 수 있다.
- Delete : 작성자는 답변을 삭제할 수 있다.
- Like/Dislike : 유저는 질문에 대해 좋아요, 싫어요를 누를 수 있다.
#### Tag
- 유저는 질문을 작성할 때 태그를 등록할 수 있다.
#### 기타
- 로그인 시 액세스 토큰과 리프레시 토큰이 발급된다.
- 액세스 토큰으로 유저의 권한을 조회한다. 
  - 질문/답변 읽기 접근이 가능해진다.
  - 본인이 작성하지 않은 질문과 답변에는 수정과 삭제가 제한된다.
- 액세스 토큰이 만료되면 리프레스 토큰으로 액세스 토큰 갱신이 가능하다.

<br/>

## ⏰ Project Rules

### 1. 매일 Pm 05:00 일일 스크럼 회의 참석하기
- 현재 진행상황 및 차후 계획 보고
- 이슈 발생 상황 보고 

### 2 Git Commit Convention 지키기
- 기본 형식 : [commit type]: [commit message]
- commit type
  - feat : 기능 구현
  - fix : 버그 수정
  - docs : 문서 작업
  - refactor : 리팩토링
  - test : 테스트
  - chore : 기타 작업

### 3. Branch 생성 규칙
- 기본 형식 : [type]/[feature]
- 기능 구현이 완료되면 Main Branch PR 남기기
- PR 후 Merge된 브랜치는 삭제하기
